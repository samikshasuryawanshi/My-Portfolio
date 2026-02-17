import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { LogIn, Shield, AlertCircle } from 'lucide-react';

const ADMIN_EMAIL = 'suryawanshisamiksha506@gmail.com';

const AdminLogin = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError('');

        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Check if the logged-in user is the admin
            if (user.email === ADMIN_EMAIL) {
                navigate('/admin');
            } else {
                setError(`Access denied. Only ${ADMIN_EMAIL} can access the admin dashboard.`);
                await auth.signOut();
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Failed to sign in. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#030303] text-zinc-100 flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-none opacity-[0.02]">
                    ADMIN
                </h1>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Card */}
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] rounded-2xl p-8 sm:p-10 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Shield size={32} className="text-blue-400" />
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
                            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Login</span>
                        </h1>
                        <p className="text-sm text-zinc-400">
                            Restricted access for portfolio administrator
                        </p>
                    </div>

                    {/* Error message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3"
                        >
                            <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-300">{error}</p>
                        </motion.div>
                    )}

                    {/* Login button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                <LogIn size={20} />
                                Sign in with Google
                            </>
                        )}
                    </motion.button>

                    {/* Info */}
                    <div className="text-center">
                        <p className="text-xs text-zinc-500">
                            Only authorized admin account can access the dashboard
                        </p>
                    </div>
                </div>

                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-center"
                >
                    <a
                        href="/"
                        className="text-sm text-zinc-500 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                    >
                        ← Back to Portfolio
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
