'use client';

import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 shadow-md">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <Link href={item.href} className="hover:underline hover:text-blue-500">
                        {item.label}
                    </Link>
                    {index < items.length - 1 && <span className="mx-2">/</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
