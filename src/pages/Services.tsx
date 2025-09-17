import { Link } from "react-router-dom";
import { Dumbbell, Music, Target, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "strength-training",
      title: "Strength Training",
      description: "Build lean muscle and increase power with our state-of-the-art equipment and expert guidance.",
      icon: <Dumbbell className="w-12 h-12" />,
      features: ["Free Weights", "Resistance Machines", "Functional Training", "Personal Coaching"],
      image: "public/images/services/st.png"
    },
    {
      id: "zumba",
      title: "Zumba",
      description: "Dance your way to fitness with high-energy Zumba sessions.",
      icon: <Music className="w-12 h-12" />,
      features: ["Certified Instructors", "High-energy playlists", "Full-body workout", "Beginner-friendly routines"],
      image: "public/images/services/dance.png"
    },
    {
      id: "boxing",
      title: "Boxing",
      description: "Intensive boxing training for fitness, self-defense, and competitive preparation.",
      icon: <Target className="w-12 h-12" />,
      features: ["Heavy Bag Training", "Speed & Agility", "Technique Classes", "Sparring Sessions"],
      image: "public/images/services/box.png"
    },
    {
      id: "yoga",
      title: "Yoga",
      description: "Find balance and flexibility through mindful movement and meditation practices.",
      icon: <Flower className="w-12 h-12" />,
      features: ["Certified yoga instructors", "Guided sessions", "Beginner to advanced poses", "Peaceful, focused environment"],
      image: "public/images/services/yoga.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
            Comprehensive fitness programs designed to help you achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="glass-card p-8 glow-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/services/${service.id}`}>
                      <Button className="btn-premium w-full md:w-auto">
                        Learn More
                      </Button>
                    </Link>
                  </div>

                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join Fitfinity today and experience the difference that premium fitness can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/LLyeNRaPxieA1pEB8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-premium">
                  Book Free Trial
                </Button>
              </a>
              <Link to="/Membership">
              <Button variant="outline" size="lg" className="btn-outline-premium">
                View Membership Plans
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;