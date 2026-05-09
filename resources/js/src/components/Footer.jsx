import React from 'react';

export default function Footer() {
    return (
        <footer className="venato-footer">
            <div className="venato-footer__inner">
                <div className="venato-footer__brand">
                    <div className="venato-footer__logo">VENATO</div>
                    <div className="venato-footer__copy">© {new Date().getFullYear()} VENATO ALGERIA. EXQUISITE DINING EXPERIENCE.</div>
                </div>

                <div className="venato-footer__links">
                    <a href="#" className="venato-footer__link">
                        PROVENANCE
                    </a>
                    <a href="#" className="venato-footer__link">
                        ACCESSIBILITY
                    </a>
                    <a href="#" className="venato-footer__link">
                        LEGAL
                    </a>
                    <a href="#" className="venato-footer__link">
                        CONTACT
                    </a>
                </div>
            </div>

            <div className="venato-footer__mobile">
                <button type="button" className="venato-itineraire">
                    Itinéraire
                </button>
                <div className="venato-social">
                    <a className="venato-social__link" href="#">
                        Contact
                    </a>
                    <a className="venato-social__link" href="#">
                        Instagram
                    </a>
                    <a className="venato-social__link" href="#">
                        Facebook
                    </a>
                </div>
                <div className="venato-footer__mobilecopy">© VENATO Algiers. Tous droits réservés.</div>
            </div>
        </footer>
    );
}
