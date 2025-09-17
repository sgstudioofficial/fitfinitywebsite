import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Spotlight Testimonials (carousel)
  const spotlightTestimonials = [
    {
      name: "Katya",
      role: "Traveller",
      image: "/images/test/t1i.png",
      rating: 5,
      text: "I had a great experience here. I’ve been to many gyms across India, but this is by far the most modern-looking one I’ve seen. The facilities are excellent, and the coaches are always available to guide and help you out. Highly recommended for anyone serious about fitness!",
      videoUrl: "/images/test/t1.mp4",
      achievement: "Completed 100 sessions in 2023"
    },
    {
      name: "Ayush Raj",
      role: "Fitness Influencer",
      image: "/images/test/t2i.png",
      rating: 5,
      text: "This gym isn’t just about workouts — it has full athletic training: CrossFit, karate, boxing, yoga, dance. Owners are trainers, so it’s run with real passion and expertise.",
      videoUrl: "/images/test/t2.mp4",
      achievement: "2nd place in Men’s Physique category - Muscle Mania 2022"
    }
  ];

  // Grid Testimonials (bottom section)
  const gridTestimonials = [
    {
      name: "Priya Maheshwari",
      role: "College Student",
      image: "/images/test/geni.png",
      rating: 5,
      text: "The trainers are always ready to help and guide you. I love the variety of classes including cardio, strength, and yoga."
    },
    {
      name: "Amit Gupta",
      role: "Software Engineer",
      image: "/images/test/geni.png",
      rating: 5,
      text: "This gym offers a complete fitness experience. Modern equipment and helpful staff make it a top choice."
    },
    {
      name: "Ananya Gogoi",
      role: "Yoga Instructor",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "Spacious, clean, and well-maintained gym. The programs for strength and flexibility are excellent."
    },
    {
      name: "Raghav Baruah",
      role: "Athlete",
      image: "/images/test/geni.png",
      rating: 5,
      text: "Not just a gym — it’s a full athletic training hub with CrossFit, boxing, yoga, and more."
    },
    {
      name: "Isha Aggarwal",
      role: "Student",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "The owners are certified trainers and it shows — every class is structured, fun, and effective."
    },
    {
      name: "Karan Singh",
      role: "IT Professional",
      image: "/images/test/geni.png",
      rating: 5,
      text: "Modern, clean, and motivating. The mix of strength, cardio, and flexibility training makes it a complete fitness center."
    },
    {
      name: "Meera Singh",
      role: "Nutritionist",
      image: "/images/test/geni.png",
      rating: 5,
      text: "Friendly trainers, advanced equipment, and a welcoming community. I always look forward to my workouts here."
    },
    {
      name: "Vikram jaiswal",
      role: "Marketing Executive",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "Great coaching and excellent facilities. I’ve seen visible results in a short time."
    },
    {
      name: "Sneha gupta",
      role: "Fitness Enthusiast",
      image: "/images/test/geni.png",
      rating: 5,
      text: "Amazing atmosphere with a lot of motivation. The coaches genuinely care about your progress."
    },
    {
      name: "Rohit Gogoi",
      role: "Boxer",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "The CrossFit and boxing programs are excellent. Trainers give personal attention to every member."
    },
    {
      name: "Priya Kalita",
      role: "Dancer",
      image: "/images/test/geni.png",
      rating: 5,
      text: "Love the dance and yoga classes. The trainers are enthusiastic and supportive."
    },
    {
      name: "Aman Verma",
      role: "Entrepreneur",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "Top-notch gym with a modern look. The staff is friendly and very knowledgeable."
    },
    {
      name: "Tanya Gupta",
      role: "Student",
      image: "/images/test/geni.png",
      rating: 5,
      text: "I’ve tried many gyms, but this one stands out for its facilities and expert coaching."
    },
    {
      name: "Raghav Raj",
      role: "Athlete",
      image: "/images/test/geni.png",
      rating: 5,
      text: "The athletic training section is fantastic. CrossFit, boxing, and yoga programs are professionally handled."
    },
    {
      name: "Anjali Gohain",
      role: "Fitness Trainer",
      image: "/images/test/geni.png",
      rating: 4.5,
      text: "Excellent environment with great equipment. Perfect for anyone looking to improve strength and flexibility."
    }

  ];

  const stats = [
    { number: "98%", label: "Member Satisfaction" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "500+", label: "Success Stories" },
    { number: "85%", label: "Goal Achievement Rate" }
  ];

  const nextSpotlight = () => {
    setCurrentSpotlight((prev) => (prev + 1) % spotlightTestimonials.length);
    setIsPlaying(false);
  };

  const prevSpotlight = () => {
    setCurrentSpotlight((prev) => (prev - 1 + spotlightTestimonials.length) % spotlightTestimonials.length);
    setIsPlaying(false);
  };

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Real transformations from real people who chose Fitfinity
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className="fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-4xl font-bold text-gradient-gold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {stat.label}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Member Spotlight Carousel */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                Member Spotlight
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from our amazing community
              </p>
            </div>

            <div className="relative">
              <div className="glass-card p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Spotlight Content */}
                  <div>
                    <Quote className="w-12 h-12 text-primary mb-6" />
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
                      "{spotlightTestimonials[currentSpotlight].text}"
                    </blockquote>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                        <img
                            src={spotlightTestimonials[currentSpotlight].image}
                            alt={spotlightTestimonials[currentSpotlight].name}
                            className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gradient-gold">
                          {spotlightTestimonials[currentSpotlight].name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {spotlightTestimonials[currentSpotlight].role}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: spotlightTestimonials[currentSpotlight].rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-primary fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {spotlightTestimonials[currentSpotlight].achievement && (
                        <div className="bg-primary/20 rounded-lg p-4 mb-6">
                          <p className="text-primary font-semibold">
                            Achievement: {spotlightTestimonials[currentSpotlight].achievement}
                          </p>
                        </div>
                    )}
                  </div>

                  {/* Video */}
                  <div className="relative">
                    {isPlaying ? (
                        <video
                            key={spotlightTestimonials[currentSpotlight].videoUrl}
                            src={spotlightTestimonials[currentSpotlight].videoUrl}
                            controls
                            autoPlay
                            className="aspect-[16/9] w-full rounded-lg border border-primary/20"
                        />
                    ) : (
                        <div
                            className="aspect-[16/9] bg-muted/20 rounded-lg flex items-center justify-center border border-primary/20 cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                          <div className="text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors">
                              <Play className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Watch {spotlightTestimonials[currentSpotlight].name}'s Story
                            </p>
                          </div>
                        </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                      onClick={prevSpotlight}
                      className="p-3 rounded-lg glass hover:bg-primary/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex gap-2">
                    {spotlightTestimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                              setCurrentSpotlight(index);
                              setIsPlaying(false);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSpotlight ? "bg-primary" : "bg-muted"
                            }`}
                        />
                    ))}
                  </div>

                  <button
                      onClick={nextSpotlight}
                      className="p-3 rounded-lg glass hover:bg-primary/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Members Say */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                What Our Members Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridTestimonials.map((testimonial, index) => (
                  <div
                      key={testimonial.name}
                      className="glass-card p-6 glow-hover fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gradient-gold">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of members who have transformed their lives at Fitfinity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://forms.gle/LLyeNRaPxieA1pEB8" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium">
                    Start Your Journey
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Testimonials;
