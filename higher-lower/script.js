/* --- BAZA DANYCH --- */
const countriesDB = [
    { code: "CN", name: "Chiny", pop: 1411000000 },
    { code: "IN", name: "Indie", pop: 1428000000 },
    { code: "US", name: "USA", pop: 335000000 },
    { code: "ID", name: "Indonezja", pop: 279000000 },
    { code: "PK", name: "Pakistan", pop: 240000000 },
    { code: "NG", name: "Nigeria", pop: 224000000 },
    { code: "BR", name: "Brazylia", pop: 216000000 },
    { code: "BD", name: "Bangladesz", pop: 173000000 },
    { code: "RU", name: "Rosja", pop: 144000000 },
    { code: "MX", name: "Meksyk", pop: 128000000 },
    { code: "JP", name: "Japonia", pop: 123000000 },
    { code: "ET", name: "Etiopia", pop: 126000000 },
    { code: "PH", name: "Filipiny", pop: 117000000 },
    { code: "EG", name: "Egipt", pop: 112000000 },
    { code: "VN", name: "Wietnam", pop: 99000000 },
    { code: "CD", name: "Kongo (DRK)", pop: 102000000 },
    { code: "TR", name: "Turcja", pop: 85000000 },
    { code: "IR", name: "Iran", pop: 89000000 },
    { code: "DE", name: "Niemcy", pop: 84000000 },
    { code: "TH", name: "Tajlandia", pop: 71000000 },
    { code: "GB", name: "Wielka Brytania", pop: 67000000 },
    { code: "FR", name: "Francja", pop: 68000000 },
    { code: "IT", name: "Włochy", pop: 59000000 },
    { code: "ZA", name: "RPA", pop: 60000000 },
    { code: "KR", name: "Korea Płd.", pop: 51000000 },
    { code: "ES", name: "Hiszpania", pop: 47000000 },
    { code: "CO", name: "Kolumbia", pop: 52000000 },
    { code: "AR", name: "Argentyna", pop: 46000000 },
    { code: "PL", name: "Polska", pop: 38000000 },
    { code: "UA", name: "Ukraina", pop: 37000000 },
    { code: "CA", name: "Kanada", pop: 40000000 },
    { code: "MA", name: "Maroko", pop: 37000000 },
    { code: "SA", name: "Arabia Saud.", pop: 36000000 },
    { code: "AU", name: "Australia", pop: 26000000 },
    { code: "NL", name: "Holandia", pop: 17000000 },
    { code: "BE", name: "Belgia", pop: 11000000 },
    { code: "SE", name: "Szwecja", pop: 10500000 },
    { code: "CZ", name: "Czechy", pop: 10800000 },
    { code: "GR", name: "Grecja", pop: 10300000 },
    { code: "PT", name: "Portugalia", pop: 10400000 },
    { code: "HU", name: "Węgry", pop: 9600000 },
    { code: "IL", name: "Izrael", pop: 9700000 },
    { code: "AT", name: "Austria", pop: 9100000 },
    { code: "CH", name: "Szwajcaria", pop: 8800000 },
    { code: "DK", name: "Dania", pop: 5900000 },
    { code: "FI", name: "Finlandia", pop: 5600000 },
    { code: "NO", name: "Norwegia", pop: 5500000 },
    { code: "SK", name: "Słowacja", pop: 5400000 },
    { code: "IE", name: "Irlandia", pop: 5200000 },
    { code: "NZ", name: "Nowa Zelandia", pop: 5200000 },
    { code: "HR", name: "Chorwacja", pop: 3800000 },
    { code: "UY", name: "Urugwaj", pop: 3400000 },
    { code: "LT", name: "Litwa", pop: 2800000 },
    { code: "QA", name: "Katar", pop: 2700000 },
    { code: "EE", name: "Estonia", pop: 1300000 },
    { code: "IS", name: "Islandia", pop: 380000 },
    { code: "MT", name: "Malta", pop: 530000 },
    { code: "LU", name: "Luksemburg", pop: 660000 },
    { code: "MC", name: "Monako", pop: 36000 }
];

