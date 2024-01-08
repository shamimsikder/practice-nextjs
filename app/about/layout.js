import React from 'react';
import Link from 'next/link'

export default function layout({ children }){
    return (
        <div>
            <ul className='flex gap-5 mb-5'>
                <li className=""><Link href="/about/mission">Mission</Link></li>
                <li className=""><Link href="/about/vision">Vision</Link></li>
            </ul>
            {children}
        </div>
    );
};

