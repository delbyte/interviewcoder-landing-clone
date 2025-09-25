import { PlayIcon } from "lucide-react"
import Image from "next/image"

export function ProofSectionTwo() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proof of Concept</h2>
          <p className="text-xl text-muted-foreground">See Interview Coder in action, helping users ace their OAs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Smaller Videos on Left */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer">
              <Image
                src="/video-thumbnail.png"
                alt="Video Thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer">
              <Image
                src="/video-thumbnail.png"
                alt="Video Thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer">
              <Image
                src="/video-thumbnail.png"
                alt="Video Thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer">
              <Image
                src="/video-thumbnail.png"
                alt="Video Thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayIcon className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Main Video on Right */}
          <div className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer">
            <Image
              src="/main-video-thumbnail.jpg"
              alt="Main Video Thumbnail"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayIcon className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
