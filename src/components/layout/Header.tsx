"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                GalloPedia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              機能
            </a>
            <a
              href="#demo"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              デモ
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              お問い合わせ
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a href="#cta" className="btn-primary">
              無料で試す
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>メニューを開く</title>
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4 pb-4">
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                機能
              </a>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#demo"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                デモ
              </a>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#cta"
                className="btn-primary inline-block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                無料で試す
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
