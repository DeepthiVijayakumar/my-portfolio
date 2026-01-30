import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Automation & Testing",
            icon: <FaLaptopCode />,
            skills: [
                { name: "Selenium (Java)", icon: "☕" }, // Using emojis as fallback/simple icons if specific ones aren't imported to keep file size low, or we can use specific ones.
                // Actually, let's use a cleaner pill design without specific icons for EACH skill to avoid clutter, 
                // BUT we will upgrade the list style to look like 'tech tags' instead of bullets.
            ],
            // Reverting strategy: The user asked to "enhance". 
            // The current simple list <ul> is boring.
            // Let's change the rendering to be a "Flex Wrap" layout of badges.
            simpleSkills: ["Selenium (Java)", "TestNG", "Cucumber (BDD)", "Maven", "Functional Testing", "E2E Testing", "Accessibility (WCAG 2.0)"]
        },
        {
            title: "API & Backend",
            icon: <FaServer />,
            simpleSkills: ["Postman", "REST API Testing", "SQL", "Database Verification"]
        },
        {
            title: "CI/CD & Tools",
            icon: <FaTools />,
            simpleSkills: ["Azure DevOps", "Jenkins", "Git", "ServiceNow", "JIRA"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="skill-card"
                        >
                            <div className="skill-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {category.simpleSkills.map((skill, idx) => (
                                    <span key={idx} style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
