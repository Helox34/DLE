/* --- BAZA DANYCH (TIERY) --- */
const allCountries = {
    "AF": ["Afganistan"], "AL": ["Albania"], "DZ": ["Algieria"], "AD": ["Andora"], "AO": ["Angola"], 
    "AG": ["Antigua i Barbuda"], "SA": ["Arabia Saudyjska"], "AR": ["Argentyna"], "AM": ["Armenia"], "AU": ["Australia"], 
    "AT": ["Austria"], "AZ": ["Azerbejdżan"], "BS": ["Bahamy"], "BH": ["Bahrajn"], "BD": ["Bangladesz"], "BB": ["Barbados"], 
    "BE": ["Belgia"], "BZ": ["Belize"], "BJ": ["Benin"], "BT": ["Bhutan"], "BO": ["Boliwia"], "BA": ["Bośnia i Hercegowina"], 
    "BW": ["Botswana"], "BR": ["Brazylia"], "BN": ["Brunei"], "BG": ["Bułgaria"], "BF": ["Burkina Faso"], "BI": ["Burundi"], 
    "CL": ["Chile"], "CN": ["Chiny"], "HR": ["Chorwacja"], "CY": ["Cypr"], "TD": ["Czad"], "ME": ["Czarnogóra"], 
    "CZ": ["Czechy"], "DK": ["Dania"], "CD": ["Demokratyczna Republika Konga"], "DM": ["Dominika"], "DO": ["Dominikana"], 
    "DJ": ["Dżibuti"], "EG": ["Egipt"], "EC": ["Ekwador"], "ER": ["Erytrea"], "EE": ["Estonia"], "ET": ["Etiopia"], 
    "FJ": ["Fidżi"], "PH": ["Filipiny"], "FI": ["Finlandia"], "FR": ["Francja"], "GA": ["Gabon"], "GM": ["Gambia"], 
    "GH": ["Ghana"], "GR": ["Grecja"], "GD": ["Grenada"], "GE": ["Gruzja"], "GY": ["Gujana"], "GT": ["Gwatemala"], 
    "GN": ["Gwinea"], "GW": ["Gwinea Bissau"], "GQ": ["Gwinea Równikowa"], "HT": ["Haiti"], "ES": ["Hiszpania"], 
    "NL": ["Holandia"], "HN": ["Honduras"], "IN": ["Indie"], "ID": ["Indonezja"], "IQ": ["Irak"], "IR": ["Iran"], 
    "IE": ["Irlandia"], "IS": ["Islandia"], "IL": ["Izrael"], "JM": ["Jamajka"], "JP": ["Japonia"], "YE": ["Jemen"], 
    "JO": ["Jordania"], "KH": ["Kambodża"], "CM": ["Kamerun"], "CA": ["Kanada"], "QA": ["Katar"], "KZ": ["Kazachstan"], 
    "KE": ["Kenia"], "KG": ["Kirgistan"], "KI": ["Kiribati"], "CO": ["Kolumbia"], "KM": ["Komory"], "CG": ["Kongo"], 
    "KR": ["Korea Południowa"], "KP": ["Korea Północna"], "CR": ["Kostaryka"], "CU": ["Kuba"], "KW": ["Kuwejt"], 
    "LA": ["Laos"], "LS": ["Lesotho"], "LB": ["Liban"], "LR": ["Liberia"], "LY": ["Libia"], "LI": ["Liechtenstein"], 
    "LT": ["Litwa"], "LU": ["Luksemburg"], "LV": ["Łotwa"], "MK": ["Macedonia Północna"], "MG": ["Madagaskar"], 
    "MW": ["Malawi"], "MV": ["Malediwy"], "MY": ["Malezja"], "ML": ["Mali"], "MT": ["Malta"], "MA": ["Maroko"], 
    "MR": ["Mauretania"], "MU": ["Mauritius"], "MX": ["Meksyk"], "FM": ["Mikronezja"], "MM": ["Mjanma", "Birma"], 
    "MD": ["Mołdawia"], "MC": ["Monako"], "MN": ["Mongolia"], "MZ": ["Mozambik"], "NA": ["Namibia"], "NR": ["Nauru"], 
    "NP": ["Nepal"], "DE": ["Niemcy"], "NE": ["Niger"], "NG": ["Nigeria"], "NI": ["Nikaragua"], "NO": ["Norwegia"], 
    "NZ": ["Nowa Zelandia"], "OM": ["Oman"], "PK": ["Pakistan"], "PW": ["Palau"], "PA": ["Panama"], "PG": ["Papua-Nowa Gwinea"], 
    "PY": ["Paragwaj"], "PE": ["Peru"], "PL": ["Polska"], "PT": ["Portugalia"], "ZA": ["RPA", "Republika Południowej Afryki"], 
    "CV": ["Republika Zielonego Przylądka"], "CF": ["Republika Środkowoafrykańska"], "RU": ["Rosja"], "RO": ["Rumunia"], 
    "RW": ["Ruanda"], "KN": ["Saint Kitts i Nevis"], "LC": ["Saint Lucia"], "VC": ["Saint Vincent i Grenadyny"], 
    "SV": ["Salwador"], "WS": ["Samoa"], "SM": ["San Marino"], "SN": ["Senegal"], "RS": ["Serbia"], "SC": ["Seszele"], 
    "SL": ["Sierra Leone"], "SG": ["Singapur"], "SK": ["Słowacja"], "SI": ["Słowenia"], "SO": ["Somalia"], 
    "LK": ["Sri Lanka"], "US": ["Stany Zjednoczone", "USA"], "SZ": ["Eswatini"], "SD": ["Sudan"], "SS": ["Sudan Południowy"], 
    "SR": ["Surinam"], "SY": ["Syria"], "CH": ["Szwajcaria"], "SE": ["Szwecja"], "TJ": ["Tadżykistan"], "TH": ["Tajlandia"], 
    "TZ": ["Tanzania"], "TL": ["Timor Wschodni"], "TG": ["Togo"], "TO": ["Tonga"], "TT": ["Trynidad i Tobago"], 
    "TN": ["Tunezja"], "TR": ["Turcja"], "TM": ["Turkmenistan"], "TV": ["Tuvalu"], "UG": ["Uganda"], "UA": ["Ukraina"], 
    "UY": ["Urugwaj"], "UZ": ["Uzbekistan"], "VU": ["Vanuatu"], "VA": ["Watykan"], "VE": ["Wenezuela"], "HU": ["Węgry"], 
    "GB": ["Wielka Brytania", "Anglia", "UK"], "VN": ["Wietnam"], "IT": ["Włochy"], "CI": ["Wybrzeże Kości Słoniowej"], 
    "MH": ["Wyspy Marshalla"], "SB": ["Wyspy Salomona"], "ST": ["Wyspy Świętego Tomasza i Książęca"], "ZM": ["Zambia"], 
    "ZW": ["Zimbabwe"], "AE": ["Zjednoczone Emiraty Arabskie"]
};

