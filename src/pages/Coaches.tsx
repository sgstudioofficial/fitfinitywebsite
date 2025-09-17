import { ExternalLink, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trainers } from "@/data/trainers";

const Coaches = () => {

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
              Our Expert Coaches
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              World-class trainers dedicated to helping you achieve your fitness goals
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="fade-in">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">10+</div>
                  <div className="text-muted-foreground text-sm">Expert Trainers</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="text-3xl font-bold text-gradient-gold mb-2">10K+</div>
                  <div className="text-muted-foreground text-sm">Training Sessions</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="text-3xl font-bold text-gradient-gold mb-2">4.9</div>
                  <div className="text-muted-foreground text-sm">Average Rating</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coaches Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((coach, index) => (
                  <div
                      key={coach.name}
                      className="glass-card p-6 glow-hover fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Coach Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30">
                        <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-0 right-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {coach.experience}
                      </div>
                    </div>

                    {/* Coach Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2 text-gradient-gold">
                        {coach.name}
                      </h3>
                      {/* Specialties as bullet points */}
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Specialties</h4>
                        <div className="flex flex-wrap justify-center gap-1">
                          {coach.specialty.split(' & ').map((specialty, i) => (
                              <div key={i} className="flex items-center text-xs">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"></div>
                                <span className="text-primary font-medium">{specialty.trim()}</span>
                                {i < coach.specialty.split(' & ').length - 1 && (
                                    <div className="w-px h-3 bg-border mx-2"></div>
                                )}
                              </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {coach.bio}
                      </p>

                      {/* Rating & Sessions */}
                      <div className="flex justify-center gap-6 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-primary fill-current" />
                          <span className="text-sm font-semibold">{coach.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">{coach.sessions.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>


                    {/* Book Button */}
                    <a
                        href={coach.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                      {/*
                      <Button className="btn-premium w-full group">
                        Book Trainer
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                       */}
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
};

export default Coaches;