import { useNavigation } from '@contexts/NavigationContext';
import { useScrollToSection } from '@hooks/useScrollToSection';

export default function ScrollButton({ targetId }) {
  const { setActiveSection } = useNavigation();
  const scrollToSection = useScrollToSection();
  
  const scrollToTarget = () => {
    setActiveSection(targetId);
    scrollToSection(targetId);
  };

  return (
    <button 
      onClick={scrollToTarget}
      className="absolute bottom-0 animate-bounce p-3 z-10"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-gray-600" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </button>
  );
} 