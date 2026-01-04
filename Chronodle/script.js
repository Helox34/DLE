/* --- BAZA DANYCH: CHRONO-DLE (PEŁNA HISTORIA POLSKI) --- */
const itemsDB = [
    // --- PIASTOWIE ---
    { val: 966, name: "Chrzest Polski (Mieszko I)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Matejko_Zaprowadzenie_chrze%C5%9Bcija%C5%84stwa.jpg/640px-Matejko_Zaprowadzenie_chrze%C5%9Bcija%C5%84stwa.jpg" },
    { val: 968, name: "Biskupstwo misyjne w Poznaniu", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 972, name: "Bitwa pod Cedynią", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Wojsko_Mieszka_I.jpg/640px-Wojsko_Mieszka_I.jpg" },
    { val: 990, name: "Spisanie „Dagome iudex”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 992, name: "Śmierć Mieszka I, Bolesław Chrobry", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 997, name: "Śmierć św. Wojciecha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 999, name: "Kanonizacja św. Wojciecha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1000, name: "Zjazd gnieźnieński", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gniezno_Drzwi_Gnieznienskie_7.jpg/450px-Gniezno_Drzwi_Gnieznienskie_7.jpg" },
    { val: 1000, name: "Arcybiskupstwo w Gnieźnie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1002, name: "Wojna polsko-niemiecka", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1018, name: "Pokój w Budziszynie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1018, name: "Wyprawa kijowska Chrobrego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1025, name: "Koronacja Bolesława Chrobrego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Boleslaus_the_Brave.jpg/480px-Boleslaus_the_Brave.jpg" },
    { val: 1025, name: "Koronacja Mieszka II", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1039, name: "Najazd Brzetysława czeskiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1039, name: "Stolica w Krakowie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1076, name: "Koronacja Bolesława Śmiałego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1079, name: "Śmierć biskupa Stanisława", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1109, name: "Obrona Głogowa / Psie Pole", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1116, name: "Odzyskanie Pomorza Gdańskiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1138, name: "Statut Krzywoustego (Rozbicie)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Boleslaus_III_Wrymouth.jpg/480px-Boleslaus_III_Wrymouth.jpg" },
    { val: 1180, name: "Zjazd w Łęczycy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1226, name: "Sprowadzenie Krzyżaków", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Konrad_I_of_Masovia.jpg/480px-Konrad_I_of_Masovia.jpg" },
    { val: 1227, name: "Śmierć Leszka Białego (Gąsawa)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1241, name: "Bitwa pod Legnicą", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wahlstatt_1241.jpg/640px-Wahlstatt_1241.jpg" },
    { val: 1253, name: "Kanonizacja św. Stanisława", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1295, name: "Koronacja Przemysła II", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1308, name: "Zajęcie Pomorza przez Krzyżaków", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1320, name: "Koronacja Władysława Łokietka", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wladislaus_I_the_Elbow-high.jpg/480px-Wladislaus_I_the_Elbow-high.jpg" },
    { val: 1331, name: "Bitwa pod Płowcami", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1333, name: "Koronacja Kazimierza Wielkiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Casimir_III_the_Great.jpg/480px-Casimir_III_the_Great.jpg" },
    { val: 1335, name: "Zjazd w Wyszehradzie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1343, name: "Pokój w Kaliszu", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1364, name: "Założenie Akademii Krakowskiej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Collegium_Maius_courtyard_Krakow.jpg/640px-Collegium_Maius_courtyard_Krakow.jpg" },
    { val: 1370, name: "Śmierć Kazimierza Wielkiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1374, name: "Przywilej koszycki", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    
    // --- JAGIELLONOWIE ---
    { val: 1384, name: "Koronacja Jadwigi", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jadwiga_Andegawe%C5%84ska.PNG/480px-Jadwiga_Andegawe%C5%84ska.PNG" },
    { val: 1385, name: "Unia w Krewie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1386, name: "Chrzest Jagiełły", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1401, name: "Unia wileńsko-radomska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1409, name: "Wielka Wojna z Zakonem", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1410, name: "Bitwa pod Grunwaldem", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jan_Matejko%2C_Bitwa_pod_Grunwaldem.jpg/640px-Jan_Matejko%2C_Bitwa_pod_Grunwaldem.jpg" },
    { val: 1411, name: "I pokój toruński", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1413, name: "Unia horodelska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1430, name: "Przywilej jedlneńsko-krakowski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1434, name: "Koronacja Władysława Warneńczyka", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1440, name: "Warneńczyk królem Węgier", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1444, name: "Bitwa pod Warną", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Battle_of_Varna_1444.jpg/640px-Battle_of_Varna_1444.jpg" },
    { val: 1447, name: "Koronacja Kazimierza Jagiellończyka", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1454, name: "Przywileje czerwińsko-nieszawskie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1466, name: "II pokój toruński (Prusy)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Polska_1466.png/640px-Polska_1466.png" },
    { val: 1493, name: "Pierwszy Sejm Walny", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1496, name: "Przywilej piotrkowski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1505, name: "Konstytucja „Nihil novi”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nihil_novi.jpg/480px-Nihil_novi.jpg" },
    { val: 1514, name: "Bitwa pod Orszą", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1515, name: "Zjazd wiedeński", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1518, name: "Ślub z Boną Sforzą", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1525, name: "Hołd pruski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jan_Matejko-Ho%C5%82d_pruski.jpg/640px-Jan_Matejko-Ho%C5%82d_pruski.jpg" },
    { val: 1543, name: "Dzieło Kopernika „O obrotach...”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CopernicSystem.png/480px-CopernicSystem.png" },
    { val: 1569, name: "Unia lubelska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Union_of_Lublin_by_Jan_Matejko.jpg/640px-Union_of_Lublin_by_Jan_Matejko.jpg" },
    { val: 1572, name: "Śmierć Zygmunta Augusta", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1573, name: "Pierwsza wolna elekcja", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Election_of_Henry_of_Valois.jpg/640px-Election_of_Henry_of_Valois.jpg" },
    { val: 1576, name: "Koronacja Stefana Batorego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1578, name: "Trybunał Koronny", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1587, name: "Elekcja Zygmunta III Wazy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1596, name: "Stolica w Warszawie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Zygmunt_column.JPG/480px-Zygmunt_column.JPG" },
    { val: 1605, name: "Bitwa pod Kircholmem", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Battle_of_Kircholm.jpg/640px-Battle_of_Kircholm.jpg" },
    { val: 1610, name: "Zajęcie Kremla (Kłuszyn)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/K%C5%82uszyn_Szymon_Boguszowicz.jpg/640px-K%C5%82uszyn_Szymon_Boguszowicz.jpg" },
    { val: 1621, name: "Bitwa pod Chocimiem", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1648, name: "Powstanie Chmielnickiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1652, name: "Pierwsze „Liberum veto”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1655, name: "Potop szwedzki (Jasna Góra)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Suchodolski_Defense_of_Jasna_G%C3%B3ra.jpg/640px-Suchodolski_Defense_of_Jasna_G%C3%B3ra.jpg" },
    { val: 1660, name: "Pokój w Oliwie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1683, name: "Odsiecz wiedeńska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Jan_III_Sobieski_pod_Wiedniem.jpg/640px-Jan_III_Sobieski_pod_Wiedniem.jpg" },
    { val: 1717, name: "Sejm Niemy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1764, name: "Elekcja Poniatowskiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1772, name: "I rozbiór Polski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Zapowied%C5%BA_rozbioru_Polski.jpg/640px-Zapowied%C5%BA_rozbioru_Polski.jpg" },
    { val: 1773, name: "Komisja Edukacji Narodowej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1791, name: "Konstytucja 3 Maja", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Konstytucja_3_Maja.jpg/640px-Konstytucja_3_Maja.jpg" },
    { val: 1793, name: "II rozbiór Polski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1794, name: "Insurekcja Kościuszkowska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tadeusz_Kosciuszko.jpg/480px-Tadeusz_Kosciuszko.jpg" },
    { val: 1795, name: "III rozbiór Polski", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rzeczpospolita_Rozbiory_3.png/640px-Rzeczpospolita_Rozbiory_3.png" },
    { val: 1797, name: "Powstanie „Mazurka Dąbrowskiego”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mazurek_Dabrowskiego.png/480px-Mazurek_Dabrowskiego.png" },
    { val: 1807, name: "Księstwo Warszawskie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Herb_Ksiestwa_Warszawskiego.svg/480px-Herb_Ksiestwa_Warszawskiego.svg.png" },
    { val: 1815, name: "Królestwo Polskie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1830, name: "Powstanie Listopadowe", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Marcin_Zaleski_-_Wzi%C4%99cie_Arsena%C5%82u.jpg/640px-Marcin_Zaleski_-_Wzi%C4%99cie_Arsena%C5%82u.jpg" },
    { val: 1863, name: "Powstanie Styczniowe", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Grottger_Bitwa.jpg/640px-Grottger_Bitwa.jpg" },
    { val: 1905, name: "Nobel dla Sienkiewicza", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Henryk_Sienkiewicz_01.jpg/480px-Henryk_Sienkiewicz_01.jpg" },
    { val: 1918, name: "Odzyskanie niepodległości", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jozef_Pilsudski_1.jpg/480px-Jozef_Pilsudski_1.jpg" },
    { val: 1920, name: "Bitwa Warszawska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kossak_Jerzy_Cud_nad_Wisla_1920.jpg/640px-Kossak_Jerzy_Cud_nad_Wisla_1920.jpg" },
    { val: 1926, name: "Przewrót majowy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Zamach_majowy_na_mo%C5%9Bcie_Poniatowskiego.jpg/640px-Zamach_majowy_na_mo%C5%9Bcie_Poniatowskiego.jpg" },
    { val: 1939, name: "Wybuch II Wojny Światowej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Schleswig-Holstein_firing_Gdynia_13.09.1939.jpg/640px-Schleswig-Holstein_firing_Gdynia_13.09.1939.jpg" },
    { val: 1940, name: "Zbrodnia katyńska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1944, name: "Powstanie Warszawskie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Warsaw_Uprising_by_Sylwester_Braun_-_Kamienica_przy_ul._Marsza%C5%82kowskiej_129_i_Nowy_%C5%9Awiat_-_27653.jpg/480px-Warsaw_Uprising.jpg" },
    { val: 1945, name: "Koniec II wojny światowej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Berlin_Brandenburger_Tor_1945.jpg/640px-Berlin_Brandenburger_Tor_1945.jpg" },
    { val: 1952, name: "Konstytucja PRL", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1956, name: "Poznański Czerwiec", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1978, name: "Wybór Jana Pawła II", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Johannes_Paul_II._%281980%29.jpg/480px-Johannes_Paul_II._%281980%29.jpg" },
    { val: 1980, name: "Powstanie „Solidarności”", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Solidarnosc_logo.svg/640px-Solidarnosc_logo.svg.png" },
    { val: 1981, name: "Stan wojenny", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SKOT_OT-64_in_Zb%C4%85szy%C5%84_1981.jpg/640px-SKOT_OT-64_in_Zb%C4%85szy%C5%84_1981.jpg" },
    { val: 1989, name: "Obrady Okrągłego Stołu", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Round_Table_Warsaw_1989.jpg/640px-Round_Table_Warsaw_1989.jpg" },
    { val: 1990, name: "Plan Balcerowicza", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1997, name: "Konstytucja RP", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 1999, name: "Wstąpienie do NATO", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/640px-Flag_of_NATO.svg.png" },
    { val: 2004, name: "Wstąpienie do UE", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/640px-Flag_of_Europe.svg.png" },
    { val: 2010, name: "Katastrofa smoleńska", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 2012, name: "Euro 2012", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stadion_Narodowy_w_Warszawie_2014.jpg/640px-Stadion_Narodowy_w_Warszawie_2014.jpg" },
    { val: 2014, name: "Tusk szefem Rady Europejskiej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 2016, name: "Szczyt NATO w Warszawie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/640px-Flag_of_NATO.svg.png" },
    { val: 2019, name: "Nobel dla Olgi Tokarczuk", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 2022, name: "Przekop Mierzei Wiślanej", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" },
    { val: 2025, name: "Prezydentura Karola Nawrockiego", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png" }
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
        this.ui.best.textContent = localStorage.getItem('chrono_pl_highscore') || 0;
        this.setupImageErrorHandling(); // Zabezpieczenie przed brakiem zdjęć
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.render();
    },

    // Jeśli link wygaśnie, wstaw Godło Polski jako placeholder
    setupImageErrorHandling() {
        const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Herb_Polski.svg/480px-Herb_Polski.svg.png";
        this.ui.left.img.onerror = () => { this.ui.left.img.src = fallbackImage; };
        this.ui.right.img.onerror = () => { this.ui.right.img.src = fallbackImage; };
    },

    getRandom(exclude) {
        let item;
        do { item = itemsDB[Math.floor(Math.random() * itemsDB.length)]; } while (exclude && item.name === exclude.name);
        return item;
    },

    // Inteligentne dobieranie: +/- 50 lat, żeby było ciekawiej
    getSimilar(baseItem) {
        const min = baseItem.val - 50;
        const max = baseItem.val + 50;

        const candidates = itemsDB.filter(item => 
            item.name !== baseItem.name && 
            item.val >= min && 
            item.val <= max
        );

        if (candidates.length === 0) return this.getRandom(baseItem); // Fallback
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
        const best = parseInt(localStorage.getItem('chrono_pl_highscore') || 0);
        if (this.state.score > best) {
            localStorage.setItem('chrono_pl_highscore', this.state.score);
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
        this.ui.best.textContent = localStorage.getItem('chrono_pl_highscore') || 0;
        this.ui.modal.classList.add('hidden');
        this.state.left = this.getRandom();
        this.state.right = this.getSimilar(this.state.left);
        this.render();
        this.state.isAnimating = false;
    }
};
game.init();