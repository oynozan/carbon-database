'use client'

import Link from 'next/link';
import './button.scss';

export default function Button({
    click = () => {},
    type = "blank",
    href = "",
    custom,
    disabled = false,
    children
}) {
    return (
        <>
        { href ? (
            // Link
            <Link
                href={href}
                className={`button ${type} ${disabled ? 'disabled' : ''}`}
                style={custom}
            >
                {children}
            </Link>
        ) : (
            // Button
            <button
                onClick={() => { if (!disabled) click() }}
                className={`button ${type} ${disabled ? 'disabled' : ''}`}
                style={custom}
            >
                {children}
            </button> 
        )}
        </>
    )
}