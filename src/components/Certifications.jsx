import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaStar, FaCheckCircle, FaMicrosoft } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
    const certs = [
        {
            title: "ServiceNow",
            subtitle: "Certified System Administrator",
            icon: <FaCertificate />
        },
        {
            title: "Microsoft Azure",
            subtitle: "Fundamentals (AZ-900)",
            icon: <FaMicrosoft />
        },
        {
            title: "Power Platform",
            subtitle: "Fundamentals (PL-900)",
            icon: <FaMicrosoft />
        },
        {
            title: "Vskills Certified",
            subtitle: "Selenium Professional & Accessibility Testing",
            icon: <FaCheckCircle />
        }
    ];

    const awards = [
        {
            title: "Pinnacle Award",
            subtitle: "Accenture (High Performance)",
            icon: <FaTrophy />,
            type: "award"
        },
        {
            title: "Wall of Fame",
            subtitle: "Accenture (2 Consecutive Quarters)",
            icon: <FaStar />,
            type: "award"
        }
    ];

    return (
        <section id="certifications" className="section bg-tertiary">
            <div className="container">
                <h2 className="section-title">Certifications & Awards</h2>

                <div className="certs-grid">
                    {/* Certifications */}
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cert-card"
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3>{cert.title}</h3>
                            <p>{cert.subtitle}</p>
                        </motion.div>
                    ))}

                    {/* Awards */}
                    {awards.map((award, index) => (
                        <motion.div
                            key={`award-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 4) * 0.1 }}
                            className="cert-card award-card"
                        >
                            <div className="cert-icon award-icon">{award.icon}</div>
                            <h3>{award.title}</h3>
                            <p>{award.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
