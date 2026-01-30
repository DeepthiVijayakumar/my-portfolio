import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Section.css'; // Shared section styles

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-content"
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="about-grid">
                        <div className="about-text">
                            <p className="lead">
                                Automation Test Engineer with 5 years of experience in designing, developing, and maintaining robust automation frameworks for web applications.
                            </p>
                            <p>
                                I specialize in <strong>Selenium (Java), TestNG, Cucumber, API testing</strong>, and <strong>Azure DevOps CI/CD pipelines</strong>.
                                My proven track record includes improving test coverage, reducing regression effort, ensuring WCAG 2.0 compliance, and supporting product-quality releases for enterprise environments.
                            </p>
                        </div>
                        <div className="about-highlights">
                            <div className="highlight-card">
                                <h3>Education</h3>
                                <p>B.E. Electronics & Communication</p>
                                <span className="subtitle">Saveetha Engineering College, Chennai</span>
                                <span className="year-badge">2016 – 2020</span>
                            </div>
                            <div className="highlight-card">
                                <h3>Languages</h3>
                                <p>English, Tamil, Malayalam, Hindi</p>
                            </div>
                            <div className="highlight-card">
                                <h3>Location</h3>
                                <p>Chennai, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
