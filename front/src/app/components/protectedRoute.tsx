// components/ProtectedRoute.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from './navbar';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, [router]);

    if (isLoading) {
        return <div>  <Navbar /> <div className='text-blackcontent flex justify-center items-center h-screen'> Carregando conteúdo...</div></div>
    }

    return isAuthenticated ? <>{children}</> : <div>Você não está autenticado</div>;
};

export default ProtectedRoute;
