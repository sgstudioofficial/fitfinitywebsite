import { useState } from "react";
import { Eye, ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlider, setCurrentSlider] = useState(0);

  const galleryImages = [
    {
      url: "/images/gallery/g1.png",
      title:'',
      category: "Facilities"
    },
    {
      url: "/images/gallery/g2.png",
      title:'Our coaches',
    },
    {
      url: "/images/gallery/g3.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g4.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g5.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g6.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g7.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g8.png",
      category: "Equipment"
    },
    {
      url: "/images/gallery/g9.png",
      category: "Equipment"
    },
    {
      url: "/images/gallery/g10.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g11.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g12.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g13.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g14.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g15.png",
      category: "Equipment"
    },
    {
      url: "/images/gallery/g16.png",
      category: "Equipment"
    },
    {
      url: "/images/gallery/g17.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g18.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g19.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g20.png",
      category: "Studios"
    },
    {
      url: "/images/gallery/g21.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g22.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g23.png",
      category: "Facilities"
    },
    {
      url: "/images/gallery/g24.png",
      category: "Facilities"
    }
  ];

  const beforeAfterSliders = [
    {
      before: "/images/gallery/t1b.png",
      after: "/images/gallery/t1a.png",
      title: "Yuvraj's 3 month Journey",
      description: "From 121.6kg to 108.6kg in just 3 months!"
    },
    {
      before: "/images/gallery/t2b.png",
      after: "/images/gallery/t2a.png",
      title: "Garv's Fitness Journey",
      description: "From 110 Kg to 88 Kg, he crushed his goals with hard work, dedication, and the support of Coach Vishal Deb and the Fitfinity team."
    },
    {
      before: "/images/gallery/t3b.png",
      after: "/images/gallery/t3a.png",
      title: "Jyoti's Fitness Journey",
      description: "Complete lifestyle transformation in 8 months"
    }
  ];

  const categories = ["All", "Equipment", "Facilities", "Studios"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
            Explore our premium facilities and member success stories
          </p>
        </div>
      </section>

      {/* 360° Gym View */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                360° Gym Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Take an immersive virtual tour of our facility
              </p>
            </div>

            {/* 360° Tour Embed */}
            {/* 360° Tour Embeds */}
            <div className="space-y-12">  {/* adds equal vertical spacing between boxes */}
              {/* Cardio Section */}
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gradient-gold mb-2">
                    Cardio Section
                  </h3>
                  <p className="text-muted-foreground">
                    Explore our dedicated cardio training zone
                  </p>
                </div>
                <div className="aspect-video bg-muted/20 rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1756082898374!6m8!1m7!1sCAoSLEFGMVFpcE9FOTFYemQ4VjV6RzdzazZfX2MweEdwc1QzdnIxMFpjR0RPdE5s!2m2!1d27.48937633786709!2d95.36229451159485!3f358.963513618464!4f-12.5169000102144!5f0.4000000000000002"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Free Weights / Functional Training */}
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gradient-gold mb-2">
                    Free Weights & Functional Training Area
                  </h3>
                  <p className="text-muted-foreground">
                    Take a look at our heavy-duty strength and functional space
                  </p>
                </div>
                <div className="aspect-video bg-muted/20 rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1758013070730!6m8!1m7!1sCAoSLEFGMVFpcE9JOWVLM1BHbm5jZFRkNTNxQUZPenNyYnQzWUZoOWxKZDhtNFNL!2m2!1d27.48937633786709!2d95.36229451159485!3f67.49170689717158!4f-13.665398228650929!5f0.7106390720251349"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Resistance Machines */}
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gradient-gold mb-2">
                    Resistance Machine Area
                  </h3>
                  <p className="text-muted-foreground">
                    Explore our premium resistance equipment section
                  </p>
                </div>
                <div className="aspect-video bg-muted/20 rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1758013191177!6m8!1m7!1sCAoSLEFGMVFpcE1uZXlVSFEzaXRYZGpmcVZOMUFCTGs3RTdoQ24tMlpNR0hzZzlu!2m2!1d27.48937633786709!2d95.36229451159485!3f283.29785530053977!4f-24.47416750800018!5f0.4000000000000002"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer fade-in glow-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-semibold text-gradient-gold">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Transformations */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
              Transformation Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See the incredible journeys of our members
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {beforeAfterSliders.map((transformation, index) => (
                <div
                    key={index}
                    className="glass-card p-6 fade-in glow-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[1/2] rounded-lg overflow-hidden mb-4">
                    <ReactCompareSlider
                        itemOne={
                          <ReactCompareSliderImage
                              src={transformation.before}
                              alt="Before transformation"
                              className="object-cover w-full h-full"
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                              src={transformation.after}
                              alt="After transformation"
                              className="object-cover w-full h-full"
                          />
                        }
                        position={50}
                        className="h-full"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Before
                    </div>
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      After
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-gradient-gold">
                    {transformation.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {transformation.description}
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
              Start Your Transformation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community and become the next success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;