const PRICE_PER_100G = 5.30;
const PIZZERIA_WHATSAPP = "40747216161";

const pizzas = [
    {
        id: 1,
        name: "Pizza de post",
        badge: "Post / Vegetarian",
        ingredients: "Sos de roșii, ciuperci, porumb, legume la cuptor și măsline.",
        videoPoster: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80",
        videoSrc: "videos/pizza_de_post_asamblare.mp4"
    },
    {
        id: 2,
        name: "Pizza de post cu ton",
        badge: "Post cu Pește",
        ingredients: "Sos de roșii, roșii, porumb, ton, măsline.",
        videoPoster: "https://images.unsplash.com/photo-1564936281291-294551497d81?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        id: 3,
        name: "Pizza Margherita cu șuncă",
        badge: "Clasic & Delicios",
        ingredients: "Sos de roșii, mozzarella și șuncă.",
        videoPoster: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
        id: 4,
        name: "Pizza Diavola",
        badge: "Spicy / Picant",
        ingredients: "Sos de roșii, mozzarella și salam picant.",
        videoPoster: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    },
    {
        id: 5,
        name: "Pizza Capricciosa",
        badge: "Favorit Tradițional",
        ingredients: "Sos de roșii, mozzarella, ciuperci, șuncă, salam și măsline.",
        videoPoster: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        id: 6,
        name: "Pizza 4 Formaggi",
        badge: "Brânzeturi Alese",
        ingredients: "Mozzarella, gorgonzola, brânză afumată și parmezan.",
        videoPoster: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
        id: 7,
        name: "Pizza cu ton",
        badge: "Mediteranean",
        ingredients: "Sos de roșii, mozzarella, roșii și ton.",
        videoPoster: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4"
    },
    {
        id: 8,
        name: "Pizza Gondola",
        badge: "Specialitatea Casei",
        ingredients: "Sos de roșii, mozzarella, ciuperci, șuncă, salam, roșii, gogoșari și măsline.",
        videoPoster: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
        id: 9,
        name: "Pizza ripiena cu șuncă",
        badge: "Specialitate Umplută",
        ingredients: "Mozzarella și șuncă.",
        videoPoster: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    },
    {
        id: 10,
        name: "Pizza Regina",
        badge: "Tradițional Aromat",
        ingredients: "Sos de roșii, mozzarella, ceafă afumată, roșii, porumb și măsline.",
        videoPoster: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
    },
    {
        id: 11,
        name: "Pizza cu cabanos",
        badge: "Gust Rustic & Bogat",
        ingredients: "Sos de roșii, mozzarella, porumb, ardei, cabanos, măsline.",
        videoPoster: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        id: 12,
        name: "Pizza cu piept de pui",
        badge: "Gust Fin & Nutritiv",
        ingredients: "Sos de roșii, mozzarella, roșii, ardei și piept de pui.",
        videoPoster: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    }
];

let cart = {};
let selectedGrams = {};
pizzas.forEach(p => selectedGrams[p.id] = 200);

