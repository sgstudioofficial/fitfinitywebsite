import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Prasanjeet Dutta",
      role: "Founder | Leads strength training, functional fitness, and holistic lifestyle transformation.",
      bio: "I’m a Fitness Professional with over 10 years of experience helping individuals build strength, burn fat, and transform their lifestyle through science-based training and sustainable coaching. Holding a Diploma in Sports & Exercise Science, I’m also a Certified Personal Trainer (CPT), Kettlebell Training Specialist, and Super Body Super Brain Personal Training Specialist. My expertise spans across strength & conditioning, functional training, kettlebell mastery, fat loss, lean muscle development, athletic performance, and mind-body fitness for peak energy. My mission is to empower people to go beyond just workouts—helping them unlock discipline, confidence, and lasting transformation both inside and outside the gym.",
      image: "/images/founders/founder1.png"
    },
    {
      name: "Mona Sharma",
      role: "Founder | Specializes in nutrition, women’s health, and sustainable weight management.",
      bio: "“I am a Certified Nutritionist with expertise in Gut Health, Sports Nutrition, and Weight Loss Management, along with being a qualified Health Trainer. With over 10 years of experience in fitness and nutrition, I specialize in supporting women’s health—especially those dealing with hormonal imbalances .My approach blends science-based training with customized nutrition to help women lose weight effectively, build strength, and restore hormonal balance. Beyond weight loss, my goal is to create sustainable lifestyle transformations that improve energy, confidence, and overall wellbeing. I am passionate about guiding individuals toward lasting health with care and consistency.”",
      image: "/images/founders/founder3.png"
    },
    {
      name: "Rohit Verma",
      role: "Founder | Drives athletic performance, functional training, and competitive fitness coaching.",
      bio: "I am a certified Cricket Strength and Conditioning Specialist, dedicated to optimizing the performance of athletes. With additional certifications as a Functional and Group Training Specialist, I leverage a holistic approach to fitness. As both a HYROX Pro Athlete and a HYROX 365 Race Ready Coach, I apply my own race experience to help clients master the unique demands of functional fitness racing. My mission is to empower not just athletes, but everyone, to unlock their potential, improve their health, and live a fit, active lifestyle.",
      image: "/images/founders/founder2.png"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every workout, every session, every moment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive family where everyone achieves their best."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge equipment and methods for superior results."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness",
      description: "Holistic approach to fitness, nutrition, and mental health."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
            When Mona Sharma, a lifelong fitness enthusiast, moved from Chennai to this small city, she was in search of a Dream Team that shared her passion for fitness and vision for change. That’s when she met Prasanjeet, a dedicated coach whose belief in discipline and continuous growth inspired her to see fitness from a new perspective. Soon after, they connected with Rohit, a fresh and dynamic mind whose energy, creativity, and innovative ideas brought a new dimension to the team. Together, the three organized their very first bootcamp—a bold step in a city where fitness was still unfamiliar. The response was overwhelming, and it marked the true beginning of Fitfinity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What started as a small initiative has now evolved into a thriving fitness destination that blends science, structure, and support to deliver real results. At Fitfinity, we believe in raising the standards of fitness by combining evidence-based training, expert nutrition guidance, and a community-driven environment. Our mission is not just to help people get fitter, but to empower them with knowledge and discipline that lead to long-term transformation. With every step forward, we remain committed to innovation, professionalism, and the belief that fitness is the foundation for a stronger, healthier, and more confident life.              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center glow-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-gold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-gold">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground">
              Visionary leaders who transformed the fitness industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="glass-card p-8 text-center glow-hover fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gradient-gold">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="fade-in">
                <div className="text-4xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-gradient-gold mb-2">15+</div>
                <div className="text-muted-foreground">Expert Trainers</div>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-gradient-gold mb-2">2</div>
                <div className="text-muted-foreground">Years Excellence</div>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl font-bold text-gradient-gold mb-2">15 Hour</div>
                <div className="text-muted-foreground">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;