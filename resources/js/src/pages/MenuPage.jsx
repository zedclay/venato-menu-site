import React from 'react';
import axios from 'axios';

const STATIC_CATEGORIES = [
    { id: 1, slug: 'resto', name_fr: 'Resto', name_ar: 'مطعم', sort_order: 10 },
    { id: 2, slug: 'pizza', name_fr: 'Pizza', name_ar: 'بيتزا', sort_order: 20 },
    { id: 3, slug: 'burgers', name_fr: 'Burgers', name_ar: 'برغر', sort_order: 30 },
    { id: 4, slug: 'tacos', name_fr: 'Tacos', name_ar: 'تاكوس', sort_order: 40 },
    { id: 5, slug: 'sandwichs', name_fr: 'Sandwichs', name_ar: 'سندويتش', sort_order: 50 },
    { id: 6, slug: 'plats', name_fr: 'Plats', name_ar: 'أطباق', sort_order: 60 },
    { id: 7, slug: 'salades', name_fr: 'Salades', name_ar: 'سلطات', sort_order: 70 },
    { id: 8, slug: 'cafe', name_fr: 'Café', name_ar: 'قهوة', sort_order: 80 },
    { id: 9, slug: 'boissons', name_fr: 'Boissons', name_ar: 'مشروبات', sort_order: 90 },
    { id: 10, slug: 'glace', name_fr: 'Glace', name_ar: 'آيس كريم', sort_order: 100 },
    { id: 11, slug: 'desserts', name_fr: 'Desserts', name_ar: 'حلويات', sort_order: 110 },
];

