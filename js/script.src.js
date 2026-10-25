const PRICE_PER_100G = 5.70;
const WHOLE_PIZZA_REFERENCE_GRAMS = 1200;
const WHOLE_PIZZA_DISPLAY_PRICE = 68.40;
const MIN_GRAMS_PER_ITEM = 300;
const BOX_PRICE = 1.00;
const PIZZERIA_WHATSAPP = "40747216161";
const PIATRA_FREE_DELIVERY_MIN = 68.40; // 1 pizza întreagă
const OUTSIDE_FREE_DELIVERY_MIN = 136.80; // 2 pizza întregi

const SAUCE_PRICES = {
    "Sos roșii dulce": 2.00,
    "Sos roșii picant": 2.00,
    "Sos maioneză cu usturoi": 1.00
};

const DRINKS = [
    { id: "apa-minerala", name: "Apă minerală 0.5L", price: 5.50, img: "images/bauturi/apa-minerala.webp", badge: "0.5L · Sticlă" },
    { id: "apa-plata", name: "Apă plată 0.5L", price: 5.50, img: "images/bauturi/apa-plata.webp", badge: "0.5L · Sticlă" },
    { id: "pepsi", name: "Pepsi 0.5L", price: 8.50, img: "images/bauturi/pepsi.webp", badge: "0.5L · PET" },
    { id: "mirinda", name: "Mirinda 0.5L", price: 8.50, img: "images/bauturi/mirinda.webp", badge: "0.5L · PET" },
    { id: "7up", name: "7 UP 0.5L", price: 8.50, img: "images/bauturi/7up.webp", badge: "0.5L · PET" },
    { id: "mountain-dew", name: "Mountain Dew 0.5L", price: 8.50, img: "images/bauturi/mountain-dew.webp", badge: "0.5L · PET" },
    { id: "lipton", name: "Lipton Ice Tea 0.5L", price: 8.50, img: "images/bauturi/lipton.webp", badge: "0.5L · PET" },
    { id: "prigat", name: "Prigat 0.5L", price: 8.50, img: "images/bauturi/prigat.webp", badge: "0.5L · PET" },
    { id: "bere-ciuc", name: "Bere Ciuc 0.5L", price: 8.50, img: "images/bauturi/bere-ciuc.webp", badge: "0.5L · Sticlă" },
    { id: "birra-moretti", name: "Birra Moretti 0.5L", price: 8.50, img: "images/bauturi/birra-moretti.webp", badge: "0.5L · Sticlă" },
    { id: "bere-heineken", name: "Bere Heineken 0.4L", price: 8.50, img: "images/bauturi/heineken.webp", badge: "0.4L · Sticlă" },
    { id: "ciuc-radler", name: "Ciuc Radler 0.5L", price: 8.50, img: "images/bauturi/ciuc-radler.webp", badge: "0.5L · Sticlă" },
    { id: "birra-moretti-doza", name: "Birra Moretti Doză 0.5L", price: 8.50, img: "images/bauturi/birra-moretti-doza.webp", badge: "0.5L · Doză" }
];

const pizzas = [
    {
        id: 1,
        name: "Pizza de post",
        badge: "Post / Vegetarian",
        category: "post",
        ingredients: "Sos de roșii, ardei, dovlecel, ciuperci, porumb, roșii și măsline.",
        allergens: "Gluten",
        nutritionAnchor: "pizza-de-post",
        videoPoster: "images/posters/pizza_post.webp",
        videoSrc: "videos/pizza_post.mp4"
    },
    {
        id: 2,
        name: "Pizza de post cu ton",
        badge: "Post cu Pește",
        category: "post",
        ingredients: "Sos de roșii, roșii proaspete, porumb, ton și măsline.",
        allergens: "Gluten, Pește",
        nutritionAnchor: "pizza-de-post-cu-ton",
        videoPoster: "images/posters/pizza_post_ton.webp",
        videoSrc: "videos/pizza_post_ton.mp4"
    },
    {
        id: 3,
        name: "Pizza Margherita cu șuncă",
        badge: "Clasic & Delicios",
        category: "traditional",
        ingredients: "Sos de roșii, mozzarella și șuncă Praga.",
        allergens: "Gluten, Lapte",
        nutritionAnchor: "pizza-margherita-cu-sunca",
        videoPoster: "images/posters/pizza_margherita_cu_sunca.webp",
        videoSrc: "videos/pizza_margherita_cu_sunca.mp4"
    },
    {
        id: 4,
        name: "Pizza Diavola",
        badge: "Spicy / Picant",
        category: "spicy",
        ingredients: "Sos de roșii, mozzarella și salam Chorizo picant.",
        allergens: "Gluten, Lapte (urme: Soia)",
        nutritionAnchor: "pizza-diavola",
        videoPoster: "images/posters/pizza_diavola.webp",
        videoSrc: "videos/pizza_diavola.mp4"
    },
    {
        id: 5,
        name: "Pizza Capricciosa",
        badge: "Favorit Tradițional",
        category: "traditional",
        ingredients: "Sos de roșii, mozzarella, ciuperci, șuncă, salam și măsline.",
        allergens: "Gluten, Lapte (urme: Țelină, Muștar)",
        nutritionAnchor: "pizza-capriciosa",
        videoPoster: "images/posters/pizza_capricciosa.webp",
        videoSrc: "videos/pizza_capricciosa.mp4"
    },
    {
        id: 6,
        name: "Pizza 4 Formaggi",
        badge: "Brânzeturi Alese",
        category: "special",
        ingredients: "Mozzarella, gorgonzola, cașcaval afumat și parmezan.",
        allergens: "Gluten, Ouă, Lapte",
        nutritionAnchor: "pizza-4-formagi",
        videoPoster: "images/posters/pizza_4_formaggi.webp",
        videoSrc: "videos/pizza_4_formaggi.mp4"
    },
    {
        id: 7,
        name: "Pizza cu ton",
        badge: "Mediteranean",
        category: "special",
        ingredients: "Sos de roșii, mozzarella, roșii și ton.",
        allergens: "Gluten, Pește, Lapte",
        nutritionAnchor: "pizza-cu-ton",
        videoPoster: "images/posters/pizza_cu_ton.webp",
        videoSrc: "videos/pizza_cu_ton.mp4"
    },
    {
        id: 8,
        name: "Pizza Gondola",
        badge: "Specialitatea Casei",
        category: "traditional",
        ingredients: "Sos de roșii, mozzarella, salam de vară, șuncă Praga, ardei, roșii și măsline.",
        allergens: "Gluten, Soia, Lapte (urme: Țelină, Muștar)",
        nutritionAnchor: "pizza-gondola",
        videoPoster: "images/posters/pizza_gondola.webp",
        videoSrc: "videos/pizza_gondola.mp4"
    },
    {
        id: 9,
        name: "Pizza ripiena cu șuncă",
        badge: "Specialitate Umplută",
        category: "special",
        ingredients: "Mozzarella și șuncă.",
        allergens: "Gluten, Lapte",
        nutritionAnchor: "pizza-ripiena",
        videoPoster: "images/posters/pizza_ripiena_cu_sunca.webp",
        videoSrc: "videos/pizza_ripiena_cu_sunca.mp4"
    },
    {
        id: 10,
        name: "Pizza Regina",
        badge: "Tradițional Aromat",
        category: "traditional",
        ingredients: "Sos de roșii, mozzarella, ceafă afumată, roșii, porumb și măsline.",
        allergens: "Gluten, Soia, Lapte",
        nutritionAnchor: "pizza-regina",
        videoPoster: "images/posters/pizza_regina.webp",
        videoSrc: "videos/pizza_regina.mp4"
    },
    {
        id: 11,
        name: "Pizza cu cabanos",
        badge: "Gust Rustic & Bogat",
        category: "traditional",
        ingredients: "Sos de roșii, mozzarella, cârnați cabanos, porumb, ardei și măsline.",
        allergens: "Gluten, Soia, Lapte",
        nutritionAnchor: "pizza-cabanos",
        videoPoster: "images/posters/pizza_cabanos.webp",
        videoSrc: "videos/pizza_cabanos.mp4"
    },
    {
        id: 12,
        name: "Pizza cu piept de pui",
        badge: "Gust Fin & Nutritiv",
        category: "special",
        ingredients: "Sos de roșii, mozzarella, roșii, ardei și piept de pui.",
        allergens: "Gluten, Lapte",
        nutritionAnchor: "pizza-de-pui",
        videoPoster: "images/posters/pizza_piept_pui.webp",
        videoSrc: "videos/pizza_piept_pui.mp4"
    }
];

