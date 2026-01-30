import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Automation & Testing",
            icon: <FaLaptopCode />,
            skills: ["Selenium (Java)", "TestNG", "Cucumber (BDD)", "Maven", "Functional Testing", "E2E Testing", "Accessibility (WCAG 2.0)"]
        },
        {
            title: "API & Backend",
            icon: <FaServer />,
            skills: ["Postman", "REST API Testing", "SQL"]
        },
        {
            title: "CI/CD & Tools",
            icon: <FaTools />,
            skills: ["Azure DevOps", "Build & Release Pipelines", "Git", "ServiceNow"]
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
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
