"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export function NavbarTransparent() {
  const [showMenu, setShowMenu] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
const dropdownRef = useRef<HTMLLIElement>(null)
const router = useRouter()


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setDropdownOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

 
const handleLinkClick = (href: string, e: React.MouseEvent | React.TouchEvent) => {
  e.preventDefault()
  e.stopPropagation()
  setDropdownOpen(false)
  setShowMenu(false)
  router.push(href)
}
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navbar */}
      <div
        className={`relative px-7 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-primary-vio/95 backdrop-blur-md shadow-lg"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <h1 className="md:w-2/12 cursor-pointer">
            <div className="mr-10 flex items-center">
              <Link href="/">
                <Image
                  src="/images/logoturquesa.png"
                  alt="Viaga Mundo Logo"
                  width={120}
                  height={40}
                  className="h-auto w-24 md:w-auto md:h-auto"
                  priority
                />
              </Link>
            </div>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold text-white">
            <li>
              <Link href="/nosotros">
                <button className="font-semibold text-white text-lg focus:outline-none hover:text-secondary-green transition-colors bg-transparent">
                  {"¿Quiénes somos?"}
                </button>
              </Link>
            </li>

            {/* Dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white text-lg flex items-center focus:outline-none hover:text-secondary-green transition-colors bg-transparent"
              >
                <span>Destinos</span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-[100]">
                  <button
  onTouchEnd={(e) => handleLinkClick("/destino-irlanda", e)}
  onClick={(e) => handleLinkClick("/destino-irlanda", e)}
  className="flex items-center px-4 py-2 rounded-t-lg hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/ireland-landscape.jpg" alt="Irlanda" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Irlanda</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-malta", e)}
  onClick={(e) => handleLinkClick("/destino-malta", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/malta-coastline.jpg" alt="Malta" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Malta</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-espana", e)}
  onClick={(e) => handleLinkClick("/destino-espana", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/spain-barcelona.jpg" alt="España" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">España</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-uk", e)}
  onClick={(e) => handleLinkClick("/destino-uk", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/uk-landscape.jpg" alt="UK" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">UK</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-alemania", e)}
  onClick={(e) => handleLinkClick("/destino-alemania", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/germany-landscape.jpg" alt="Alemania" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Alemania</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-francia", e)}
  onClick={(e) => handleLinkClick("/destino-francia", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/france-landscape.jpg" alt="Francia" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Francia</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/contactanos", e)}
  onClick={(e) => handleLinkClick("/contactanos", e)}
  className="flex items-center px-4 py-2 rounded-b-lg hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/world-travel.jpg" alt="Otros Destinos" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Otros Destinos</span>
</button>
                </div>
              )}
            </li>

            <li>
              <Link href="/ahorro">
                <button className="text-white text-lg focus:outline-none hover:text-secondary-green transition-colors bg-transparent">
                  Financia tu viaje
                </button>
              </Link>
            </li>

            <li>
              <Link href="/servicios">
                <button className="text-white text-lg focus:outline-none hover:text-secondary-green transition-colors bg-transparent">
                  Otros servicios
                </button>
              </Link>
            </li>

            <li>
              <Link href="/vm-house">
                <button className="text-white text-lg focus:outline-none hover:text-secondary-green transition-colors bg-transparent">
                  VM House
                </button>
              </Link>
            </li>

            <li>
              <Link href="/blogs">
                <button className="text-white text-lg focus:outline-none hover:text-secondary-green transition-colors bg-transparent">
                  Blog
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:w-2/12 justify-end flex items-center">
            <div className="flex lg:hidden">
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(!showMenu)}
                className="text-white focus:outline-none focus:ring-2 rounded focus:ring-gray-600 bg-transparent"
              >
                <svg
                  className="fill-stroke"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute z-50 inset-0 md:hidden bg-primary-vio/95 backdrop-blur-md flex-col h-screen w-full`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4 p-4">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/logoturquesa.png"
                alt="Viaga Mundo Logo"
                width={96}
                height={32}
                className="w-24 h-auto"
              />
            </Link>
          </div>
          <div className="ml-auto">
            <button
              aria-label="close menu"
              onClick={() => setShowMenu(false)}
              className="text-white focus:outline-none focus:ring-2 rounded focus:ring-gray-600 bg-transparent"
            >
              <svg
                className="fill-stroke"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 mx-4">
          <ul className="flex flex-col space-y-4 items-center">
            <li>
              <Link href="/nosotros" onClick={() => setShowMenu(false)}>
                <button className="focus:outline-none text-white text-lg text-left hover:text-secondary-green transition-colors bg-transparent">
                  {"¿Quiénes somos?"}
                </button>
              </Link>
            </li>

            <li className="flex flex-col items-center w-full">
              <button
                onClick={toggleDropdown}
                className="text-white text-lg focus:outline-none hover:text-secondary-green transition-colors flex items-center bg-transparent"
              >
Destinos                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
<div className="relative mt-4 w-full max-w-[320px] bg-white border border-gray-300 rounded-lg shadow-lg z-[100]">
                    <button
  onTouchEnd={(e) => handleLinkClick("/destino-irlanda", e)}
  onClick={(e) => handleLinkClick("/destino-irlanda", e)}
  className="flex items-center px-4 py-2 rounded-t-lg hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/ireland-landscape.jpg" alt="Irlanda" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Irlanda</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-malta", e)}
  onClick={(e) => handleLinkClick("/destino-malta", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/malta-coastline.jpg" alt="Malta" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Malta</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-espana", e)}
  onClick={(e) => handleLinkClick("/destino-espana", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/spain-barcelona.jpg" alt="España" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">España</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-uk", e)}
  onClick={(e) => handleLinkClick("/destino-uk", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/uk-landscape.jpg" alt="UK" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">UK</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-alemania", e)}
  onClick={(e) => handleLinkClick("/destino-alemania", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/germany-landscape.jpg" alt="Alemania" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Alemania</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/destino-francia", e)}
  onClick={(e) => handleLinkClick("/destino-francia", e)}
  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/france-landscape.jpg" alt="Francia" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Francia</span>
</button>
<hr className="border-gray-300" />

<button
  onTouchEnd={(e) => handleLinkClick("/contactanos", e)}
  onClick={(e) => handleLinkClick("/contactanos", e)}
  className="flex items-center px-4 py-2 rounded-b-lg hover:bg-gray-100 cursor-pointer w-full text-left bg-white"
>
  <Image src="/world-travel.jpg" alt="Otros Destinos" width={96} height={72} className="w-24 h-18 object-cover rounded-lg mr-3" />
  <span className="text-primary-vio font-semibold">Otros Destinos</span>
</button>

                
                </div>
              )}
            </li>

            <li>
              <Link href="/ahorro" onClick={() => setShowMenu(false)}>
                <button className="focus:outline-none text-white text-left text-lg hover:text-secondary-green transition-colors bg-transparent">
                  Financia tu viaje
                </button>
              </Link>
            </li>

            <li>
              <Link href="/servicios" onClick={() => setShowMenu(false)}>
                <button className="focus:outline-none text-white text-left text-lg hover:text-secondary-green transition-colors bg-transparent">
                  Otros servicios
                </button>
              </Link>
            </li>

            <li>
              <Link href="/vm-house" onClick={() => setShowMenu(false)}>
                <button className="focus:outline-none text-white text-left text-lg hover:text-secondary-green transition-colors bg-transparent">
                  VM House
                </button>
              </Link>
            </li>

            <li>
              <Link href="/blogs" onClick={() => setShowMenu(false)}>
                <button className="focus:outline-none text-white text-left text-lg hover:text-secondary-green transition-colors bg-transparent">
                  Blog
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
