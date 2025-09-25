import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Software Engineer at Google",
    quote:
      "Interview Coder was a game-changer for my Leetcode preparation. The real-time assistance is incredibly accurate and helped me understand complex algorithms much faster. I landed my dream job at Google thanks to it!",
    avatar: "/alice-johnson-avatar.png",
  },
  {
    name: "Bob Williams",
    title: "Senior Developer at Amazon",
    quote:
      "I was skeptical at first, but Interview Coder truly delivers. It's like having a personal tutor during practice sessions. The stealth technology is impressive, and I felt confident tackling any problem thrown my way.",
    avatar: "/bob-williams-avatar.png",
  },
  {
    name: "Charlie Brown",
    title: "New Grad at Meta",
    quote:
      "As a new grad, Leetcode interviews were daunting. Interview Coder simplified everything. The explanations were clear, and the solutions were optimal. Highly recommend for anyone serious about tech interviews!",
    avatar: "/charlie-brown-avatar.png",
  },
  {
    name: "Diana Miller",
    title: "Staff Engineer at Netflix",
    quote:
      "The best investment I made for my career. Interview Coder helped me brush up on data structures and algorithms efficiently. The ability to get instant feedback is invaluable. Passed my Netflix interview with flying colors!",
    avatar: "/avatar-of-diana-miller.jpg",
  },
  {
    name: "Eve Davis",
    title: "Software Engineer at Spotify",
    quote:
      "Interview Coder is a must-have tool. It's intuitive, powerful, and genuinely helps you improve. I saw a significant boost in my problem-solving speed and accuracy. Thank you, Interview Coder!",
    avatar: "/avatar-of-eve-davis.jpg",
  },
  {
    name: "Frank White",
    title: "Principal Engineer at Microsoft",
    quote:
      "Even with years of experience, staying sharp on Leetcode is tough. Interview Coder is an excellent resource for quick refreshers and tackling new problem types. It's a secret weapon for senior roles.",
    avatar: "/avatar-of-frank-white.jpg",
  },
  {
    name: "Grace Taylor",
    title: "AI Researcher at Google",
    quote:
      "The AI capabilities of Interview Coder are top-notch. It understands complex prompts and provides relevant solutions. Essential for anyone in AI/ML roles facing algorithmic challenges.",
    avatar: "/avatar-of-grace-taylor.jpg",
  },
  {
    name: "Henry Green",
    title: "Product Manager at Apple",
    quote:
      "While not a coder by trade, understanding the technical side is crucial. Interview Coder helped me grasp the logic behind solutions, which was beneficial for technical discussions in my PM role.",
    avatar: "/placeholder.g?height=40&width=40&query=avatar of Henry Green",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <Card className="bg-card border-border h-full">
    <CardContent className="flex flex-col items-start p-6">
      <img
        src={testimonial.avatar || "/placeholder.svg"}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full mb-4"
      />
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{testimonial.quote}</p>
      <div>
        <h3 className="font-semibold text-sm">{testimonial.name}</h3>
        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
      </div>
    </CardContent>
  </Card>
)

export function Testimonials() {
  const column1 = testimonials.filter((_, i) => i % 3 === 0)
  const column2 = testimonials.filter((_, i) => i % 3 === 1)
  const column3 = testimonials.filter((_, i) => i % 3 === 2)

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-xl text-muted-foreground">Hear from those who aced their interviews with Interview Coder</p>
      </div>

      <div className="relative h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
        <div className="absolute inset-0 flex justify-center gap-8">
          {/* Column 1: Scrolls Up */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-up">
            {column1.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {column1.map((testimonial, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2: Scrolls Down */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-down">
            {column2.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {column2.map((testimonial, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3: Scrolls Up */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-up">
            {column3.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {column3.map((testimonial, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
