import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="bg-gray-200">
                <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                        <div className="px-5 py-2">
                            <Link href="/">
                                <a
                                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                >
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/about">
                                <a
                                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                >
                                    About
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/services">
                                <a
                                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                >
                                    Services
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/contact">
                                <a
                                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                >
                                    Contact
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/zionlandscape"
                                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                >
                                    Instagram
                                </a>
                        </div>
                    </nav>
                    <div className="mt-8">
                        <p className="text-center text-base leading-6 text-gray-400">
                            &copy; 2021 Zion Landscaping, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
