const PRICE_PER_100G = 5.30;
const WHOLE_PIZZA_REFERENCE_GRAMS = 1200;
const WHOLE_PIZZA_DISPLAY_PRICE = 64.00;
const SAUCE_PRICE = 2.00;
const PIZZERIA_WHATSAPP = "40747216161";
const PIATRA_FREE_DELIVERY_MIN = 64.00;
const OUTSIDE_FREE_DELIVERY_MIN = 100.00;

const pizzas = [
    {
        id: 1,
        name: "Pizza de post",
        badge: "Post / Vegetarian",
        ingredients: "Sos de roșii, ciuperci, porumb, legume la cuptor și măsline.",
        mediaPoster: "images/pizza_de_post_poster.jpg",
        videoSrc: "videos/pizza_de_post_asamblare_opt.mp4"
    },
    {
        id: 2,
        name: "Pizza de post cu ton",
        badge: "Post cu Pește",
        ingredients: "Sos de roșii, roșii, porumb, ton, măsline.",
        mediaPoster: "images/gallery/pizza-sortimente.webp"
    },
    {
        id: 3,
        name: "Pizza Margherita cu șuncă",
        badge: "Clasic & Delicios",
        ingredients: "Sos de roșii, mozzarella și șuncă.",
        mediaPoster: "images/gallery/pizza-colorata.webp"
    },
    {
        id: 4,
        name: "Pizza Diavola",
        badge: "Spicy / Picant",
        ingredients: "Sos de roșii, mozzarella și salam picant.",
        mediaPoster: "images/gallery/pizza-colorata.webp"
    },
    {
        id: 5,
        name: "Pizza Capricciosa",
        badge: "Favorit Tradițional",
        ingredients: "Sos de roșii, mozzarella, ciuperci, șuncă, salam și măsline.",
        mediaPoster: "images/gallery/pizza-sortimente.webp"
    },
    {
        id: 6,
        name: "Pizza 4 Formaggi",
        badge: "Brânzeturi Alese",
        ingredients: "Mozzarella, gorgonzola, brânză afumată și parmezan.",
        mediaPoster: "images/gallery/pizza-ripiena.webp"
    },
    {
        id: 7,
        name: "Pizza cu ton",
        badge: "Mediteranean",
        ingredients: "Sos de roșii, mozzarella, roșii și ton.",
        mediaPoster: "images/gallery/pizza-colorata.webp"
    },
    {
        id: 8,
        name: "Pizza Gondola",
        badge: "Specialitatea Casei",
        ingredients: "Sos de roșii, mozzarella, ciuperci, șuncă, salam, roșii, gogoșari și măsline.",
        mediaPoster: "images/gallery/pizza-sortimente.webp"
    },
    {
        id: 9,
        name: "Pizza ripiena cu șuncă",
        badge: "Specialitate Umplută",
        ingredients: "Mozzarella și șuncă.",
        mediaPoster: "images/gallery/pizza-ripiena.webp"
    },
    {
        id: 10,
        name: "Pizza Regina",
        badge: "Tradițional Aromat",
        ingredients: "Sos de roșii, mozzarella, ceafă afumată, roșii, porumb și măsline.",
        mediaPoster: "images/gallery/pizza-sortimente.webp"
    },
    {
        id: 11,
        name: "Pizza cu cabanos",
        badge: "Gust Rustic & Bogat",
        ingredients: "Sos de roșii, mozzarella, porumb, ardei, cabanos, măsline.",
        mediaPoster: "images/gallery/pizza-colorata.webp"
    },
    {
        id: 12,
        name: "Pizza cu piept de pui",
        badge: "Gust Fin & Nutritiv",
        ingredients: "Sos de roșii, mozzarella, roșii, ardei și piept de pui.",
        mediaPoster: "images/gallery/pizza-sortimente.webp"
    }
];

const deliveryZones = [
    "Piatra Neamț", "Dumbrava Roșie", "Văleni", "Săvinești – Pasarelă", "Bisericani",
    "Gârcina – Școală", "Girov – Kober", "Bistrița", "Alexandru cel Bun", "Speranța"
];

let cart = {};
let selectedGrams = {};
pizzas.forEach(p => selectedGrams[p.id] = 300);

