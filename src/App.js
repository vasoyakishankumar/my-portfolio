import React, { useState, useEffect, useRef } from 'react';
import profilePic from './profile_pic.jpg';

const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const ApiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>;
const AutomationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M12 8V2M5 12H2M22 12h-3M18.36 18.36l-2.12-2.12M5.64 5.64l2.12 2.12M18.36 5.64l-2.12 2.12M5.64 18.36l2.12-2.12"></path><circle cx="12" cy="12" r="2"></circle></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 19.5l15-15M6 13.5l5-5M13.5 6l5-5M19.5 4.5l-15 15"></path></svg>;
const DataIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;



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
      description: ""
    },
    {
      role: "Salesforce Developer",
      company: "Clearing (formerly Everpay)",
      period: "May 2024 - July 2025",
      description: "Architected and deployed high-availability FinTech solutions for multi-currency transactions, KYC, and financial reporting. Built a metadata-driven Transaction Monitoring system with real-time alerts and integrated payment provider APIs."
    },
    {
      role: "Salesforce Developer (Part-Time)",
      company: "J-Cloud Consulting",
      period: "Sept 2022 - Apr 2024",
      description: "Led a major system overhaul for a 14+ year-old org, refactoring legacy Apex to mitigate governor limits. Built scalable LWCs, optimized automation flows, and actively participated in all Agile ceremonies."
    },
    {
      role: "Salesforce Developer",
      company: "Kriit India Pvt Ltd",
      period: "Sept 2017 - Jun 2022",
      description: "Delivered over 10 end-to-end Salesforce implementations. Engineered and successfully published 'The Field,' a mapping tool on the AppExchange. Managed large-scale data migrations and integrations with Xero & DocuSign."
    }
  ],
  projects: [
    {
      title: "The Field - AppExchange Product",
      description: "Designed and engineered a Google Maps-based canvassing solution for sales field reps. Successfully passed the rigorous Salesforce Security Review and maintained its first-generation managed package lifecycle."
    },
    {
      title: "Elongate Crypto Wallet",
      description: "Built a Salesforce-native crypto wallet application from the ground up using LWC and Visualforce. Integrated REST APIs for live blockchain transactions and packaged the solution using modern 2GP ISV tools."
    },
    {
      title: "Duo Tax & Thrifty Tax Automation",
      description: "Integrated Salesforce with the Xero accounting platform to fully automate invoicing and contact management. Built complex quote-to-cash automations that significantly improved the sales lifecycle."
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

// --- Helper Components ---

const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isInView];
};

// Animated component wrapper
const AnimatedSection = ({ children, className = "" }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return (
        <section
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </section>
    );
};

// --- Section Components ---

const Header = () => {
    const [typedTitle, setTypedTitle] = useState('');
    const titles = ["Salesforce Developer", "LWC Specialist", "API Integrator", "AppExchange Expert"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentTitle = titles[titleIndex];
            if (isDeleting) {
                setTypedTitle(currentTitle.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setTypedTitle(currentTitle.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? 75 : 150);
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, titleIndex, titles]);

    return (
        <header className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
             <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-96 h-96 bg-indigo-100 rounded-full opacity-50 filter blur-3xl"></div>
            
            <div className="text-center z-10">
                <img 
                    src={portfolioData.profileImage} 
                    alt={portfolioData.name}
                    className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
                />
                <h1 className="text-5xl md:text-7xl font-bold mb-2 text-gray-900">{portfolioData.name}</h1>
                <h2 className="text-2xl md:text-3xl text-blue-600 font-light">
                    <span className="min-h-[40px] inline-block">{typedTitle}</span>
                    <span className="animate-ping text-blue-600">|</span>
                </h2>
                <div className="mt-8 flex justify-center space-x-6 text-lg">
                    <a href={`mailto:${portfolioData.email}`} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">Email</a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">LinkedIn</a>
                </div>
            </div>
        </header>
    );
};

const About = () => (
    <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
            <p className="text-xl leading-relaxed">
                {portfolioData.summary}
            </p>
        </div>
    </AnimatedSection>
);

const Skills = () => (
    <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.skills.map(skill => (
                    <div key={skill.name} className="bg-white p-6 rounded-md border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                        <div className="text-blue-600 w-10 h-10 mb-4">{skill.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.name}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Experience = () => (
    <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Career Journey</h2>
            <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-1 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
                {portfolioData.experience.map((job, index) => (
                    <div key={job.company} className="relative mb-10">
                        <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                        <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                            <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
                                <p className="text-blue-600 font-semibold text-sm mb-1">{job.period}</p>
                                <h3 className="text-xl font-bold text-gray-800">{job.role}</h3>
                                <p className="text-gray-500 mb-2">{job.company}</p>
                                <p className="text-gray-600 text-sm">{job.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Projects = () => (
    <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Key Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map(project => (
                    <div key={project.title} className="bg-white p-8 rounded-md border border-gray-200 shadow-sm flex flex-col group transition-shadow duration-300 hover:shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Footer = () => (
    <footer className="bg-white text-gray-800 py-10 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or just a friendly chat.</p>
            <a href={`mailto:${portfolioData.email}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                Get In Touch
            </a>
            <p className="text-gray-500 mt-10 text-sm">&copy; {new Date().getFullYear()} {portfolioData.name}. Built with ❤️ using React & Tailwind.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
    return (
        <div className="bg-white font-sans">
             <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
                    body, .font-sans { font-family: 'Inter', sans-serif; }
                `}
            </style>
            <Header />
            <main>
                <About />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
