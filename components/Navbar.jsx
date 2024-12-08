'use client'

import { useState, useEffect, useRef, useMemo } from 'react';
import Heart from '@components/Heart';
import { useNavigation } from '@contexts/NavigationContext';
import { useScrollToSection } from '@hooks/useScrollToSection';

export default function Navbar() {
    const { activeSection, setActiveSection } = useNavigation();
    const scrollToSection = useScrollToSection();
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

    useEffect(() => {
        const handleUserScroll = () => {
            let mostVisibleSection = null;
            let maxVisibility = -Infinity;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionHeight = rect.height;
                    const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
                    const visibility = visibleHeight / sectionHeight;

                    if (visibility > maxVisibility) {
                        maxVisibility = visibility;
                        mostVisibleSection = section.id;
                    }
                }
            }

            if (mostVisibleSection) {
                setActiveSection(mostVisibleSection);
            }
        };

        // Initial check
        handleUserScroll();
        
        // Add debounced handlers for user-initiated scrolling
        let timeoutId;
        const debouncedHandleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleUserScroll, 10);
        };

        window.addEventListener('wheel', debouncedHandleScroll);
        window.addEventListener('touchmove', debouncedHandleScroll);
        
        return () => {
            window.removeEventListener('wheel', debouncedHandleScroll);
            window.removeEventListener('touchmove', debouncedHandleScroll);
            clearTimeout(timeoutId);
        };
    }, [sections, setActiveSection]);

    const handleNavClick = (id) => {
        setActiveSection(id);
        scrollToSection(id);
    };

    useEffect(() => {
        if (activeSection && buttonRefs.current[activeSection]) {
            const button = buttonRefs.current[activeSection];
            const buttonRect = button.getBoundingClientRect();
            const navRect = button.parentElement.getBoundingClientRect();
            setDotPosition(buttonRect.left - navRect.left + (buttonRect.width / 2));
        }
    }, [activeSection]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-24 mx-auto p-8 md:px-12 lg:px-16 bg-white">
            <div className="relative flex items-center justify-center h-full font-reenieBeanie text-xl">
                {sections.map((item) => (
                    <button
                        key={item.id}
                        ref={(el) => (buttonRefs.current[item.id] = el)}
                        onClick={() => handleNavClick(item.id)}
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