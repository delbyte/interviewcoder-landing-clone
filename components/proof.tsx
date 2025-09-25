"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PlayIcon } from "lucide-react"
import Image from "next/image" // Added Image import for thumbnails

const videos = [
  {
    id: "main-video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=12345", // Placeholder for main video
    thumbnail: "/youtube-video-thumbnail-of-coding-interview.jpg",
    title: "Crushing a Leetcode Hard with Interview Coder",
    description: "Watch how Interview Coder helps solve a complex Leetcode hard problem in real-time during an OA.",
  },
  {
    id: "video-1",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=12345", // Placeholder
    thumbnail: "/youtube-video-thumbnail-of-coding-interview-1.jpg",
    title: "Quick Sort Optimization",
  },
  {
    id: "video-2",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=12345", // Placeholder
    thumbnail: "/youtube-video-thumbnail-of-coding-interview-2.jpg",
    title: "Dynamic Programming Deep Dive",
  },
  {
    id: "video-3",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=12345", // Placeholder
    thumbnail: "/youtube-video-thumbnail-of-coding-interview-3.jpg",
    title: "Graph Traversal Techniques",
  },
  {
    id: "video-4",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=12345", // Placeholder
    thumbnail: "/youtube-video-thumbnail-of-coding-interview-4.jpg",
    title: "System Design Mock Interview",
  },
]

export function Proof({ flipped = false }: { flipped?: boolean }) {
  const [mainVideo, setMainVideo] = useState(videos[0])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proof of Concept</h2>
          <p className="text-xl text-muted-foreground">See Interview Coder in action during real Online Assessments</p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 ${flipped ? "md:flex md:flex-row-reverse" : ""}`}>
          {/* Main Video */}
          <div className="md:col-span-2 relative aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src={mainVideo.src}
              title={mainVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          {/* Side Videos */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {videos.slice(1).map((video) => (
              <Card
                key={video.id}
                className="bg-card border-border cursor-pointer hover:bg-accent transition-colors"
                onClick={() => setMainVideo(video)}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="relative w-24 h-14 flex-shrink-0 rounded-md overflow-hidden">
                    <Image // Changed img to Image component
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title || "Video thumbnail"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <PlayIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm flex-grow">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
