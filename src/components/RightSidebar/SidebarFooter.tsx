import React from 'react';
import type { MenuItem } from '../../models/types';

const SidebarFooter: React.FC = () => {
    const footerItems: MenuItem[] = [
        { label: 'الإعدادات', icon: '⚙️' },
        { label: 'مركز المساعدة', icon: '❓' },
        { label: 'اللغة', icon: '🌐' }
    ];

    return (
        <div className="sidebar-footer">
            {footerItems.map((item, index) => (
                <a href="#" key={index} className="footer-item">
                    <span>{item.label}</span>
                    <span className="icon">{item.icon}</span>
                </a>
            ))}
            <div className="user-info">
                <span>أحمد</span>
                <span className="email">Ahmed@gmail.com</span>
            </div>
        </div>
    );
};

export default SidebarFooter;