const STATIC_ITEMS = [
    {
        id: 101,
        category: { slug: 'burgers' },
        name_fr: 'Burger Classique',
        description_fr: 'Bœuf haché frais, cheddar affiné, oignons caramélisés, sauce maison.',
        price_da: 850,
        image_url:
            'https://images.pexels.com/photos/9268667/pexels-photo-9268667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_popular: true,
    },
    {
        id: 102,
        category: { slug: 'glace' },
        name_fr: 'Coupe Glacée Signature',
        description_fr: '3 boules au choix, coulis, éclats de noisettes torréfiées, chantilly.',
        price_da: 600,
        image_url:
            'https://images.pexels.com/photos/29989975/pexels-photo-29989975/free-photo-of-gourmet-ice-cream-dessert-with-edible-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_popular: true,
        is_speciality: true,
    },
    {
        id: 103,
        category: { slug: 'pizza' },
        name_fr: 'Pizza Margherita',
        description_fr: 'Sauce tomate, mozzarella fraîche, basilic, huile d’olive extra vierge.',
        price_da: 700,
        image_url:
            'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_popular: true,
    },
    {
        id: 104,
        category: { slug: 'plats' },
        name_fr: 'Entrecôte Grillée',
        description_fr: 'Viande sélectionnée, cuisson au choix, frites maison et salade.',
        price_da: 1800,
        image_url:
            'https://images.pexels.com/photos/7944334/pexels-photo-7944334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_speciality: true,
    },
    {
        id: 105,
        category: { slug: 'salades' },
        name_fr: 'Salade Vénato',
        description_fr: 'Mix de salades, poulet grillé, avocat, tomates cerises, vinaigrette.',
        price_da: 750,
        image_url:
            'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 106,
        category: { slug: 'cafe' },
        name_fr: 'Cappuccino Royal',
        description_fr: 'Espresso double, mousse de lait onctueuse, soupçon de cacao.',
        price_da: 350,
        image_url:
            'https://images.pexels.com/photos/14930389/pexels-photo-14930389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 107,
        category: { slug: 'plats' },
        name_fr: 'Poulet à la Crème',
        description_fr: 'Poulet tendre, sauce crème champignons, riz parfumé.',
        price_da: 1300,
        image_url:
            'https://images.pexels.com/photos/9738994/pexels-photo-9738994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_new: true,
    },
    {
        id: 108,
        category: { slug: 'plats' },
        name_fr: 'Pâtes Alfredo',
        description_fr: 'Sauce crémeuse, parmesan, touche de poivre noir.',
        price_da: 950,
        image_url:
            'https://images.pexels.com/photos/5639993/pexels-photo-5639993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_vegetarian: true,
    },
    {
        id: 109,
        category: { slug: 'pizza' },
        name_fr: 'Pizza Pepperoni',
        description_fr: 'Sauce tomate, mozzarella, pepperoni, origan.',
        price_da: 900,
        image_url:
            'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 110,
        category: { slug: 'pizza' },
        name_fr: 'Pizza 4 Fromages',
        description_fr: 'Mozzarella, gorgonzola, parmesan, emmental.',
        price_da: 1000,
        image_url:
            'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_vegetarian: true,
    },
    {
        id: 111,
        category: { slug: 'burgers' },
        name_fr: 'Burger Signature',
        description_fr: 'Bœuf, cheddar, sauce signature, pain brioché.',
        price_da: 1200,
        image_url:
            'https://images.pexels.com/photos/12325012/pexels-photo-12325012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_speciality: true,
    },
    {
        id: 112,
        category: { slug: 'burgers' },
        name_fr: 'Burger Chicken Crispy',
        description_fr: 'Poulet croustillant, salade, mayo maison.',
        price_da: 950,
        image_url:
            'https://images.pexels.com/photos/12325012/pexels-photo-12325012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_new: true,
    },
    {
        id: 113,
        category: { slug: 'tacos' },
        name_fr: 'Tacos Poulet',
        description_fr: 'Poulet, sauce fromagère, frites, épices.',
        price_da: 800,
        image_url:
            'https://images.pexels.com/photos/4508965/pexels-photo-4508965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 114,
        category: { slug: 'tacos' },
        name_fr: 'Tacos Viande Hachée',
        description_fr: 'Viande hachée, fromage, oignons, sauce maison.',
        price_da: 900,
        image_url:
            'https://images.pexels.com/photos/4508965/pexels-photo-4508965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 115,
        category: { slug: 'sandwichs' },
        name_fr: 'Sandwich Thon',
        description_fr: 'Thon, œuf, crudités, sauce légère.',
        price_da: 650,
        image_url:
            'https://images.pexels.com/photos/15278331/pexels-photo-15278331/free-photo-of-delicious-sandwiches-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 116,
        category: { slug: 'sandwichs' },
        name_fr: 'Panini Poulet',
        description_fr: 'Poulet, fromage, sauce basilic.',
        price_da: 700,
        image_url:
            'https://images.pexels.com/photos/6416558/pexels-photo-6416558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_new: true,
    },
    {
        id: 117,
        category: { slug: 'salades' },
        name_fr: 'Salade César',
        description_fr: 'Laitue romaine, poulet, croûtons, parmesan, sauce César.',
        price_da: 1400,
        image_url:
            'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 118,
        category: { slug: 'salades' },
        name_fr: 'Salade Grecque',
        description_fr: 'Tomates, concombre, feta, olives, origan.',
        price_da: 900,
        image_url:
            'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_vegetarian: true,
    },
    {
        id: 119,
        category: { slug: 'cafe' },
        name_fr: 'Latte Macchiato',
        description_fr: 'Lait chaud, espresso, mousse légère.',
        price_da: 400,
        image_url:
            'https://images.pexels.com/photos/14930389/pexels-photo-14930389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 120,
        category: { slug: 'boissons' },
        name_fr: 'Jus d’Orange Frais',
        description_fr: 'Pressé minute.',
        price_da: 300,
        image_url:
            'https://images.pexels.com/photos/4958852/pexels-photo-4958852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_vegetarian: true,
    },
    {
        id: 121,
        category: { slug: 'boissons' },
        name_fr: 'Mojito (Sans alcool)',
        description_fr: 'Menthe fraîche, citron vert, eau gazeuse.',
        price_da: 450,
        image_url:
            'https://images.pexels.com/photos/11937508/pexels-photo-11937508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_new: true,
        is_vegetarian: true,
    },
    {
        id: 122,
        category: { slug: 'desserts' },
        name_fr: 'Tiramisu',
        description_fr: 'Crème mascarpone, café, cacao.',
        price_da: 550,
        image_url:
            'https://images.pexels.com/photos/6025814/pexels-photo-6025814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_popular: true,
    },
    {
        id: 123,
        category: { slug: 'desserts' },
        name_fr: 'Cheesecake',
        description_fr: 'Coulis fruits rouges.',
        price_da: 600,
        image_url:
            'https://images.pexels.com/photos/6025814/pexels-photo-6025814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 124,
        category: { slug: 'glace' },
        name_fr: 'Glace Vanille',
        description_fr: '2 boules, coulis au choix.',
        price_da: 400,
        image_url:
            'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        is_vegetarian: true,
    },
];

function formatPrice(priceDa) {
    const value = typeof priceDa === 'number' ? priceDa : Number(priceDa || 0);
    return `${value} DA`;
}

function addRevealObservers() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const elements = Array.from(document.querySelectorAll('.venato-reveal'));

    if (reduceMotion) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return () => {};
    }

    if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return () => {};
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: '120px 0px' },
    );

    elements.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        observer.observe(el);
    });

    return () => observer.disconnect();
}

