'use client'

import { useState, useEffect, useRef, useMemo } from 'react';
import Heart from '@components/Heart';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [dotPosition, setDotPosition] = useState(0);
    const buttonRefs = useRef({});

    const sections = useMemo(() => [
        { id: 'home', label: '', icon: <Heart /> },
        { id: 'thank-you', label: 'Thank You' },
        { id: 'our-story', label: 'Our Story' },
        { id: 'shanghai', label: 'Shanghai' },
        { id: 'life', label: 'Life' },
        { id: 'faq', label: 'FAQ' },
    ], []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    useEffect(() => {
        if (activeSection && buttonRefs.current[activeSection]) {
            const button = buttonRefs.current[activeSection];
            const buttonRect = button.getBoundingClientRect();
            const navRect = button.parentElement.getBoundingClientRect();
            setDotPosition(buttonRect.left - navRect.left + (buttonRect.width / 2));
        }
    }, [activeSection]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-24 mx-auto p-8 md:px-12 lg:px-16">
            <div className="relative flex items-center justify-center h-full font-reenieBeanie text-xl">
                {sections.map((item) => (
                    <button
                        key={item.id}
                        ref={(el) => (buttonRefs.current[item.id] = el)}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative transition-colors px-5 ${activeSection === item.id
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-slate-950 hover:text-slate-600'
                            }`}
                    >
                        {item.icon || item.label}
                    </button>
                ))}
                {activeSection && dotPosition && (
                    <span
                        className="absolute -bottom-2 left-0 w-1.5 h-1.5 bg-amber-500 rounded-full"
                        style={{
                            transition: 'transform 0.3s ease-in-out',
                            transform: `translateX(${dotPosition}px)`,
                        }}
                    />
                )}
            </div>
        </nav>
    );
} 