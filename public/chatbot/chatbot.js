const whatsappNumber = "6285122602002";

const products = {
    id: [
        { name: "Mango Chili Praline", desc: "Mango Chili Praline\nMilk Chocolate 45%\n\nMango coulis manis bertemu ganache mango chili yang hangat, dibalut milk chocolate lembut. Rasa tropis dengan sengatan pedas yang playful!" },
        { name: "Passion Fruit Jasmine Tea Praline", desc: "Passion Fruit Jasmine Tea Praline\nDark Chocolate 66%\n\nPassion fruit coulis segar dipadu ganache teh jasmine yang floral elegan, dalam dark chocolate 66%. Asam, wangi, dan refined!" },
        { name: "Wild Forest Honey Bali Salt Praline", desc: "Wild Forest Honey Bali Salt Praline\nWhite Chocolate 33%\n\nCreamed wild forest honey dan salted caramel dalam white chocolate lembut. Manis alami bertemu mineral garam Bali. Luxurious!" },
        { name: "King of Durian Praline", desc: "King of Durian Praline\nDark Chocolate 66%\n\nDurian ganache creamy dalam dark chocolate 66%. Bold, kompleks, dan unapologetically distinctive. Wajib coba buat pecinta durian!" },
        { name: "Calamansi Zest Ganache Praline", desc: "Calamansi Zest Ganache Praline\nDark Chocolate 66%\n\nCalamansi marmalade dan ganache calamansi dalam dark chocolate. Citrus brightness yang clean, sharp, dan super refreshing!" },
        { name: "Jamu Turmeric Ginger Praline", desc: "Jamu Turmeric Ginger Praline\nMilk Chocolate 45%\n\nTurmeric ganache earthy dan ginger ganache hangat dalam milk chocolate. Terinspirasi jamu Indonesia, comforting dan contemporary!" },
        { name: "Rendang Praline", desc: "Rendang Praline\nMilk Chocolate 45%\n\nRendang spice ganache yang kompleks dalam milk chocolate manis. Savory, aromatic, layered. Indonesia's iconic dish reimagined!" },
        { name: "Sumatra Coffee Praline", desc: "Sumatra Coffee Praline\nDark Chocolate 66%\n\nCoffee ganache intense dan milk ganache smooth dalam dark chocolate 66%. Deep roasted notes dari kopi Sumatra asli!" },
        { name: "Jackfruit Cocopandan Praline", desc: "Jackfruit Cocopandan Praline\nWhite Chocolate 33%\n\nCandied jackfruit dan pandan coconut ganache dalam white chocolate. Lush, nostalgic, tropical sweetness yang lembut!" },
        { name: "Choco Mint Praline", desc: "Choco Mint Praline\nDark Chocolate 66%\n\nDark ganache layered dengan mint ganache cooling dalam dark chocolate 66%. Bold, clean, refreshingly precise!" },
        { name: "Strawberry Vanilla Praline", desc: "Strawberry Vanilla Praline\nWhite Chocolate 33%\n\nStrawberry coulis fresh dan strawberry vanilla ganache dalam white chocolate. Light, romantic, smooth dan lingering!" },
        { name: "Roselle Praline", desc: "Roselle Praline\nDark Chocolate 66%\n\nRoselle coulis tart dan roselle ganache floral dalam dark chocolate 66%. Expressive acidity meets cacao richness!" },
        { name: "Goat Milk Caramel Praline", desc: "Goat Milk Caramel Praline\nDark Chocolate 66%\n\nCajeta (slow caramelized New Zealand goat milk) dalam dark chocolate. Balance, depth, dan subtle tang yang unique!" },
        { name: "Rujak Praline", desc: "Rujak Praline\nDark Chocolate 66%\n\nRujak spice ganache, pineapple coulis, candied mango pâte de fruit dalam dark chocolate. Sweet, sour, spicy dalam elegant tension!" }
    ],
    en: [
        { name: "Mango Chili Praline", desc: "Mango Chili Praline\nMilk Chocolate 45%\n\nSweet mango coulis meets warm mango chili ganache in smooth milk chocolate. Tropical flavor with a playful spicy kick!" },
        { name: "Passion Fruit Jasmine Tea Praline", desc: "Passion Fruit Jasmine Tea Praline\nDark Chocolate 66%\n\nFresh passion fruit coulis paired with elegant jasmine tea ganache in 66% dark chocolate. Tangy, aromatic, and refined!" },
        { name: "Wild Forest Honey Bali Salt Praline", desc: "Wild Forest Honey Bali Salt Praline\nWhite Chocolate 33%\n\nCreamed wild forest honey and salted caramel in silky white chocolate. Natural sweetness meets Bali sea salt. Luxurious!" },
        { name: "King of Durian Praline", desc: "King of Durian Praline\nDark Chocolate 66%\n\nCreamy durian ganache in 66% dark chocolate. Bold, complex, and unapologetically distinctive. A must for durian lovers!" },
        { name: "Calamansi Zest Ganache Praline", desc: "Calamansi Zest Ganache Praline\nDark Chocolate 66%\n\nCalamansi marmalade and ganache in dark chocolate. Clean citrus brightness that's sharp and super refreshing!" },
        { name: "Jamu Turmeric Ginger Praline", desc: "Jamu Turmeric Ginger Praline\nMilk Chocolate 45%\n\nEarthy turmeric ganache and warming ginger ganache in milk chocolate. Inspired by Indonesian jamu, comforting yet contemporary!" },
        { name: "Rendang Praline", desc: "Rendang Praline\nMilk Chocolate 45%\n\nComplex rendang spice ganache in sweet milk chocolate. Savory, aromatic, layered. Indonesia's iconic dish reimagined!" },
        { name: "Sumatra Coffee Praline", desc: "Sumatra Coffee Praline\nDark Chocolate 66%\n\nIntense coffee ganache and smooth milk ganache in 66% dark chocolate. Deep roasted notes from authentic Sumatran coffee!" },
        { name: "Jackfruit Cocopandan Praline", desc: "Jackfruit Cocopandan Praline\nWhite Chocolate 33%\n\nCandied jackfruit and pandan coconut ganache in white chocolate. Lush, nostalgic tropical sweetness!" },
        { name: "Choco Mint Praline", desc: "Choco Mint Praline\nDark Chocolate 66%\n\nLayered dark ganache with cooling mint ganache in 66% dark chocolate. Bold, clean, refreshingly precise!" },
        { name: "Strawberry Vanilla Praline", desc: "Strawberry Vanilla Praline\nWhite Chocolate 33%\n\nFresh strawberry coulis and strawberry vanilla ganache in white chocolate. Light, romantic, smooth with lingering sweetness!" },
        { name: "Roselle Praline", desc: "Roselle Praline\nDark Chocolate 66%\n\nTart roselle coulis and floral roselle ganache in 66% dark chocolate. Expressive acidity meets cacao richness!" },
        { name: "Goat Milk Caramel Praline", desc: "Goat Milk Caramel Praline\nDark Chocolate 66%\n\nCajeta (slow caramelized New Zealand goat milk) in dark chocolate. Balance, depth, and unique subtle tang!" },
        { name: "Rujak Praline", desc: "Rujak Praline\nDark Chocolate 66%\n\nRujak spice ganache, pineapple coulis, candied mango pâte de fruit in dark chocolate. Sweet, sour, spicy in elegant tension!" }
    ]
};