const deliveryZones = [
    "Piatra Neamț", "Dumbrava Roșie", "Văleni", "Săvinești – Pasarelă", "Bisericani",
    "Gârcina – Școală", "Girov – Kober", "Bistrița", "Alexandru cel Bun", "Speranța"
];

const STORAGE_CART_KEY = "gondola_cart_v1";
const STORAGE_SAUCES_KEY = "gondola_sauces_v1";
const STORAGE_DRINKS_KEY = "gondola_drinks_v1";
const STORAGE_CUSTOMER_KEY = "gondola_customer_v1";

function triggerHaptic(duration = 40) {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try { navigator.vibrate(duration); } catch (_) {}
    }
}

function saveCustomerData() {
    try {
        const name = document.getElementById("cust-name")?.value.trim() || "";
        const address = document.getElementById("cust-address")?.value.trim() || "";
        const zone = document.getElementById("delivery-zone")?.value || "Piatra Neamț";
        const orderType = document.querySelector('input[name="order_type"]:checked')?.value || "Livrare la domiciliu";
        localStorage.setItem(STORAGE_CUSTOMER_KEY, JSON.stringify({ name, address, zone, orderType }));
    } catch (_) {}
}

function loadCustomerData() {
    try {
        const saved = localStorage.getItem(STORAGE_CUSTOMER_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            if (data && typeof data === "object") {
                if (data.name && document.getElementById("cust-name")) {
                    document.getElementById("cust-name").value = data.name;
                }
                if (data.address && document.getElementById("cust-address")) {
                    document.getElementById("cust-address").value = data.address;
                }
                if (data.zone && document.getElementById("delivery-zone")) {
                    document.getElementById("delivery-zone").value = data.zone;
                }
                if (data.orderType) {
                    const radio = document.querySelector(`input[name="order_type"][value="${CSS.escape(data.orderType)}"]`);
                    if (radio) {
                        radio.checked = true;
                        syncDeliveryFields();
                    }
                }
            }
        }
    } catch (_) {}
}

let cart = {};
let selectedGrams = {};
pizzas.forEach(p => selectedGrams[p.id] = 300);

const sauceQuantities = {
    "Sos roșii dulce": 0,
    "Sos roșii picant": 0,
    "Sos maioneză cu usturoi": 0
};

const drinkQuantities = {};
DRINKS.forEach(d => drinkQuantities[d.id] = 0);

window.bypassClosedWarning = false;

function saveCartToStorage() {
    try {
        localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
        localStorage.setItem(STORAGE_SAUCES_KEY, JSON.stringify(sauceQuantities));
        localStorage.setItem(STORAGE_DRINKS_KEY, JSON.stringify(drinkQuantities));
    } catch (_) {}
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem(STORAGE_CART_KEY);
        if (savedCart) {
            const parsed = JSON.parse(savedCart);
            if (parsed && typeof parsed === "object") {
                cart = {};
                Object.entries(parsed).forEach(([k, grams]) => {
                    if (typeof grams === "number" && grams > 0) {
                        cart[k] = Math.max(MIN_GRAMS_PER_ITEM, grams);
                    }
                });
            }
        }
        const savedSauces = localStorage.getItem(STORAGE_SAUCES_KEY);
        if (savedSauces) {
            const parsedSauces = JSON.parse(savedSauces);
            if (parsedSauces && typeof parsedSauces === "object") {
                Object.keys(sauceQuantities).forEach(k => {
                    if (typeof parsedSauces[k] === "number") sauceQuantities[k] = parsedSauces[k];
                });
            }
        }
        const savedDrinks = localStorage.getItem(STORAGE_DRINKS_KEY);
        if (savedDrinks) {
            const parsedDrinks = JSON.parse(savedDrinks);
            if (parsedDrinks && typeof parsedDrinks === "object") {
                Object.keys(drinkQuantities).forEach(k => {
                    if (typeof parsedDrinks[k] === "number") drinkQuantities[k] = parsedDrinks[k];
                });
            }
        }
    } catch (_) {}
}

function money(value) { return Number(value).toFixed(2); }

function displaySelection(grams) {
    return grams === WHOLE_PIZZA_REFERENCE_GRAMS 
        ? "Pizza întreagă" 
        : `${grams >= 1000 ? (grams/1000).toLocaleString('ro-RO', {maximumFractionDigits: 1}) + ' kg' : grams + ' g'}`;
}

function estimatedPizzaPrice(grams) {
    if (grams === WHOLE_PIZZA_REFERENCE_GRAMS) return WHOLE_PIZZA_DISPLAY_PRICE;
    if (grams > WHOLE_PIZZA_REFERENCE_GRAMS && grams % WHOLE_PIZZA_REFERENCE_GRAMS === 0) {
        return (grams / WHOLE_PIZZA_REFERENCE_GRAMS) * WHOLE_PIZZA_DISPLAY_PRICE;
    }
    return grams * PRICE_PER_100G / 100;
}

function cartPizzaTotal() {
    return Object.values(cart).reduce((sum, grams) => sum + estimatedPizzaPrice(grams), 0);
}

function cartTotalGrams() {
    return Object.values(cart).reduce((sum, grams) => sum + grams, 0);
}

function cartBoxCount() {
    let boxes = 0;
    for (const id in cart) {
        const grams = cart[id];
        if (grams > 0) {
            boxes += Math.max(1, Math.round(grams / WHOLE_PIZZA_REFERENCE_GRAMS));
        }
    }
    return boxes;
}

function cartBoxTotal() {
    return cartBoxCount() * BOX_PRICE;
}

