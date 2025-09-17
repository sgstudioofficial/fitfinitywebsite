import { Link } from "react-router-dom";
import { ArrowRight, Dumbbell, Users, Star, Zap, Trophy, Clock, Activity,ShieldCheck} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-hero.png";

const Index = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Premium Equipment",
      description: "Train with state-of-the-art machines and tools built for every fitness goal."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "No Boring Workouts",
      description: "Say goodbye to routine drills. Every session is designed to be fun, engaging, and full of energy."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Results",
      description: "Start feeling the difference within your very first week of training.."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Clean & Well-Maintained",
      description: "Hygiene and safety are our priority. You’ll always find a spotless space ready for your workout."
    }
  ];

  const services = [
    {
      title: "Strength Training",
      description: "Build lean muscle with personalized strength programs",
      link: "/services/strength-training"
    },
    {
      title: "Group Classes",
      description: "High-energy Zumba, yoga, and boxing classes",
      link: "/services"
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching with expert trainers",
      link: "/coaches"
    },
    {
      title: "Expert Coaches",
      description: "Professional trainers and certified specialists",
      link: "/coaches"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-6 fade-in">
              <div className="relative mb-6">
                <img
                    src="/images/founders/logo.png"
                    alt="Fitfinity Logo"
                    className="h-24 w-40 md:h-32 md:w-52 object-contain hover-scale transition-all duration-700 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-[pulse_4s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
              </div>
              <div className="flex flex-col items-center">
                <img
                    src="/images/tlogo.png"
                    alt="Fitfinity"
                    className="h-16 md:h-24 object-contain mb-2 transition-all duration-700 hover:scale-105 drop-shadow-[0_8px_16px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_12px_24px_rgba(255,255,255,0.6)]"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(100%)"
                    }}
                />
                <p className="text-lg md:text-xl text-white/80 font-medium">BY POWERCREW ™</p>
              </div>
            </div>
            <p className="text-xl md:text-3xl text-white/90 mb-8 slide-up max-w-3xl mx-auto">
              MODERN FITNESS. REAL RESULTS. NO EXCUSES.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 fade-in" style={{ animationDelay: "0.3s" }}>
              <a href="https://forms.gle/LLyeNRaPxieA1pEB8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-premium text-lg px-8 py-4">
                  Join Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="https://forms.gle/LLyeNRaPxieA1pEB8" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="btn-outline-premium text-lg px-8 py-4">
                  Book Free Trial
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/80 text-sm fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>500+ Members</span>
              </div>
            </div>
          </div>

        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold fade-in">
                Why Choose Fitfinity?
              </h2>
              <p className="text-xl text-muted-foreground fade-in">
                Experience fitness like never before with our premium facilities and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <div
                      key={feature.title}
                      className="glass-card p-8 text-center glow-hover fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-primary mb-6 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gradient-gold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold fade-in">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground fade-in">
                Comprehensive fitness programs designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <Link
                      key={service.title}
                      to={service.link}
                      className="glass-card p-6 glow-hover fade-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-gradient-gold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="btn-premium">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="fade-in">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">500+</div>
                  <div className="text-muted-foreground">Active Members</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="text-5xl font-bold text-gradient-gold mb-2">10+</div>
                  <div className="text-muted-foreground">Expert Trainers</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="text-5xl font-bold text-gradient-gold mb-2">4500</div>
                  <div className="text-muted-foreground">Sq Ft Facility</div>
                </div>
                <div className="fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="text-5xl font-bold text-gradient-gold mb-2">15 Hour</div>
                  <div className="text-muted-foreground">Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the elite community and transform your life with premium fitness
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/membership">
                  <Button size="lg" className="btn-premium text-lg px-8 py-4">
                    View Membership Plans
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="https://forms.gle/LLyeNRaPxieA1pEB8" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="btn-outline-premium text-lg px-8 py-4">
                    Book Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Index;
