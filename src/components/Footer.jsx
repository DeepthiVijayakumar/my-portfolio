import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
            <p>© {new Date().getFullYear()} Deepthi V S. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
