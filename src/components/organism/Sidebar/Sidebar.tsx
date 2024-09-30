import React from 'react';
import './style.css';
import logo from '@/assets/logo.webp';
import Image from '@/components/atoms/Image/Image';
import Link from 'next/link';


export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link href='/' className='logo'> <Image src={logo} alt='logo' height={120} width={120} /></Link>
            <ul className="sidebar-links">
                <li><Link href="/">Proyectos</Link></li>
                <li><Link href="/members">Miembros</Link></li>
            </ul>
        </div>

    );
};

export default Sidebar;