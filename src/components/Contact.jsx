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

                    <a href="https://www.linkedin.com/in/deepthivs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/DeepthiVijayakumar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
