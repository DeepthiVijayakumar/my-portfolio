import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
    const jobs = [
        {
            title: "Quality Engineering Senior Analyst",
            company: "Accenture Solutions Pvt. Ltd – Chennai",
            period: "Oct 2023 – Jun 2025",
            desc: [
                "Led automation testing for critical user stories using Selenium Java and TestNG, improving regression stability.",
                "Designed and executed E2E automation scenarios for web applications covering frontend and backend workflows.",
                "Performed integration testing for newly introduced features, validating functional accuracy.",
                "Integrated automation suites with Azure DevOps CI/CD pipelines for scheduled executions.",
                "Reviewed automation failures, identified root causes, and collaborated with developers to resolve issues.",
                "Mentored junior testers and conducted knowledge transfer sessions."
            ]
        },
        {
            title: "Quality Engineering Analyst",
            company: "Accenture Solutions Pvt. Ltd – Chennai",
            period: "Nov 2021 – Oct 2023",
            desc: [
                "Developed and maintained automation test scripts using Selenium, Java, TestNG, and Maven.",
                "Executed WCAG 2.0 accessibility testing ensuring compliance with global standards.",
                "Performed API testing using Postman and validated backend data using SQL queries.",
                "Executed automation scripts through Azure DevOps CI/CD pipelines.",
                "Conducted mobile application testing using simulators."
            ]
        },
        {
            title: "Application Development Associate",
            company: "Accenture Solutions Pvt. Ltd – Chennai",
            period: "Nov 2020 – Nov 2021",
            desc: [
                "Participated in UI and functional testing for enterprise web applications.",
                "Designed and implemented automation scripts for UI validation.",
                "Documented defects, tracked automation execution status, and reported quality metrics.",
                "Performed load and stopwatch testing to evaluate application performance.",
                "Trained on SQL and Cucumber framework."
            ]
        }
    ];

    return (
        <section id="experience" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="timeline-item"
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{job.period}</span>
                                <h3>{job.title}</h3>
                                <h4 className="company-name">{job.company}</h4>
                                <ul className="job-desc">
                                    {job.desc.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
