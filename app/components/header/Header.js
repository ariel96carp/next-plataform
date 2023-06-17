'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRef, useEffect } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'

const Header = () => {
    const MENU_LINKS = [
        {
            label: 'Inicio',
            link: '/'
        },
        {
            label: '¿Quiénes somos?',
            link: '/quienes-somos'
        },
        {
            label: 'Proyectos',
            link: '/proyectos'
        },
        {
            label: 'Contacto',
            link: '/contacto'
        }
    ]
    const pathname = usePathname()
    const offCanvasRef = useRef(null)
    const toggleMenu = () => {
        const offCanvasMenu = offCanvasRef.current
        offCanvasMenu.classList.toggle('active')
    }
    useEffect(() => {
        const closeMenuOnBreakpoint = () => {
            const fullConfig = resolveConfig(tailwindConfig)
            const tailwindBp = fullConfig.theme.screens.sm
            const smallBp = window.matchMedia(`(min-width: ${tailwindBp})`)
            if (smallBp.matches) {
                const offCanvasMenu = offCanvasRef.current
                if (offCanvasMenu.classList.contains('active')) {
                    offCanvasMenu.classList.remove('active')
                }
            }
        }
        closeMenuOnBreakpoint()
        window.addEventListener('resize', closeMenuOnBreakpoint)
        return () => window.removeEventListener('resize', closeMenuOnBreakpoint)
    }, [])
    return (
        <header className="fixed top-0 left-0 w-full h-[var(--header-size)] bg-white shadow-md z-40">
            <div className="page-container h-full">
                <div className="flex items-center justify-between h-full">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="EDSoft Logo"
                            width={0}
                            height={0}
                            className="w-32"
                            priority
                        />
                    </Link>
                    <button type="button" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-5 -7 24 24"
                            fill="currentColor"
                            className="w-10 sm:hidden"
                        >
                            <path
                                d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
                            />
                        </svg>
                    </button>
                    <div className="off-canvas" ref={offCanvasRef}>
                        <div className="page-container flex items-center h-full relative">
                            <button
                                type="button"
                                className="absolute top-0 right-0"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-6 -6 24 24"
                                    className="w-10"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
                                    />
                                </svg>
                            </button>
                            <nav className="w-full">
                                <ul className="text-center font-medium text-xl">
                                    {
                                        MENU_LINKS.map(({
                                            label,
                                            link
                                        }, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link}
                                                    className={pathname === link ? 'py-2 inline-block w-full text-edsoft-blue' : 'py-2 inline-block w-full'}
                                                    onClick={toggleMenu}
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-5 font-medium">
                            {
                                MENU_LINKS.map(({
                                    label,
                                    link
                                }, index) => (
                                    <li key={index} className="hover:text-edsoft-blue">
                                        <Link
                                            href={link}
                                            className={pathname === link ? 'text-edsoft-blue' : undefined}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
