import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    // You only mentioned "2 projects" in the last message but didn't give details. 
    // I will add placeholders for now.
    const projects = [
        {
            title: "Service Now Enterprise Asset Management",
            role: "Quality Engineering Senior Analyst",
            desc: "Designed and executed E2E automation scenarios for ServiceNow applications, covering frontend and backend workflows to ensure system reliability.",
            tech: ["Selenium", "Java", "ServiceNow", "Azure DevOps"]
        },
        {
            title: "My Competency",
            role: "Quality Engineering Senior Analyst",
            desc: "Developed and maintained robust automation frameworks using Selenium & TestNG, significantly reducing manual regression effort and ensuring WCAG compliance.",
            tech: ["Selenium", "TestNG", "Maven", "WCAG 2.0"]
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="project-wrapper"
                        >
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                scale={1.02}
                                transitionSpeed={2500}
                                className="tilt-card"
                            >
                                <div
                                    className="project-card"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        padding: '2rem',
                                        borderRadius: '16px',
                                        border: '1px solid var(--border-color)',
                                        height: '100%'
                                    }}
                                >
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '1rem', fontWeight: '500' }}>{project.role}</span>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.desc}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{
                                                fontSize: '0.8rem',
                                                padding: '4px 10px',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                                borderRadius: '20px',
                                                color: 'var(--accent-secondary)'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
