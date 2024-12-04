"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    email: string,
    id: string,
}

interface AuthContextType {
    user: User | null;
    setUser: ( user: User | null ) => void;
    fetchUser: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async (email: string) => {
        try {
            const response = await axios.get('../pages/api/auth/getUserByEmail', { params: { email: email }});
            setUser(response.data);
        } catch (error) {
            console.error("Failed to fetch user:", error);
            setUser(null);
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        console.error("useAuth must be used within AuthProvider");
    }
    return context;
}
