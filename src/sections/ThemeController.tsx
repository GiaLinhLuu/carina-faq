import { useEffect, useState } from "react";

const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "cupcake", label: "Cupcake" },
    { value: "bumblebee", label: "Bumblebee" },
    { value: "retro", label: "Retro" },
    { value: "pastel", label: "Pastel" },
] as const;

export const ThemeController = () => {
    const [theme, setTheme] = useState("bumblebee");

    useEffect(() => {
        // Always default to cupcake on load; allow in-memory changes only
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn">
                Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={-1}
                className="dropdown-content bg-base-300 rounded-box z-999 w-52 p-2 shadow-2xl"
            >
                {themes.map((option) => (
                    <li key={option.value}>
                        <label className="flex cursor-pointer items-center gap-2 rounded-btn px-2 py-1 hover:bg-base-200">
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="radio radio-sm"
                                checked={theme === option.value}
                                onChange={() => setTheme(option.value)}
                            />
                            <span>{option.label}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
