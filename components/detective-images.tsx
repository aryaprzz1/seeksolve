import Image from "next/image"

export type DetectiveImageType = "mysterious" | "silhouette" | "magnifying" | "tunnel"

interface DetectiveImageProps {
  type: DetectiveImageType
  width: number
  height: number
  alt: string
  className?: string
  priority?: boolean
}

export default function DetectiveImage({
  type,
  width,
  height,
  alt,
  className = "",
  priority = false,
}: DetectiveImageProps) {
  const getImageUrl = () => {
    switch (type) {
      case "mysterious":
        return "/images/d3.jpg"
      case "silhouette":
        return "/images/d4.jpg"
      case "magnifying":
        return "/images/d5.jpg"
      case "tunnel":
        return "/images/d3.jpg"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={getImageUrl()}
        width={width}
        height={height}
        alt={alt}
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        priority={priority}
      />
      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
    </div>
  )
}
