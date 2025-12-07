import React from 'react';
import type { MenuItem } from '../../models';

const NavigationMenu: React.FC = () => {
    const menuItems: MenuItem[] = [
        { label: 'نظرة عامة', icon: '📊' },
        { label: 'حسابتي الحالت', icon: '📈' },
        { label: 'خريطة عقاراتي', icon: '🗺️' },
        { label: 'مؤشرات', icon: '📊' },
        { label: 'الإعدادات', icon: '🔔' },
        { label: 'عقاراتي GPT', icon: '🤖' },
        { label: 'تصدير البيانات', icon: '📥' },
        { label: 'حفظ المعايير', icon: '💾' },
        { label: 'أخبار', icon: '📰' },
        { label: 'اشترك', icon: '👑' }
    ];

    return (
        <nav className="nav-menu">
            {menuItems.map((item, index) => (
                <a href="#" key={index} className="nav-item">
                    <span>{item.label}</span>
                    <span className="icon">{item.icon}</span>
                </a>
            ))}
        </nav>
    );
};

export default NavigationMenu;
