import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <a href="https://www.linkedin.com/in/deepthivs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>LinkedIn</a>
                <a href="https://github.com/DeepthiVijayakumar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>GitHub</a>
                <a href="/resume.pdf" download="Deepthi_VS_Resume.pdf" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Resume</a>
            </div>
            <p>© {new Date().getFullYear()} Deepthi V S. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
