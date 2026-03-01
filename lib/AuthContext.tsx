"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
    name: string;
} | null;

interface AuthContextType {
    user: User;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("mockUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (newUser: User) => {
        setUser(newUser);
        if (newUser) {
            localStorage.setItem("mockUser", JSON.stringify(newUser));
        } else {
            localStorage.removeItem("mockUser");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("mockUser");
    };

    // Prevent hydration mismatch by avoiding rendering children that depend on user state before mount
    // Not strictly necessary if we handle hydration elegantly in UI, but good practice
    // Actually, we should just let UI handle loading/hydration.

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
