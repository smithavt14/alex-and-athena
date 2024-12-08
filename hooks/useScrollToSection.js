export function useScrollToSection() {
    const scrollToSection = (id) => {
        requestAnimationFrame(() => {
            const section = document.getElementById(id);
            const heading = section?.querySelector('h1');
            if (heading) {
                const headingPosition = heading.getBoundingClientRect().top;
                const offsetPosition = headingPosition + window.scrollY - 96; // 96px (h-24) for navbar height
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                section?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    return scrollToSection;
} 