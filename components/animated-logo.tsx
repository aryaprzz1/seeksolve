"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AnimatedLogoProps {
  width?: number
  height?: number
  className?: string
}

export default function AnimatedLogo({ width = 200, height = 200, className = "" }: AnimatedLogoProps) {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimated(true)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className={`transition-all duration-1000 ${isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2.jpeg-4VYRrmVYUFDAn5pPGx4K9GpneI0VDo.png"
          width={width}
          height={height}
          alt="SeekProof Detective Logo"
          className="object-contain"
        />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          isAnimated ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
