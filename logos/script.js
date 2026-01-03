/* --- BAZA DANYCH LOGOTYPÓW --- */
// Klucz = unikalne ID
// Wartość = { name: [Główna, aliasy], domain: 'domena do favicona' }
const allLogos = {
    // TIER 1: Giganci (Łatwe)
    "mcdonalds": { name: ["McDonald's", "Mac", "Mak"], domain: "mcdonalds.com" },
    "apple": { name: ["Apple"], domain: "apple.com" },
    "nike": { name: ["Nike"], domain: "nike.com" },
    "google": { name: ["Google"], domain: "google.com" },
    "facebook": { name: ["Facebook", "FB"], domain: "facebook.com" },
    "youtube": { name: ["YouTube", "YT"], domain: "youtube.com" },
    "amazon": { name: ["Amazon"], domain: "amazon.com" },
    "cocacola": { name: ["Coca-Cola", "Cola"], domain: "coca-cola.com" },
    "samsung": { name: ["Samsung"], domain: "samsung.com" },
    "microsoft": { name: ["Microsoft"], domain: "microsoft.com" },
    
    // TIER 2: Znane (Średnie)
    "spotify": { name: ["Spotify"], domain: "spotify.com" },
    "discord": { name: ["Discord"], domain: "discord.com" },
    "pringles": { name: ["Pringles"], domain: "pringles.com" },
    "twitter": { name: ["Twitter", "X"], domain: "twitter.com" },
    "instagram": { name: ["Instagram"], domain: "instagram.com" },
    "pepsi": { name: ["Pepsi"], domain: "pepsi.com" },
    "starbucks": { name: ["Starbucks"], domain: "starbucks.com" },
    "netflix": { name: ["Netflix"], domain: "netflix.com" },
    "lego": { name: ["LEGO"], domain: "lego.com" },
    "adidas": { name: ["Adidas"], domain: "adidas.com" },
    "burgerking": { name: ["Burger King"], domain: "bk.com" },
    "playstation": { name: ["PlayStation", "PS"], domain: "playstation.com" },
    
    // TIER 3: Trudniejsze (Pro)
    "linux": { name: ["Linux", "Tux"], domain: "linux.org" },
    "github": { name: ["GitHub"], domain: "github.com" },
    "android": { name: ["Android"], domain: "android.com" },
    "chrome": { name: ["Chrome"], domain: "google.com/chrome" },
    "firefox": { name: ["Firefox"], domain: "mozilla.org" },
    "bmw": { name: ["BMW"], domain: "bmw.com" },
    "mercedes": { name: ["Mercedes", "Mercedes-Benz"], domain: "mercedes-benz.com" },
    "audi": { name: ["Audi"], domain: "audi.com" },
    "tesla": { name: ["Tesla"], domain: "tesla.com" },
    "volkswagen": { name: ["Volkswagen", "VW"], domain: "vw.com" },
    "adobe": { name: ["Adobe"], domain: "adobe.com" },
    "nvidia": { name: ["Nvidia"], domain: "nvidia.com" },
    
    // TIER 4: Ekspert
    "mastercard": { name: ["Mastercard"], domain: "mastercard.com" },
    "visa": { name: ["Visa"], domain: "visa.com" },
    "paypal": { name: ["PayPal"], domain: "paypal.com" },
    "intel": { name: ["Intel"], domain: "intel.com" },
    "amd": { name: ["AMD"], domain: "amd.com" },
    "dell": { name: ["Dell"], domain: "dell.com" },
    "hp": { name: ["HP"], domain: "hp.com" },
    "ibm": { name: ["IBM"], domain: "ibm.com" },
    "oracle": { name: ["Oracle"], domain: "oracle.com" },
    "cisco": { name: ["Cisco"], domain: "cisco.com" }
};

const tier1Codes = ["mcdonalds", "apple", "nike", "google", "facebook", "youtube", "amazon", "cocacola", "samsung", "microsoft"];
const tier2Codes = ["spotify", "discord", "pringles", "twitter", "instagram", "pepsi", "starbucks", "netflix", "lego", "adidas", "burgerking", "playstation"];
const tier3Codes = ["linux", "github", "android", "chrome", "firefox", "bmw", "mercedes", "audi", "tesla", "volkswagen", "adobe", "nvidia"];
const tier4Codes = ["mastercard", "visa", "paypal", "intel", "amd", "dell", "hp", "ibm", "oracle", "cisco"];

function getSubset(codesArray) {
    const subset = {};
    codesArray.forEach(code => { 
        if (allLogos[code]) subset[code] = allLogos[code].name; 
    });
    return subset;
}

const gameData = {
    easy: getSubset(tier1Codes),
    hard: getSubset([...tier1Codes, ...tier2Codes]),
    pro: getSubset([...tier2Codes, ...tier3Codes]),
    expert: getSubset([...tier3Codes, ...tier4Codes])
};

