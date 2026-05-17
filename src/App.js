import React, { useRef, useState, useEffect } from 'react';
import profilePic from './profile_pic.jpg';
import astroImg from './teddybot.png';
import einsteinImg from './einstein.png';
import axaImg from './axa.png';
import jcloudImg from './jcloud.png';
import clearingImg from './clearing.png';
import kriitImg from './kriit.png';
import picnicImg from './picnic.png';
import classicImg from './classicteddy.png';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0176d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const ApiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0176d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>;
const AutomationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0176d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M12 8V2M5 12H2M22 12h-3M18.36 18.36l-2.12-2.12M5.64 5.64l2.12 2.12M18.36 5.64l-2.12 2.12M5.64 18.36l2.12-2.12"></path><circle cx="12" cy="12" r="2"></circle></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0176d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 19.5l15-15M6 13.5l5-5M13.5 6l5-5M19.5 4.5l-15 15"></path></svg>;
const DataIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0176d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;

const portfolioData = {
    name: "Kishankumar Vasoya",
    title: "Salesforce Certified Platform Developer",
    location: "London, United Kingdom",
    email: "kishan.kvasoya@gmail.com",
    linkedin: "https://bit.ly/kvasoya",
    profileImage: profilePic,
    summary: "A Salesforce-Certified Platform Developer with over 6 years of hands-on experience in designing, developing, and deploying scalable, secure, and high-performance Salesforce solutions. Proven expertise in Apex, LWC, API integrations, and AppExchange development. Passionate about building user-centric platforms that are maintainable, compliant, and performance-optimized.",
    skills: [
        { name: "Apex & LWC", icon: <CodeIcon />, description: "Expert in Apex (Triggers, Batch, Async) and modern frontend development with Lightning Web Components & Aura." },
        { name: "API Integration", icon: <ApiIcon />, description: "Skilled in integrating external systems using REST/SOAP APIs, Platform Events, and various middleware tools." },
        { name: "Automation", icon: <AutomationIcon />, description: "Mastery of declarative tools including Flows, Process Builder, and Workflow Rules to streamline business processes." },
        { name: "AppExchange", icon: <PackageIcon />, description: "Experienced in the full lifecycle of AppExchange development, from 1GP/2GP packaging to passing security reviews." },
        { name: "DevOps & CI/CD", icon: <RocketIcon />, description: "Proficient with SFDX, Git, and CI/CD tools like Copado and Bitbucket to ensure robust deployment pipelines." },
        { name: "Data Management", icon: <DataIcon />, description: "Adept at large-scale data migration and management using Data Loader, Import Wizard, and ETL processes." },
    ],
    experience: [
        {
            role: "Solution Engineer - Salesforce",
            company: "AXA UK",
            period: "Aug 2025 - Present",
            description: "",
            bannerUrl: axaImg
        },
        {
            role: "Salesforce Developer",
            company: "Clearing (formerly Everpay)",
            period: "May 2024 - July 2025",
            description: "Architected and deployed high-availability FinTech solutions for multi-currency transactions, KYC, and financial reporting. Built a metadata-driven Transaction Monitoring system with real-time alerts and integrated payment provider APIs.",
            bannerUrl: clearingImg
        },
        {
            role: "Salesforce Developer (Part-Time)",
            company: "J-Cloud Consulting",
            period: "Sept 2022 - Apr 2024",
            description: "Led a major system overhaul for a 14+ year-old org, refactoring legacy Apex to mitigate governor limits. Built scalable LWCs, optimized automation flows, and actively participated in all Agile ceremonies.",
            bannerUrl: jcloudImg
        },
        {
            role: "Salesforce Developer",
            company: "Kriit India Pvt Ltd",
            period: "Sept 2017 - Jun 2022",
            description: "Delivered over 10 end-to-end Salesforce implementations. Engineered and successfully published 'The Field,' a mapping tool on the AppExchange. Managed large-scale data migrations and integrations with Xero & DocuSign.",
            bannerUrl: kriitImg
        }
    ],
    projects: [
        {
            title: "Transaction Monitoring System",
            description: "Architected a custom, metadata-driven Transaction Monitoring System. Implemented dynamic class execution to evaluate payments against configurable risk criteria, generating intelligent alerts and warnings to significantly reduce false positives. Included a streamlined, multi-level approval workflow to ensure compliance while maintaining high usability."
        },
        {
            title: "Transfer Fee Calculation Engine",
            description: "Engineered a dynamic Transfer Fee Calculation Engine utilizing custom metadata types to map complex pricing models to specific transfer profiles. Delivered elegant, intuitive UIs to provide internal teams with total visibility into applied fee structures, while building robust backend mechanisms to calculate and report real-time profit margins."
        },
        {
            title: "The Field - AppExchange Product",
            description: "Designed and engineered a Google Maps-based canvassing solution for sales field reps. Successfully passed the rigorous Salesforce Security Review and maintained its first-generation managed package lifecycle."
        },
        {
            title: "Elongate Crypto Wallet",
            description: "Built a Salesforce-native crypto wallet application from the ground up using LWC and Visualforce. Integrated REST APIs for live blockchain transactions and packaged the solution using modern 2GP ISV tools."
        },
        {
            title: "Non-Profit Membership Drive",
            description: "Created custom donor management and recurring payment modules for non-profits like Children's International, following all Salesforce NPSP best practices to enhance fundraising efforts."
        }
    ],
    education: {
        degree: "MSc Advanced Computer Science",
        university: "University of Essex, Colchester, UK",
        period: "2022-2023",
        grade: "Grade: A with Merit"
    }
};