let currentLanguage = null;

const chatButton = document.getElementById('chatButton');
const chatContainer = document.getElementById('chatContainer');
const closeBtn = document.getElementById('closeBtn');
const chatMessages = document.getElementById('chatMessages');
const quickReplies = document.getElementById('quickReplies');

chatButton.addEventListener('click', () => {
    chatContainer.classList.add('active');
    if (!currentLanguage) showLanguageSelection();
});

closeBtn.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

function showLanguageSelection() {
    addMessage('bot', 'Welcome to Samara Chocolates! <br>Please select your preferred language:<br><br>Selamat datang di Samara Chocolates! <br>Silakan pilih bahasa Anda:');

    const languageDiv = document.createElement('div');
    languageDiv.className = 'language-selection';
    languageDiv.innerHTML = `
                <button class="language-btn" onclick="selectLanguage('en')">🇬🇧 English</button>
                <button class="language-btn" onclick="selectLanguage('id')">🇮🇩 Bahasa Indonesia</button>
            `;
    chatMessages.appendChild(languageDiv);
    scrollToBottom();
}

window.selectLanguage = function (lang) {
    currentLanguage = lang;
    document.querySelector('.language-selection').style.display = 'none';

    const greetings = {
        en: "Great! How may I assist you today? 😊",
        id: "Baik! Ada yang bisa saya bantu hari ini? 😊"
    };

    setTimeout(() => {
        addMessage('bot', greetings[lang]);
        showQuickReplies();
    }, 400);
};

