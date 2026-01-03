/* --- BAZA DANYCH: PRICE-DLE (POPRAWIONE ZDJĘCIA) --- */
const itemsDB = [
    // Elektronika
    { name: "PlayStation 5", val: 499, img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png" },
    { name: "iPhone 15 Pro Max", val: 1199, img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/IPhone_15_Pro_Blue_Titanium.svg" },
    { name: "MacBook Pro 16", val: 2499, img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MacBook_Pro_14-inch_%282021%29.jpg" },
    { name: "Samsung Z Fold 5", val: 1799, img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Samsung_Galaxy_Z_Fold5_Icy_Blue.jpg" },
    { name: "Apple Vision Pro", val: 3499, img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Apple_Vision_Pro_-_frontal_view.jpg" },
    { name: "Karta RTX 4090", val: 1599, img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Nvidia_GeForce_RTX_4090_Founders_Edition.jpg" },
    { name: "Słuchawki AirPods Max", val: 549, img: "https://upload.wikimedia.org/wikipedia/commons/4/42/AirPods_Max_Pink.jpg" },
    
    // Samochody
    { name: "Tesla Model S Plaid", val: 89990, img: "https://upload.wikimedia.org/wikipedia/commons/1/14/2018_Tesla_Model_S_75D.jpg" },
    { name: "Porsche 911 GT3", val: 182900, img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Porsche_992_GT3_IAA_2021_1X7A0225.jpg" },
    { name: "Ferrari F40", val: 2500000, img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/F40_ferrari_20090509.jpg" },
    { name: "Lamborghini Huracán", val: 249865, img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/2014-03-04_Geneva_Motor_Show_1379.JPG" },
    { name: "Rolls-Royce Phantom", val: 493000, img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Rolls-Royce_Phantom_VIII_IMG_4472.jpg" },
    { name: "Ford F-150 Lightning", val: 55974, img: "https://upload.wikimedia.org/wikipedia/commons/7/73/2022_Ford_F-150_Lightning_Lariat_in_Iced_Blue_Silver%2C_front_left.jpg" },

    // Luksus
    { name: "Rolex Submariner", val: 10250, img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rolex_Submariner.jpg" },
    { name: "Omega Speedmaster", val: 7000, img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Omega_Speedmaster_Professional_Moonwatch_Chronograph.jpg" },
    { name: "Patek Philippe Nautilus", val: 35000, img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Patek_Philippe_Nautilus_5711_1A-010.jpg" },
    { name: "Bransoletka Cartier", val: 7350, img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Cartier_Love_Bracelet.jpg" },
    { name: "Torebka Birkin", val: 28000, img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hermes_Birkin_Bag_Black.jpg" },
    { name: "Buty Nike Air Mag", val: 50000, img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Nike_Air_Mag.jpg" },

    // Codzienne / Inne
    { name: "Big Mac (USA)", val: 5.69, img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Big_Mac_hamburger.jpg" },
    { name: "Netflix (1 miesiąc)", val: 23, img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Spotify (1 miesiąc)", val: 11, img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Starbucks Latte", val: 5.50, img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Starbucks_Coffee_Latte.jpg" },
    { name: "Bilet do kina (USA)", val: 15, img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Ticket_stub.png" }
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
        this.ui.best.textContent = localStorage.getItem('price_highscore') || 0;
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.render();
    },

    getRandom(exclude) {
        let item;
        do { item = itemsDB[Math.floor(Math.random() * itemsDB.length)]; } while (exclude && item.name === exclude.name);
        return item;
    },

    getSimilar(baseItem) {
        // Szukamy przedmiotu w zakresie 0.4x do 3.0x ceny bazy
        const min = baseItem.val * 0.4;
        const max = baseItem.val * 3.0;

        const candidates = itemsDB.filter(item => 
            item.name !== baseItem.name && 
            item.val >= min && 
            item.val <= max
        );

        if (candidates.length === 0) return this.getRandom(baseItem);
        return candidates[Math.floor(Math.random() * candidates.length)];
    },

    formatMoney(num) {
        return "$" + num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    },

    render() {
        const { left, right } = this.state;
        this.ui.left.img.src = left.img;
        this.ui.left.name.textContent = left.name;
        this.ui.left.val.textContent = this.formatMoney(left.val);

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
        
        this.animateValue(this.ui.right.val, 0, this.state.right.val, 1000, () => {
            if (correct) {
                this.ui.right.val.style.color = "#10b981";
                setTimeout(() => this.next(), 1200);
            } else {
                this.ui.right.val.style.color = "#ef4444";
                setTimeout(() => this.over(), 1500);
            }
        });
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
        const best = parseInt(localStorage.getItem('price_highscore') || 0);
        if (this.state.score > best) {
            localStorage.setItem('price_highscore', this.state.score);
            this.ui.msg.textContent = `Nowy rekord! Cena: ${this.formatMoney(this.state.right.val)}`;
        } else {
            this.ui.msg.textContent = `Błąd! Cena to ${this.formatMoney(this.state.right.val)}`;
        }
        this.ui.final.textContent = this.state.score;
        this.ui.modal.classList.remove('hidden');
    },

    restart() {
        this.state.score = 0;
        this.ui.score.textContent = "0";
        this.ui.best.textContent = localStorage.getItem('price_highscore') || 0;
        this.ui.modal.classList.add('hidden');
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.render();
        this.state.isAnimating = false;
    },

    animateValue(obj, start, end, duration, cb) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = (end - start) * progress + start;
            obj.innerHTML = this.formatMoney(currentVal);
            if (progress < 1) window.requestAnimationFrame(step);
            else if (cb) cb();
        };
        window.requestAnimationFrame(step);
    }
};
game.init();