/* --- UI --- */
const ui = {
    elements: {
        screens: { menu: document.getElementById('menu'), game: document.getElementById('game') },
        flag: document.getElementById('flag'),
        input: document.getElementById('guess'),
        msg: document.getElementById('message'),
        attemptsBox: document.getElementById('attemptsDots'),
        round: document.getElementById('round'),
        score: document.getElementById('score'),
        streak: document.getElementById('currentStreak'),
        progressBar: document.getElementById('progressBar'),
        suggestList: document.getElementById('suggestList'),
        checkBtn: document.getElementById('checkBtn'),
        backBtn: document.getElementById('backMenu'),
        pointsPopup: document.getElementById('pointsPopup'),
        recordAnim: document.getElementById('recordAnim')
    },

    toggleInstructions() { document.getElementById('instructions').classList.toggle('hidden'); },

    init() { this.updateMenuScores(); },

    updateMenuScores() {
        const modes = ['easy', 'hard', 'pro', 'expert'];
        modes.forEach(mode => {
            const el = document.getElementById(`record-${mode}`);
            if (el) {
                const score = localStorage.getItem(`logo_bestScore_${mode}`) || 0;
                el.textContent = score;
            }
        });
    },

    showGame() {
        this.elements.screens.menu.classList.add('hidden');
        this.elements.screens.game.classList.remove('hidden');
        this.elements.screens.game.classList.add('fade-in');
    },

    showMenu() {
        this.updateMenuScores();
        this.elements.screens.game.classList.add('hidden');
        this.elements.screens.menu.classList.remove('hidden');
    },

    updateBlur(pct, isExpert) {
        const px = (pct / 2); 
        let filter = `blur(${px}px)`;
        if (isExpert) filter += ' grayscale(100%) scale(1.5)';
        this.elements.flag.style.filter = filter;
    },

    setDots(total, used) {
        this.elements.attemptsBox.innerHTML = '';
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i < used ? ' used' : '');
            this.elements.attemptsBox.appendChild(dot);
        }
    },

    animatePoints(points) {
        const el = this.elements.pointsPopup;
        el.textContent = `+${points}`;
        el.classList.remove('anim-popup');
        void el.offsetWidth;
        el.classList.add('anim-popup');
    },
    
    showRecordAnimation() {
        const el = this.elements.recordAnim;
        el.classList.remove('hidden');
        el.classList.remove('anim-record');
        void el.offsetWidth;
        el.classList.add('anim-record');
        setTimeout(() => { el.classList.add('hidden'); }, 3000);
    },

    shakeInput() {
        this.elements.input.parentElement.classList.add('shake');
        setTimeout(() => this.elements.input.parentElement.classList.remove('shake'), 400);
    }
};

