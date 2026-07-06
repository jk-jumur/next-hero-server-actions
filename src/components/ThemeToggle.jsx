"use client";

import { useTheme } from "@heroui/react";

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <button onClick={() => setTheme(theme === "dark" ? "Light" : "dark") } className="cursor-pointer">Toggle{theme === "dark" ? "Light" : "dark"}Mode</button>
        </div>
    );
};

export default ThemeToggle;