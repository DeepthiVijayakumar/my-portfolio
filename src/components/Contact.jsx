import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section bg-secondary">
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2 className="section-title">Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:deepthivijay44@gmail.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '3rem' }}>
                    <FaEnvelope /> Say Hello
                </a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="tel:7550134246" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaPhone /> +91 7550134246
                    </a>
                    {/* Add actual links if provided, these are placeholders */}
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}><FaLinkedin /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}><FaGithub /></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