// PODZIAŁ NA KONTYNENTY
const europeCodes = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA"];
const asiaCodes = ["AF","AM","AZ","BH","BD","BT","BN","KH","CN","GE","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MY","MV","MN","MM","NP","KP","KR","OM","PK","PH","QA","SA","SG","LK","SY","TJ","TH","TL","TR","TM","AE","UZ","VN","YE"];
const africaCodes = ["DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CD","DJ","EG","GQ","ER","SZ","ET","GA","GM","GH","GN","GW","CI","KE","LS","LR","LY","MG","MW","ML","MR","MU","MA","MZ","NA","NE","NG","RW","ST","SN","SC","SL","SO","ZA","SS","SD","TZ","TG","TN","UG","ZM","ZW"];
const americasCodes = ["AG","AR","BS","BB","BZ","BO","BR","CA","CL","CO","CR","CU","DM","DO","EC","SV","GD","GT","GY","HT","HN","JM","MX","NI","PA","PY","PE","KN","LC","VC","SR","TT","US","UY","VE"];
const oceaniaCodes = ["AU","FJ","KI","MH","FM","NR","NZ","PW","PG","WS","SB","TO","TV","VU"];

// Definicja Tierów (Trudność)
const tier1Codes = ["PL", "DE", "FR", "IT", "ES", "GB", "US", "JP", "CN", "RU", "BR", "CA", "AU", "IN", "GR", "TR", "EG", "UA", "CH", "SE"];
const tier2Codes = ["MX", "AR", "NL", "BE", "PT", "NO", "FI", "CZ", "KR", "ZA", "SA", "IR", "ID", "TH", "VN", "RO", "HU", "DK", "AT", "IE", "NZ", "CL", "CO", "PE", "VE", "MA", "DZ", "NG", "KE", "PK", "BD", "PH", "MY", "IS", "HR", "RS", "BG", "SK"];
const tier3Codes = ["KZ", "UZ", "TM", "KG", "TJ", "MN", "NP", "BT", "LA", "KH", "MM", "LK", "SY", "JO", "LB", "KW", "QA", "AE", "OM", "YE", "LY", "TN", "SD", "SS", "ET", "SO", "UG", "RW", "TZ", "ZM", "ZW", "MZ", "AO", "NA", "BW", "CM", "SN", "GH", "CI", "BF", "ML", "NE", "TD", "CU", "JM", "HT", "DO", "GT", "HN", "SV", "NI", "CR", "PA", "BO", "PY", "UY", "GE", "AM", "AZ", "MD", "BY", "EE", "LV", "LT", "AL", "MK", "BA", "ME"];
const definedCodes = [...tier1Codes, ...tier2Codes, ...tier3Codes];
const tier4Codes = Object.keys(allCountries).filter(code => !definedCodes.includes(code));