function money(value) { return Number(value).toFixed(2); }
function displaySelection(grams) { return grams === WHOLE_PIZZA_REFERENCE_GRAMS ? "Pizza întreagă" : `${grams >= 1000 ? (grams/1000).toLocaleString('ro-RO', {maximumFractionDigits: 1}) + ' kg' : grams + ' g'}`; }
function estimatedPizzaPrice(grams) { return grams === WHOLE_PIZZA_REFERENCE_GRAMS ? WHOLE_PIZZA_DISPLAY_PRICE : grams * PRICE_PER_100G / 100; }
function cartPizzaTotal() { return Object.values(cart).reduce((sum, grams) => sum + estimatedPizzaPrice(grams), 0); }
function cartTotalGrams() { return Object.values(cart).reduce((sum, grams) => sum + grams, 0); }
const sauceQuantities = {
    "Sos roșii dulce": 0,
    "Sos roșii picant": 0,
    "Sos maioneză cu usturoi": 0
};

function sauceSlug(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function selectedSauces() {
    return Object.entries(sauceQuantities)
        .filter(([, quantity]) => quantity > 0)
        .map(([name, quantity]) => ({ name, quantity, subtotal: quantity * SAUCE_PRICE }));
}
function saucesTotal() {
    return selectedSauces().reduce((sum, sauce) => sum + sauce.subtotal, 0);
}
function estimatedGrandTotal() { return cartPizzaTotal() + saucesTotal(); }
function renderSauceQuantities() {
    Object.entries(sauceQuantities).forEach(([name, quantity]) => {
        const qty = document.getElementById(`sauce-qty-${sauceSlug(name)}`);
        if (qty) qty.textContent = quantity;
        const row = document.querySelector(`.sauce-row[data-sauce="${CSS.escape(name)}"]`);
        if (row) row.classList.toggle("sauce-selected", quantity > 0);
    });
}
window.stepSauce = function(name, step) {
    if (!(name in sauceQuantities)) return;
    sauceQuantities[name] = Math.max(0, sauceQuantities[name] + step);
    renderSauceQuantities();
    renderModalCart();
};

const PRODUCT_BATCH_SIZE = 4;
let renderedProductCount = 0;
let productRenderObserver = null;

function productMediaMarkup(pizza) {
    if (pizza.videoSrc) {
        return `
            <video class="menu-video w-full h-full object-cover" src="${pizza.videoSrc}" poster="${pizza.mediaPoster}" playsinline muted loop preload="auto" aria-label="Video ${pizza.name}"></video>
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-gondola-primary border border-gondola-cardBorder shadow"><i class="fa-solid fa-play text-[10px] mr-1"></i> ${pizza.name}</div>`;
    }

    return `
        <img class="w-full h-full object-cover" src="${pizza.mediaPoster}" loading="lazy" decoding="async" alt="${pizza.name}">
        <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-gondola-primary border border-gondola-cardBorder shadow"><i class="fa-solid fa-image text-[10px] mr-1"></i> ${pizza.name}</div>`;
}

function createProductCard(pizza, index) {
    const isEven = index % 2 === 1;
    const grams = selectedGrams[pizza.id];
    const whole = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
    const card = document.createElement("div");
    card.id = `product-${pizza.id}`;
    card.className = "product-card bg-gondola-cardBg border-2 border-gondola-cardBorder rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl";
    card.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div class="w-full min-w-0 lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}">
                <div class="video-box relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/80 aspect-video md:aspect-[16/10] group shadow-xl w-full">
                    ${productMediaMarkup(pizza)}
                </div>
            </div>
            <div class="w-full min-w-0 lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'} mt-6 lg:mt-0">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2"><span class="text-xs font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border border-rose-200 bg-white text-gondola-primary shadow-sm">${pizza.badge}</span><span class="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white text-gondola-muted border border-gondola-cardBorder shadow-sm">#${pizza.id}</span></div>
                    <h3 class="text-2xl md:text-3xl font-black text-gondola-charcoal mb-2 font-display">${pizza.name}</h3>
                    <p class="text-gondola-muted text-sm md:text-base leading-snug mb-5 font-medium">${pizza.ingredients}</p>
                </div>
                <div class="border-t border-gondola-cardBorder/80 pt-4 space-y-3.5">
                    <div class="flex items-baseline justify-between gap-4">
                        <div class="text-xs text-gondola-muted font-medium">Preț: <span class="text-gondola-charcoal font-bold">${PRICE_PER_100G.toFixed(2)} LEI / 100g</span></div>
                        <div class="text-right"><span class="text-[11px] text-gondola-muted block">${whole ? 'Estimativ:' : 'Subtotal:'}</span><span id="subtotal-${pizza.id}" class="text-xl md:text-2xl font-black text-gondola-primary font-display">${whole ? '≈ 64.00 LEI*' : money(estimatedPizzaPrice(grams)) + ' LEI'}</span></div>
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
                            <span class="text-[11px] text-gondola-muted font-semibold flex items-center gap-1"><i class="fa-solid fa-scale-balanced text-gondola-accent"></i> Ajustare 100g:</span>
                            <div class="flex items-center gap-1.5"><button type="button" onclick="stepGrams(${pizza.id},-100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder font-black">−</button><span id="counter-grams-${pizza.id}" class="text-xs font-mono font-bold text-gondola-charcoal min-w-16 text-center">${grams}g</span><button type="button" onclick="stepGrams(${pizza.id},100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder text-gondola-primary font-black">+</button></div>
                        </div>
                        <p id="whole-note-${pizza.id}" class="${whole ? '' : 'hidden'} mt-2 text-[10px] leading-relaxed text-gondola-muted">* Preț orientativ. Pizza este cântărită, iar prețul final poate varia în funcție de gramajul real (aprox. ±100g).</p>
                    </div>
                    <button type="button" onclick="addToCart(${pizza.id}, event)" class="w-full bg-gondola-charcoal hover:bg-gondola-primary text-white font-extrabold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 group shadow-md uppercase font-display tracking-wide text-xs sm:text-sm"><i class="fa-solid fa-cart-plus text-amber-400 group-hover:text-white transition"></i><span>Adaugă în cuptor</span></button>
                </div>
            </div>
        </div>`;
    return card;
}

function appendNextProductBatch(container) {
    const end = Math.min(renderedProductCount + PRODUCT_BATCH_SIZE, pizzas.length);
    for (let index = renderedProductCount; index < end; index += 1) {
        const pizza = pizzas[index];
        const card = createProductCard(pizza, index);
        container.appendChild(card);
        setGrams(pizza.id, selectedGrams[pizza.id]);
    }
    renderedProductCount = end;
    return renderedProductCount < pizzas.length;
}

function addProductSentinel(container) {
    const sentinel = document.createElement('div');
    sentinel.id = 'products-load-sentinel';
    sentinel.className = 'h-px w-full';
    sentinel.setAttribute('aria-hidden', 'true');
    container.appendChild(sentinel);
    productRenderObserver?.observe(sentinel);
}

function renderProducts() {
    const container = document.getElementById("products-container");
    if (!container) return;

    container.innerHTML = "";
    renderedProductCount = 0;
    if (productRenderObserver) productRenderObserver.disconnect();

    const hasMore = appendNextProductBatch(container);
    initLazyProductVideos();

    if (!hasMore) return;

    if (!('IntersectionObserver' in window)) {
        while (appendNextProductBatch(container)) {}
        return;
    }

    productRenderObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            productRenderObserver.unobserve(entry.target);
            entry.target.remove();
            const more = appendNextProductBatch(container);
            if (more) addProductSentinel(container);
            else productRenderObserver.disconnect();
        });
    }, { rootMargin: '1000px 0px 1000px 0px', threshold: 0 });

    addProductSentinel(container);
}

/*
 * Performance video produse:
 * - singurul clip de produs real este local și începe să se preîncarce imediat;
 * - restul sortimentelor folosesc exclusiv imagini locale, fără Unsplash și fără clipuri demo externe;
 * - redarea începe doar când clipul este suficient de vizibil și există buffer pentru redare;
 * - cele 12 carduri sunt adăugate progresiv, câte 4, pentru un DOM inițial mai mic.
 */
let productVideoObserver = null;

function initLazyProductVideos() {
    if (productVideoObserver) productVideoObserver.disconnect();

    const videos = [...document.querySelectorAll('.menu-video')];
    if (!videos.length) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    videos.forEach(video => {
        video.preload = 'auto';
        if (video.readyState === 0) video.load();
    });

    const pauseOtherVideos = active => {
        videos.forEach(video => {
            if (video !== active) {
                video.dataset.shouldPlay = '0';
                if (!video.paused) video.pause();
            }
        });
    };

    const requestPlay = video => {
        if (reduceMotion) return;
        pauseOtherVideos(video);
        video.dataset.shouldPlay = '1';

        const start = () => {
            if (video.dataset.shouldPlay !== '1' || document.hidden) return;
            const promise = video.play();
            if (promise && typeof promise.catch === 'function') promise.catch(() => {});
        };

        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) start();
        else video.addEventListener('canplay', start, { once: true });
    };

    const stopVideo = video => {
        video.dataset.shouldPlay = '0';
        if (!video.paused) video.pause();
    };

    if ('IntersectionObserver' in window) {
        productVideoObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting && entry.intersectionRatio >= 0.15) requestPlay(video);
                else if (!entry.isIntersecting || entry.intersectionRatio <= 0.001) stopVideo(video);
            });
        }, { threshold: [0, 0.15], rootMargin: '0px' });

        videos.forEach(video => productVideoObserver.observe(video));
    } else {
        videos[0]?.addEventListener('click', () => requestPlay(videos[0]));
    }
}

let heroVideoIsVisible = true;
let heroVideoObserver = null;

function initHeroVideoVisibility() {
    const heroVideo = document.getElementById('hero-video');
    if (!heroVideo) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
        heroVideo.pause();
        return;
    }

    if (!('IntersectionObserver' in window)) return;
    if (heroVideoObserver) heroVideoObserver.disconnect();

    heroVideoObserver = new IntersectionObserver(entries => {
        const entry = entries[0];
        heroVideoIsVisible = !!entry?.isIntersecting && entry.intersectionRatio > 0.05;
        if (heroVideoIsVisible && !document.hidden) {
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
    grams = Math.max(100, grams);
    selectedGrams[pizzaId] = grams;
    const whole = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
    document.getElementById(`grams-label-${pizzaId}`)?.replaceChildren(document.createTextNode(displaySelection(grams)));
    document.getElementById(`counter-grams-${pizzaId}`)?.replaceChildren(document.createTextNode(`${grams}g`));
    const subtotal = document.getElementById(`subtotal-${pizzaId}`);
    if (subtotal) subtotal.innerText = whole ? "≈ 64.00 LEI*" : `${money(estimatedPizzaPrice(grams))} LEI`;
    document.getElementById(`whole-note-${pizzaId}`)?.classList.toggle('hidden', !whole);
    [300,600,1000,1200].forEach(p => document.getElementById(`btn-g-${pizzaId}-${p}`)?.classList.toggle('active', p === grams));
};
window.stepGrams = function(pizzaId, step) { setGrams(pizzaId, (selectedGrams[pizzaId] || 300) + step); };
window.addToCart = function(pizzaId, evt) {
    const grams = selectedGrams[pizzaId] || 300;
    cart[pizzaId] = (cart[pizzaId] || 0) + grams;
    updateCartUI();
    const btn = evt?.currentTarget;
    if (btn) { const original = btn.innerHTML; btn.innerHTML = `<i class="fa-solid fa-check text-emerald-400"></i> Adăugat (${displaySelection(grams)})`; btn.classList.add('bg-emerald-700'); setTimeout(() => { btn.innerHTML = original; btn.classList.remove('bg-emerald-700'); }, 1100); }
};

const resetConfirmModal = document.getElementById("reset-confirm-modal");
window.openResetModal = function() { if (Object.keys(cart).length) { resetConfirmModal.classList.remove("hidden"); resetConfirmModal.classList.add("flex"); } };
window.closeResetModal = function() { resetConfirmModal.classList.add("hidden"); resetConfirmModal.classList.remove("flex"); };
window.confirmResetCart = function() { cart = {}; Object.keys(sauceQuantities).forEach(name => sauceQuantities[name] = 0); renderSauceQuantities(); updateCartUI(); renderModalCart(); closeResetModal(); closeModal(); };
window.modifyCartItem = function(pizzaId, deltaGrams) { if (!cart[pizzaId]) return; cart[pizzaId] += deltaGrams; if (cart[pizzaId] <= 0) delete cart[pizzaId]; updateCartUI(); renderModalCart(); };

function updateCartUI() {
    const distinctCount = Object.keys(cart).length;
    const grams = cartTotalGrams();
    document.getElementById("cart-badge").innerText = distinctCount;
    document.getElementById("cart-total-grams").innerText = grams;
    document.getElementById("cart-total-price").innerText = money(cartPizzaTotal());
    document.getElementById("cart-bar").classList.toggle("translate-y-full", distinctCount === 0);
    if (!distinctCount) closeModal();
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

openModalBtn.addEventListener("click", () => { renderModalCart(); checkoutModal.classList.remove("hidden"); checkoutModal.classList.add("flex"); });
function closeModal() { checkoutModal.classList.add("hidden"); checkoutModal.classList.remove("flex"); }
closeModalBtn.addEventListener("click", closeModal);
checkoutModal.addEventListener("click", e => { if (e.target === checkoutModal) closeModal(); });
function syncDeliveryFields() { const isDelivery = typeDelivery.checked; deliveryFields.style.display = isDelivery ? "block" : "none"; address.required = isDelivery; renderModalCart(); }
typeDelivery.addEventListener("change", syncDeliveryFields);
typePickup.addEventListener("change", syncDeliveryFields);
deliveryZone.addEventListener("change", renderModalCart);
document.querySelectorAll('.sauce-step').forEach(btn => {
    btn.addEventListener('click', () => stepSauce(btn.dataset.sauceName, Number(btn.dataset.sauceStep)));
});

function renderModalCart() {
    const container = document.getElementById("modal-cart-items");
    if (!container) return;
    container.innerHTML = "";
    for (const id in cart) {
        const pizza = pizzas.find(p => p.id == id), grams = cart[id], cost = estimatedPizzaPrice(grams);
        const row = document.createElement("div");
        row.className = "flex justify-between items-center gap-3 bg-white p-2.5 rounded-xl border border-gondola-cardBorder shadow-sm";
        row.innerHTML = `<div><span class="font-bold text-gondola-charcoal text-xs block">${pizza.name}</span><span class="text-[11px] text-gondola-muted">${grams === WHOLE_PIZZA_REFERENCE_GRAMS ? 'Pizza întreagă · ≈64 LEI*' : `${grams}g · ${money(cost)} LEI`}</span></div><div class="flex items-center gap-1.5"><button type="button" onclick="modifyCartItem(${id},-100)" class="w-6 h-6 rounded bg-gondola-cardBg border border-gondola-cardBorder font-bold">−</button><span class="text-xs font-mono font-bold min-w-14 text-center text-gondola-primary">${grams}g</span><button type="button" onclick="modifyCartItem(${id},100)" class="w-6 h-6 rounded bg-gondola-cardBg border border-gondola-cardBorder text-gondola-primary font-bold">+</button></div>`;
        container.appendChild(row);
    }
    const pizzaTotal = cartPizzaTotal(), sauceTotal = saucesTotal(), grand = pizzaTotal + sauceTotal;
    document.getElementById("modal-pizza-price").innerText = money(pizzaTotal);
    document.getElementById("modal-sauces-price").innerText = money(sauceTotal);
    document.getElementById("modal-total-price").innerText = money(grand);
    updateDeliveryProgress(grand);
    updateOrderSubmitState(grand);
}

function updateDeliveryProgress(total) {
    const label = document.getElementById('delivery-progress-label'), value = document.getElementById('delivery-progress-value'), bar = document.getElementById('delivery-progress-bar');
    if (typePickup.checked) { label.innerText = 'Ridicare personală · fără prag de livrare'; value.innerText = ''; bar.style.width='100%'; return; }
    const zone = deliveryZone.value || 'Piatra Neamț';
    const threshold = zone === 'Piatra Neamț' ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
    const remaining = Math.max(0, threshold-total);
    const pct = Math.min(100, (total/threshold)*100);
    bar.style.width = `${pct}%`;
    if (remaining <= 0) { label.innerText = `✓ Livrare gratuită în ${zone}`; value.innerText = 'Prag atins'; }
    else { label.innerText = `Încă ${money(remaining)} LEI până la livrare gratuită`; value.innerText = `${Math.round(pct)}%`; }
}

function updateOrderSubmitState(total) {
    if (!orderSubmitBtn || !orderSubmitHelp) return;
    if (typePickup.checked) {
        orderSubmitBtn.disabled = false;
        orderSubmitBtn.removeAttribute("aria-disabled");
        orderSubmitHelp.textContent = "Ridicare personală: nu se aplică pragul minim pentru livrare.";
        return;
    }

    const zone = deliveryZone.value || "Piatra Neamț";
    const threshold = zone === "Piatra Neamț" ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
    const remaining = Math.max(0, threshold - total);
    const eligible = total >= threshold;

    orderSubmitBtn.disabled = !eligible;
    orderSubmitBtn.setAttribute("aria-disabled", String(!eligible));
    if (eligible) {
        orderSubmitHelp.textContent = `Comanda îndeplinește pragul minim pentru livrare în ${zone}.`;
    } else {
        orderSubmitHelp.textContent = `Comandă minimă pentru livrare în ${zone}: ${money(threshold)} LEI · mai adaugă ${money(remaining)} LEI.`;
    }
}

orderForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!Object.keys(cart).length) return alert("Te rugăm să alegi cel puțin un sortiment de pizza în comandă.");
    const name = document.getElementById("cust-name").value.trim();
    const type = document.querySelector('input[name="order_type"]:checked').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const notes = document.getElementById("cust-notes").value.trim();
    const zone = deliveryZone.value;
    const addr = address.value.trim();
    const sauces = selectedSauces();
    const currentTotal = estimatedGrandTotal();
    if (type === 'Livrare la domiciliu') {
        const threshold = zone === 'Piatra Neamț' ? PIATRA_FREE_DELIVERY_MIN : OUTSIDE_FREE_DELIVERY_MIN;
        if (currentTotal < threshold) {
            updateOrderSubmitState(currentTotal);
            return;
        }
    }
    let itemsText = "", totalGrams = 0;
    for (const id in cart) { const pizza=pizzas.find(p=>p.id==id), grams=cart[id], price=estimatedPizzaPrice(grams); totalGrams += grams; itemsText += grams === WHOLE_PIZZA_REFERENCE_GRAMS ? `• ${pizza.name} — Pizza întreagă (≈64 LEI*)\n` : `• ${pizza.name} — ${grams}g (${money(price)} LEI)\n`; }
    const pizzaTotal=cartPizzaTotal(), sauceTotal=saucesTotal(), grand=pizzaTotal+sauceTotal;
    let deliveryStatus = 'Ridicare personală';
    if (type === 'Livrare la domiciliu') { const threshold=zone==='Piatra Neamț'?PIATRA_FREE_DELIVERY_MIN:OUTSIDE_FREE_DELIVERY_MIN; deliveryStatus = grand >= threshold ? 'Livrare gratuită' : (zone==='Piatra Neamț' ? `Sub pragul orientativ de ${threshold} LEI` : 'Cost livrare de confirmat'); }
    let message = `🍕 *COMANDĂ NOUĂ - PIZZERIA GONDOLA*\n📍 *B-dul Decebal nr. 35, Piatra Neamț*\n--------------------------------------\n${itemsText}`;
    if (sauces.length) {
        const saucesText = sauces.map(sauce => `${sauce.quantity}× ${sauce.name}`).join(', ');
        message += `\n🥫 *Sosuri:* ${saucesText} (${money(sauceTotal)} LEI)\n`;
    }
    message += `--------------------------------------\n⚖️ *Gramaj estimativ:* ${totalGrams} g\n💰 *Pizza:* ${money(pizzaTotal)} LEI\n🥫 *Sosuri:* ${money(sauceTotal)} LEI\n💳 *Total estimativ:* ${money(grand)} LEI\n`;
    message += `\n👤 *Client:* ${name}\n🚗 *Primire:* ${type}\n`;
    if (type === 'Livrare la domiciliu') message += `📌 *Zona:* ${zone}\n🏠 *Adresă:* ${addr}\n🚚 *Livrare:* ${deliveryStatus}\n`;
    message += `💵 *Plată:* ${payment}\n`;
    if (notes) message += `📝 *Mențiuni:* ${notes}\n`;
    message += `\n*Notă:* Pentru pizza întreagă, prețul este orientativ; greutatea reală poate varia cu aproximativ ±100g, iar prețul final se confirmă după cântărire.`;
    window.open(`https://wa.me/${PIZZERIA_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
});

document.addEventListener("DOMContentLoaded", () => { initHeroVideoVisibility(); renderProducts(); renderSauceQuantities(); syncDeliveryFields(); });
