import { Button } from "@/components/ui/button"
import { AppleIcon, WindIcon as WindowsIcon } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Ready to Pass Any SWE Interviews with 100% Undetectable AI?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">Start Your Free Trial Today</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 flex items-center gap-2">
            <AppleIcon className="w-6 h-6" />
            Pass Your Next Interview (Mac)
          </Button>
          <Button size="lg" className="text-lg px-8 py-6 flex items-center gap-2">
            <WindowsIcon className="w-6 h-6" />
            Pass Your Next Interview (PC)
          </Button>
        </div>
      </div>
    </section>
  )
}
