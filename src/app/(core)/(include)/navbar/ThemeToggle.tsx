import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
            {theme === 'dark' ? (
                <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
        </button>
    );
};

export default ThemeToggle;