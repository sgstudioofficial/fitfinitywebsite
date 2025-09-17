import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programTimings } from "@/data/programTimings";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData = {
    "strength-training": {
      title: "Strength Training",
      description: "Transform your body with our comprehensive strength training program designed for all fitness levels.",
      longDescription: "Our strength training program combines traditional weightlifting with modern functional movements to build lean muscle, increase bone density, and boost metabolism. Whether you're a beginner or advanced athlete, our expert trainers will design a personalized program that challenges you safely and effectively.",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      timings: programTimings["strength-training"],
      instructor: {
        name: "Mike Rodriguez",
        bio: "Certified strength coach with 12+ years experience in powerlifting and functional training.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    },
    "zumba": {
      title: "Zumba",
      description: "Dance your way to fitness with high-energy Zumba classes that make working out feel like a party.",
      longDescription: "Our Zumba classes blend Latin and international music with dance moves that create a dynamic, exciting, and effective fitness system. The routines feature aerobic/fitness interval training with a combination of fast and slow rhythms that tone and sculpt the body.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      timings: programTimings["zumba"],
      instructor: {
        name: "Maria Gonzalez",
        bio: "Certified Zumba instructor with Latin dance background and 8+ years of group fitness experience.",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    },
    "boxing": {
      title: "Boxing",
      description: "Build strength, confidence, and technique with our comprehensive boxing training program.",
      longDescription: "Our boxing program offers everything from basic fundamentals to advanced competitive training. Learn proper technique, improve cardiovascular fitness, and build mental toughness through structured training sessions that include heavy bag work, pad training, and conditioning.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      timings: programTimings["boxing"],
      instructor: {
        name: "James Thompson",
        bio: "Former professional boxer and certified trainer with 15+ years in competitive boxing.",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    },
    "yoga": {
      title: "Yoga",
      description: "Find balance, flexibility, and inner peace through our comprehensive yoga program.",
      longDescription: "Our yoga classes offer a sanctuary for mind, body, and spirit. From gentle Hatha flows to dynamic Vinyasa sequences, our experienced instructors guide you through practices that improve flexibility, strength, and mental clarity while reducing stress and promoting overall wellness.",
      image: "https://images.unsplash.com/photo-1506629905607-0049a0d59e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      timings: programTimings["yoga"],
      instructor: {
        name: "Elena Chen",
        bio: "Certified yoga instructor with 500-hour RYT certification and 10+ years of teaching experience.",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    }
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services">
              <Button className="btn-premium">Back to Services</Button>
            </Link>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 mb-16">
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white slide-up">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Notice for specific services */}
                {(serviceId === "zumba" || serviceId === "boxing" || serviceId === "yoga") && (
                    <div className="glass-card p-8 mb-8 border-2 border-yellow-500/50 bg-yellow-500/10">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Class Update</h3>
                        <p className="text-lg text-muted-foreground">
                          Classes are off for now, but we'll be back in action shortly. Stay tuned for updates!
                        </p>
                      </div>
                    </div>
                )}

                <div className="glass-card p-8 mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-gradient-gold">About This Program</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                {/* Schedule */}
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gradient-gold flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Schedule
                  </h2>
                  <div className="space-y-4">
                    {service.timings.map((timing, index) => (
                        <div
                            key={timing.day}
                            className="flex justify-between items-center p-4 bg-muted/20 rounded-lg"
                        >
                          <span className="font-semibold">{timing.day}</span>
                          <span className="text-muted-foreground">{timing.time}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/*
                {/* CTA Card
                <div className="glass-card p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-gradient-gold">
                    Ready to Join?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Start your fitness journey with our expert guidance
                  </p>
                  <div className="space-y-3">
                    <a href="https://forms.google.com/free-trial" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-premium w-full">
                        Book Free Trial
                      </Button>
                    </a>
                    <Button variant="outline" className="btn-outline-premium w-full">
                      Contact Instructor
                    </Button>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ServiceDetail;