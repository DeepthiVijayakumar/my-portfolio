import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-elements">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Deepthi V S</h1>
                    <h2 className="role">Automation Test Engineer <span className="text-accent">&</span> SDET</h2>
                    <p className="bio">
                        Transforming manual processes into robust automation solutions.
                        Specialized in designing scalable frameworks for Web and ServiceNow applications
                        with 5 years of proven experience.
                    </p>

                    <motion.div
                        className="cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Link to="projects" smooth={true} duration={500} className="btn-primary">
                            View Work
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="btn-outline">
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="stats-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="stat">
                            <span className="stat-num">5</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">2</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">5</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
