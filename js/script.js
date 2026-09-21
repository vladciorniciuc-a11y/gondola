const PRICE_PER_100G = 5.30;
const WHOLE_PIZZA_REFERENCE_GRAMS = 1200;
const SAUCE_PRICES = {
    "Sos roșii dulce": 2.00,
    "Sos roșii picant": 2.00,
    "Sos maioneză cu usturoi": 1.00
};
const PIZZERIA_WHATSAPP = "40747216161";
const PIATRA_FREE_DELIVERY_MIN = 64.00;
const OUTSIDE_FREE_DELIVERY_MIN = 100.00;

const pizzas = [
    {
        id: 1,
        name: "Pizza de post",
        badge: "Post / Vegetarian",
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
        ingredients: "Mozzarella, gorgonzola, brânză afumată și parmezan.",
        allergens: "Gluten, Ouă, Lapte",
        nutritionAnchor: "pizza-4-formagi",
        videoPoster: "images/posters/pizza_4_formaggi.webp",
        videoSrc: "videos/pizza_4_formaggi.mp4"
    },
    {
        id: 7,
        name: "Pizza cu ton",
        badge: "Mediteranean",
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

let cart = {};
let selectedGrams = {};
pizzas.forEach(p => selectedGrams[p.id] = 300);

function saveCartToStorage() {
    try {
        localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
        localStorage.setItem(STORAGE_SAUCES_KEY, JSON.stringify(sauceQuantities));
    } catch (_) {}
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem(STORAGE_CART_KEY);
        if (savedCart) {
            const parsed = JSON.parse(savedCart);
            if (parsed && typeof parsed === "object") cart = parsed;
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
    } catch (_) {}
}

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
        .map(([name, quantity]) => {
            const unitPrice = SAUCE_PRICES[name] ?? 2.00;
            return { name, quantity, unitPrice, subtotal: quantity * unitPrice };
        });
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
    saveCartToStorage();
    renderSauceQuantities();
    renderModalCart();
};

function renderProducts() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";
    pizzas.forEach((pizza, index) => {
        const isEven = index % 2 === 1;
        const grams = selectedGrams[pizza.id];
        const whole = grams === WHOLE_PIZZA_REFERENCE_GRAMS;
        const card = document.createElement("div");
        card.id = `product-${pizza.id}`;
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
                                <span class="text-[11px] text-gondola-muted font-semibold flex items-center gap-1"><svg class="icon text-gondola-accent" aria-hidden="true"><use href="#icon-scale-balanced"></use></svg> Ajustare 100g:</span>
                                <div class="flex items-center gap-1.5"><button type="button" onclick="stepGrams(${pizza.id},-100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder font-black" aria-label="Scade 100g din cantitatea de ${pizza.name}">−</button><span id="counter-grams-${pizza.id}" class="text-xs font-mono font-bold text-gondola-charcoal min-w-16 text-center">${grams}g</span><button type="button" onclick="stepGrams(${pizza.id},100)" class="w-7 h-7 rounded-lg bg-gondola-cardBg border border-gondola-cardBorder text-gondola-primary font-black" aria-label="Adaugă 100g la cantitatea de ${pizza.name}">+</button></div>
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

/*
 * Control inteligent video produse:
 * - Flux unic activ: un singur video descarcă și rulează la un moment dat (zero congestie/freeze pe desktop);
 * - Prag 1 (Start la >= 50% vizibil): pornește după stabilizare la scroll (80ms);
 * - Prag 2 (Pauză la < 20% vizibil): se oprește păstrând secunda curentă (fără resetare/fără reload);
 * - La scroll up înapoi peste el, reia redarea lin exact de unde a rămas;
 * - Fără loop: la final îngheață pe ultimul cadru și afișează butonul elegant de Replay.
 */
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

    // Start video on interaction or after idle delay (protects initial LCP and FCP)
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
    saveCartToStorage();
    updateCartUI();
    const btn = evt?.currentTarget;
    if (btn) { const original = btn.innerHTML; btn.innerHTML = `<svg class="icon text-emerald-400" aria-hidden="true"><use href="#icon-check"></use></svg> Adăugat (${displaySelection(grams)})`; btn.classList.add('bg-emerald-700'); setTimeout(() => { btn.innerHTML = original; btn.classList.remove('bg-emerald-700'); }, 1100); }
};

const resetConfirmModal = document.getElementById("reset-confirm-modal");
window.openResetModal = function() { if (Object.keys(cart).length) { resetConfirmModal.classList.remove("hidden"); resetConfirmModal.classList.add("flex"); } };
window.closeResetModal = function() { resetConfirmModal.classList.add("hidden"); resetConfirmModal.classList.remove("flex"); };
window.confirmResetCart = function() {
    cart = {};
    Object.keys(sauceQuantities).forEach(name => sauceQuantities[name] = 0);
    try {
        localStorage.removeItem(STORAGE_CART_KEY);
        localStorage.removeItem(STORAGE_SAUCES_KEY);
        localStorage.removeItem("gondola_cutlery_v1");
    } catch (_) {}
    renderSauceQuantities();
    updateCartUI();
    renderModalCart();
    closeResetModal();
    closeModal();
};
window.modifyCartItem = function(pizzaId, deltaGrams) {
    if (!cart[pizzaId]) return;
    cart[pizzaId] += deltaGrams;
    if (cart[pizzaId] <= 0) delete cart[pizzaId];
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
        const saucesText = sauces.map(sauce => `${sauce.quantity}× ${sauce.name} (~70g)`).join(', ');
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

document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderProducts();
    renderSauceQuantities();
    syncDeliveryFields();
    updateCartUI();
    // Start hero video after first render so network is 100% available for LCP
    if ("requestIdleCallback" in window) {
        requestIdleCallback(initHeroVideoVisibility);
    } else {
        setTimeout(initHeroVideoVisibility, 300);
    }
});