function sauceSlug(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function selectedSauces() {
    return Object.entries(sauceQuantities)
        .filter(([, quantity]) => quantity > 0)
        .map(([name, quantity]) => {
            const unitPrice = SAUCE_PRICES[name] ?? 2.00;
            return { name, quantity, unitPrice, subtotal: quantity * unitPrice };
        });
}

function saucesTotal() {
    return selectedSauces().reduce((sum, sauce) => sum + sauce.subtotal, 0);
}

function selectedDrinks() {
    return Object.entries(drinkQuantities)
        .filter(([, quantity]) => quantity > 0)
        .map(([id, quantity]) => {
            const drink = DRINKS.find(d => d.id === id);
            const unitPrice = drink ? drink.price : 8.50;
            return {
                id,
                name: drink ? drink.name : id,
                quantity,
                unitPrice,
                subtotal: quantity * unitPrice
            };
        });
}

function drinksTotal() {
    return selectedDrinks().reduce((sum, d) => sum + d.subtotal, 0);
}

function estimatedGrandTotal() {
    return cartPizzaTotal() + saucesTotal() + drinksTotal() + cartBoxTotal();
}

function renderSauceQuantities() {
    Object.entries(sauceQuantities).forEach(([name, quantity]) => {
        const qty = document.getElementById(`sauce-qty-${sauceSlug(name)}`);
        if (qty) qty.textContent = quantity;
        const row = document.querySelector(`.sauce-row[data-sauce="${CSS.escape(name)}"]`);
        if (row) row.classList.toggle("sauce-selected", quantity > 0);
    });
}

window.stepSauce = function(name, step) {
    triggerHaptic(30);
    if (!(name in sauceQuantities)) return;
    sauceQuantities[name] = Math.max(0, sauceQuantities[name] + step);
    saveCartToStorage();
    renderSauceQuantities();
    renderModalCart();
};

function renderDrinkQuantities() {
    Object.entries(drinkQuantities).forEach(([id, quantity]) => {
        const qty = document.getElementById(`drink-qty-${id}`);
        if (qty) qty.textContent = quantity;
        const row = document.querySelector(`.drink-card[data-drink="${CSS.escape(id)}"]`);
        if (row) row.classList.toggle("drink-selected", quantity > 0);
    });
}

window.stepDrink = function(id, step) {
    triggerHaptic(30);
    if (!(id in drinkQuantities)) return;
    drinkQuantities[id] = Math.max(0, drinkQuantities[id] + step);
    saveCartToStorage();
    renderDrinkQuantities();
    renderModalCart();
};

function getPizzeriaScheduleStatus() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Bucharest",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        weekday: "short"
    });
    const parts = formatter.formatToParts(now);
    let hour = 12, minute = 0, weekday = "Mon";
    parts.forEach(p => {
        if (p.type === "hour") hour = parseInt(p.value, 10);
        if (p.type === "minute") minute = parseInt(p.value, 10);
        if (p.type === "weekday") weekday = p.value;
    });

    const isSunday = (weekday === "Sun");
    const openHour = isSunday ? 10 : 9;
    const lastOrderMinuteTotal = (19 * 60) + 30; // 19:30
    const closeMinuteTotal = 20 * 60; // 20:00
    const currentMinuteTotal = (hour * 60) + minute;
    const openMinuteTotal = openHour * 60;

    const isOpen = (currentMinuteTotal >= openMinuteTotal && currentMinuteTotal < lastOrderMinuteTotal);
    const isClosingSoon = (isOpen && currentMinuteTotal >= (19 * 60));

    let statusText = "";
    let badgeClass = "";
    let nextOpenText = "";

    if (isOpen) {
        if (isClosingSoon) {
            statusText = "Ultima comandă până la 19:30!";
            badgeClass = "bg-amber-50 text-amber-900 border-amber-300";
        } else {
            statusText = "Deschis acum • Comenzi până la 19:30";
            badgeClass = "bg-emerald-50 text-emerald-800 border-emerald-200";
        }
    } else {
        badgeClass = "bg-rose-50 text-rose-800 border-rose-200";
        if (currentMinuteTotal < openMinuteTotal) {
            // Este dimineață înainte de ora deschiderii de azi
            const todayOpenHourStr = isSunday ? "10:00" : "09:00";
            nextOpenText = `astăzi la ${todayOpenHourStr}`;
            statusText = `Închis acum • Deschidem azi la ${todayOpenHourStr}`;
        } else {
            // Este după ultima comandă (19:30) / închidere (20:00) pe ziua în curs
            if (isSunday) {
                nextOpenText = "mâine (Luni) la 09:00";
            } else if (weekday === "Sat") {
                nextOpenText = "mâine (Duminică) la 10:00";
            } else {
                nextOpenText = "mâine la 09:00";
            }

            if (currentMinuteTotal < closeMinuteTotal) {
                statusText = `Comenzi oprite azi • Deschidem ${nextOpenText}`;
            } else {
                statusText = `Închis acum • Deschidem ${nextOpenText}`;
            }
        }
    }

    return { isOpen, isClosingSoon, statusText, badgeClass, nextOpenText };
}

