/* --- BAZA DANYCH: CHRONO-DLE (STABILNE LINKI) --- */
const itemsDB = [
    // Technologia
    { name: "Pierwszy iPhone", val: 2007, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/IPhone_2G_PSD_Mockup.png/432px-IPhone_2G_PSD_Mockup.png" },
    { name: "Start YouTube", val: 2005, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png" },
    { name: "Start Facebooka", val: 2004, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png" },
    { name: "Start Google", val: 1998, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
    { name: "Windows 95", val: 1995, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Windows_95_Logo.svg/640px-Windows_95_Logo.svg.png" },
    { name: "PlayStation 1", val: 1994, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PlayStation-Console-wController-L.jpg/640px-PlayStation-Console-wController-L.jpg" },
    { name: "Pierwszy SMS", val: 1992, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nokia_1011_mobile_phone.jpg/480px-Nokia_1011_mobile_phone.jpg" },
    { name: "Powstanie WWW", val: 1989, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/640px-WWW_logo_by_Robert_Cailliau.svg.png" },
    { name: "Start Netflixa (DVD)", val: 1997, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" },
    { name: "Powstanie Bitcoina", val: 2009, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/640px-Bitcoin.svg.png" },
    { name: "Start Instagrama", val: 2010, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png" },
    { name: "Gra Minecraft (Alpha)", val: 2009, img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" },
    { name: "Premiera ChatGPT", val: 2022, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/640px-ChatGPT_logo.svg.png" },

    // Historia
    { name: "Upadek Muru Berlińskiego", val: 1989, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BerlinWall-BrandenburgGate.jpg/640px-BerlinWall-BrandenburgGate.jpg" },
    { name: "Katastrofa w Czarnobylu", val: 1986, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chernobyl_Reactor_4_1986.jpg/640px-Chernobyl_Reactor_4_1986.jpg" },
    { name: "Lądowanie na Księżycu", val: 1969, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/520px-Aldrin_Apollo_11_original.jpg" },
    { name: "Lot Gagarina w kosmos", val: 1961, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gagarin_in_Sweden.jpg/480px-Gagarin_in_Sweden.jpg" },
    { name: "Zamach na JFK", val: 1963, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/480px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg" },
    { name: "Koniec II Wojny Światowej", val: 1945, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Raising_the_Flag_on_Iwo_Jima%2C_larger_-_edit1.jpg/640px-Raising_the_Flag_on_Iwo_Jima%2C_larger_-_edit1.jpg" },
    { name: "Zatonięcie Titanica", val: 1912, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/640px-RMS_Titanic_3.jpg" },
    { name: "Odkrycie Penicyliny", val: 1928, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Alexander_Fleming_1945.jpg/480px-Alexander_Fleming_1945.jpg" },
    { name: "Woodstock", val: 1969, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Richie_Havens_at_Woodstock.jpg/640px-Richie_Havens_at_Woodstock.jpg" },

    // Kultura
    { name: "Film Gwiezdne Wojny", val: 1977, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png" },
    { name: "Serial Przyjaciele", val: 1994, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/640px-Friends_logo.svg.png" },
    { name: "Film Titanic", val: 1997, img: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png" },
    { name: "Film Król Lew", val: 1994, img: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg" },
    { name: "Harry Potter (Film)", val: 2001, img: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Philosopher%27s_Stone_posters.JPG" },
    { name: "Film Shrek", val: 2001, img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Shrek_movie_poster.jpg" }
];

const game = {
    state: { left: null, right: null, score: 0, isAnimating: false },
    ui: {
        left: { img: document.getElementById('img-left'), name: document.getElementById('name-left'), val: document.getElementById('val-left') },
        right: { img: document.getElementById('img-right'), name: document.getElementById('name-right'), val: document.getElementById('val-right'), btns: document.getElementById('buttons-area'), res: document.getElementById('result-area') },
        score: document.getElementById('current-score'),
        best: document.getElementById('best-score'),
        modal: document.getElementById('game-over'),
        msg: document.getElementById('loss-msg'),
        final: document.getElementById('final-score-val')
    },

    init() {
        this.ui.best.textContent = localStorage.getItem('chrono_highscore') || 0;
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.setupImageErrorHandling(); // Dodane zabezpieczenie
        this.render();
    },

    setupImageErrorHandling() {
        const fallbackImage = "https://placehold.co/400x300/3b82f6/ffffff?text=Brak+Zdj%C4%99cia";
        this.ui.left.img.onerror = () => { this.ui.left.img.src = fallbackImage; };
        this.ui.right.img.onerror = () => { this.ui.right.img.src = fallbackImage; };
    },

    getRandom(exclude) {
        let item;
        do { item = itemsDB[Math.floor(Math.random() * itemsDB.length)]; } while (exclude && item.name === exclude.name);
        return item;
    },

    getSimilar(baseItem) {
        const min = baseItem.val - 20;
        const max = baseItem.val + 20;
        const candidates = itemsDB.filter(item => item.name !== baseItem.name && item.val >= min && item.val <= max);
        if (candidates.length === 0) return this.getRandom(baseItem);
        return candidates[Math.floor(Math.random() * candidates.length)];
    },

    render() {
        const { left, right } = this.state;
        this.ui.left.img.src = left.img;
        this.ui.left.name.textContent = left.name;
        this.ui.left.val.textContent = left.val;

        this.ui.right.img.src = right.img;
        this.ui.right.name.textContent = right.name;
        this.ui.right.val.textContent = "???";
        
        this.ui.right.btns.classList.remove('hidden');
        this.ui.right.res.classList.add('hidden');
        this.ui.right.val.style.color = "#FFD700";
    },

    guess(dir) {
        if (this.state.isAnimating) return;
        this.state.isAnimating = true;
        const correct = (dir === 'higher' && this.state.right.val >= this.state.left.val) ||
                        (dir === 'lower' && this.state.right.val <= this.state.left.val);
        this.reveal(correct);
    },

    reveal(correct) {
        this.ui.right.btns.classList.add('hidden');
        this.ui.right.res.classList.remove('hidden');
        this.ui.right.val.textContent = this.state.right.val; 
        
        if (correct) {
            this.ui.right.val.style.color = "#3b82f6";
            setTimeout(() => this.next(), 1200);
        } else {
            this.ui.right.val.style.color = "#ef4444";
            setTimeout(() => this.over(), 1500);
        }
    },

    next() {
        this.state.score++;
        this.ui.score.textContent = this.state.score;
        this.state.left = this.state.right;
        this.state.right = this.getSimilar(this.state.left);
        this.render();
        this.state.isAnimating = false;
    },

    over() {
        const best = parseInt(localStorage.getItem('chrono_highscore') || 0);
        if (this.state.score > best) {
            localStorage.setItem('chrono_highscore', this.state.score);
            this.ui.msg.textContent = `Nowy rekord! Poprawny rok: ${this.state.right.val}`;
        } else {
            this.ui.msg.textContent = `Błąd! To rok ${this.state.right.val}`;
        }
        this.ui.final.textContent = this.state.score;
        this.ui.modal.classList.remove('hidden');
    },

    restart() {
        this.state.score = 0;
        this.ui.score.textContent = "0";
        this.ui.best.textContent = localStorage.getItem('chrono_highscore') || 0;
        this.ui.modal.classList.add('hidden');
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.render();
        this.state.isAnimating = false;
    }
};
game.init();