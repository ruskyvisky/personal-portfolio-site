"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Language } from "../interfaces/languageInterface";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "TR",
    flag: "https://flagcdn.com/w40/tr.png",
    name: "Türkçe",
    route: "/tr",
  });

  const languages = [
    { code: "EN", flag: "https://flagcdn.com/w40/us.png", name: "English", route: "/en" },
    { code: "TR", flag: "https://flagcdn.com/w40/tr.png", name: "Türkçe", route: "/tr" },
  ];

  useEffect(() => {
    // pathname'dan mevcut dilin kodunu almak
    const currentLang = pathname.startsWith("/en") ? "EN" : "TR";
    
    // Mevcut dil ile selectedLanguage'ı güncellemek
    const language = languages.find((lang) => lang.code === currentLang);
    if (language) {
      setSelectedLanguage(language);
    }
  }, [pathname]); // pathname değiştiğinde çalışır

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    router.push(language.route);
    setDropdownOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <p className="text-3xl font-bold ">ND</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Dil Seçici Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 shadow-sm hover:bg-neutral-800 focus:outline-none"
          >
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              className="h-6 w-6 rounded-2xl"
            />
            <span>{selectedLanguage.code}</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md border border-neutral-700 bg-neutral-900 shadow-lg">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-800"
                >
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="h-5 w-5 rounded-2xl"
                  />
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center gap-4 text-2xl">
          <a href="https://github.com/ruskyvisky" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/numan-dirican/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://x.com/NumanDirican1" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://medium.com/@numandirican" target="_blank">
            <FaMedium />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01d0e8d045b4397ed0"
            target="_blank"
          >
            <FaUpwork />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
