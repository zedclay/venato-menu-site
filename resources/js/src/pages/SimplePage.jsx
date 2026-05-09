import React from 'react';

export default function SimplePage({ title }) {
    return (
        <main className="venato-page">
            <div className="venato-container">
                <h1 className="venato-h1">{title}</h1>
                <p className="venato-muted">Page en cours de préparation.</p>
            </div>
        </main>
    );
}
