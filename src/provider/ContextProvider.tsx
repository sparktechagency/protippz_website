'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { get } from '@/ApisRequests/server';

interface User {
  address: any;
  taxInfo: any;
  email: string;
  name: string;
  phone: string;
  profile_image: string;
  totalAmount: number;
  totalPoint: number;
  dueAmount: number;
  isStripeConnected: boolean;
  totalTips: number;
  user: {
    role: string;
    email: string | undefined | null;
  };
  username: string;
  _id: string;
}
interface AuthContextProps {
  userData: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface Props {
  children: ReactNode;
}
export const useContextData = () => useContext(AuthContext);

// Replace with your Google Client ID
const AuthProvider = ({ children }: Props) => {
  const GOOGLE_CLIENT_ID = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
  
  const [userData, setUserData] = useState<User | null>(null);
  null;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await get('/user/get-my-profile', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      if (res?.success) {
        setUserData(res?.data);
      }
    };
    fetchUser();
  }, [typeof localStorage]);
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={{ userData: userData }}>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
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
