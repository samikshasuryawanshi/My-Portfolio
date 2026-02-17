import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-zinc-950 border-t border-white/[0.04] py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">
                    © 2026 Samiksha Suryawanshi. All rights reserved.
                </p>

                <Link
                    to="/admin-login"
                    className="flex items-center gap-2 text-xs text-zinc-600 hover:text-blue-400 transition-colors"
                >
                    <Shield size={14} />
                    Admin
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