/* --- LOGIKA GRY --- */
const game = {
    config: { maxTries: 6, maxRounds: 8 },
    state: { 
        mode: null, round: 1, tries: 0, streak: 0, score: 0, 
        currentCode: null, blurPct: 80, itemsList: [], recordBroken: false 
    },
    itemNames: [],

    getSmartPool(mode) {
        const source = gameData[mode];
        const allCodes = Object.keys(source);
        const lastPlayed = JSON.parse(localStorage.getItem('logo_lastPlayed_' + mode) || '[]');
        let candidates = allCodes.filter(code => !lastPlayed.includes(code));
        
        if (candidates.length < this.config.maxRounds) {
            const needed = this.config.maxRounds - candidates.length;
            const recycled = this.shuffle(lastPlayed).slice(0, needed);
            candidates = candidates.concat(recycled);
        }
        return candidates;
    },

    start(mode) {
        this.state.mode = mode;
        this.state.streak = 0;
        this.state.score = 0;
        this.state.round = 1;
        this.state.recordBroken = false;

        const smartPool = this.getSmartPool(mode);
        this.state.itemsList = this.shuffle(smartPool).slice(0, this.config.maxRounds);
        localStorage.setItem('logo_lastPlayed_' + mode, JSON.stringify(this.state.itemsList));

        const source = gameData[mode];
        this.itemNames = Object.values(source).map(arr => arr[0]).sort();

        ui.elements.score.textContent = '0';
        ui.elements.streak.textContent = '0';
        ui.showGame();
        this.newRound();
    },

    newRound() {
        if (this.state.round > this.config.maxRounds) return this.endGame();

        this.state.currentCode = this.state.itemsList[this.state.round - 1];
        this.state.tries = 0;
        this.state.blurPct = 80;

        ui.elements.input.value = '';
        ui.elements.input.disabled = false;
        ui.elements.checkBtn.disabled = false;
        ui.elements.backBtn.classList.add('hidden');
        ui.elements.round.textContent = this.state.round;
        ui.elements.msg.textContent = "Zgadnij markę!";
        ui.elements.msg.style.color = "var(--text-muted)";
        
        ui.setDots(this.config.maxTries, 0);

        const progressPct = ((this.state.round - 1) / this.config.maxRounds) * 100;
        ui.elements.progressBar.style.width = `${progressPct}%`;

        ui.elements.flag.style.opacity = '0';
        ui.updateBlur(this.state.blurPct, this.state.mode === 'expert');

        // UŻYWAMY GOOGLE API
        const domain = allLogos[this.state.currentCode].domain;
        const newSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
        ui.elements.flag.src = newSrc;

        ui.elements.flag.onload = () => {
            ui.elements.flag.style.opacity = '1';
        };
        ui.elements.flag.onerror = () => {
            ui.elements.msg.textContent = "Błąd: Nie wczytano logo";
        };
    },

    checkGuess() {
        const userGuess = ui.elements.input.value.trim().toLowerCase();
        const currentSource = gameData[this.state.mode];
        const correctNames = currentSource[this.state.currentCode].map(n => n.toLowerCase());

        this.state.tries++;
        ui.setDots(this.config.maxTries, this.state.tries);

        if (correctNames.includes(userGuess)) {
            // SUKCES
            const basePoints = (this.config.maxTries - this.state.tries) + 1;
            const totalPoints = basePoints + this.state.streak;

            this.state.score += totalPoints;
            this.state.streak++;
            
            ui.elements.score.textContent = this.state.score;
            ui.elements.streak.textContent = this.state.streak;
            
            const recordKey = `logo_bestScore_${this.state.mode}`;
            const currentBest = parseInt(localStorage.getItem(recordKey) || 0);

            if (this.state.score > currentBest && !this.state.recordBroken && currentBest > 0) {
                this.state.recordBroken = true;
                ui.showRecordAnimation();
            }
            if (this.state.score > currentBest) {
                localStorage.setItem(recordKey, this.state.score);
            }

            ui.elements.msg.textContent = `Brawo! To ${currentSource[this.state.currentCode][0]}`;
            ui.elements.msg.style.color = "var(--success)";
            
            // Pokaż bez blura i bez grayscale
            ui.elements.flag.style.filter = "none";
            ui.animatePoints(totalPoints);
            
            const dots = ui.elements.attemptsBox.children;
            if(dots[this.state.tries-1]) dots[this.state.tries-1].classList.add('success');

            this.nextRoundDelay();
        } else {
            // BŁĄD
            if (this.state.tries >= this.config.maxTries) {
                ui.elements.msg.textContent = `Porażka! To: ${currentSource[this.state.currentCode][0]}`;
                ui.elements.msg.style.color = "var(--danger)";
                ui.elements.flag.style.filter = "none";
                this.state.streak = 0;
                ui.elements.streak.textContent = 0;
                this.nextRoundDelay();
            } else {
                ui.elements.msg.textContent = "Źle! Obrazek się wyostrza...";
                ui.elements.msg.style.color = "var(--warning)";
                ui.shakeInput();
                this.state.blurPct = Math.max(0, this.state.blurPct - 10);
                ui.updateBlur(this.state.blurPct, this.state.mode === 'expert');
            }
        }
    },

    nextRoundDelay() {
        ui.elements.input.disabled = true;
        ui.elements.checkBtn.disabled = true;
        setTimeout(() => {
            this.state.round++;
            this.newRound();
        }, 2000);
    },

    endGame() {
        ui.elements.progressBar.style.width = '100%';
        ui.elements.msg.textContent = `Koniec! Twój wynik: ${this.state.score}`;
        ui.elements.msg.style.color = "var(--text-main)";
        ui.elements.backBtn.classList.remove('hidden');
    },

    backToMenu() { ui.showMenu(); },
    
    shuffle(array) {
        let arr = array.slice();
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

/* --- START --- */
ui.init();
ui.elements.checkBtn.addEventListener('click', () => game.checkGuess());
ui.elements.input.addEventListener('keypress', (e) => { if (e.key === 'Enter') game.checkGuess(); });

ui.elements.input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    ui.elements.suggestList.innerHTML = '';
    if (val.length < 2) { ui.elements.suggestList.classList.add('hidden'); return; }
    
    const matches = game.itemNames.filter(c => c.toLowerCase().startsWith(val)).slice(0, 5);
    if (matches.length > 0) {
        ui.elements.suggestList.classList.remove('hidden');
        matches.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            li.onclick = () => {
                ui.elements.input.value = name;
                ui.elements.suggestList.classList.add('hidden');
                ui.elements.input.focus();
            };
            ui.elements.suggestList.appendChild(li);
        });
    } else { ui.elements.suggestList.classList.add('hidden'); }
});

document.addEventListener('click', (e) => {
    if (e.target !== ui.elements.input) ui.elements.suggestList.classList.add('hidden');
});