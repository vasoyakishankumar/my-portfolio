import React, { useRef } from 'react';
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
                <mesh ref={astroRef} position={[-5, 3, -5]}>
                    <planeGeometry args={getArgs(astroTex, 4.5)} />
                    <meshBasicMaterial map={astroTex} transparent={true} opacity={0.6} depthWrite={false} side={THREE.DoubleSide} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh ref={einsteinRef} position={[5, -3, -3]}>
                    <planeGeometry args={getArgs(einsteinTex, 4.5)} />
                    <meshBasicMaterial map={einsteinTex} transparent={true} opacity={0.6} depthWrite={false} side={THREE.DoubleSide} />
                </mesh>
            </Float>
            <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh ref={classicRef} position={[-5, -16, -4]}>
                    <planeGeometry args={getArgs(classicTex, 4.5)} />
                    <meshBasicMaterial map={classicTex} transparent={true} opacity={0.6} depthWrite={false} side={THREE.DoubleSide} />
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
                className="slds-avatar slds-avatar_circle"
                style={{ width: '180px', height: '180px', border: '5px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', marginBottom: '2rem' }}
            />
            <h1 className="slds-text-heading_large" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#032d60', marginBottom: '1rem', letterSpacing: '-1px' }}>
                {portfolioData.name}
            </h1>
            <p className="slds-text-heading_medium slds-m-bottom_medium" style={{ color: '#0176d3', fontWeight: 600, fontSize: '1.5rem' }}>
                {portfolioData.title}
            </p>
            <p className="slds-text-body_regular slds-m-bottom_large" style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.2rem', color: '#555', lineHeight: 1.6 }}>
                {portfolioData.summary}
            </p>
            <div>
                <a href={`mailto:${portfolioData.email}`} className="slds-button slds-button_brand slds-p-horizontal_x-large slds-p-vertical_small" style={{ borderRadius: '3rem', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(1, 118, 211, 0.3)' }}>
                    Contact Me
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="slds-button slds-button_outline-brand slds-m-left_medium slds-p-horizontal_x-large slds-p-vertical_small" style={{ borderRadius: '3rem', fontSize: '1.1rem' }}>
                    LinkedIn
                </a>
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    // Dynamic staggered modern layout instead of a flat grid
    return (
        <div className="slds-p-around_xx-large sf-portfolio-container" style={{ marginTop: '5rem' }}>
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large"
                style={{ fontWeight: 800, color: '#032d60', fontSize: '2.5rem' }}
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
                        <div className="sf-marketing-card" style={{ flex: 1, padding: '2rem', border: 'none', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ transform: 'scale(1.5)', transformOrigin: 'left', marginBottom: '1.5rem' }}>{skill.icon}</div>
                            <h3 className="sf-marketing-title" style={{ fontSize: '1.5rem' }}>{skill.name}</h3>
                            <p className="sf-marketing-description" style={{ fontSize: '1rem' }}>{skill.description}</p>
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
        <div className="slds-p-around_xx-large sf-portfolio-container" style={{ marginTop: '5rem' }}>
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large"
                style={{ fontWeight: 800, color: '#032d60', fontSize: '2.5rem' }}
            >
                Career Journey
            </motion.h2>
            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '4px', background: '#e0e7ee', borderRadius: '2px' }}></div>
                <ul className="slds-timeline">
                    {portfolioData.experience.map((job, index) => (
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            key={job.company}
                            className="slds-timeline__item slds-m-bottom_large"
                            style={{ position: 'relative' }}
                        >
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <div className="slds-icon_container slds-icon-standard-task slds-timeline__icon" style={{ borderRadius: '50%', background: '#0176d3', color: 'white', padding: '12px', zIndex: 2, position: 'relative', boxShadow: '0 5px 15px rgba(1, 118, 211, 0.4)' }}>
                                        <RocketIcon />
                                    </div>
                                </div>
                                <div className="slds-media__body slds-card slds-p-around_large" style={{ borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: 'none', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}>
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__details">
                                        <h3 className="slds-text-heading_medium" style={{ fontWeight: 800, color: '#032d60' }}>{job.role}</h3>
                                        <span className="slds-badge" style={{ backgroundColor: '#e0f2fe', color: '#0176d3', fontWeight: 700 }}>{job.period}</span>
                                    </div>
                                    <p className="slds-m-top_x-small" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#444' }}>{job.company}</p>
                                    <p className="slds-m-top_small" style={{ lineHeight: 1.7, color: '#555' }}>{job.description || 'Architecting Salesforce solutions.'}</p>
                                    {job.bannerUrl && (
                                        <img src={job.bannerUrl} alt={`${job.company} banner`} className="slds-m-top_medium" style={{ borderRadius: '0.5rem', maxHeight: '180px', width: '100%', objectFit: 'cover' }} />
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
        <div className="slds-p-around_xx-large sf-portfolio-container" style={{ marginTop: '5rem' }}>
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="slds-text-heading_large slds-text-align_center slds-m-bottom_xx-large"
                style={{ fontWeight: 800, color: '#032d60', fontSize: '2.5rem' }}
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
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            key={project.title}
                            className="slds-col slds-size_1-of-1 slds-m-bottom_xx-large"
                        >
                            <div className="slds-grid slds-wrap" style={{ alignItems: 'stretch', flexDirection: isEven ? 'row' : 'row-reverse', background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                                <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2" style={{ padding: '0', display: 'flex' }}>
                                    <div style={{ background: isEven ? 'linear-gradient(135deg, #e0f2fe, #bae6fd)' : 'linear-gradient(135deg, #fce7f3, #f9a8d4)', minHeight: '400px', height: '100%', width: '100%', position: 'relative', overflow: 'hidden' }}>
                                        <img src={isEven ? astroImg : einsteinImg} style={{ position: 'absolute', bottom: '-20px', right: isEven ? '-40px' : 'auto', left: isEven ? 'auto' : '-40px', height: '110%', width: 'auto', opacity: 0.9 }} alt="Project Deco" />
                                    </div>
                                </div>
                                <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-around_xx-large" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <span className="slds-badge slds-m-bottom_medium" style={{ backgroundColor: '#f4f6f9', color: '#0176d3', fontWeight: 700 }}>Project</span>
                                    <h3 className="slds-text-heading_large slds-m-bottom_medium" style={{ fontWeight: 800, color: '#032d60', fontSize: '2rem', lineHeight: 1.2 }}>{project.title}</h3>
                                    <p className="slds-text-body_regular" style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#555' }}>{project.description}</p>
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
        className="slds-p-around_xx-large slds-text-align_center sf-portfolio-container"
        style={{ marginTop: '2rem' }}
    >
        <img src={picnicImg} alt="Trailblazer Community Campfire" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }} />
    </motion.div>
);

const Footer = () => (
    <footer className="slds-p-around_xx-large slds-text-align_center" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '4rem', backdropFilter: 'blur(10px)' }}>
        <h3 className="slds-text-heading_medium" style={{ fontWeight: 800, color: '#032d60', marginBottom: '1rem', fontSize: '2rem' }}>Let's Connect</h3>
        <p className="slds-text-body_regular slds-m-bottom_large" style={{ color: '#555', fontSize: '1.2rem' }}>Feel free to reach out for collaborations or just a friendly chat.</p>
        <p className="slds-text-body_small" style={{ color: '#888' }}>&copy; {new Date().getFullYear()} {portfolioData.name}. Built with Salesforce Lightning Design System, React Three Fiber, & Framer Motion.</p>
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
