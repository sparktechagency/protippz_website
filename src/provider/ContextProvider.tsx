'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GoogleOAuthProvider, } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';

interface AuthContextProps {

}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface Props {
    children: ReactNode;
}

// Replace with your Google Client ID
const AuthProvider = ({ children }: Props) => {
    const GOOGLE_CLIENT_ID = '118456968798-745on7imu91o0cks3m67niu4dtejo0ju.apps.googleusercontent.com';
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <AuthContext.Provider value={{}}>
                {children}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </AuthContext.Provider>
        </GoogleOAuthProvider>
    );
};

// Hook to use Auth Context
const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
