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

export type ScheduledAssessment = {
    id: string;
    course: string;
    level: string;
    date: string;
    time: string;
    timestamp: number;
};

export type Role = 'employee' | 'instructor' | 'admin';

type User = {
    name: string;
} | null;

interface AuthContextType {
    user: User;
    notifications: Notification[];
    scheduledAssessments: ScheduledAssessment[];
    userProfile: UserProfile;
    userSettings: UserSettings;
    login: (user: User) => void;
    logout: () => void;
    addNotification: (message: string) => void;
    removeNotification: (id: string) => void;
    addScheduledAssessment: (assessment: Omit<ScheduledAssessment, "id" | "timestamp">) => void;
    removeScheduledAssessment: (id: string) => void;
    updateProfile: (profile: Partial<UserProfile>) => void;
    updateSettings: (settings: Partial<UserSettings>) => void;
    currentRole: Role;
    switchRole: (role: Role) => void;
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
    const [scheduledAssessments, setScheduledAssessments] = useState<ScheduledAssessment[]>([]);
    const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);
    const [userSettings, setUserSettings] = useState<UserSettings>(defaultSettings);
    const [currentRole, setCurrentRole] = useState<Role>('employee');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("mockUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        
        const storedRole = localStorage.getItem("userRole");
        if (storedRole) {
            setCurrentRole(storedRole as Role);
        }
        
        const storedNotifications = localStorage.getItem("userNotifications");
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        }

        const storedAssessments = localStorage.getItem("scheduledAssessments");
        if (storedAssessments) {
            setScheduledAssessments(JSON.parse(storedAssessments));
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
        setScheduledAssessments([]);
        localStorage.removeItem("mockUser");
        localStorage.removeItem("userNotifications");
        localStorage.removeItem("scheduledAssessments");
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

    const addScheduledAssessment = (assessment: Omit<ScheduledAssessment, "id" | "timestamp">) => {
        const newAssessment: ScheduledAssessment = {
            ...assessment,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
        };
        const updated = [newAssessment, ...scheduledAssessments];
        setScheduledAssessments(updated);
        localStorage.setItem("scheduledAssessments", JSON.stringify(updated));
    };

    const removeScheduledAssessment = (id: string) => {
        const updated = scheduledAssessments.filter(a => a.id !== id);
        setScheduledAssessments(updated);
        localStorage.setItem("scheduledAssessments", JSON.stringify(updated));
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

    const switchRole = (role: Role) => {
        setCurrentRole(role);
        localStorage.setItem("userRole", role);
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
            scheduledAssessments,
            userProfile, 
            userSettings, 
            login, 
            logout, 
            addNotification, 
            removeNotification,
            addScheduledAssessment,
            removeScheduledAssessment,
            updateProfile,
            updateSettings,
            currentRole,
            switchRole
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