function renderProducts() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    pizzas.forEach((pizza, index) => {
        const isEven = index % 2 === 1;
        
        const card = document.createElement("div");
        card.id = `product-${pizza.id}`;
        card.className = "product-card bg-gondola-cardBg border-2 border-gondola-cardBorder rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl";
        
        const videoBlock = `
            <div class="w-full min-w-0 lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}">
                <div class="video-box relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/80 aspect-video md:aspect-[16/10] group shadow-xl w-full">
                    <video 
                        class="w-full h-full object-cover" 
                        poster="${pizza.videoPoster}" 
                        playsinline 
                        muted 
                        loop 
                        autoplay 
                        preload="metadata">
                        <source src="${pizza.videoSrc}" type="video/mp4">
                    </video>
                    <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-gondola-primary border border-gondola-cardBorder shadow">
                        <i class="fa-solid fa-play text-[10px] mr-1"></i> Asamblare video
                    </div>
                </div>
            </div>
        `;

        const detailsBlock = `
            <div class="w-full min-w-0 lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'} mt-6 lg:mt-0">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                        <span class="text-xs font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border border-rose-200 bg-white text-gondola-primary shadow-sm">
                            ${pizza.badge}
                        </span>
                        <span class="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white text-gondola-muted border border-gondola-cardBorder shadow-sm">#${pizza.id}</span>
                    </div>
                    
                    <h3 class="text-2xl md:text-3xl lg:text-3xl font-black text-gondola-charcoal mb-2 font-display">${pizza.name}</h3>
                    <p class="text-gondola-muted text-sm md:text-base leading-snug mb-5 font-medium">
                        ${pizza.ingredients}
                    </p>
                </div>

                <div class="border-t border-gondola-cardBorder/80 pt-4 space-y-3.5">
                    <div class="flex items-baseline justify-between">
                        <div class="text-xs text-gondola-muted font-medium">Preț: <span class="text-gondola-charcoal font-bold">${PRICE_PER_100G.toFixed(2)} LEI / 100g</span></div>
                        <div class="text-right">
                            <span class="text-[11px] text-gondola-muted block">Subtotal:</span>
                            <span id="subtotal-${pizza.id}" class="text-xl md:text-2xl font-black text-gondola-primary font-display">
                                ${(selectedGrams[pizza.id] * PRICE_PER_100G / 100).toFixed(2)} LEI
                            </span>
                        </div>
                    </div>

                    <div>
                        <div class="text-xs font-bold text-gondola-charcoal mb-1.5 flex justify-between items-center">
                            <span>Alege porția:</span>
                            <span id="grams-label-${pizza.id}" class="text-gondola-primary font-black text-sm">${selectedGrams[pizza.id]} g</span>
                        </div>

                        <!-- Butoane presetate compacte -->
                        <div class="grid grid-cols-4 gap-1.5 mb-2.5">
                            <button type="button" onclick="setGrams(${pizza.id}, 100)" id="btn-g-${pizza.id}-100" class="gram-btn py-2 text-xs font-bold rounded-xl border border-gondola-cardBorder bg-white text-gondola-muted transition shadow-sm">100g</button>
                            <button type="button" onclick="setGrams(${pizza.id}, 200)" id="btn-g-${pizza.id}-200" class="gram-btn active py-2 text-xs font-bold rounded-xl border border-gondola-primary bg-gondola-primary text-white transition shadow-sm">200g</button>
                            <button type="button" onclick="setGrams(${pizza.id}, 300)" id="btn-g-${pizza.id}-300" class="gram-btn py-2 text-xs font-bold rounded-xl border border-gondola-cardBorder bg-white text-gondola-muted transition shadow-sm">300g</button>
                            <button type="button" onclick="setGrams(${pizza.id}, 500)" id="btn-g-${pizza.id}-500" class="gram-btn py-2 text-xs font-bold rounded-xl border border-gondola-cardBorder bg-white text-gondola-muted transition shadow-sm">500g</button>
                        </div>

                        <!-- Selector pas cu pas compact -->
                        <div class="flex items-center justify-between bg-white border border-gondola-cardBorder rounded-xl px-3 py-2 shadow-sm">
                            <span class="text-[11px] text-gondola-muted font-semibold flex items-center gap-1">
                                <i class="fa-solid fa-scale-balanced text-gondola-accent"></i> Pas 100g:
                            </span>
                            <div class="flex items-center gap-1.5">
                                <button type="button" onclick="stepGrams(${pizza.id}, -100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg hover:bg-rose-50 border border-gondola-cardBorder text-gondola-charcoal font-black flex items-center justify-center text-xs transition shadow-sm" title="Scade 100g">-</button>
                                <span id="counter-grams-${pizza.id}" class="text-xs font-mono font-bold text-gondola-charcoal w-12 text-center">${selectedGrams[pizza.id]}g</span>
                                <button type="button" onclick="stepGrams(${pizza.id}, 100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg hover:bg-rose-50 border border-gondola-cardBorder text-gondola-primary font-black flex items-center justify-center text-xs transition shadow-sm" title="Adaugă 100g">+</button>
                            </div>
                        </div>
                    </div>

                    <!-- Buton Adauga in Tava -->
                    <button type="button" onclick="addToCart(${pizza.id})" class="w-full bg-gondola-charcoal hover:bg-gondola-primary text-white font-extrabold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 group shadow-md uppercase font-display tracking-wide text-xs sm:text-sm">
                        <i class="fa-solid fa-cart-plus text-amber-400 group-hover:text-white transition"></i>
                        <span>Adaugă în tavă</span>
                    </button>
                </div>
            </div>
        `;

        card.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                ${videoBlock}
                ${detailsBlock}
            </div>
        `;

        container.appendChild(card);
    });
}

window.setGrams = function(pizzaId, grams) {
    if (grams < 100) grams = 100;
    selectedGrams[pizzaId] = grams;
    
    const label = document.getElementById(`grams-label-${pizzaId}`);
    const counter = document.getElementById(`counter-grams-${pizzaId}`);
    const subtotal = document.getElementById(`subtotal-${pizzaId}`);
    
    if (label) label.innerText = `${grams} g`;
    if (counter) counter.innerText = `${grams}g`;
    if (subtotal) {
        const total = (grams * PRICE_PER_100G / 100).toFixed(2);
        subtotal.innerText = `${total} LEI`;
    }

    const presets = [100, 200, 300, 500];
    presets.forEach(p => {
        const btn = document.getElementById(`btn-g-${pizzaId}-${p}`);
        if (btn) {
            if (p === grams) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        }
    });
};

window.stepGrams = function(pizzaId, step) {
    const current = selectedGrams[pizzaId] || 200;
    const next = current + step;
    if (next >= 100) {
        setGrams(pizzaId, next);
    }
};

window.addToCart = function(pizzaId) {
    const grams = selectedGrams[pizzaId] || 200;
    cart[pizzaId] = (cart[pizzaId] || 0) + grams;
    updateCartUI();

    const btn = event.currentTarget;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-check text-emerald-400"></i> Adăugat în tavă (+${grams}g)`;
    btn.classList.add('bg-emerald-700');
    setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.remove('bg-emerald-700');
    }, 1100);
};

