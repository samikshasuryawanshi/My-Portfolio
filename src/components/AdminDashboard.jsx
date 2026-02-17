import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Trash2, Mail, LogOut, MessageSquare, Clock, User } from 'lucide-react';

const ADMIN_EMAIL = 'suryawanshisamiksha506@gmail.com';

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (!user || user.email !== ADMIN_EMAIL) {
                navigate('/admin-login');
            }
        });

        // Listen to messages
        const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
        const unsubscribeMessages = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(messagesData);
            setLoading(false);
        });

        return () => {
            unsubscribeAuth();
            unsubscribeMessages();
        };
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'messages', id));
            setDeleteConfirm(null);
        } catch (error) {
            console.error('Error deleting message:', error);
            alert('Failed to delete message');
        }
    };

    const handleReply = (email, name) => {
        window.location.href = `mailto:${email}?subject=Re: Your message from portfolio&body=Hi ${name},%0D%0A%0D%0A`;
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate();
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030303] flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030303] text-zinc-100 px-6 py-10 relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none select-none">
                <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-none opacity-[0.02] whitespace-nowrap">
                    MESSAGES
                </h1>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-2">
                            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Dashboard</span>
                        </h1>
                        <p className="text-sm text-zinc-500">
                            {messages.length} {messages.length === 1 ? 'message' : 'messages'} received
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-white/[0.02] border border-white/[0.06] hover:border-red-500/30 hover:bg-red-500/[0.04] text-zinc-400 hover:text-red-400 rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wide"
                    >
                        <LogOut size={18} />
                        Logout
                    </motion.button>
                </div>

                {/* Messages */}
                {messages.length === 0 ? (
                    <div className="text-center py-20">
                        <MessageSquare size={64} className="mx-auto text-zinc-700 mb-4" />
                        <p className="text-zinc-500 text-lg">No messages yet</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <AnimatePresence>
                            {messages.map((message, index) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] hover:border-blue-500/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <User size={18} className="text-blue-400" />
                                                <h3 className="text-lg sm:text-xl font-bold text-white">{message.name}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Mail size={14} />
                                                <a href={`mailto:${message.email}`} className="hover:text-blue-400 transition-colors">
                                                    {message.email}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                                            <Clock size={14} />
                                            {formatDate(message.timestamp)}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-6 p-4 bg-white/[0.02] rounded-xl border border-white/[0.02]">
                                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                            {message.message}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => handleReply(message.email, message.name)}
                                            className="flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-400 rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wide"
                                        >
                                            <Mail size={16} />
                                            Reply
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => setDeleteConfirm(message.id)}
                                            className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wide"
                                        >
                                            <Trash2 size={16} />
                                            Delete
                                        </motion.button>
                                    </div>

                                    {/* Delete confirmation */}
                                    <AnimatePresence>
                                        {deleteConfirm === message.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6"
                                            >
                                                <div className="text-center space-y-4">
                                                    <p className="text-white font-bold">Delete this message?</p>
                                                    <div className="flex gap-3 justify-center">
                                                        <button
                                                            onClick={() => handleDelete(message.id)}
                                                            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-colors"
                                                        >
                                                            Yes, Delete
                                                        </button>
                                                        <button
                                                            onClick={() => setDeleteConfirm(null)}
                                                            className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-bold transition-colors"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