/* --- LOGIKA GRY --- */
const game = {
    state: {
        currentLeft: null,
        currentRight: null,
        score: 0,
        isAnimating: false
    },
    
    ui: {
        left: {
            flag: document.getElementById('flag-left'),
            name: document.getElementById('name-left'),
            pop: document.getElementById('pop-left')
        },
        right: {
            flag: document.getElementById('flag-right'),
            name: document.getElementById('name-right'),
            pop: document.getElementById('pop-right'),
            buttonsBlock: document.getElementById('buttons-area'),
            resultBlock: document.getElementById('result-area')
        },
        score: document.getElementById('current-score'),
        bestScore: document.getElementById('best-score'),
        gameOverModal: document.getElementById('game-over'),
        lossMsg: document.getElementById('loss-msg'),
        finalScore: document.getElementById('final-score-val')
    },

    init() {
        this.ui.bestScore.textContent = localStorage.getItem('popdle_highscore') || 0;
        this.state.currentLeft = this.getRandomCountry();
        this.state.currentRight = this.getRandomCountry(this.state.currentLeft);
        this.render();
    },

    getRandomCountry(exclude) {
        let candidate;
        do {
            candidate = countriesDB[Math.floor(Math.random() * countriesDB.length)];
        } while (exclude && candidate.code === exclude.code);
        return candidate;
    },

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    render() {
        // Renderuj lewą stronę
        const left = this.state.currentLeft;
        this.ui.left.flag.src = `https://flagsapi.com/${left.code}/flat/64.png`;
        this.ui.left.name.textContent = left.name;
        this.ui.left.pop.textContent = this.formatNumber(left.pop);

        // Renderuj prawą stronę (reset)
        const right = this.state.currentRight;
        this.ui.right.flag.src = `https://flagsapi.com/${right.code}/flat/64.png`;
        this.ui.right.name.textContent = right.name; // Nazwa widoczna!
        
        // Pokaż przyciski, ukryj wynik
        this.ui.right.buttonsBlock.classList.remove('hidden');
        this.ui.right.resultBlock.classList.add('hidden');
        this.ui.right.pop.textContent = "???";
        this.ui.right.pop.style.color = "#FFD700"; // Reset koloru
    },

    guess(direction) {
        if (this.state.isAnimating) return;
        this.state.isAnimating = true;

        const leftPop = this.state.currentLeft.pop;
        const rightPop = this.state.currentRight.pop;
        
        let isCorrect = false;
        if (direction === 'higher' && rightPop >= leftPop) isCorrect = true;
        if (direction === 'lower' && rightPop <= leftPop) isCorrect = true;

        this.revealResult(isCorrect, rightPop);
    },

    revealResult(isCorrect, actualValue) {
        // Przełącz widoczność: Ukryj przyciski, pokaż wynik
        this.ui.right.buttonsBlock.classList.add('hidden');
        this.ui.right.resultBlock.classList.remove('hidden');

        // Animacja licznika
        const el = this.ui.right.pop;
        this.animateValue(el, 0, actualValue, 1000, () => {
            if (isCorrect) {
                el.style.color = "#10b981"; // Zielony
                setTimeout(() => this.nextRound(), 1200);
            } else {
                el.style.color = "#ef4444"; // Czerwony
                setTimeout(() => this.gameOver(), 1500);
            }
        });
    },

    nextRound() {
        this.state.score++;
        this.ui.score.textContent = this.state.score;

        // Przejście
        this.state.currentLeft = this.state.currentRight;
        this.state.currentRight = this.getRandomCountry(this.state.currentLeft);

        this.render();
        this.state.isAnimating = false;
    },

    gameOver() {
        const score = this.state.score;
        const best = parseInt(localStorage.getItem('popdle_highscore') || 0);
        
        if (score > best) {
            localStorage.setItem('popdle_highscore', score);
            this.ui.lossMsg.textContent = `Nowy rekord! ${score} pkt`;
        } else {
            this.ui.lossMsg.textContent = `Poprawna populacja to ${this.formatNumber(this.state.currentRight.pop)}`;
        }
        
        this.ui.finalScore.textContent = score;
        this.ui.gameOverModal.classList.remove('hidden');
    },

    restart() {
        this.state.score = 0;
        this.ui.score.textContent = "0";
        this.ui.bestScore.textContent = localStorage.getItem('popdle_highscore') || 0;
        
        this.ui.gameOverModal.classList.add('hidden');
        
        this.state.currentLeft = this.getRandomCountry();
        this.state.currentRight = this.getRandomCountry(this.state.currentLeft);
        this.render();
        this.state.isAnimating = false;
    },

    animateValue(obj, start, end, duration, callback) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * (end - start) + start);
            obj.innerHTML = this.formatNumber(currentVal);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                if (callback) callback();
            }
        };
        window.requestAnimationFrame(step);
    }
};

game.init();