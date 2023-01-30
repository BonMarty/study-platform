import React from 'react';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const ScrollToTop: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollY(window.scrollY);
      setShowButton(true);
    } else {
      setScrollY(0);
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <button
      className={`${
        showButton ? 'opacity-100' : 'opacity-0'
      } transition-all duration-500 bg-gradient-to-tr from-violet-500 to-pink-600 w-fit p-3 rounded-full fixed bottom-4 right-4 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-200 before:animate-[ping_1.6s_ease-in-out_infinite] before:rounded-full`}
      onClick={scrollToTop}>
      <ShortcutIcon className="text-white text-3xl rotate-90 -scale-x-100" />
    </button>
  );
};

export default ScrollToTop;
