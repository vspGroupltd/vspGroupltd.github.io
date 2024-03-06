function updateContent() {
    const elementsWithTranslationKey = document.querySelectorAll('[data-translation-key]');

    elementsWithTranslationKey.forEach(element => {
        const translationKey = element.getAttribute('data-translation-key');
        const translatedText = i18next.t(translationKey);


        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = translatedText;
        } else {
            element.textContent = translatedText;
        }
    });
}

i18next
    .init({
        lng: 'bg',
        fallbackLng: 'bg',
        resources: {
            bg: {
                translation: {
                    "topic-top": "Добре дошли",
                    "topic-mid": "в нашият цех за",
                    "topic-bot": "производство на салфетки",
                    "production": "| Производство на салфетки |",
                    "production1": "| Продажба на хартиени чашки |",
                    "h2title": "Нашето производство:",
                    "infoText": "Здравейте, Ние произвеждаме салфетки за : ресторанти, кафенета, заведения за бързо хранене, хотели и вашите специални празници. Предлагаме салфетки с лого и без:",
                    "infoText1": "o Лукс: 1/4, 1/8",
                    "infoText2": "o Размер: 33 х 33см – еднопластови",
                    "infoText3": "o Печатаме от 1 до 4 цвята",
                    "infoText4": "Можем да отпечатаме вашето лого. Пакетираме ги по 250, 500, 1000 или по желание на клиента. Качеството е приоритет за нас! Не се колебайте да ни пишете за въпроси или да ви изпратим мостри. Търсим дистрибутори, складове на едро и търговци в цялата страна. Ние ще изготвим индивидуална оферта, съобразена с Вашето желание.",
                    "contact": "Контакти:",
                    "tel": "Тел. за връзка:",
                }
            },
            en: {
                translation: {
                    "topic-top": "Welcome",
                    "topic-mid": "to our napkin",
                    "topic-bot": "production workshop",
                    "production": "| Production of napkins |",
                    "production1": "| Sell of paper cups |",
                    "h2title": "Our production:",
                    "infoText": "Hello, We produce napkins for : restaurants, cafes, fast food places, hotels and your special holidays. We offer napkins with logo and without:",
                    "infoText1": "o Deluxe: 1/4, 1/8 folded",
                    "infoText2": "o Size: 33 x 33cm - single layer",
                    "infoText3": "o We print from 1 to 4 colors",
                    "infoText4": "We can print your logo. We pack them in packs of 250, 500, 1000 or according to the customer's request. Quality is a priority for us! Feel free to email us with questions or to send you samples. We are looking for distributors, wholesale warehouses and dealers nationwide. We will prepare an individual offer tailored to your wishes.",
                    "contact": "Contacts:",
                    "tel": "Telephones:",
                }
            }
        }

    }, function (err, t) {
        if (!err) {
            updateContent();
        }
    });


const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener("change", (event) => {
    console.log(event.target.value);
    i18next
        .changeLanguage(event.target.value)
        .then(updateContent)
});