function updateLiveScheduleBadge() {
    const sched = getPizzeriaScheduleStatus();
    const badge = document.getElementById("live-schedule-badge");
    if (badge) {
        const dotColor = sched.isOpen 
            ? (sched.isClosingSoon ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500 animate-pulse') 
            : 'bg-rose-500';
        badge.innerHTML = `<span class="w-2 h-2 rounded-full shrink-0 ${dotColor}"></span><span>${sched.statusText}</span>`;
        badge.className = `inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold border transition ${sched.badgeClass}`;
    }
}

window.openClosedWarningModal = function() {
    const modal = document.getElementById("closed-warning-modal");
    if (modal) {
        const sched = getPizzeriaScheduleStatus();
        const nextBadge = document.getElementById("closed-modal-next-open-badge");
        if (nextBadge && sched.nextOpenText) {
            nextBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300"><svg class="icon text-amber-700" aria-hidden="true"><use href="#icon-clock"></use></svg> Deschidem ${sched.nextOpenText}</span>`;
        }
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
};

window.closeClosedWarningModal = function() {
    const modal = document.getElementById("closed-warning-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
};


window.openOrderSuccessModal = function() {
    const modal = document.getElementById("order-success-modal");
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
};

window.closeOrderSuccessModal = function() {
    const modal = document.getElementById("order-success-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
};

window.confirmPreOrder = function() {
    window.bypassClosedWarning = true;
    closeClosedWarningModal();
    const form = document.getElementById("whatsapp-order-form");
    if (form) {
        if (typeof form.requestSubmit === 'function') {
            form.requestSubmit();
        } else {
            form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
    }
};


window.currentMenuFilter = "all";
window.filterMenu = function(category) {
    window.currentMenuFilter = category;
    triggerHaptic(35);
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    document.querySelectorAll(".menu-filter-btn").forEach(btn => {
        const isActive = btn.dataset.filter === category;
        if (isActive) {
            btn.className = "menu-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 bg-gondola-primary text-white border-gondola-primary shadow-sm shadow-red-500/20";
        } else {
            btn.className = "menu-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 bg-white text-gondola-charcoal border-gondola-cardBorder hover:border-gondola-primary hover:text-gondola-primary shadow-sm";
        }
    });
};

function renderProducts() {
    const container = document.getElementById("products-container");
    if (!container) return;
    container.innerHTML = "";
    pizzas.forEach((pizza, index) => {
        const isEven = index % 2 === 1;
        const grams = selectedGrams[pizza.id];
        const whole = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
        const card = document.createElement("div");
        card.id = `product-${pizza.id}`;
        card.dataset.category = pizza.category || "all";
        card.className = "product-card bg-gondola-cardBg border-2 border-gondola-cardBorder rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl";
        card.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div class="w-full min-w-0 lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}">
                    <div class="video-box relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/80 aspect-video md:aspect-[16/10] group shadow-xl w-full cursor-pointer">
                        <video class="menu-video w-full h-full object-cover" poster="${pizza.videoPoster}" playsinline muted preload="none" disablepictureinpicture controlslist="nodownload nofullscreen noremoteplayback" data-src="${pizza.videoSrc}" aria-label="Video ${pizza.name}"></video>
                        <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-gondola-primary border border-gondola-cardBorder shadow pointer-events-none"><svg class="icon text-[10px] mr-1" aria-hidden="true"><use href="#icon-play"></use></svg> ${pizza.name}</div>
                        <button type="button" class="video-replay-btn" aria-label="Reia video ${pizza.name}" title="Reia video">
                            <svg class="icon text-xl ml-0.5" aria-hidden="true"><use href="#icon-play"></use></svg>
                        </button>
                    </div>
                </div>
                <div class="w-full min-w-0 lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'} mt-6 lg:mt-0">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-2"><span class="text-xs font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border border-rose-200 bg-white text-gondola-primary shadow-sm">${pizza.badge}</span><span class="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white text-gondola-muted border border-gondola-cardBorder shadow-sm">#${pizza.id}</span></div>
                        <h3 class="text-2xl md:text-3xl font-black text-gondola-charcoal mb-2 font-display">${pizza.name}</h3>
                        <p class="text-gondola-muted text-sm md:text-base leading-snug mb-3 font-medium">${pizza.ingredients}</p>
                        ${pizza.allergens ? `
                        <div class="mb-4 flex flex-wrap items-center gap-1.5 text-xs">
                            <span class="inline-flex items-center gap-1 font-semibold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200">
                                <svg class="icon text-[10px] text-gondola-primary" aria-hidden="true"><use href="#icon-circle-exclamation"></use></svg> Alergeni: ${pizza.allergens}
                            </span>
                            ${pizza.nutritionAnchor ? `
                            <a href="alergeni-si-nutritie.html#${pizza.nutritionAnchor}" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-bold text-gondola-primary hover:underline ml-1">
                                <svg class="icon text-[10px]" aria-hidden="true"><use href="#icon-table-list"></use></svg> Fișă nutrițională OPANPC
                            </a>` : ''}
                        </div>` : ''}
                    </div>
                    <div class="border-t border-gondola-cardBorder/80 pt-4 space-y-3.5">
                        <div class="flex items-baseline justify-between gap-4">
                            <div class="text-xs text-gondola-muted font-medium">Preț: <span class="text-gondola-charcoal font-bold">${PRICE_PER_100G.toFixed(2)} LEI / 100g</span></div>
                            <div class="text-right"><span class="text-[11px] text-gondola-muted block">${whole ? 'Estimativ:' : 'Subtotal:'}</span><span id="subtotal-${pizza.id}" class="text-xl md:text-2xl font-black text-gondola-primary font-display">${whole ? '≈ 68.40 LEI*' : money(estimatedPizzaPrice(grams)) + ' LEI'}</span></div>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-gondola-charcoal mb-1.5 flex justify-between items-center"><span>Alege porția:</span><span id="grams-label-${pizza.id}" class="text-gondola-primary font-black text-sm">${displaySelection(grams)}</span></div>
                            <div class="grid grid-cols-4 gap-1.5 mb-2.5">
                                <button type="button" onclick="setGrams(${pizza.id},300)" id="btn-g-${pizza.id}-300" class="gram-btn active py-2 text-xs font-bold rounded-xl border transition shadow-sm">300g</button>
                                <button type="button" onclick="setGrams(${pizza.id},600)" id="btn-g-${pizza.id}-600" class="gram-btn py-2 text-xs font-bold rounded-xl border transition shadow-sm">600g</button>
                                <button type="button" onclick="setGrams(${pizza.id},1000)" id="btn-g-${pizza.id}-1000" class="gram-btn py-2 text-xs font-bold rounded-xl border transition shadow-sm">1kg</button>
                                <button type="button" onclick="setGrams(${pizza.id},1200)" id="btn-g-${pizza.id}-1200" class="gram-btn py-2 text-[11px] font-bold rounded-xl border transition shadow-sm">Întreagă</button>
                            </div>
                            <div class="flex items-center justify-between bg-white border border-gondola-cardBorder rounded-xl px-3 py-2 shadow-sm">
                                <span class="text-[11px] text-gondola-muted font-semibold flex items-center gap-1"><svg class="icon text-gondola-accent" aria-hidden="true"><use href="#icon-scale-balanced"></use></svg> Ajustare 100g:</span>
                                <div class="flex items-center gap-1.5"><button type="button" id="btn-minus-${pizza.id}" onclick="stepGrams(${pizza.id},-100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder font-black transition" aria-label="Scade 100g din cantitatea de ${pizza.name}">−</button><span id="counter-grams-${pizza.id}" class="text-xs font-mono font-bold text-gondola-charcoal min-w-16 text-center">${grams}g</span><button type="button" onclick="stepGrams(${pizza.id},100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder text-gondola-primary font-black" aria-label="Adaugă 100g la cantitatea de ${pizza.name}">+</button></div>
                            </div>
                            <p id="whole-note-${pizza.id}" class="${whole ? '' : 'hidden'} mt-2 text-[10px] leading-relaxed text-gondola-muted">* Preț orientativ. Pizza este cântărită, iar prețul final poate varia în funcție de gramajul real (aprox. ±100g).</p>
                        </div>
                        <button type="button" onclick="addToCart(${pizza.id}, event)" class="w-full bg-gondola-charcoal hover:bg-gondola-primary text-white font-extrabold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 group shadow-md uppercase font-display tracking-wide text-xs sm:text-sm"><svg class="icon text-amber-400 group-hover:text-white transition" aria-hidden="true"><use href="#icon-cart-plus"></use></svg><span>Adaugă în cuptor</span></button>
                    </div>
                </div>
            </div>`;
        container.appendChild(card);
        setGrams(pizza.id, grams);
    });
    initLazyProductVideos();
}

let productVideoObserver = null;
let activePlayTimeout = null;

function initLazyProductVideos() {
    if (productVideoObserver) productVideoObserver.disconnect();
    if (activePlayTimeout) clearTimeout(activePlayTimeout);

    const videoBoxes = [...document.querySelectorAll('.video-box')];
    if (!videoBoxes.length) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const allVideos = [...document.querySelectorAll('.menu-video')];

    const ensureLoaded = video => {
        if (!video.src && video.dataset.src) {
            video.src = video.dataset.src;
            video.preload = 'auto';
        }
    };

    const pauseOtherVideos = active => {
        allVideos.forEach(video => {
            if (video !== active && !video.paused) {
                video.pause();
            }
        });
    };

    const playVideo = video => {
        if (reduceMotion) return;
        ensureLoaded(video);
        pauseOtherVideos(video);
        const promise = video.play();
        if (promise && typeof promise.catch === 'function') promise.catch(() => {});
    };

    videoBoxes.forEach(box => {
        const video = box.querySelector('.menu-video');
        const replayBtn = box.querySelector('.video-replay-btn');
        if (!video) return;

        video.addEventListener('ended', () => {
            if (replayBtn) replayBtn.classList.add('is-visible');
        });

        video.addEventListener('play', () => {
            if (replayBtn) replayBtn.classList.remove('is-visible');
        });

        if (replayBtn) {
            replayBtn.addEventListener('click', e => {
                e.stopPropagation();
                video.currentTime = 0;
                playVideo(video);
            });
        }

        box.addEventListener('click', e => {
            if (e.target.closest('button') && !e.target.closest('.video-replay-btn')) return;
            if (video.ended) {
                video.currentTime = 0;
                playVideo(video);
            } else if (video.paused) {
                playVideo(video);
            } else {
                video.pause();
                if (replayBtn) replayBtn.classList.add('is-visible');
            }
        });
    });

    if ('IntersectionObserver' in window) {
        let currentCandidate = null;

        productVideoObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    currentCandidate = video;
                    if (activePlayTimeout) clearTimeout(activePlayTimeout);
                    activePlayTimeout = setTimeout(() => {
                        if (currentCandidate && !currentCandidate.ended) {
                            playVideo(currentCandidate);
                        }
                    }, 80);
                } else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
                    if (!video.paused) {
                        video.pause();
                    }
                    if (currentCandidate === video) {
                        currentCandidate = null;
                    }
                }
            });
        }, { threshold: [0, 0.2, 0.5], rootMargin: '0px' });

        allVideos.forEach(video => productVideoObserver.observe(video));
    } else {
        allVideos[0] && ensureLoaded(allVideos[0]);
    }
}

let heroVideoIsVisible = true;
let heroVideoObserver = null;
let heroVideoStarted = false;

function startHeroVideo() {
    const heroVideo = document.getElementById('hero-video');
    if (!heroVideo || heroVideoStarted) return;
    heroVideoStarted = true;
    heroVideo.preload = 'auto';
    heroVideo.play().catch(() => {});
}

function initHeroVideoVisibility() {
    const heroVideo = document.getElementById('hero-video');
    if (!heroVideo) return;

    heroVideo.addEventListener('playing', () => {
        heroVideo.classList.remove('opacity-0');
        heroVideo.classList.add('opacity-100');
    }, { once: true });

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
        heroVideo.pause();
        return;
    }

    const interactionEvents = ['scroll', 'touchstart', 'mousemove', 'keydown'];
    const onUserInteract = () => {
        interactionEvents.forEach(e => window.removeEventListener(e, onUserInteract));
        startHeroVideo();
    };
    interactionEvents.forEach(e => window.addEventListener(e, onUserInteract, { once: true, passive: true }));

    if ('requestIdleCallback' in window) {
        window.addEventListener('load', () => {
            requestIdleCallback(() => {
                setTimeout(startHeroVideo, 1800);
            }, { timeout: 3500 });
        });
    } else {
        window.addEventListener('load', () => setTimeout(startHeroVideo, 2000));
    }

    if (!('IntersectionObserver' in window)) return;
    if (heroVideoObserver) heroVideoObserver.disconnect();

    heroVideoObserver = new IntersectionObserver(entries => {
        const entry = entries[0];
        heroVideoIsVisible = !!entry?.isIntersecting && entry.intersectionRatio > 0.05;
        if (heroVideoIsVisible && !document.hidden && heroVideoStarted) {
            heroVideo.play().catch(() => {});
        } else {
            heroVideo.pause();
        }
    }, { threshold: [0, 0.05, 0.2] });

    heroVideoObserver.observe(heroVideo);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('video').forEach(video => video.pause());
    } else {
        const heroVideo = document.getElementById('hero-video');
        if (heroVideo && heroVideoIsVisible && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            heroVideo.play().catch(() => {});
        }
    }
});

window.setGrams = function(pizzaId, grams) {
    grams = Math.max(MIN_GRAMS_PER_ITEM, grams);
    selectedGrams[pizzaId] = grams;
    const whole = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
    document.getElementById(`grams-label-${pizzaId}`)?.replaceChildren(document.createTextNode(displaySelection(grams)));
    document.getElementById(`counter-grams-${pizzaId}`)?.replaceChildren(document.createTextNode(`${grams}g`));
    const subtotal = document.getElementById(`subtotal-${pizzaId}`);
    if (subtotal) subtotal.innerText = whole ? "≈ 68.40 LEI*" : `${money(estimatedPizzaPrice(grams))} LEI`;
    document.getElementById(`whole-note-${pizzaId}`)?.classList.toggle('hidden', !whole);
    [300,600,1000,1200].forEach(p => document.getElementById(`btn-g-${pizzaId}-${p}`)?.classList.toggle('active', p === grams));

    const minusBtn = document.getElementById(`btn-minus-${pizzaId}`);
    if (minusBtn) {
        const isMin = grams <= MIN_GRAMS_PER_ITEM;
        minusBtn.disabled = isMin;
        minusBtn.classList.toggle('opacity-30', isMin);
        minusBtn.classList.toggle('cursor-not-allowed', isMin);
        minusBtn.title = isMin ? "Gramajul minim pe sortiment este de 300g" : `Scade 100g din cantitatea selectată`;
    }
};

window.stepGrams = function(pizzaId, step) {
    triggerHaptic(30);
    const current = selectedGrams[pizzaId] || MIN_GRAMS_PER_ITEM;
    if (step < 0 && current <= MIN_GRAMS_PER_ITEM) return;
    setGrams(pizzaId, Math.max(MIN_GRAMS_PER_ITEM, current + step));
};

let addToCartCooldown = false;
window.addToCart = function(pizzaId, evt) {
    triggerHaptic(45);
    if (addToCartCooldown) return;
    addToCartCooldown = true;
    setTimeout(() => { addToCartCooldown = false; }, 400);

    const grams = Math.max(MIN_GRAMS_PER_ITEM, selectedGrams[pizzaId] || MIN_GRAMS_PER_ITEM);
    cart[pizzaId] = (cart[pizzaId] || 0) + grams;
    saveCartToStorage();
    updateCartUI();
    renderModalCart();

    const btn = evt?.currentTarget;
    if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = `<svg class="icon text-emerald-400" aria-hidden="true"><use href="#icon-check"></use></svg> Adăugat (${displaySelection(grams)})`;
        btn.classList.add('bg-emerald-700');
        setTimeout(() => {
            btn.innerHTML = original;
            btn.classList.remove('bg-emerald-700');
        }, 1100);
    }
};

window.removeCartItem = function(pizzaId) {
    triggerHaptic(30);
    if (cart[pizzaId]) {
        delete cart[pizzaId];
        saveCartToStorage();
        updateCartUI();
        renderModalCart();
    }
};

const resetConfirmModal = document.getElementById("reset-confirm-modal");
window.openResetModal = function() { 
    if (Object.keys(cart).length || Object.values(drinkQuantities).some(q => q > 0) || Object.values(sauceQuantities).some(q => q > 0)) { 
        resetConfirmModal.classList.remove("hidden"); 
        resetConfirmModal.classList.add("flex"); 
    } 
};
window.closeResetModal = function() { resetConfirmModal.classList.add("hidden"); resetConfirmModal.classList.remove("flex"); };

window.confirmResetCart = function() {
    cart = {};
    Object.keys(sauceQuantities).forEach(name => sauceQuantities[name] = 0);
    Object.keys(drinkQuantities).forEach(id => drinkQuantities[id] = 0);
    try {
        localStorage.removeItem(STORAGE_CART_KEY);
        localStorage.removeItem(STORAGE_SAUCES_KEY);
        localStorage.removeItem(STORAGE_DRINKS_KEY);
    } catch (_) {}
    renderSauceQuantities();
    renderDrinkQuantities();
    updateCartUI();
    renderModalCart();
    closeResetModal();
    closeModal();
};

window.modifyCartItem = function(pizzaId, deltaGrams) {
    triggerHaptic(30);
    if (!cart[pizzaId]) return;
    if (deltaGrams < 0 && cart[pizzaId] <= MIN_GRAMS_PER_ITEM) {
        // Nu permite scăderea sub 300g; pentru eliminare se folosește iconița de coș de gunoi
        return;
    }
    const targetGrams = cart[pizzaId] + deltaGrams;
    if (targetGrams < MIN_GRAMS_PER_ITEM) {
        cart[pizzaId] = MIN_GRAMS_PER_ITEM;
    } else {
        cart[pizzaId] = targetGrams;
    }
    saveCartToStorage();
    updateCartUI();
    renderModalCart();
};

function updateCartUI() {
    const distinctCount = Object.keys(cart).length;
    const grams = cartTotalGrams();
    document.getElementById("cart-badge").innerText = distinctCount;
    document.getElementById("cart-total-grams").innerText = grams;
    document.getElementById("cart-total-price").innerText = money(cartPizzaTotal());
    document.getElementById("cart-bar").classList.toggle("translate-y-full", distinctCount === 0);
    if (!distinctCount && !Object.values(drinkQuantities).some(q => q > 0)) closeModal();
}

const checkoutModal = document.getElementById("checkout-modal");
const openModalBtn = document.getElementById("open-order-modal");
const closeModalBtn = document.getElementById("close-modal");
const orderForm = document.getElementById("whatsapp-order-form");
const typeDelivery = document.getElementById("type-delivery");
const typePickup = document.getElementById("type-pickup");
const deliveryFields = document.getElementById("delivery-fields");
const address = document.getElementById("cust-address");
const deliveryZone = document.getElementById("delivery-zone");
const orderSubmitBtn = document.getElementById("order-submit-btn");
const orderSubmitHelp = document.getElementById("order-submit-help");

openModalBtn?.addEventListener("click", () => { initScheduledTimeOptions(); renderModalCart(); checkoutModal.classList.remove("hidden"); checkoutModal.classList.add("flex"); });
const cartBarInfo = document.getElementById("cart-bar")?.querySelector(".flex.items-center.gap-3");
if (cartBarInfo) {
    cartBarInfo.classList.add("cursor-pointer");
    cartBarInfo.title = "Deschide comanda";
    cartBarInfo.addEventListener("click", () => {
        renderModalCart();
        checkoutModal.classList.remove("hidden");
        checkoutModal.classList.add("flex");
    });
}
function closeModal() { checkoutModal?.classList.add("hidden"); checkoutModal?.classList.remove("flex"); }
closeModalBtn?.addEventListener("click", closeModal);
checkoutModal?.addEventListener("click", e => { if (e.target === checkoutModal) closeModal(); });

function syncDeliveryFields() { 
    const isDelivery = typeDelivery.checked; 
    deliveryFields.style.display = isDelivery ? "block" : "none"; 
    address.required = isDelivery; 
    renderModalCart(); 
}
typeDelivery?.addEventListener("change", syncDeliveryFields);
typePickup?.addEventListener("change", syncDeliveryFields);
deliveryZone?.addEventListener("change", renderModalCart);

document.querySelectorAll('.sauce-step').forEach(btn => {
    btn.addEventListener('click', () => stepSauce(btn.dataset.sauceName, Number(btn.dataset.sauceStep)));
});

function initScheduledTimeOptions() {
    const sel = document.getElementById("scheduled-time");
    if (!sel) return;
    sel.innerHTML = "";

    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Bucharest",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        weekday: "short"
    });
    const parts = formatter.formatToParts(now);
    let hour = 12, minute = 0, weekday = "Mon";
    parts.forEach(p => {
        if (p.type === "hour") hour = parseInt(p.value, 10);
        if (p.type === "minute") minute = parseInt(p.value, 10);
        if (p.type === "weekday") weekday = p.value;
    });

    const isSunday = (weekday === "Sun");
    const openMinute = isSunday ? (10 * 60 + 30) : (9 * 60 + 30); // 09:30 L-S / 10:30 D
    const lastMinute = 19 * 60 + 30; // 19:30
    const currentMinuteTotal = hour * 60 + minute;
    // Minim 45 min timp de preparare & livrare
    const minBookingMinute = Math.max(openMinute, currentMinuteTotal + 45);

    const allSlots = [
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
        "19:00", "19:30"
    ];

    let availableSlots = [];
    if (currentMinuteTotal < lastMinute) {
        availableSlots = allSlots.filter(t => {
            const [h, m] = t.split(":").map(Number);
            const slotMin = h * 60 + m;
            return slotMin >= minBookingMinute && slotMin <= lastMinute;
        });
    }

    if (availableSlots.length > 0) {
        availableSlots.forEach(t => {
            const opt = document.createElement("option");
            opt.value = t;
            opt.textContent = `Ora ${t} (azi)`;
            sel.appendChild(opt);
        });
    } else {
        const nextDayLabel = isSunday ? "mâine Luni" : (weekday === "Sat" ? "mâine Duminică" : "mâine");
        const nextDayOpenMinute = (weekday === "Sat") ? (10 * 60 + 30) : (9 * 60 + 30);
        const nextDaySlots = allSlots.filter(t => {
            const [h, m] = t.split(":").map(Number);
            return (h * 60 + m) >= nextDayOpenMinute;
        });
        nextDaySlots.forEach(t => {
            const opt = document.createElement("option");
            opt.value = `${t} (${nextDayLabel})`;
            opt.textContent = `Ora ${t} (${nextDayLabel})`;
            sel.appendChild(opt);
        });
    }
}

function syncOrderTimeFields() {
    const isScheduled = document.getElementById("time-scheduled")?.checked;
    const wrap = document.getElementById("scheduled-time-wrap");
    if (wrap) wrap.classList.toggle("hidden", !isScheduled);
    if (isScheduled) initScheduledTimeOptions();
}

document.querySelectorAll('input[name="order_time_type"]').forEach(r => {
    r.addEventListener("change", syncOrderTimeFields);
});

function renderModalCart() {
    const container = document.getElementById("modal-cart-items");
    if (!container) return;
    container.innerHTML = "";
    for (const id in cart) {
        const pizza = pizzas.find(p => p.id == id), grams = cart[id], cost = estimatedPizzaPrice(grams);
        if (!pizza) continue;
        const isWholeSingle = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
        const isWholeMultiple = grams > WHOLE_PIZZA_REFERENCE_GRAMS && (grams % WHOLE_PIZZA_REFERENCE_GRAMS === 0);
        const wholeCount = isWholeMultiple ? (grams / WHOLE_PIZZA_REFERENCE_GRAMS) : 1;
        const portionLabel = isWholeSingle 
            ? 'Pizza întreagă · ≈68.40 LEI*' 
            : (isWholeMultiple 
                ? `${wholeCount}x Pizza întreagă · ≈${money(wholeCount * WHOLE_PIZZA_DISPLAY_PRICE)} LEI*` 
                : `${grams}g · ${money(cost)} LEI`);

        const isMin = grams <= MIN_GRAMS_PER_ITEM;
        const row = document.createElement("div");
        row.className = "flex justify-between items-center gap-3 bg-white p-2.5 rounded-xl border border-gondola-cardBorder shadow-sm";
        row.innerHTML = `
            <div class="min-w-0 pr-2">
                <span class="font-bold text-gondola-charcoal text-xs block truncate">${pizza.name}</span>
                <span class="text-[11px] text-gondola-muted">${portionLabel}</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
                <button type="button" 
                    onclick="${isMin ? '' : `modifyCartItem(${id},-100)`}" 
                    ${isMin ? 'disabled' : ''} 
                    class="w-6 h-6 rounded bg-gondola-cardBg border border-gondola-cardBorder font-bold text-xs flex items-center justify-center transition ${isMin ? 'opacity-30 cursor-not-allowed text-gondola-muted' : 'hover:border-gondola-primary text-gondola-charcoal'}" 
                    title="${isMin ? 'Gramajul minim pe sortiment este de 300g (folosește coșul de gunoi pentru a elimina)' : `Scade 100g din ${pizza.name}`}"
                    aria-label="Scade 100g din ${pizza.name}">−</button>
                <span class="text-xs font-mono font-bold min-w-14 text-center text-gondola-primary">${grams}g</span>
                <button type="button" onclick="modifyCartItem(${id},100)" class="w-6 h-6 rounded bg-gondola-cardBg border border-gondola-cardBorder text-gondola-primary font-bold hover:border-gondola-primary text-xs flex items-center justify-center transition" title="Adaugă 100g la ${pizza.name}" aria-label="Adaugă 100g la ${pizza.name}">+</button>
                <button type="button" onclick="removeCartItem(${id})" class="ml-1 text-rose-500 hover:text-rose-700 p-1 transition flex items-center justify-center rounded hover:bg-rose-50" title="Elimină ${pizza.name} din coș" aria-label="Elimină ${pizza.name} din coș">
                    <svg class="icon text-xs" aria-hidden="true"><use href="#icon-trash-can"></use></svg>
                </button>
            </div>`;
        container.appendChild(row);
    }
    const pizzaTotal = cartPizzaTotal();
    const sauceTotal = saucesTotal();
    const drinkTotal = drinksTotal();
    const boxesCount = cartBoxCount();
    const boxTotal = cartBoxTotal();
    const grand = estimatedGrandTotal();

    document.getElementById("modal-pizza-price").innerText = money(pizzaTotal);
    document.getElementById("modal-sauces-price").innerText = money(sauceTotal);
    if (document.getElementById("modal-drinks-price")) {
        document.getElementById("modal-drinks-price").innerText = money(drinkTotal);
    }
    if (document.getElementById("modal-boxes-price")) {
        document.getElementById("modal-boxes-price").innerText = money(boxTotal);
    }
    if (document.getElementById("modal-boxes-count")) {
        document.getElementById("modal-boxes-count").innerText = boxesCount;
    }
    document.getElementById("modal-total-price").innerText = money(grand);
    
    const upsell = document.getElementById("smart-sauce-upsell");
    if (upsell) {
        const hasPizzas = Object.keys(cart).length > 0;
        if (hasPizzas && sauceTotal === 0) {
            upsell.classList.remove("hidden");
        } else {
            upsell.classList.add("hidden");
        }
    }

    updateDeliveryProgress(pizzaTotal);
    updateOrderSubmitState(pizzaTotal);
}

function updateDeliveryProgress(pizzaTotal) {
    const label = document.getElementById('delivery-progress-label');
    const value = document.getElementById('delivery-progress-value');
    const bar = document.getElementById('delivery-progress-bar');
    if (!label || !value || !bar) return;

    if (typePickup.checked) { 
        label.innerText = 'Ridicare personală · fără prag minim de livrare'; 
        value.innerText = ''; 
        bar.style.width = '100%'; 
        return; 
    }
    const zone = deliveryZone.value || 'Piatra Neamț';
    const isPiatra = (zone === 'Piatra Neamț');
    const threshold = isPiatra ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
    const requiredPizzas = isPiatra ? "1 pizza întreagă" : "2 pizza întregi";
    const remaining = Math.max(0, threshold - pizzaTotal);
    const pct = Math.min(100, (pizzaTotal / threshold) * 100);
    bar.style.width = `${pct}%`;
    if (remaining <= 0) { 
        label.innerText = `✓ Livrare gratuită în ${zone} (${requiredPizzas} atins)`; 
        value.innerText = 'Prag atins'; 
    } else { 
        label.innerText = `Încă ${money(remaining)} LEI în pizza până la livrare gratuită (${requiredPizzas})`; 
        value.innerText = `${Math.round(pct)}%`; 
    }
}

function updateOrderSubmitState(pizzaTotal) {
    if (!orderSubmitBtn || !orderSubmitHelp) return;
    if (typePickup.checked) {
        orderSubmitBtn.disabled = false;
        orderSubmitBtn.removeAttribute("aria-disabled");
        orderSubmitHelp.textContent = "Ridicare personală: nu se aplică pragul minim pentru livrare.";
        return;
    }

    const zone = deliveryZone.value || "Piatra Neamț";
    const isPiatra = (zone === "Piatra Neamț");
    const threshold = isPiatra ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
    const requiredText = isPiatra ? "1 pizza întreagă (~68 LEI)" : "2 pizza întregi (~137 LEI)";
    const remaining = Math.max(0, threshold - pizzaTotal);
    const eligible = pizzaTotal >= threshold;

    orderSubmitBtn.disabled = !eligible;
    orderSubmitBtn.setAttribute("aria-disabled", String(!eligible));
    if (eligible) {
        orderSubmitHelp.textContent = `Comanda îndeplinește pragul minim pentru livrare în ${zone} (${requiredText}).`;
    } else {
        orderSubmitHelp.textContent = `Comandă minimă pentru livrare în ${zone}: ${requiredText} · mai adaugă pizza de ${money(remaining)} LEI.`;
    }
}

orderForm?.addEventListener("submit", e => {
    e.preventDefault();
    if (!Object.keys(cart).length) return alert("Te rugăm să alegi cel puțin un sortiment de pizza în comandă.");

    // Regula site-wide: gramaj minim 300g per sortiment
    let hasUnderMin = false;
    for (const id in cart) {
        if (typeof cart[id] === "number" && cart[id] < MIN_GRAMS_PER_ITEM) {
            cart[id] = MIN_GRAMS_PER_ITEM;
            hasUnderMin = true;
        }
    }
    if (hasUnderMin) {
        saveCartToStorage();
        updateCartUI();
        renderModalCart();
        alert("Gramajul minim pe sortiment este de 300g (o porție / felie). Am ajustat cantitatea la 300g.");
        return;
    }
    
    // Check if open or show warning
    const sched = getPizzeriaScheduleStatus();
    if (!sched.isOpen && !window.bypassClosedWarning) {
        openClosedWarningModal();
        return;
    }
    window.bypassClosedWarning = false;

    const name = document.getElementById("cust-name").value.trim();
    const type = document.querySelector('input[name="order_type"]:checked').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const notes = document.getElementById("cust-notes").value.trim();
    const zone = deliveryZone.value;
    const addr = address.value.trim();
    const sauces = selectedSauces();
    const drinks = selectedDrinks();
    const boxes = cartBoxCount();
    const boxCost = cartBoxTotal();
    const pizzaTotal = cartPizzaTotal();
    const sauceTotal = saucesTotal();
    const drinkTotal = drinksTotal();
    const grand = estimatedGrandTotal();

    const timeType = document.querySelector('input[name="order_time_type"]:checked')?.value || "asap";
    let timeText = "Cât mai repede (~35-50 min)";
    if (timeType === "scheduled") {
        const selTime = document.getElementById("scheduled-time")?.value || "13:00";
        timeText = `Comandă programată pentru ora ${selTime}`;
    }

    if (type === 'Livrare la domiciliu') {
        const threshold = zone === 'Piatra Neamț' ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
        if (pizzaTotal < threshold) {
            updateOrderSubmitState(pizzaTotal);
            return;
        }
    }

    let itemsText = "", totalGrams = 0;
    for (const id in cart) {
        const pizza = pizzas.find(p => p.id == id), grams = cart[id], price = estimatedPizzaPrice(grams);
        if (!pizza) continue;
        totalGrams += grams;
        if (grams === WHOLE_PIZZA_REFERENCE_GRAMS) {
            itemsText += `• ${pizza.name} — Pizza întreagă (≈68.40 LEI*)\n`;
        } else if (grams > WHOLE_PIZZA_REFERENCE_GRAMS && grams % WHOLE_PIZZA_REFERENCE_GRAMS === 0) {
            const count = grams / WHOLE_PIZZA_REFERENCE_GRAMS;
            itemsText += `• ${pizza.name} — ${count}x Pizza întreagă (≈${money(count * WHOLE_PIZZA_DISPLAY_PRICE)} LEI*)\n`;
        } else {
            itemsText += `• ${pizza.name} — ${grams}g (${money(price)} LEI)\n`;
        }
    }

    let deliveryStatus = 'Ridicare personală';
    if (type === 'Livrare la domiciliu') { 
        const threshold = zone === 'Piatra Neamț' ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN; 
        deliveryStatus = pizzaTotal >= threshold ? 'Livrare gratuită (prag atins)' : (zone === 'Piatra Neamț' ? 'Sub pragul de 1 pizza' : 'Cost livrare de confirmat'); 
    }

    let message = `🍕 *COMANDĂ NOUĂ - PIZZERIA GONDOLA*\n📍 *B-dul Decebal nr. 35, Piatra Neamț*\n--------------------------------------\n${itemsText}`;
    
    if (sauces.length) {
        const saucesText = sauces.map(sauce => `${sauce.quantity}× ${sauce.name} (~70g)`).join(', ');
        message += `\n🥫 *Sosuri:* ${saucesText} (${money(sauceTotal)} LEI)\n`;
    }

    if (drinks.length) {
        const drinksText = drinks.map(d => `${d.quantity}× ${d.name}`).join(', ');
        message += `\n🥤 *Băuturi:* ${drinksText} (${money(drinkTotal)} LEI)\n`;
    }

    if (boxes > 0) {
        message += `📦 *Ambalaj cutii:* ${boxes} cutie/cutii (${money(boxCost)} LEI - 1 LEU/buc.)\n`;
    }

    message += `--------------------------------------\n⚖️ *Gramaj pizza:* ${totalGrams} g\n💰 *Pizza:* ${money(pizzaTotal)} LEI\n`;
    if (sauceTotal > 0) message += `🥫 *Sosuri:* ${money(sauceTotal)} LEI\n`;
    if (drinkTotal > 0) message += `🥤 *Băuturi:* ${money(drinkTotal)} LEI\n`;
    message += `📦 *Ambalaj cutii:* ${money(boxCost)} LEI\n`;
    message += `💳 *Total estimativ:* ${money(grand)} LEI\n`;
    message += `\n👤 *Client:* ${name}\n🚗 *Primire:* ${type}\n`;
    if (type === 'Livrare la domiciliu') message += `📌 *Zona:* ${zone}\n🏠 *Adresă:* ${addr}\n🚚 *Livrare:* ${deliveryStatus}\n`;
    message += `🕒 *Timp dorit:* ${timeText}\n`;
    message += `💵 *Plată:* ${payment}\n`;
    if (notes) message += `📝 *Mențiuni:* ${notes}\n`;
    if (!sched.isOpen) message += `⚠️ *Notă:* Comandă plasată în afara programului cuptorului (pre-comandă pentru când deschideți - ${sched.nextOpenText || "în timpul programului"}).\n`;
    message += `\n*Notă:* Pentru pizza întreagă, prețul este orientativ (5,70 LEI/100g); greutatea reală poate varia cu aprox. ±100g, iar prețul final se confirmă pe bonul fiscal după cântărire.`;

    saveCustomerData();
    closeModal();
    window.open(`https://wa.me/${PIZZERIA_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    openOrderSuccessModal();
});

document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    loadCustomerData();

    // Auto-save customer details
    ["cust-name", "cust-address"].forEach(id => {
        document.getElementById(id)?.addEventListener("input", saveCustomerData);
    });
    document.getElementById("delivery-zone")?.addEventListener("change", saveCustomerData);
    document.querySelectorAll('input[name="order_type"]').forEach(r => {
        r.addEventListener("change", saveCustomerData);
    });

    // Cleanup any existing service workers
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (const registration of registrations) {
                registration.unregister();
            }
        });
    }
    renderProducts();
    renderSauceQuantities();
    renderDrinkQuantities();
    initScheduledTimeOptions();
    syncDeliveryFields();
    syncOrderTimeFields();
    updateCartUI();
    updateLiveScheduleBadge();
    setInterval(updateLiveScheduleBadge, 60000);

    // Start hero video after first render so network is 100% available for LCP
    if ("requestIdleCallback" in window) {
        requestIdleCallback(initHeroVideoVisibility);
    } else {
        setTimeout(initHeroVideoVisibility, 300);
    }
});
