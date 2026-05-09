import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MenuPage from './pages/MenuPage';
import SimplePage from './pages/SimplePage';

export default function App() {
    const [language, setLanguage] = React.useState('fr');

    React.useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    return (
        <Routes>
            <Route element={<Layout language={language} onChangeLanguage={setLanguage} />}>
                <Route index element={<MenuPage language={language} />} />
                <Route path="/our-story" element={<SimplePage title="Our Story" />} />
                <Route path="/gallery" element={<SimplePage title="Gallery" />} />
                <Route path="/reservations" element={<SimplePage title="Reservations" />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
