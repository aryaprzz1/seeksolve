"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface AgencyImageProps {
  width: number
  height: number
  alt: string
  className?: string
  priority?: boolean
  useDetectiveLogo?: boolean
}

export default function AgencyImage({
  width,
  height,
  alt,
  className,
  priority = false,
  useDetectiveLogo = true,
}: AgencyImageProps) {
  const [imageSrc, setImageSrc] = useState(`/placeholder.svg?height=${height}&width=${width}`)

  // Using the provided detective logo
  const detectiveLogoUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2.jpeg-4VYRrmVYUFDAn5pPGx4K9GpneI0VDo.png"

  useEffect(() => {
    // Set the image to the detective logo
    if (useDetectiveLogo) {
      setImageSrc(detectiveLogoUrl)
    }
  }, [useDetectiveLogo])

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className} transition-transform duration-500 hover:scale-105`}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        width={width}
        height={height}
        alt={alt.replace(/Seek&Solve/g, "SeekProof")}
        className="object-contain w-full h-full"
        priority={priority}
      />
    </div>
  )
}
