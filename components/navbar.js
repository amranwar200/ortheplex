"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { checkSession } from "@/app/actions/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const sessionData = await checkSession();
      setSession(sessionData);
    };
    getSession();
  }, []);
  
  return (
    <nav className="relative bg-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link href="/blogs" className="hover:text-gray-400">
              Blogs
            </Link>
          </li>
          {!session && (
            <>
              <li>
                <Link href="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </li>
            </>
          )}
          {session && (
            <li>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/*  */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link
              href="/blogs"
              className="block px-2 py-2 hover:bg-gray-700 rounded"
            >
              Blogs
            </Link>
          </li>
          {!session && (
            <>
              <li>
                <Link
                  href="/login"
                  className="block px-2 py-2 hover:bg-gray-700 rounded"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="block px-2 py-2 hover:bg-gray-700 rounded"
                >
                  Register
                </Link>
              </li>
            </>
          )}
          {session && (
            <li>
              <Link
                href="/dashboard"
                className="block px-2 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}