const resetConfirmModal = document.getElementById("reset-confirm-modal");

window.openResetModal = function() {
    if (Object.keys(cart).length === 0) return;
    resetConfirmModal.classList.remove("hidden");
    resetConfirmModal.classList.add("flex");
};

window.closeResetModal = function() {
    resetConfirmModal.classList.add("hidden");
    resetConfirmModal.classList.remove("flex");
};

window.confirmResetCart = function() {
    cart = {};
    updateCartUI();
    renderModalCart();
    closeResetModal();
    closeModal();
};

window.modifyCartItem = function(pizzaId, deltaGrams) {
    if (!cart[pizzaId]) return;
    cart[pizzaId] += deltaGrams;
    if (cart[pizzaId] <= 0) {
        delete cart[pizzaId];
    }
    updateCartUI();
    renderModalCart();
};

function updateCartUI() {
    const cartBar = document.getElementById("cart-bar");
    const badge = document.getElementById("cart-badge");
    const totalPriceEl = document.getElementById("cart-total-price");
    const totalGramsEl = document.getElementById("cart-total-grams");

    let totalGrams = 0;
    let distinctCount = 0;

    for (let id in cart) {
        totalGrams += cart[id];
        distinctCount++;
    }

    const totalPrice = (totalGrams * PRICE_PER_100G / 100).toFixed(2);

    badge.innerText = distinctCount;
    totalGramsEl.innerText = totalGrams;
    totalPriceEl.innerText = totalPrice;

    if (distinctCount > 0) {
        cartBar.classList.remove("translate-y-full");
    } else {
        cartBar.classList.add("translate-y-full");
        closeModal();
    }
}

const checkoutModal = document.getElementById("checkout-modal");
const openModalBtn = document.getElementById("open-order-modal");
const closeModalBtn = document.getElementById("close-modal");
const orderForm = document.getElementById("whatsapp-order-form");

openModalBtn.addEventListener("click", () => {
    renderModalCart();
    checkoutModal.classList.remove("hidden");
    checkoutModal.classList.add("flex");
});

function closeModal() {
    checkoutModal.classList.add("hidden");
    checkoutModal.classList.remove("flex");
}

closeModalBtn.addEventListener("click", closeModal);
checkoutModal.addEventListener("click", (e) => {
    if (e.target === checkoutModal) closeModal();
});

