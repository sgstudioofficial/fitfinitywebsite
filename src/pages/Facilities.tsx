import { Dumbbell, Waves, Users, Eye, Wifi, Car, Clock, Shield, Music, Snowflake, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Facilities = () => {
  const facilities = [
    {
      title: "Strength Training Zone",
      description: "State-of-the-art weightlifting equipment and functional training area",
      features: ["Free weights", "Strength machines", "Squat racks, bench press, and deadlift platforms", "Supportive environment"],
      image: "/images/services/st.png",
      icon: <Dumbbell className="w-6 h-6" />
    },
    {
      title: "Cardio Section",
      description: "Premium cardio equipment with entertainment systems",
      features: ["Treadmills with speed & incline settings", "Stationary bikes & spin cycles", "Heart-rate & calorie tracking support", "Energetic atmosphere"],
      image: "/images/services/cardio.png",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Café Fika",
      description: "Premium café serving healthy meals and refreshing beverages",
      features: ["Protein smoothies", "Healthy meal options", "Free Coffee Shots", "Post-workout snacks"],
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/11478-Eating_the_Right_Foods_for_Exercise_732x549-thumbnail.jpg",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Group Fitness Studios",
      description: "Dedicated spaces for group classes and specialty workouts",
      features: ["Mirrored walls", "Professional sound systems", "Yoga props", "Dance floors"],
      image: "/images/services/group.png",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const amenities = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Immersive Surround-Sound Music System",
      description: "Boost your energy with a high-quality audio experience that keeps every workout in rhythm."
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Fully Air-Conditioned Facility",
      description: "Enjoy a cool, comfortable environment designed for peak performance."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Ample Parking Space",
      description: "Convenient on-site parking so your fitness journey starts stress-free."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Premium Health Café",
      description: "Refuel with nutritious meals, protein shakes, and refreshing beverages."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
            World-Class Facilities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
            Experience fitness in our premium 4500 sq ft facility
          </p>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                  360° Virtual Tour
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Take a virtual walk through our premium facilities from the comfort of your home. Experience our state-of-the-art equipment, luxurious amenities, and spacious workout areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/Gallery" rel="noopener noreferrer">
                    <Button className="btn-premium">
                      <Eye className="w-5 h-5 mr-2" />
                      Start Virtual Tour
                    </Button>
                  </a>
                </div>
              </div>
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-gradient-gold">360° Virtual Tour</p>
                <p className="text-muted-foreground">Interactive facility walkthrough</p>
                <a href="https://streetview.google.com/embed-gym-tour" target="_blank" rel="noopener noreferrer">
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
              Premium Training Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized zones designed for every aspect of your fitness journey
            </p>
          </div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} fade-in`}>
                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">
                        {facility.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gradient-gold">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {facility.description}
                    </p>
                    <ul className="space-y-3">
                      {facility.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} slide-up`}>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                Premium Equipment
              </h2>
              <p className="text-lg text-muted-foreground">
                Top-tier fitness equipment from leading brands worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center fade-in">
                <h4 className="text-xl font-semibold mb-3 text-gradient-gold">
                  4Fit Fitness
                </h4>
                <p className="text-muted-foreground">
                  Premium cardio and strength equipment
                </p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: "0.1s" }}>
                <h4 className="text-xl font-semibold mb-3 text-gradient-gold">
                  Viva Fitness
                </h4>
                <p className="text-muted-foreground">
                  Commercial-grade fitness machines
                </p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: "0.2s" }}>
                <h4 className="text-xl font-semibold mb-3 text-gradient-gold">
                  USI Universal
                </h4>
                <p className="text-muted-foreground">
                  Professional training equipments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
              Luxury Amenities
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium services and facilities for your comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.title}
                className="glass-card p-6 text-center glow-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {amenity.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gradient-gold">
                  {amenity.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {amenity.description}
                </p>
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
              Experience Fitfinity Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a tour to see our world-class facilities virtually
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Gallery" rel="noopener noreferrer">
                <Button className="btn-premium">
                  <Eye className="w-5 h-5 mr-2" />
                  Start Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;