// --- 3D Background Components ---
const AstroEinstein3D = () => {
    // Load 2D images as 3D textures
    const astroTex = useLoader(THREE.TextureLoader, astroImg);
    const einsteinTex = useLoader(THREE.TextureLoader, einsteinImg);
    const classicTex = useLoader(THREE.TextureLoader, classicImg);

    const astroRef = useRef();
    const einsteinRef = useRef();
    const classicRef = useRef();

    // Detect mobile viewport for responsive 3D positioning
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile: smaller meshes, pulled into the visible viewport
    // Desktop: original positions preserved exactly
    const meshSize = isMobile ? 3 : 4.5;
    const astroX = isMobile ? -1.5 : -5;
    const einsteinX = isMobile ? 1.5 : 5;
    const classicX = isMobile ? 0 : -5;

    // Calculate exact aspect ratios from the loaded images
    const getArgs = (tex, width) => [width, width * (tex.image.height / tex.image.width)];

    useFrame((state) => {
        const scrollY = window.scrollY;
        // The magic: bind DOM scroll to 3D positions
        if (astroRef.current) {
            astroRef.current.position.y = 3 + (scrollY * 0.005);
            astroRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
        if (einsteinRef.current) {
            einsteinRef.current.position.y = -3 + (scrollY * 0.008);
            einsteinRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
        }
        if (classicRef.current) {
            classicRef.current.position.y = -16 + (scrollY * 0.007);
            classicRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
        }
    });

    return (
        <>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh ref={astroRef} position={[astroX, 3, -5]}>
                    <planeGeometry args={getArgs(astroTex, meshSize)} />
                    <meshBasicMaterial map={astroTex} transparent={true} opacity={isMobile ? 0.35 : 0.6} depthWrite={false} side={THREE.DoubleSide} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh ref={einsteinRef} position={[einsteinX, -3, -3]}>
                    <planeGeometry args={getArgs(einsteinTex, meshSize)} />
                    <meshBasicMaterial map={einsteinTex} transparent={true} opacity={isMobile ? 0.35 : 0.6} depthWrite={false} side={THREE.DoubleSide} />
                </mesh>
            </Float>
            <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh ref={classicRef} position={[classicX, -16, -4]}>
                    <planeGeometry args={getArgs(classicTex, meshSize)} />
                    <meshBasicMaterial map={classicTex} transparent={true} opacity={isMobile ? 0.35 : 0.6} depthWrite={false} side={THREE.DoubleSide} />
                </mesh>
            </Float>
        </>
    );
};

const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'linear-gradient(to bottom, #f0f4f8, #e0e7ee)' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={1} />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <React.Suspense fallback={null}>
                    <AstroEinstein3D />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

// --- DOM Components ---

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="slds-p-around_xx-large slds-text-align_center"
        >
            <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="slds-avatar slds-avatar_circle profile-image"
            />
            <h1 className="slds-text-heading_large header-title">
                {portfolioData.name}
            </h1>
            <p className="slds-text-heading_medium slds-m-bottom_medium header-subtitle">
                {portfolioData.title}
            </p>
            <p className="slds-text-body_regular slds-m-bottom_large header-summary">
                {portfolioData.summary}
            </p>
            <div className="contact-buttons-container">
                <a href={`mailto:${portfolioData.email}`} className="slds-button slds-button_brand slds-p-horizontal_x-large slds-p-vertical_small btn-contact">
                    Contact Me
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="slds-button slds-button_outline-brand slds-p-horizontal_x-large slds-p-vertical_small btn-linkedin">
                    LinkedIn
                </a>
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    // Dynamic staggered modern layout instead of a flat grid
    return (
        <div className="slds-p-around_xx-large sf-portfolio-container skills-container">
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large section-title"
            >
                Core Capabilities
            </motion.h2>
            <div className="slds-grid slds-wrap slds-gutters" style={{ alignItems: 'stretch' }}>
                {portfolioData.skills.map((skill, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={skill.name}
                        className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3 slds-p-around_medium"
                        style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}
                    >
                        <div className="sf-marketing-card skill-card-inner">
                            <div className="skill-icon-container">{skill.icon}</div>
                            <h3 className="sf-marketing-title skill-title">{skill.name}</h3>
                            <p className="sf-marketing-description skill-desc">{skill.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const ExperienceTimeline = () => {
    // A completely custom timeline replacing the standard cards
    return (
        <div className="slds-p-around_xx-large sf-portfolio-container timeline-container">
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large section-title"
            >
                Career Journey
            </motion.h2>
            <div className="timeline-wrapper">
                <div className="timeline-line"></div>
                <ul className="slds-timeline">
                    {portfolioData.experience.map((job, index) => (
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            key={job.company}
                            className="slds-timeline__item slds-m-bottom_large"
                            style={{ position: 'relative' }}
                        >
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <div className="slds-icon_container slds-icon-standard-task slds-timeline__icon timeline-icon-container">
                                        <RocketIcon />
                                    </div>
                                </div>
                                <div className="slds-media__body slds-card slds-p-around_large timeline-card">
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__details">
                                        <h3 className="slds-text-heading_medium timeline-role">{job.role}</h3>
                                        <span className="slds-badge timeline-period-badge">{job.period}</span>
                                    </div>
                                    <p className="slds-m-top_x-small timeline-company">{job.company}</p>
                                    <p className="slds-m-top_small timeline-desc">{job.description || 'Architecting Salesforce solutions.'}</p>
                                    {job.bannerUrl && (
                                        <img src={job.bannerUrl} alt={`${job.company} banner`} className="slds-m-top_medium timeline-banner" />
                                    )}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const EditorialProjects = () => {
    // Asymmetrical layout replacing the uniform card grid
    return (
        <div className="slds-p-around_xx-large sf-portfolio-container projects-container">
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large section-title"
            >
                Key Implementations
            </motion.h2>
            <div className="slds-grid slds-wrap">
                {portfolioData.projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            key={project.title}
                            className="slds-col slds-size_1-of-1 slds-m-bottom_xx-large"
                        >
                            <div className={`slds-grid slds-wrap project-card ${isEven ? 'project-card-even' : 'project-card-odd'}`}>
                                <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2 project-image-wrapper">
                                    <div className={`project-image-bg ${isEven ? 'even' : 'odd'}`}>
                                        <img src={isEven ? astroImg : einsteinImg} className={`project-decoration-img ${isEven ? 'even' : 'odd'}`} alt="Project Deco" />
                                    </div>
                                </div>
                                <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-around_xx-large project-content-wrapper">
                                    <span className="slds-badge slds-m-bottom_medium project-badge">Project</span>
                                    <h3 className="slds-text-heading_large slds-m-bottom_medium project-title">{project.title}</h3>
                                    <p className="slds-text-body_regular project-desc">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const CampfireClosing = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="slds-p-around_xx-large slds-text-align_center sf-portfolio-container campfire-container"
    >
        <img src={picnicImg} alt="Trailblazer Community Campfire" className="campfire-img" />
    </motion.div>
);

const Footer = () => (
    <footer className="slds-p-around_xx-large slds-text-align_center footer-container">
        <h3 className="slds-text-heading_medium footer-title">Let's Connect</h3>
        <p className="slds-text-body_regular slds-m-bottom_large footer-desc">Feel free to reach out for collaborations or just a friendly chat.</p>
        <p className="slds-text-body_small footer-copyright">&copy; {new Date().getFullYear()} {portfolioData.name}. Built with Salesforce Lightning Design System, React Three Fiber, & Framer Motion.</p>
    </footer>
);

export default function App() {
    return (
        <div className="slds-scope" style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
            {/* The 3D state-of-the-art background */}
            <Background3D />

            {/* The DOM Content mapped over the 3D space */}
            <div className="slds-container_center slds-container_x-large" style={{ position: 'relative', zIndex: 10 }}>
                <Header />
                <SkillsSection />
                <ExperienceTimeline />
                <EditorialProjects />
                <CampfireClosing />
            </div>
            <Footer />
        </div>
    );
}
