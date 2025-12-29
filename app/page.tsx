import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users } from "lucide-react"

export default function LiverpoolFanPage() {
  const news = [
    {
      date: "TODAY",
      title: "LIVE: Liverpool vs Wolves at Anfield - Chiesa Starts in Attack",
      source: "The Standard",
    },
    {
      date: "TODAY",
      title: "Emotional Moment: Diogo Jota's Sons to Be Mascots at Anfield",
      source: "TalkSport",
    },
    {
      date: "DEC 27 2024",
      title: "Salah Staying at Anfield - Liverpool Shut Down January Exit Talk",
      source: "OneFootball",
    },
    {
      date: "DEC 27 2024",
      title: "Slot Praises Ekitike's Impact in Liverpool's Season Resurgence",
      source: "Reuters",
    },
    {
      date: "DEC 27 2024",
      title: "Squad Update: Conor Bradley & Latest Injury List Confirmed",
      source: "Liverpool FC",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">LFC</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">The Kop Times</h1>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Users className="mr-2 h-5 w-5" />
            <a href="liverpool.apk">Download App</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">You'll Never Walk Alone</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed mb-8">
            The ultimate destination for Liverpool FC news, updates, and passionate fan discussions
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6"
          >
            <Users className="mr-2 h-6 w-6" />
            Join Our Community
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl font-bold text-foreground">Latest News</h3>
            <div className="h-1 flex-1 bg-border ml-8 max-w-md"></div>
          </div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-border hover:border-primary/30 cursor-pointer group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-mono text-muted-foreground tracking-wider">{item.date}</span>
                      <span className="text-sm text-muted-foreground">{item.source}</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors text-pretty leading-relaxed">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Join the Red Army</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with fellow Liverpool supporters, share your passion, and stay updated with exclusive content and
            community discussions
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6"
          >
            <Users className="mr-2 h-6 w-6" />
            Become a Member
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 The Kop Times. A fan-run community for Liverpool FC supporters.</p>
          <p className="text-xs mt-2">Not affiliated with Liverpool Football Club</p>
        </div>
      </footer>
    </div>
  )
}
