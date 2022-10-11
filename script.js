window.addEventListener('DOMContentLoaded', () => {localization(strings['en'])});

const dropdown = document.querySelector('.dropdown'),
      dropdownSelect = document.querySelector('.dropdown__select'),
      dropdownImage = document.querySelector('.dropdown-image'),
      langSwitcher = document.querySelector('.lang-switcher'),
      langUa = document.querySelector('#ua'),
      langEn = document.querySelector('#en'),
      langSwitcherText = document.querySelector('.js-dropdown-text');

const stringsPlace = document.querySelectorAll('[data-key]');

const strings = {
    ua: {
        generatorTitle: "Згенеруйте свій пароль",
        generatorText: "Ваш пароль:",
        generatorBtn: "генерувати",
        generatorDescr: "Натисніть на кнопку, щоб згенерувати пароль"
    },
    en: {
        generatorTitle: "Generate Your Password",
        generatorText: "Your password is:",
        generatorBtn: "generate",
        generatorDescr: "Click the button to generate password"
    }
}

dropdown.addEventListener('click', (e) => {
    langSwitcher.classList.toggle('active');
    dropdownImage.classList.toggle('rotate');
    e.stopPropagation();
});

function localization(lang) {
    for (let elem of Object.keys(lang)) {
        stringsPlace.forEach(item => {
            item.textContent = lang[item.getAttribute('data-key')];
        });
    }
}

langSwitcher.addEventListener('click', (e) => {
    if (e.target === langUa) {
        langSwitcherText.textContent = langUa.textContent;
        dropdownSelect.classList.add('selected');
        localization(strings['ua']);

    } else if (e.target === langEn) {
        langSwitcherText.textContent = langEn.textContent;
        dropdownSelect.classList.remove('selected');
        localization(strings['en']);
    } else {
        console.log('else');
    }
});

for (let string of stringsPlace) {
    if (strings.ua.hasOwnProperty(string.getAttribute('data-key'))) {
    }
}

// Password generator

