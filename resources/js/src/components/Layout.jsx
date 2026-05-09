import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ language, onChangeLanguage }) {
    return (
        <div className="venato-app">
            <Header language={language} onChangeLanguage={onChangeLanguage} />
            <Outlet />
            <Footer />
        </div>
    );
}