function getBadge(item) {
    if (item.is_popular) return { label: 'POPULAIRE', tone: 'gold' };
    if (item.is_speciality) return { label: 'SPÉCIALITÉ', tone: 'teal' };
    if (item.is_new) return { label: 'NOUVEAU', tone: 'teal' };
    if (item.is_vegetarian) return { label: 'VÉGÉTARIEN', tone: 'teal' };
    return null;
}

function Chip({ active, children, onClick }) {
    return (
        <button type="button" className={active ? 'venato-chip is-active' : 'venato-chip'} onClick={onClick}>
            {children}
        </button>
    );
}

function CategoryTab({ active, children, onClick }) {
    return (
        <button type="button" className={active ? 'venato-cat is-active' : 'venato-cat'} onClick={onClick}>
            {children}
        </button>
    );
}

function FeaturedCard({ item, language, revealDelayMs = 0 }) {
    const badge = getBadge(item);
    const name = language === 'ar' && item.name_ar ? item.name_ar : item.name_fr;
    const description =
        language === 'ar' && item.description_ar ? item.description_ar : item.description_fr || '';

    return (
        <article className="venato-featured venato-reveal" style={{ '--delay': `${revealDelayMs}ms` }}>
            <div className="venato-featured__imgwrap">
                {badge ? (
                    <div className={badge.tone === 'gold' ? 'venato-badge is-gold' : 'venato-badge'}>{badge.label}</div>
                ) : null}
                {item.image_url ? <img className="venato-featured__img" src={item.image_url} alt={name} /> : null}
            </div>
            <div className="venato-featured__body">
                <div className="venato-featured__row">
                    <div className="venato-cardtitle">{name}</div>
                    <div className="venato-price">{formatPrice(item.price_da)}</div>
                </div>
                <div className="venato-carddesc">{description}</div>
            </div>
        </article>
    );
}

function MenuItemCard({ item, language, revealDelayMs = 0 }) {
    const name = language === 'ar' && item.name_ar ? item.name_ar : item.name_fr;
    const description =
        language === 'ar' && item.description_ar ? item.description_ar : item.description_fr || '';
    const badge = getBadge(item);

    return (
        <article className="venato-item venato-reveal" style={{ '--delay': `${revealDelayMs}ms` }}>
            <div className="venato-item__imgwrap">
                {item.image_url ? <img className="venato-item__img" src={item.image_url} alt={name} /> : null}
            </div>
            <div className="venato-item__body">
                <div className="venato-item__head">
                    <div>
                        <div className="venato-item__name">{name}</div>
                        {badge ? <div className="venato-item__meta">{badge.label}</div> : null}
                    </div>
                    <div className="venato-price">{formatPrice(item.price_da)}</div>
                </div>
                <div className="venato-item__desc">{description}</div>
            </div>
        </article>
    );
}

function FeaturedSkeleton({ revealDelayMs = 0 }) {
    return (
        <article className="venato-featured venato-skeleton venato-reveal" style={{ '--delay': `${revealDelayMs}ms` }}>
            <div className="venato-featured__imgwrap" />
            <div className="venato-featured__body">
                <div className="venato-featured__row">
                    <div className="venato-skel venato-skel--title" />
                    <div className="venato-skel venato-skel--price" />
                </div>
                <div className="venato-skel venato-skel--line" />
                <div className="venato-skel venato-skel--line is-short" />
            </div>
        </article>
    );
}

function ItemSkeleton({ revealDelayMs = 0 }) {
    return (
        <article className="venato-item venato-skeleton venato-reveal" style={{ '--delay': `${revealDelayMs}ms` }}>
            <div className="venato-item__imgwrap" />
            <div className="venato-item__body">
                <div className="venato-item__head">
                    <div>
                        <div className="venato-skel venato-skel--title" />
                        <div className="venato-skel venato-skel--meta" />
                    </div>
                    <div className="venato-skel venato-skel--price" />
                </div>
                <div className="venato-skel venato-skel--line" />
                <div className="venato-skel venato-skel--line is-short" />
            </div>
        </article>
    );
}