function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
}

function showProductOptions() {
    quickReplies.innerHTML = '';
    const productList = products[currentLanguage];

    const msg = currentLanguage === 'en'
        ? "Here are our 14 artisan flavors — click any to see details:"
        : "Berikut 14 varian rasa artisan kami — klik salah satu untuk detail:";

    addMessage('bot', msg);

    productList.forEach(product => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = product.name;
        btn.onclick = () => {
            addMessage('user', product.name);
            quickReplies.innerHTML = '';
            const typing = showTypingIndicator();
            setTimeout(() => {
                typing.remove();
                addMessage('bot', product.desc);
                showQuickReplies();
            }, 500);
        };
        quickReplies.appendChild(btn);
    });
    scrollToBottom();
}

function showHumanTakeover() {
    const prev = document.querySelector('.human-takeover');
    if (prev) prev.remove();

    const takeoverDiv = document.createElement('div');
    takeoverDiv.className = 'human-takeover';
    takeoverDiv.innerHTML = `
                <strong>${currentLanguage === 'en' ? 'Need personalized help?' : 'Butuh bantuan personal?'}</strong><br/>
                <button onclick="openWhatsApp()">${currentLanguage === 'en' ? 'Chat on WhatsApp 💬' : 'Chat via WhatsApp 💬'}</button>
                                    <button class='back-btn' onclick="showLanguageSelection()">${currentLanguage === 'en' ? 'Back' : 'Kembali'}</button>
            `;
    chatMessages.appendChild(takeoverDiv);
    scrollToBottom();
}

window.openWhatsApp = function () {
    const text = currentLanguage === 'en'
        ? "Hello Samara Chocolates, I need assistance with..."
        : "Halo Samara Chocolates, saya butuh bantuan mengenai...";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');

    const confirmMsg = currentLanguage === 'en'
        ? "I've opened WhatsApp for you! Our team will reply shortly 💙"
        : "Saya sudah membukakan WhatsApp! Tim kami akan segera membalas 💙";

    addMessage('bot', confirmMsg);
    document.querySelector('.human-takeover').style.display = 'none';
    showQuickReplies();
};

function showQuickReplies() {
    const replies = {
        en: [
            { text: "View Products", action: "products" },
            { text: "Check Prices", action: "price" },
            { text: "Gift Packages", action: "gift" },
            { text: "Contact Us", action: "contact" }
        ],
        id: [
            { text: "Lihat Produk", action: "products" },
            { text: "Cek Harga", action: "price" },
            { text: "Paket Hadiah", action: "gift" },
            { text: "Hubungi Kami", action: "contact" }
        ]
    };

    quickReplies.innerHTML = '';
    replies[currentLanguage].forEach(reply => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = reply.text;
        btn.onclick = () => {
            addMessage('user', reply.text);
            quickReplies.innerHTML = '';

            const typing = showTypingIndicator();
            setTimeout(() => {
                typing.remove();

                if (reply.action === 'products') {
                    showProductOptions();
                } else if (reply.action === 'price') {
                    const msg = currentLanguage === 'en'
                        ? "For complete pricing info, please chat with our admin on WhatsApp! 💬"
                        : "Untuk info harga lengkap, yuk chat admin kami di WhatsApp! 💬";
                    addMessage('bot', msg);
                    setTimeout(() => showHumanTakeover(), 300);
                } else if (reply.action === 'gift') {
                    const msg = currentLanguage === 'en'
                        ? "Perfect! Let's chat on WhatsApp to create your perfect gift package 🎁"
                        : "Sempurna! Yuk chat di WhatsApp untuk buat paket hadiah yang tepat 🎁";
                    addMessage('bot', msg);
                    setTimeout(() => showHumanTakeover(), 300);
                } else if (reply.action === 'contact') {
                    const msg = currentLanguage === 'en'
                        ? "I'll connect you with our team right away! 💬"
                        : "Saya akan menghubungkan Anda dengan tim kami! 💬";
                    addMessage('bot', msg);
                    setTimeout(() => showHumanTakeover(), 300);
                }
            }, 500);
        };
        quickReplies.appendChild(btn);
    });
    scrollToBottom();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}