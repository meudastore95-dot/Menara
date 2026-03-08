const languageSelect = document.getElementById("languageSelect");
const themeSelect = document.getElementById("themeSelect");
const ramadanToggle = document.getElementById("ramadanToggle");

const languages = {
  nl: {
    label: "Nederlands",
    rtl: false,
    content: {
      tagline: "Ultimate Global Edition",
      eyebrow: "Menara v7.6",
      heroTitle: "De ultieme digitale minaret voor elke dag.",
      heroLead:
        "Een serene, wereldwijde ervaring voor gebedstijden, Qur'an, adhkar en community updates.",
      ctaPrimary: "Start Focus Modus",
      ctaSecondary: "Bekijk Demo",
      highlightPrayer: "Next prayer in 00:42:18",
      highlightHijri: "15 Sha'ban 1447 AH",
      nowPlaying: "Qur'an Player - Focus",
      verseTranslation: "Allah is het Licht van de hemelen en de aarde.",
      chipModeFocus: "👁️ Focus",
      chipModeSurah: "📜 Surah",
      chipModeAudio: "🔊 Audio",
      agendaTitle: "Gebedstijden",
      agendaLocation: "Rotterdam, NL",
      gpsNote: "GPS precisie actief",
      featureLanguages: "5 talen + RTL",
      featureLanguagesDesc:
        "Wissel direct tussen Nederlands, Engels, Frans, Duits en Arabisch met automatische RTL-lay-out.",
      featureAutomation: "Slimme automatisering",
      featureAutomationDesc:
        "Ramadan-, Jumu'ah- en Salah Focus-modi reageren op datum en gebedstijden.",
      featureAudio: "Audio Studio",
      featureAudioDesc:
        "Muezzin-selectie, achtergrondaudio en een elegante equalizer voor de Qur'an-speler.",
      featureThemes: "Premium thema's",
      featureThemesDesc: "Subh, Layl, Sahara en Royal voor elke sfeer, inclusief glassmorphism panels.",
      widgetAdhkarTitle: "Dagelijkse adhkar",
      widgetAdhkarTime: "Ochtend",
      widgetAdhkarText: "“O Allah, ik vraag U om welzijn in deze wereld en het Hiernamaals.”",
      widgetHadithTitle: "Hadith van het moment",
      widgetHadithText: "“De beste onder jullie zijn degenen die het beste zijn voor hun families.”",
      widgetWeatherTitle: "Live weerbericht",
      widgetWeatherText: "Lichte bewolking boven je locatie.",
      widgetRamadanTitle: "Ramadan modus",
      widgetRamadanText: "Suhoor eindigt over 00:22:10. Iftar over 12:48:05.",
      quranModesTitle: "Qur'an speler modi",
      quranModesLead: "Drie visuele ervaringen: Focus, Surah en Audio — allemaal gekoppeld aan dynamische vertalingen.",
      modeFocusTitle: "Focus",
      modeFocusDesc: "Groot vers, vertaling en fonetiek voor diepe concentratie.",
      modeSurahTitle: "Surah",
      modeSurahDesc: "Scrolbare ayah-cards met snelle navigatie.",
      modeAudioTitle: "Audio",
      modeAudioDesc: "Minimalistische equalizer en een rustige achtergrond.",
      footerText: "Verbind wereldwijd met spirituele ritmes, waar je ook bent.",
      footerQuick: "Snelmenu",
      footerLink1: "Gebedstijden",
      footerLink2: "Qur'an speler",
      footerLink3: "Ramadan modus",
      footerLink4: "Instellingen",
      footerSupport: "Support",
      footerSupport1: "Contact",
      footerSupport2: "Privacy",
      footerSupport3: "Updates",
    },
  },
  en: {
    label: "English",
    rtl: false,
    content: {
      tagline: "Ultimate Global Edition",
      eyebrow: "Menara v7.6",
      heroTitle: "The ultimate digital minaret for every day.",
      heroLead: "A serene global experience for prayer times, Qur'an, adhkar, and community updates.",
      ctaPrimary: "Start Focus Mode",
      ctaSecondary: "Watch Demo",
      highlightPrayer: "Next prayer in 00:42:18",
      highlightHijri: "15 Sha'ban 1447 AH",
      nowPlaying: "Qur'an Player - Focus",
      verseTranslation: "Allah is the Light of the heavens and the earth.",
      chipModeFocus: "👁️ Focus",
      chipModeSurah: "📜 Surah",
      chipModeAudio: "🔊 Audio",
      agendaTitle: "Prayer times",
      agendaLocation: "Rotterdam, NL",
      gpsNote: "GPS precision active",
      featureLanguages: "5 languages + RTL",
      featureLanguagesDesc: "Switch instantly between Dutch, English, French, German, and Arabic with auto RTL.",
      featureAutomation: "Smart automation",
      featureAutomationDesc: "Ramadan, Jumu'ah, and Salah Focus modes respond to date and prayer times.",
      featureAudio: "Audio Studio",
      featureAudioDesc: "Muezzin selection, background audio, and a refined equalizer for the Qur'an player.",
      featureThemes: "Premium themes",
      featureThemesDesc: "Subh, Layl, Sahara, and Royal for every mood, with glassmorphism panels.",
      widgetAdhkarTitle: "Daily adhkar",
      widgetAdhkarTime: "Morning",
      widgetAdhkarText: "“O Allah, I ask You for well-being in this world and the Hereafter.”",
      widgetHadithTitle: "Hadith of the moment",
      widgetHadithText: "“The best among you are those who are best to their families.”",
      widgetWeatherTitle: "Live weather",
      widgetWeatherText: "Light clouds above your location.",
      widgetRamadanTitle: "Ramadan mode",
      widgetRamadanText: "Suhoor ends in 00:22:10. Iftar in 12:48:05.",
      quranModesTitle: "Qur'an player modes",
      quranModesLead: "Three visual experiences: Focus, Surah, and Audio — all tied to dynamic translations.",
      modeFocusTitle: "Focus",
      modeFocusDesc: "Large ayah, translation, and phonetics for deep concentration.",
      modeSurahTitle: "Surah",
      modeSurahDesc: "Scrollable ayah cards with quick navigation.",
      modeAudioTitle: "Audio",
      modeAudioDesc: "Minimal equalizer and a peaceful background.",
      footerText: "Connect globally to spiritual rhythms, wherever you are.",
      footerQuick: "Quick menu",
      footerLink1: "Prayer times",
      footerLink2: "Qur'an player",
      footerLink3: "Ramadan mode",
      footerLink4: "Settings",
      footerSupport: "Support",
      footerSupport1: "Contact",
      footerSupport2: "Privacy",
      footerSupport3: "Updates",
    },
  },
  fr: {
    label: "Français",
    rtl: false,
    content: {
      tagline: "Ultimate Global Edition",
      eyebrow: "Menara v7.6",
      heroTitle: "Le minaret numérique ultime pour chaque jour.",
      heroLead: "Une expérience globale sereine pour les prières, le Qur'an, l'adhkar et les mises à jour.",
      ctaPrimary: "Démarrer le mode Focus",
      ctaSecondary: "Voir la démo",
      highlightPrayer: "Prochaine prière dans 00:42:18",
      highlightHijri: "15 Sha'ban 1447 AH",
      nowPlaying: "Lecteur Qur'an - Focus",
      verseTranslation: "Allah est la Lumière des cieux et de la terre.",
      chipModeFocus: "👁️ Focus",
      chipModeSurah: "📜 Sourate",
      chipModeAudio: "🔊 Audio",
      agendaTitle: "Heures de prière",
      agendaLocation: "Rotterdam, NL",
      gpsNote: "Précision GPS active",
      featureLanguages: "5 langues + RTL",
      featureLanguagesDesc: "Passez instantanément entre le néerlandais, l'anglais, le français, l'allemand et l'arabe.",
      featureAutomation: "Automatisation intelligente",
      featureAutomationDesc: "Les modes Ramadan, Jumu'ah et Salah Focus réagissent à la date et aux prières.",
      featureAudio: "Studio audio",
      featureAudioDesc: "Sélection de muezzin, audio en arrière-plan et égaliseur élégant.",
      featureThemes: "Thèmes premium",
      featureThemesDesc: "Subh, Layl, Sahara et Royal pour chaque ambiance, avec glassmorphism.",
      widgetAdhkarTitle: "Adhkar quotidien",
      widgetAdhkarTime: "Matin",
      widgetAdhkarText: "« Ô Allah, je Te demande le bien-être ici-bas et dans l'au-delà. »",
      widgetHadithTitle: "Hadith du moment",
      widgetHadithText: "« Les meilleurs d'entre vous sont ceux qui sont les meilleurs envers leurs familles. »",
      widgetWeatherTitle: "Météo en direct",
      widgetWeatherText: "Légère couverture nuageuse au-dessus de votre position.",
      widgetRamadanTitle: "Mode Ramadan",
      widgetRamadanText: "Le suhoor se termine dans 00:22:10. Iftar dans 12:48:05.",
      quranModesTitle: "Modes du lecteur Qur'an",
      quranModesLead: "Trois expériences visuelles : Focus, Sourate et Audio — toutes liées aux traductions.",
      modeFocusTitle: "Focus",
      modeFocusDesc: "Grand verset, traduction et phonétique pour la concentration.",
      modeSurahTitle: "Sourate",
      modeSurahDesc: "Cartes de versets défilables avec navigation rapide.",
      modeAudioTitle: "Audio",
      modeAudioDesc: "Égaliseur minimaliste et fond apaisant.",
      footerText: "Connectez-vous mondialement aux rythmes spirituels, où que vous soyez.",
      footerQuick: "Menu rapide",
      footerLink1: "Heures de prière",
      footerLink2: "Lecteur Qur'an",
      footerLink3: "Mode Ramadan",
      footerLink4: "Paramètres",
      footerSupport: "Support",
      footerSupport1: "Contact",
      footerSupport2: "Confidentialité",
      footerSupport3: "Mises à jour",
    },
  },
  de: {
    label: "Deutsch",
    rtl: false,
    content: {
      tagline: "Ultimate Global Edition",
      eyebrow: "Menara v7.6",
      heroTitle: "Das ultimative digitale Minarett für jeden Tag.",
      heroLead: "Ein ruhiges, globales Erlebnis für Gebetszeiten, Qur'an, Adhkar und Community-Updates.",
      ctaPrimary: "Focus-Modus starten",
      ctaSecondary: "Demo ansehen",
      highlightPrayer: "Nächstes Gebet in 00:42:18",
      highlightHijri: "15 Sha'ban 1447 AH",
      nowPlaying: "Qur'an Player - Focus",
      verseTranslation: "Allah ist das Licht der Himmel und der Erde.",
      chipModeFocus: "👁️ Focus",
      chipModeSurah: "📜 Sure",
      chipModeAudio: "🔊 Audio",
      agendaTitle: "Gebetszeiten",
      agendaLocation: "Rotterdam, NL",
      gpsNote: "GPS-Präzision aktiv",
      featureLanguages: "5 Sprachen + RTL",
      featureLanguagesDesc: "Sofortiger Wechsel zwischen Niederländisch, Englisch, Französisch, Deutsch und Arabisch.",
      featureAutomation: "Smarte Automatisierung",
      featureAutomationDesc: "Ramadan-, Jumu'ah- und Salah Focus-Modi reagieren auf Datum und Gebetszeiten.",
      featureAudio: "Audio Studio",
      featureAudioDesc: "Muezzin-Auswahl, Hintergrundaudio und ein eleganter Equalizer.",
      featureThemes: "Premium-Themen",
      featureThemesDesc: "Subh, Layl, Sahara und Royal für jede Stimmung mit Glassmorphism.",
      widgetAdhkarTitle: "Tägliche Adhkar",
      widgetAdhkarTime: "Morgen",
      widgetAdhkarText: "„O Allah, ich bitte Dich um Wohlergehen in dieser Welt und im Jenseits.“",
      widgetHadithTitle: "Hadith des Moments",
      widgetHadithText: "„Die Besten unter euch sind jene, die am besten zu ihren Familien sind.“",
      widgetWeatherTitle: "Live-Wetter",
      widgetWeatherText: "Leichte Bewölkung über deinem Standort.",
      widgetRamadanTitle: "Ramadan-Modus",
      widgetRamadanText: "Suhoor endet in 00:22:10. Iftar in 12:48:05.",
      quranModesTitle: "Qur'an Player Modi",
      quranModesLead: "Drei visuelle Erlebnisse: Focus, Sure und Audio — alle mit dynamischen Übersetzungen.",
      modeFocusTitle: "Focus",
      modeFocusDesc: "Großer Vers, Übersetzung und Phonetik für tiefe Konzentration.",
      modeSurahTitle: "Sure",
      modeSurahDesc: "Scrollbare Ayah-Karten mit schneller Navigation.",
      modeAudioTitle: "Audio",
      modeAudioDesc: "Minimalistischer Equalizer und ruhiger Hintergrund.",
      footerText: "Verbinde dich weltweit mit spirituellen Rhythmen, wo immer du bist.",
      footerQuick: "Schnellmenü",
      footerLink1: "Gebetszeiten",
      footerLink2: "Qur'an Player",
      footerLink3: "Ramadan-Modus",
      footerLink4: "Einstellungen",
      footerSupport: "Support",
      footerSupport1: "Kontakt",
      footerSupport2: "Datenschutz",
      footerSupport3: "Updates",
    },
  },
  ar: {
    label: "العربية",
    rtl: true,
    content: {
      tagline: "النسخة العالمية الفاخرة",
      eyebrow: "منارة 7.6",
      heroTitle: "المنارة الرقمية المثالية لكل يوم.",
      heroLead: "تجربة عالمية هادئة لمواقيت الصلاة والقرآن والأذكار وتحديثات المجتمع.",
      ctaPrimary: "بدء وضع التركيز",
      ctaSecondary: "عرض التجربة",
      highlightPrayer: "الصلاة التالية بعد 00:42:18",
      highlightHijri: "15 شعبان 1447 هـ",
      nowPlaying: "مشغل القرآن - تركيز",
      verseTranslation: "الله نور السماوات والأرض.",
      chipModeFocus: "👁️ تركيز",
      chipModeSurah: "📜 سورة",
      chipModeAudio: "🔊 صوت",
      agendaTitle: "مواقيت الصلاة",
      agendaLocation: "روتردام، NL",
      gpsNote: "دقة GPS مفعّلة",
      featureLanguages: "5 لغات + RTL",
      featureLanguagesDesc: "التبديل الفوري بين الهولندية والإنجليزية والفرنسية والألمانية والعربية مع RTL.",
      featureAutomation: "أتمتة ذكية",
      featureAutomationDesc: "أوضاع رمضان والجمعة وتركيز الصلاة تتفاعل مع التاريخ ومواقيت الصلاة.",
      featureAudio: "استوديو الصوت",
      featureAudioDesc: "اختيار المؤذن وصوت الخلفية ومعادل صوت أنيق لمشغل القرآن.",
      featureThemes: "سمات مميزة",
      featureThemesDesc: "سبح، ليل، صحراء ورويال لكل مزاج مع زجاجية حديثة.",
      widgetAdhkarTitle: "أذكار يومية",
      widgetAdhkarTime: "الصباح",
      widgetAdhkarText: "«اللهم إني أسألك العافية في الدنيا والآخرة».",
      widgetHadithTitle: "حديث اللحظة",
      widgetHadithText: "«خيركم خيركم لأهله».",
      widgetWeatherTitle: "الطقس المباشر",
      widgetWeatherText: "سحب خفيفة فوق موقعك.",
      widgetRamadanTitle: "وضع رمضان",
      widgetRamadanText: "ينتهي السحور بعد 00:22:10. الإفطار بعد 12:48:05.",
      quranModesTitle: "أوضاع مشغل القرآن",
      quranModesLead: "ثلاث تجارب بصرية: التركيز، السورة، والصوت — جميعها بترجمات ديناميكية.",
      modeFocusTitle: "التركيز",
      modeFocusDesc: "آية كبيرة مع الترجمة والنطق للتركيز العميق.",
      modeSurahTitle: "السورة",
      modeSurahDesc: "بطاقات آيات قابلة للتمرير مع تنقل سريع.",
      modeAudioTitle: "الصوت",
      modeAudioDesc: "معادل صوت بسيط وخلفية هادئة.",
      footerText: "تواصل مع الإيقاعات الروحية عالميًا أينما كنت.",
      footerQuick: "القائمة السريعة",
      footerLink1: "مواقيت الصلاة",
      footerLink2: "مشغل القرآن",
      footerLink3: "وضع رمضان",
      footerLink4: "الإعدادات",
      footerSupport: "الدعم",
      footerSupport1: "اتصل بنا",
      footerSupport2: "الخصوصية",
      footerSupport3: "التحديثات",
    },
  },
};

