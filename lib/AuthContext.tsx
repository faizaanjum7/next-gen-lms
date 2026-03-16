"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Notification = {
    id: string;
    message: string;
    timestamp: number;
};

export type UserProfile = {
    name: string;
    email: string;
    bio: string;
    skills: string;
    title: string;
};

export type UserSettings = {
    marketingEmails: boolean;
    assessmentReminders: boolean;
    darkMode: boolean;
    language: string;
    privateProfile: boolean;
};

type User = {
    name: string;
} | null;

interface AuthContextType {
    user: User;
    notifications: Notification[];
    userProfile: UserProfile;
    userSettings: UserSettings;
    login: (user: User) => void;
    logout: () => void;
    addNotification: (message: string) => void;
    removeNotification: (id: string) => void;
    updateProfile: (profile: Partial<UserProfile>) => void;
    updateSettings: (settings: Partial<UserSettings>) => void;
}

const defaultProfile: UserProfile = {
    name: "User",
    email: "user@example.com",
    bio: "Passionate learner exploring the world of tech.",
    skills: "React, Next.js, Tailwind CSS",
    title: "Full Stack Developer"
};

const defaultSettings: UserSettings = {
    marketingEmails: true,
    assessmentReminders: true,
    darkMode: false,
    language: "english",
    privateProfile: false
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(null);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);
    const [userSettings, setUserSettings] = useState<UserSettings>(defaultSettings);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("mockUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        
        const storedNotifications = localStorage.getItem("userNotifications");
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        }

        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
            setUserProfile(JSON.parse(storedProfile));
        }

        const storedSettings = localStorage.getItem("userSettings");
        if (storedSettings) {
            setUserSettings(JSON.parse(storedSettings));
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
        setNotifications([]);
        localStorage.removeItem("mockUser");
        localStorage.removeItem("userNotifications");
        // We might want to keep profile/settings or clear them. 
        // For a mock, let's keep profile/settings for persistent feel unless user resets.
    };

    const addNotification = (message: string) => {
        const newNotification: Notification = {
            id: Math.random().toString(36).substr(2, 9),
            message,
            timestamp: Date.now(),
        };
        const updatedNotifications = [newNotification, ...notifications];
        setNotifications(updatedNotifications);
        localStorage.setItem("userNotifications", JSON.stringify(updatedNotifications));
    };

    const removeNotification = (id: string) => {
        const updatedNotifications = notifications.filter(n => n.id !== id);
        setNotifications(updatedNotifications);
        localStorage.setItem("userNotifications", JSON.stringify(updatedNotifications));
    };

    const updateProfile = (newProfile: Partial<UserProfile>) => {
        const updated = { ...userProfile, ...newProfile };
        setUserProfile(updated);
        localStorage.setItem("userProfile", JSON.stringify(updated));
        
        // Sync user name if updated
        if (newProfile.name && user) {
            const newUser = { ...user, name: newProfile.name };
            setUser(newUser);
            localStorage.setItem("mockUser", JSON.stringify(newUser));
        }
    };

    const updateSettings = (newSettings: Partial<UserSettings>) => {
        const updated = { ...userSettings, ...newSettings };
        setUserSettings(updated);
        localStorage.setItem("userSettings", JSON.stringify(updated));
    };

    // Theme logic: Toggle .dark class on <html> tag
    useEffect(() => {
        if (!mounted) return;
        
        if (userSettings.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [userSettings.darkMode, mounted]);

    return (
        <AuthContext.Provider value={{ 
            user, 
            notifications, 
            userProfile, 
            userSettings, 
            login, 
            logout, 
            addNotification, 
            removeNotification,
            updateProfile,
            updateSettings
        }}>
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
