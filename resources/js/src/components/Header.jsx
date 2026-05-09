import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function LanguageToggle({ language, onChangeLanguage }) {
    return (
        <div className="venato-lang">
            <button
                type="button"
                className={language === 'fr' ? 'venato-lang__btn is-active' : 'venato-lang__btn'}
                onClick={() => onChangeLanguage('fr')}
            >
                FR
            </button>
            <button
                type="button"
                className={language === 'ar' ? 'venato-lang__btn is-active' : 'venato-lang__btn'}
                onClick={() => onChangeLanguage('ar')}
            >
                AR
            </button>
        </div>
    );
}

function Drawer({ open, onClose, language, onChangeLanguage }) {
    if (!open) return null;

    return (
        <div className="venato-drawer" role="dialog" aria-modal="true">
            <button type="button" className="venato-drawer__backdrop" onClick={onClose} aria-label="Close" />
            <div className="venato-drawer__panel">
                <div className="venato-drawer__top">
                    <div className="venato-logo venato-logo--sm">VENATO</div>
                    <LanguageToggle language={language} onChangeLanguage={onChangeLanguage} />
                </div>
                <div className="venato-drawer__links">
                    <NavLink to="/" className="venato-drawer__link" onClick={onClose}>
                        Menu
                    </NavLink>
                    <NavLink to="/our-story" className="venato-drawer__link" onClick={onClose}>
                        Our Story
                    </NavLink>
                    <NavLink to="/gallery" className="venato-drawer__link" onClick={onClose}>
                        Gallery
                    </NavLink>
                    <NavLink to="/reservations" className="venato-drawer__link" onClick={onClose}>
                        Reservations
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default function Header({ language, onChangeLanguage }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            <header className="venato-header">
                <div className="venato-header__inner">
                    <button
                        type="button"
                        className="venato-hamburger"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Open menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <nav className="venato-nav">
                        <NavLink to="/" end className="venato-nav__link">
                            Menu
                        </NavLink>
                        <NavLink to="/our-story" className="venato-nav__link">
                            Our Story
                        </NavLink>
                        <NavLink to="/gallery" className="venato-nav__link">
                            Gallery
                        </NavLink>
                        <NavLink to="/reservations" className="venato-nav__link">
                            Reservations
                        </NavLink>
                    </nav>

                    <Link to="/" className="venato-logo" aria-label="VENATO Home">
                        VENATO
                        <span className="venato-logo__sub">RESTO • CAFÉ • GLACE</span>
                    </Link>

                    <div className="venato-header__right">
                        <LanguageToggle language={language} onChangeLanguage={onChangeLanguage} />
                        <button type="button" className="venato-iconbtn" aria-label="Info">
                            i
                        </button>
                    </div>
                </div>
            </header>
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                language={language}
                onChangeLanguage={onChangeLanguage}
            />
        </>
    );
}