const themes = [
  { value: "theme-subh", label: "Subh" },
  { value: "theme-layl", label: "Layl" },
  { value: "theme-sahara", label: "Sahara" },
  { value: "theme-royal", label: "Royal" },
];

const applyLanguage = (code) => {
  const selection = languages[code];
  if (!selection) {
    return;
  }

  document.documentElement.lang = code;
  document.body.classList.toggle("rtl", selection.rtl);
  document.documentElement.dir = selection.rtl ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (selection.content[key]) {
      node.textContent = selection.content[key];
    }
  });
};

const applyTheme = (theme) => {
  document.body.classList.remove(...themes.map((item) => item.value), "theme-ramadan");
  document.body.classList.add(theme);
};

const initializeSelect = (select, options, currentValue) => {
  select.innerHTML = "";
  options.forEach((option) => {
    const entry = document.createElement("option");
    entry.value = option.value;
    entry.textContent = option.label;
    if (option.value === currentValue) {
      entry.selected = true;
    }
    select.appendChild(entry);
  });
};

initializeSelect(
  languageSelect,
  Object.entries(languages).map(([value, info]) => ({ value, label: info.label })),
  "nl"
);

initializeSelect(themeSelect, themes, "theme-subh");

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeSelect.addEventListener("change", (event) => {
  applyTheme(event.target.value);
});

ramadanToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-ramadan");
});

applyLanguage("nl");
applyTheme("theme-subh");