function getSubset(codesArray) {
    const subset = {};
    codesArray.forEach(code => { if (allCountries[code]) subset[code] = allCountries[code]; });
    return subset;
}

const countriesData = {
    // Trudność (Wersja PRO)
    easy: getSubset(tier1Codes),
    hard: getSubset([...tier1Codes, ...tier2Codes]),
    pro: getSubset([...tier2Codes, ...tier3Codes]),
    expert: getSubset([...tier3Codes, ...tier4Codes]),
    
    // Kontynenty (Wersja Normalna)
    europa: getSubset(europeCodes),
    azja: getSubset(asiaCodes),
    afryka: getSubset(africaCodes),
    ameryki: getSubset([...americasCodes, ...oceaniaCodes]), 
    swiat: getSubset(Object.keys(allCountries))
};

/* --- UI --- */
const ui = {
    elements: {
        screens: { menu: document.getElementById('main-menu-view'), game: document.getElementById('game') },
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

    init() { this.updateMenuScores(); },

    updateMenuScores() {
        const modes = ['easy', 'hard', 'pro', 'expert', 'europa', 'azja', 'afryka', 'ameryki', 'swiat'];
        modes.forEach(mode => {
            const el = document.getElementById(`record-${mode}`);
            if (el) {
                const score = localStorage.getItem(`bestScore_${mode}`) || 0;
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

    updateBlur(pct, isGray) {
        const px = (pct / 2); 
        let filter = `blur(${px}px)`;
        if (isGray) filter += ' grayscale(100%)';
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

/* --- GAME LOGIC --- */
const game = {
    config: { maxTries: 6, maxRounds: 10 }, // Ustawiono 10 rund
    state: { 
        mode: null, round: 1, tries: 0, streak: 0, score: 0, 
        currentCode: null, blurPct: 40, countriesList: [], recordBroken: false 
    },
    countryNames: [],

    getSmartPool(mode) {
        const source = countriesData[mode];
        const allCodes = Object.keys(source);
        const lastPlayed = JSON.parse(localStorage.getItem('lastPlayed_' + mode) || '[]');
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

        // --- ZMIANA TEKSTU PRZYCISKU POWROTU ---
        const backBtn = document.getElementById('backMenu');
        const proModes = ['easy', 'hard', 'pro', 'expert'];
        
        if (proModes.includes(mode)) {
            backBtn.textContent = "ZMIEŃ POZIOM TRUDNOŚCI";
        } else {
            backBtn.textContent = "ZMIEŃ REGION";
        }
        // ----------------------------------------

        const smartPool = this.getSmartPool(mode);
        this.state.countriesList = this.shuffle(smartPool).slice(0, this.config.maxRounds);
        localStorage.setItem('lastPlayed_' + mode, JSON.stringify(this.state.countriesList));

        const source = countriesData[mode];
        this.countryNames = Object.values(source).map(arr => arr[0]).sort();

        ui.elements.score.textContent = '0';
        ui.elements.streak.textContent = '0';
        ui.showGame();
        this.newRound();
    },

    newRound() {
        if (this.state.round > this.config.maxRounds) return this.endGame();

        this.state.currentCode = this.state.countriesList[this.state.round - 1];
        this.state.tries = 0;
        
        // --- LOGIKA BLURA ---
        const proModes = ['easy', 'hard', 'pro', 'expert'];
        if (proModes.includes(this.state.mode)) {
            this.state.blurPct = 40; // Blur dla PRO
        } else {
            this.state.blurPct = 0; // Brak blura dla zwykłych
        }

        ui.elements.input.value = '';
        ui.elements.input.disabled = false;
        ui.elements.checkBtn.disabled = false;
        
        // --- PRZYCISK POWROTU ZAWSZE WIDOCZNY ---
        ui.elements.backBtn.classList.remove('hidden');

        ui.elements.round.textContent = this.state.round;
        ui.elements.msg.textContent = "Zgadnij kraj!";
        ui.elements.msg.style.color = "var(--text-muted)";
        
        ui.setDots(this.config.maxTries, 0);

        const progressPct = ((this.state.round - 1) / this.config.maxRounds) * 100;
        ui.elements.progressBar.style.width = `${progressPct}%`;

        ui.elements.flag.style.opacity = '0';
        ui.updateBlur(this.state.blurPct, this.state.mode === 'expert');

        const newSrc = `https://flagsapi.com/${this.state.currentCode}/flat/64.png`;
        ui.elements.flag.src = newSrc;

        ui.elements.flag.onload = () => { ui.elements.flag.style.opacity = '1'; };
    },

    checkGuess() {
        const userGuess = ui.elements.input.value.trim().toLowerCase();
        const currentSource = countriesData[this.state.mode];
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
            
            const recordKey = `bestScore_${this.state.mode}`;
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
            
            ui.updateBlur(0, false);
            ui.animatePoints(totalPoints);
            
            const dots = ui.elements.attemptsBox.children;
            if(dots[this.state.tries-1]) dots[this.state.tries-1].classList.add('success');

            this.nextRoundDelay();
        } else {
            // BŁĄD
            if (this.state.tries >= this.config.maxTries) {
                ui.elements.msg.textContent = `Porażka! To: ${currentSource[this.state.currentCode][0]}`;
                ui.elements.msg.style.color = "var(--danger)";
                ui.updateBlur(0, false);
                this.state.streak = 0;
                ui.elements.streak.textContent = 0;
                this.nextRoundDelay();
            } else {
                ui.shakeInput();
                
                // Zmniejszamy blur TYLKO jeśli był aktywny (tryb PRO)
                if (this.state.blurPct > 0) {
                    this.state.blurPct = Math.max(0, this.state.blurPct - 8);
                    ui.elements.msg.textContent = "Źle! Obrazek się wyostrza...";
                } else {
                    ui.elements.msg.textContent = "Źle! Spróbuj jeszcze raz...";
                }
                ui.elements.msg.style.color = "var(--warning)";
                
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
        // Przycisk powrotu jest już widoczny, więc nic nie trzeba robić
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
    
    const matches = game.countryNames.filter(c => c.toLowerCase().startsWith(val)).slice(0, 5);
    if (matches.length > 0) {
        ui.elements.suggestList.classList.remove('hidden');
        matches.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            li.onclick = () => {
                ui.elements.input.value = country;
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