const typeDelivery = document.getElementById("type-delivery");
const typePickup = document.getElementById("type-pickup");
const addressField = document.getElementById("address-field");

typeDelivery.addEventListener("change", () => {
    addressField.style.display = "block";
    document.getElementById("cust-address").required = true;
});

typePickup.addEventListener("change", () => {
    addressField.style.display = "none";
    document.getElementById("cust-address").required = false;
});

function renderModalCart() {
    const container = document.getElementById("modal-cart-items");
    const totalEl = document.getElementById("modal-total-price");
    const minOrderNotice = document.getElementById("min-order-notice");
    container.innerHTML = "";

    let totalGrams = 0;

    for (let id in cart) {
        const pizza = pizzas.find(p => p.id == id);
        const grams = cart[id];
        const cost = (grams * PRICE_PER_100G / 100).toFixed(2);
        totalGrams += grams;

        const row = document.createElement("div");
        row.className = "flex justify-between items-center bg-white p-2.5 rounded-xl border border-gondola-cardBorder shadow-sm";
        row.innerHTML = `
            <div>
                <span class="font-bold text-gondola-charcoal text-xs block">${pizza.name}</span>
                <span class="text-[11px] text-gondola-muted">${grams}g • ${cost} LEI</span>
            </div>
            <div class="flex items-center gap-1.5">
                <button type="button" onclick="modifyCartItem(${id}, -100)" class="w-6 h-6 rounded bg-gondola-cardBg hover:bg-rose-100 border border-gondola-cardBorder text-gondola-charcoal text-xs flex items-center justify-center font-bold" title="Scade 100g">-</button>
                <span class="text-xs font-mono font-bold w-12 text-center text-gondola-primary">${grams}g</span>
                <button type="button" onclick="modifyCartItem(${id}, 100)" class="w-6 h-6 rounded bg-gondola-cardBg hover:bg-rose-100 border border-gondola-cardBorder text-gondola-primary text-xs flex items-center justify-center font-bold" title="Adaugă 100g">+</button>
            </div>
        `;
        container.appendChild(row);
    }

    const grandTotal = (totalGrams * PRICE_PER_100G / 100).toFixed(2);
    totalEl.innerText = grandTotal;

    if (grandTotal < 64.00) {
        minOrderNotice.classList.remove("hidden");
    } else {
        minOrderNotice.classList.add("hidden");
    }
}

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("cust-name").value.trim();
    const type = document.querySelector('input[name="order_type"]:checked').value;
    const address = document.getElementById("cust-address").value.trim();
    const notes = document.getElementById("cust-notes").value.trim();

    if (Object.keys(cart).length === 0) {
        alert("Te rugăm să alegi cel puțin un sortiment de pizza în tavă.");
        return;
    }

    let itemsText = "";
    let totalGrams = 0;

    for (let id in cart) {
        const pizza = pizzas.find(p => p.id == id);
        const grams = cart[id];
        const price = (grams * PRICE_PER_100G / 100).toFixed(2);
        totalGrams += grams;
        itemsText += `• ${grams}g x ${pizza.name} (${price} LEI)\n`;
    }

    const totalPrice = (totalGrams * PRICE_PER_100G / 100).toFixed(2);

    let message = `🍕 *COMANDĂ NOUĂ - PIZZERIA GONDOLA*\n`;
    message += `📍 *B-dul Decebal nr. 35 (Piatra Neamț)*\n`;
    message += `--------------------------------------\n`;
    message += itemsText;
    message += `--------------------------------------\n`;
    message += `⚖️ *Gramaj total:* ${totalGrams} g\n`;
    message += `💰 *Total de plată:* ${totalPrice} LEI\n\n`;
    message += `👤 *Client:* ${name}\n`;
    message += `🛵 *Metodă:* ${type}\n`;
    if (type === "Livrare la domiciliu" && address) {
        message += `🏠 *Adresă livrare:* ${address}\n`;
    }
    if (notes) {
        message += `📝 *Mențiuni:* ${notes}\n`;
    }

    const whatsappUrl = `https://wa.me/${PIZZERIA_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});
