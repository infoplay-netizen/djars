// Language translations
const translations = {
    'uk': {
        // Navigation
        'nav_home': 'Головна',
        'nav_about': 'Про мене',
        'nav_pricing': 'Ціни',
        'nav_reviews': 'Відгуки',
        'nav_gallery': 'Галерея',
        'nav_booking': 'Бронювання',

        // Hero Section
        'hero_subtitle': 'Весілля • Корпоративи • Свята',
        'hero_title_main': 'DJ',
        'hero_title_span': 'ARS',
        'hero_description': 'Створюю незабутню атмосферу на вашому святі. Професійне звучання та світло для ідеального заходу.',
        'hero_btn_booking': 'Забронювати дату',
        'hero_btn_pricing': 'Дізнатися вартість',

        // About Section
        'about_subtitle': 'Познайомтесь ближче',
        'about_title': 'Про мене',
        'about_name': 'DJ ARS',
        'about_text1': 'Більше 10 років я створюю музичне супроводження для весіль та корпоративних заходів. Мій досвід дозволяє відчувати настрій гостей і підбирати ідеальний репертуар.',
        'about_text2': 'Кожен захід — це унікальна історія, і я допоможу зробити її незабутньою за допомогою якісного звуку, світла та правильно підібраної музики.',
        'about_stat1_number': '10+',
        'about_stat1_label': 'Років досвіду',
        'about_stat2_number': '500+',
        'about_stat2_label': 'Заходів',
        'about_stat3_number': '100%',
        'about_stat3_label': 'Задоволених клієнтів',

        // Pricing Section
        'pricing_subtitle': 'Оберіть відповідний варіант',
        'pricing_title': 'Вартість',
        'pricing_description': 'Вартість комплекту складається з почасової оплати роботи діджея + вартість оренди конкретного обладнання на заході',
        'pricing_min_title': 'Мінімальний<br>комплект',
        'pricing_min_feature1': 'Робота діджея 6 годин',
        'pricing_min_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_min_feature3': 'Пульт з обробкою голосу Allen & Heath ZED10FX',
        'pricing_min_feature4': 'DJ-контролер Pioneer DJ-SX',
        'pricing_min_feature5': 'Сучасне робоче місце DJ-фасад + стійка з підсвіткою',
        'pricing_min_feature6': '2 колонки RCF 715 (Італія) 1400Вт',
        'pricing_min_feature7': '4 простих заливних світлових прилади на 1 стійці',
        'pricing_min_feature8': '1 радіомікрофон Shure',
        'pricing_min_price': '16 000 <span>грн</span>',
        'pricing_min_btn': 'Обрати комплект',

        'pricing_std_title': 'Стандартний<br>комплект',
        'pricing_std_feature1': 'Робота діджея 6 годин',
        'pricing_std_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_std_feature3': 'Пульт з обробкою голосу Allen & Heath ZED10FX',
        'pricing_std_feature4': 'DJ-контролер Pioneer DJ-SX',
        'pricing_std_feature5': 'Сучасне робоче місце DJ-фасад + стійка з підсвіткою',
        'pricing_std_feature6': '2 звукові колонки RCF 715 (Італія) 1400Вт',
        'pricing_std_feature7': '1 Сабвуфер Mackie (США) 700ВТ',
        'pricing_std_feature8': 'Кероване світлове обладнання: 4 заливних прожектори, 2 голови типу Wash і 2 голови типу Spot керовані через спеціальні програми',
        'pricing_std_feature9': 'Дим-машина 900Вт',
        'pricing_std_feature10': '1 радіо мікрофон Shure',
        'pricing_std_price': '20 000 <span>грн</span>',
        'pricing_std_btn': 'Обрати комплект',

        'pricing_max_title': 'Максимальний<br>комплект',
        'pricing_max_feature1': 'Робота діджея 6 годин',
        'pricing_max_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_max_feature3': '2 колонки RCF 715 (Італія) 1400Вт',
        'pricing_max_feature4': 'Пульт з обробкою голосу Allen & Heath ZED10FX',
        'pricing_max_feature5': 'DJ-контролер Pioneer DJ-SX',
        'pricing_max_feature6': 'Сучасне робоче місце DJ-фасад-стійка з підсвіткою',
        'pricing_max_feature7': '1 радіо мікрофон Shure',
        'pricing_max_feature8': '2 Сабвуфери Mackie потужністю 1400 ВТ',
        'pricing_max_feature9': 'Кероване світлове обладнання: 4 заливних прожектори, 2 голови типу Wash і 2 голови типу Spot керовані через спеціальні програми',
        'pricing_max_feature10': 'Дим-машина 900Вт',
        'pricing_max_price': '24 000 <span>грн</span>',
        'pricing_max_btn': 'Обрати комплект',

        // Reviews Section
        'reviews_subtitle': 'Що говорять клієнти',
        'reviews_title': 'Відгуки',
        'review1_name': 'Вова Жерновников',
        'review1_text': 'Дякую велике Олександр, гарний звук, чудова музика. Загалом величезне дякую, все було супер 🙂',
        'review2_name': 'Софія та Сергій',
        'review2_text': 'Величезне дякую за заводну музику, задор, безпрекословне височайше якість роботи!!! Ви з @raymond_osipyan зробили наше весілля незабутнім!',
        'review3_name': 'Анна та Євген',
        'review3_text': 'Хочемо висловити подяку нашому діджею Олександру за його професіоналізм та творчий підхід до роботи, були враховані всі вікові категорії, чудово озвучена наша історія кохання, багато весільної танцювальної музики, все було на висоті, хлопці всім дуже рекомендуємо!) також неочікуваним сюрпризом був підготовлений ним промо ролик нашого весілля!!!👍',

        // Gallery Section
        'gallery_subtitle': 'Моменти з заходів',
        'gallery_title': 'Галерея',

        // Booking Section
        'booking_title': 'Хочете забронювати дату?',
        'booking_subtitle': 'заповніть форму і я з вами зв\'яжусь',
        'booking_form_name': 'Ім\'я',
        'booking_form_phone': 'Номер телефону',
        'booking_form_event': 'Захід',
        'booking_form_event_option1': 'Весілля',
        'booking_form_event_option2': 'Корпоратив',
        'booking_form_event_option3': 'День народження',
        'booking_form_event_option4': 'Вечірка',
        'booking_form_event_option5': 'Інше',
        'booking_form_date': 'Дата',
        'booking_form_btn': 'Забронювати дату',
        'booking_form_disclaimer': 'Натискаючи на кнопку ви погоджуєтесь з умовами обробки даних та політикою конфіденційності',

        // Contact Section
        'contact_subtitle': 'Залишились питання?',
        'contact_title': 'Контакти',
        'contact_heading': 'Зв\'яжіться зі мною',
        'contact_text': 'Хочете обговорити деталі заходу або задати питання? Я завжди на зв\'язку і готовий допомогти!',
        'contact_email': 'Email',
        'contact_phone': 'Телефон',
        'contact_location': 'Локація',
        'contact_location_value': 'Україна',

        // Footer
        'footer_copyright': '© 2026 DJ ARS. Всі права захищені.',

        // Thank You Page
        'thankyou_title': 'Дякую!',
        'thankyou_subtitle': 'Ваша заявка успішно відправлена',
        'thankyou_text': 'Я зв\'яжусь з вами найближчим часом для обговорення<br>деталей вашого заходу. До скорої зустрічі!',
        'thankyou_contact_viber': 'Телефон / Viber',
        'thankyou_back_btn': 'Повернутися на головну',

        // Contact Widget
        'widget_title': 'Зв\'язатися зі мною',
        'widget_viber': 'Viber',
        'widget_viber_desc': 'Написати або зателефонувати',
        'widget_telegram': 'Telegram',
        'widget_call': 'Зателефонувати'
    },

    'ru': {
        // Navigation
        'nav_home': 'Главная',
        'nav_about': 'Обо мне',
        'nav_pricing': 'Стоимость',
        'nav_reviews': 'Отзывы',
        'nav_gallery': 'Галерея',
        'nav_booking': 'Бронирование',

        // Hero Section
        'hero_subtitle': 'Свадьбы • Корпоративы • Праздники',
        'hero_title_main': 'DJ',
        'hero_title_span': 'ARS',
        'hero_description': 'Создаю незабываемую атмосферу на вашем празднике. Профессиональный звук и свет для идеального мероприятия.',
        'hero_btn_booking': 'Забронировать дату',
        'hero_btn_pricing': 'Узнать стоимость',

        // About Section
        'about_subtitle': 'Познакомьтесь ближе',
        'about_title': 'Обо мне',
        'about_name': 'DJ ARS',
        'about_text1': 'Более 10 лет я создаю музыкальное сопровождение для свадеб и корпоративных мероприятий. Мой опыт позволяет чувствовать настроение гостей и подбирать идеальный репертуар.',
        'about_text2': 'Каждое мероприятие — это уникальная история, и я помогу сделать её незабываемой с помощью качественного звука, света и правильно подобранной музыки.',
        'about_stat1_number': '10+',
        'about_stat1_label': 'Лет опыта',
        'about_stat2_number': '500+',
        'about_stat2_label': 'Мероприятий',
        'about_stat3_number': '100%',
        'about_stat3_label': 'Довольных клиентов',

        // Pricing Section
        'pricing_subtitle': 'Выберите подходящий вариант',
        'pricing_title': 'Стоимость',
        'pricing_description': 'Стоимость комплекта складывается из почасовой оплаты работы диджея + стоимость аренды конкретного оборудования на мероприятии',
        'pricing_min_title': 'Минимальный<br>комплект',
        'pricing_min_feature1': 'Работа диджея 6 часов',
        'pricing_min_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_min_feature3': 'Пульт с обработкой голоса Allen & Heath ZED10FX',
        'pricing_min_feature4': 'DJ-контроллер Pioneer DJ-SX',
        'pricing_min_feature5': 'Современное рабочее место DJ-фасад + стойка с подсветкой',
        'pricing_min_feature6': '2 колонки RCF 715 (Италия) 1400Вт',
        'pricing_min_feature7': '4 простых заливных световых прибора на 1 стойке',
        'pricing_min_feature8': '1 радиомикрофон Shure',
        'pricing_min_price': '16 000 <span>грн</span>',
        'pricing_min_btn': 'Выбрать комплект',

        'pricing_std_title': 'Стандартный<br>комплект',
        'pricing_std_feature1': 'Работа диджея 6 часов',
        'pricing_std_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_std_feature3': 'Пульт с обработкой голоса Allen & Heath ZED10FX',
        'pricing_std_feature4': 'DJ-контроллер Pioneer DJ-SX',
        'pricing_std_feature5': 'Современное рабочее место DJ-фасад + стойка с подсветкой',
        'pricing_std_feature6': '2 звуковые колонки RCF 715 (Италия) 1400Вт',
        'pricing_std_feature7': '1 Сабвуфер Mackie (США) 700ВТ',
        'pricing_std_feature8': 'Управляемое световое оборудование: 4 заливных прожектора, 2 головы типа Wash и 2 головы типа Spot управляемые через специальные программы',
        'pricing_std_feature9': 'Дым-машина 900Вт',
        'pricing_std_feature10': '1 радио микрофон Shure',
        'pricing_std_price': '20 000 <span>грн</span>',
        'pricing_std_btn': 'Выбрать комплект',

        'pricing_max_title': 'Максимальный<br>комплект',
        'pricing_max_feature1': 'Работа диджея 6 часов',
        'pricing_max_feature2': 'Ноутбук Apple Macbook Pro',
        'pricing_max_feature3': '2 колонки RCF 715 (Италия) 1400Вт',
        'pricing_max_feature4': 'Пульт с обработкой голоса Allen & Heath ZED10FX',
        'pricing_max_feature5': 'DJ-контроллер Pioneer DJ-SX',
        'pricing_max_feature6': 'Современное рабочее место DJ-фасад-стойка с подсветкой',
        'pricing_max_feature7': '1 радио микрофон Shure',
        'pricing_max_feature8': '2 Сабвуфера Mackie мощностью 1400 ВТ',
        'pricing_max_feature9': 'Управляемое световое оборудование: 4 заливных прожектора, 2 головы типа Wash и 2 головы типа Spot управляемые через специальные программы',
        'pricing_max_feature10': 'Дым-машина 900Вт',
        'pricing_max_price': '24 000 <span>грн</span>',
        'pricing_max_btn': 'Выбрать комплект',

        // Reviews Section
        'reviews_subtitle': 'Что говорят клиенты',
        'reviews_title': 'Отзывы',
        'review1_name': 'Вова Жерновников',
        'review1_text': 'Спасибо большое Александр, хороший звук, отличная музыка. В общем огромное спасибо, все было супер 🙂',
        'review2_name': 'Софья и Сергей',
        'review2_text': 'Огромное спасибо за заводную музыку, задор, беспрекословное высочайшее качество работы!!! Вы с @raymond_osipyan сделали наш вечер незабываемым!',
        'review3_name': 'Анна и Евгений',
        'review3_text': 'Хотим выразить благодарность нашему диджею Александру за его профессионализм и творческий подход к работе, были учтены все возрастные категории, чудесно озвучена наша история любви, много свадебной танцевальной музыки, всё было на высоте, ребята всем очень рекомендуем!) также неожиданным сюрпризом был подготовленный им промо ролик нашей свадьбы!!!👍',

        // Gallery Section
        'gallery_subtitle': 'Моменты с мероприятий',
        'gallery_title': 'Галерея',

        // Booking Section
        'booking_title': 'Хотите забронировать дату?',
        'booking_subtitle': 'заполните форму и я с вами свяжусь',
        'booking_form_name': 'Имя',
        'booking_form_phone': 'Номер телефона',
        'booking_form_event': 'Мероприятие',
        'booking_form_event_option1': 'Свадьба',
        'booking_form_event_option2': 'Корпоратив',
        'booking_form_event_option3': 'День рождения',
        'booking_form_event_option4': 'Вечеринка',
        'booking_form_event_option5': 'Другое',
        'booking_form_date': 'Дата',
        'booking_form_btn': 'Забронировать дату',
        'booking_form_disclaimer': 'Нажимая на кнопку вы соглашаетесь с условиями обработки данных и политикой конфиденциальности',

        // Contact Section
        'contact_subtitle': 'Остались вопросы?',
        'contact_title': 'Контакты',
        'contact_heading': 'Свяжитесь со мной',
        'contact_text': 'Хотите обсудить детали мероприятия или задать вопросы? Я всегда на связи и готов помочь!',
        'contact_email': 'Email',
        'contact_phone': 'Телефон',
        'contact_location': 'Локация',
        'contact_location_value': 'Украина',

        // Footer
        'footer_copyright': '© 2026 DJ ARS. Все права защищены.',

        // Thank You Page
        'thankyou_title': 'Спасибо!',
        'thankyou_subtitle': 'Ваша заявка успешно отправлена',
        'thankyou_text': 'Я свяжусь с вами в ближайшее время для обсуждения<br>деталей вашего мероприятия. До скорой встречи!',
        'thankyou_contact_viber': 'Телефон / Viber',
        'thankyou_back_btn': 'Вернуться на главную',

        // Contact Widget
        'widget_title': 'Связаться со мной',
        'widget_viber': 'Viber',
        'widget_viber_desc': 'Написать или позвонить',
        'widget_telegram': 'Telegram',
        'widget_call': 'Позвонить'
    },

    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About Me',
        'nav_pricing': 'Pricing',
        'nav_reviews': 'Reviews',
        'nav_gallery': 'Gallery',
        'nav_booking': 'Booking',

        // Hero Section
        'hero_subtitle': 'Weddings • Corporate Events • Parties',
        'hero_title_main': 'DJ',
        'hero_title_span': 'ARS',
        'hero_description': 'I create an unforgettable atmosphere at your event. Professional sound and lighting for the perfect occasion.',
        'hero_btn_booking': 'Book a Date',
        'hero_btn_pricing': 'Check Prices',

        // About Section
        'about_subtitle': 'Get to Know Me',
        'about_title': 'About Me',
        'about_name': 'DJ ARS',
        'about_text1': 'For over 10 years I have been creating musical accompaniment for weddings and corporate events. My experience allows me to feel the guests\' mood and select the perfect repertoire.',
        'about_text2': 'Each event is a unique story, and I will help make it unforgettable with quality sound, lighting, and carefully selected music.',
        'about_stat1_number': '10+',
        'about_stat1_label': 'Years Experience',
        'about_stat2_number': '500+',
        'about_stat2_label': 'Events',
        'about_stat3_number': '100%',
        'about_stat3_label': 'Happy Clients',

        // Pricing Section
        'pricing_subtitle': 'Choose Your Package',
        'pricing_title': 'Pricing',
        'pricing_description': 'The package cost consists of hourly payment for the DJ\'s work + rental cost of specific equipment at the event',
        'pricing_min_title': 'Minimum<br>Package',
        'pricing_min_feature1': 'DJ work for 6 hours',
        'pricing_min_feature2': 'Apple Macbook Pro laptop',
        'pricing_min_feature3': 'Console with voice processing Allen & Heath ZED10FX',
        'pricing_min_feature4': 'DJ controller Pioneer DJ-SX',
        'pricing_min_feature5': 'Modern DJ facade workspace + illuminated stand',
        'pricing_min_feature6': '2 RCF 715 speakers (Italy) 1400W',
        'pricing_min_feature7': '4 simple floodlight devices on 1 stand',
        'pricing_min_feature8': '1 Shure radio microphone',
        'pricing_min_price': '16 000 <span>UAH</span>',
        'pricing_min_btn': 'Choose Package',

        'pricing_std_title': 'Standard<br>Package',
        'pricing_std_feature1': 'DJ work for 6 hours',
        'pricing_std_feature2': 'Apple Macbook Pro laptop',
        'pricing_std_feature3': 'Console with voice processing Allen & Heath ZED10FX',
        'pricing_std_feature4': 'DJ controller Pioneer DJ-SX',
        'pricing_std_feature5': 'Modern DJ facade workspace + illuminated stand',
        'pricing_std_feature6': '2 RCF 715 sound speakers (Italy) 1400W',
        'pricing_std_feature7': '1 Mackie subwoofer (USA) 700W',
        'pricing_std_feature8': 'Controlled lighting equipment: 4 floodlights, 2 Wash-type heads and 2 Spot-type heads controlled through special programs',
        'pricing_std_feature9': 'Fog machine 900W',
        'pricing_std_feature10': '1 Shure radio microphone',
        'pricing_std_price': '20 000 <span>UAH</span>',
        'pricing_std_btn': 'Choose Package',

        'pricing_max_title': 'Maximum<br>Package',
        'pricing_max_feature1': 'DJ work for 6 hours',
        'pricing_max_feature2': 'Apple Macbook Pro laptop',
        'pricing_max_feature3': '2 RCF 715 speakers (Italy) 1400W',
        'pricing_max_feature4': 'Console with voice processing Allen & Heath ZED10FX',
        'pricing_max_feature5': 'DJ controller Pioneer DJ-SX',
        'pricing_max_feature6': 'Modern DJ facade stand with illumination',
        'pricing_max_feature7': '1 Shure radio microphone',
        'pricing_max_feature8': '2 Mackie subwoofers with 1400W power',
        'pricing_max_feature9': 'Controlled lighting equipment: 4 floodlights, 2 Wash-type heads and 2 Spot-type heads controlled through special programs',
        'pricing_max_feature10': 'Fog machine 900W',
        'pricing_max_price': '24 000 <span>UAH</span>',
        'pricing_max_btn': 'Choose Package',

        // Reviews Section
        'reviews_subtitle': 'What Clients Say',
        'reviews_title': 'Reviews',
        'review1_name': 'Vova Zhernovnikov',
        'review1_text': 'Thank you very much Alexander, good sound, great music. Overall huge thanks, everything was super 🙂',
        'review2_name': 'Sophia and Sergey',
        'review2_text': 'Huge thanks for the upbeat music, fun spirit, unquestionably highest quality work!!! You and @raymond_osipyan made our wedding unforgettable!',
        'review3_name': 'Anna and Evgeny',
        'review3_text': 'We want to express our gratitude to our DJ Alexander for his professionalism and creative approach to work, all age categories were taken into account, our love story was wonderfully voiced, lots of wedding dance music, everything was at a high level, guys we highly recommend!) Also an unexpected surprise was the promo video of our wedding prepared by him!!!👍',

        // Gallery Section
        'gallery_subtitle': 'Event Moments',
        'gallery_title': 'Gallery',

        // Booking Section
        'booking_title': 'Want to Book a Date?',
        'booking_subtitle': 'fill out the form and I will contact you',
        'booking_form_name': 'Name',
        'booking_form_phone': 'Phone Number',
        'booking_form_event': 'Event',
        'booking_form_event_option1': 'Wedding',
        'booking_form_event_option2': 'Corporate',
        'booking_form_event_option3': 'Birthday',
        'booking_form_event_option4': 'Party',
        'booking_form_event_option5': 'Other',
        'booking_form_date': 'Date',
        'booking_form_btn': 'Book Date',
        'booking_form_disclaimer': 'By clicking the button you agree to the data processing terms and privacy policy',

        // Contact Section
        'contact_subtitle': 'Questions Left?',
        'contact_title': 'Contacts',
        'contact_heading': 'Contact Me',
        'contact_text': 'Want to discuss event details or ask questions? I\'m always available and ready to help!',
        'contact_email': 'Email',
        'contact_phone': 'Phone',
        'contact_location': 'Location',
        'contact_location_value': 'Ukraine',

        // Footer
        'footer_copyright': '© 2026 DJ ARS. All rights reserved.',

        // Thank You Page
        'thankyou_title': 'Thank You!',
        'thankyou_subtitle': 'Your Request Has Been Sent',
        'thankyou_text': 'I will contact you shortly to discuss<br>the details of your event. See you soon!',
        'thankyou_contact_viber': 'Phone / Viber',
        'thankyou_back_btn': 'Back to Home',

        // Contact Widget
        'widget_title': 'Contact Me',
        'widget_viber': 'Viber',
        'widget_viber_desc': 'Message or call',
        'widget_telegram': 'Telegram',
        'widget_call': 'Call'
    }
};

// Current language
let currentLang = localStorage.getItem('preferredLanguage') || 'uk';

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update all translated elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // For form placeholders and other attributes
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            } else if (element.tagName === 'OPTION') {
                // For select options
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update language selector
    document.querySelectorAll('.lang-selector').forEach(selector => {
        selector.value = lang;
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language
document.addEventListener('DOMContentLoaded', function () {
    setLanguage(currentLang);

    // Set up language selectors
    document.querySelectorAll('.lang-selector').forEach(selector => {
        selector.addEventListener('change', function () {
            setLanguage(this.value);
        });
    });
});