export default function MenuPage({ language }) {
    const [categories, setCategories] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState('');
    const [filter, setFilter] = React.useState('all');
    const [search, setSearch] = React.useState('');
    const [debouncedSearch, setDebouncedSearch] = React.useState('');

    const [isStatic, setIsStatic] = React.useState(import.meta.env.VITE_STATIC_MODE === '1');
    const [staticPage, setStaticPage] = React.useState(1);

    const [featured, setFeatured] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [meta, setMeta] = React.useState({ current_page: 1, last_page: 1, total: 0 });
    const [loading, setLoading] = React.useState(false);
    const [loadingMore, setLoadingMore] = React.useState(false);

    React.useEffect(() => {
        return addRevealObservers();
    }, [featured, items, loading, loadingMore]);

    React.useEffect(() => {
        const handle = setTimeout(() => setDebouncedSearch(search), 250);
        return () => clearTimeout(handle);
    }, [search]);

    React.useEffect(() => {
        let cancelled = false;

        if (isStatic) {
            setCategories(STATIC_CATEGORIES);
        } else {
            axios
                .get('/api/categories')
                .then((res) => {
                    if (cancelled) return;
                    setCategories(res.data?.data ?? []);
                })
                .catch(() => {
                    if (cancelled) return;
                    setIsStatic(true);
                    setCategories(STATIC_CATEGORIES);
                });
        }

        return () => {
            cancelled = true;
        };
    }, [isStatic]);

    const queryParams = React.useMemo(() => {
        const params = {};
        if (activeCategory) params.category = activeCategory;
        if (debouncedSearch) params.q = debouncedSearch;
        if (filter !== 'all') params.filter = filter;
        return params;
    }, [activeCategory, debouncedSearch, filter]);

    React.useEffect(() => {
        setStaticPage(1);
    }, [activeCategory, debouncedSearch, filter]);

    const staticFiltered = React.useMemo(() => {
        if (!isStatic) return [];

        const q = debouncedSearch.trim().toLowerCase();
        const categorySlug = activeCategory;

        return STATIC_ITEMS.filter((it) => {
            if (categorySlug && it.category?.slug !== categorySlug) return false;

            if (filter === 'popular' && !it.is_popular) return false;
            if (filter === 'new' && !it.is_new) return false;
            if (filter === 'speciality' && !it.is_speciality) return false;
            if (filter === 'vegetarian' && !it.is_vegetarian) return false;

            if (q) {
                const hay = `${it.name_fr ?? ''} ${it.description_fr ?? ''} ${it.name_ar ?? ''} ${it.description_ar ?? ''}`
                    .toLowerCase()
                    .normalize('NFKD');
                return hay.includes(q);
            }

            return true;
        }).sort((a, b) => {
            const aw = (a.is_popular ? 8 : 0) + (a.is_speciality ? 4 : 0) + (a.is_new ? 2 : 0);
            const bw = (b.is_popular ? 8 : 0) + (b.is_speciality ? 4 : 0) + (b.is_new ? 2 : 0);
            if (bw !== aw) return bw - aw;
            return String(a.name_fr || '').localeCompare(String(b.name_fr || ''));
        });
    }, [activeCategory, debouncedSearch, filter, isStatic]);

    const staticMeta = React.useMemo(() => {
        if (!isStatic) return null;
        const total = staticFiltered.length;
        const perPage = 9;
        const lastPage = Math.max(1, Math.ceil(total / perPage));
        const currentPage = Math.min(staticPage, lastPage);
        return { current_page: currentPage, last_page: lastPage, per_page: perPage, total };
    }, [isStatic, staticFiltered.length, staticPage]);

    const staticItems = React.useMemo(() => {
        if (!isStatic) return [];
        const perPage = 9;
        const end = staticPage * perPage;
        return staticFiltered.slice(0, end);
    }, [isStatic, staticFiltered, staticPage]);

    const staticFeatured = React.useMemo(() => {
        if (!isStatic) return [];
        return STATIC_ITEMS.filter((it) => it.is_popular).slice(0, 3);
    }, [isStatic]);

    React.useEffect(() => {
        let cancelled = false;
        if (!isStatic) {
            setLoading(true);
            setItems([]);

            axios
                .get('/api/menu-items', { params: { ...queryParams, per_page: 9, page: 1 } })
                .then((res) => {
                    if (cancelled) return;
                    setItems(res.data?.data ?? []);
                    setMeta(res.data?.meta ?? { current_page: 1, last_page: 1, total: 0 });
                })
                .catch(() => {
                    if (cancelled) return;
                    setIsStatic(true);
                })
                .finally(() => {
                    if (cancelled) return;
                    setLoading(false);
                });
        } else {
            setLoading(true);
            const t = window.setTimeout(() => {
                if (cancelled) return;
                setItems(staticItems);
                setMeta(staticMeta ?? { current_page: 1, last_page: 1, total: 0 });
                setLoading(false);
            }, 450);

            return () => {
                cancelled = true;
                window.clearTimeout(t);
            };
        }

        return () => {
            cancelled = true;
        };
    }, [isStatic, queryParams, staticItems, staticMeta]);

    React.useEffect(() => {
        let cancelled = false;

        if (isStatic) {
            setFeatured(staticFeatured);
        } else {
            axios
                .get('/api/menu-items', {
                    params: {
                        ...queryParams,
                        filter: 'popular',
                        per_page: 3,
                        page: 1,
                    },
                })
                .then((res) => {
                    if (cancelled) return;
                    setFeatured(res.data?.data ?? []);
                })
                .catch(() => {
                    if (cancelled) return;
                    setIsStatic(true);
                    setFeatured(staticFeatured);
                });
        }

        return () => {
            cancelled = true;
        };
    }, [isStatic, queryParams, staticFeatured]);

    const canLoadMore = meta.current_page < meta.last_page;

    const loadMore = () => {
        if (!canLoadMore || loadingMore) return;
        if (isStatic) {
            setLoadingMore(true);
            window.setTimeout(() => {
                setStaticPage((p) => p + 1);
                setLoadingMore(false);
            }, 350);
            return;
        }
        setLoadingMore(true);
        const nextPage = meta.current_page + 1;

        axios
            .get('/api/menu-items', { params: { ...queryParams, per_page: 9, page: nextPage } })
            .then((res) => {
                setItems((prev) => [...prev, ...(res.data?.data ?? [])]);
                setMeta(res.data?.meta ?? meta);
            })
            .finally(() => setLoadingMore(false));
    };

    return (
        <main className="venato-page">
            <div className="venato-container">
                <div className="venato-status venato-reveal" style={{ '--delay': '0ms' }}>
                    <div className="venato-status__dot" />
                    <div className="venato-status__text">
                        <div className="venato-status__open">OUVERT MAINTENANT</div>
                        <div className="venato-status__loc">Algiers, Algérie</div>
                    </div>
                </div>

                <div className="venato-search venato-reveal" style={{ '--delay': '60ms' }}>
                    <span className="venato-search__icon">⌕</span>
                    <input
                        className="venato-search__input"
                        placeholder="Rechercher un plat, café, dessert…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="venato-chips venato-reveal" style={{ '--delay': '120ms' }}>
                    <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
                        Tous
                    </Chip>
                    <Chip active={filter === 'popular'} onClick={() => setFilter('popular')}>
                        Populaire
                    </Chip>
                    <Chip active={filter === 'new'} onClick={() => setFilter('new')}>
                        Nouveau
                    </Chip>
                    <Chip active={filter === 'speciality'} onClick={() => setFilter('speciality')}>
                        Spécialité
                    </Chip>
                    <Chip active={filter === 'vegetarian'} onClick={() => setFilter('vegetarian')}>
                        Végétarien
                    </Chip>
                </div>

                <div className="venato-cats venato-reveal" style={{ '--delay': '180ms' }}>
                    <CategoryTab active={!activeCategory} onClick={() => setActiveCategory('')}>
                        TOUS
                    </CategoryTab>
                    {categories.map((c) => (
                        <CategoryTab key={c.id} active={activeCategory === c.slug} onClick={() => setActiveCategory(c.slug)}>
                            {language === 'ar' && c.name_ar ? c.name_ar : String(c.name_fr).toUpperCase()}
                        </CategoryTab>
                    ))}
                </div>

                <section className="venato-section">
                    <h2 className="venato-h2">Populaire Aujourd&apos;hui</h2>
                    <div className="venato-featuredgrid">
                        {featured.length === 0 && loading
                            ? Array.from({ length: 3 }, (_, i) => <FeaturedSkeleton key={i} revealDelayMs={i * 70} />)
                            : featured.map((it, i) => (
                                  <FeaturedCard key={it.id} item={it} language={language} revealDelayMs={i * 70} />
                              ))}
                    </div>
                </section>

                <section className="venato-section">
                    <div className="venato-section__row">
                        <h2 className="venato-h2">Nos Plats</h2>
                        <div className="venato-muted">{meta.total} items</div>
                    </div>

                    <div className="venato-grid">
                        {loading
                            ? Array.from({ length: 9 }, (_, i) => <ItemSkeleton key={i} revealDelayMs={i * 40} />)
                            : items.map((it, i) => (
                                  <MenuItemCard key={it.id} item={it} language={language} revealDelayMs={i * 40} />
                              ))}
                    </div>

                    <div className="venato-more">
                        <button
                            type="button"
                            className="venato-more__btn"
                            onClick={loadMore}
                            disabled={!canLoadMore || loadingMore}
                        >
                            {loadingMore ? 'Chargement…' : 'Afficher plus'}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
