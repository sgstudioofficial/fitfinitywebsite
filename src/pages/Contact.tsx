import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Law College Rd", "Tinsukia, Assam 786125"],
      link: "https://maps.app.goo.gl/29waqeZ2u1TgKC9w5",
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 80112 57880", "Call us anytime"],
      link: "tel:+918011257880",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["powercrew.in@gmail.com", "We respond within 24 hours"],
      link: "mailto:powercrew.in@gmail.com",
      action: "Send Email"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      details: ["@fitfinity.pc", "Follow for daily updates"],
      link: "https://www.instagram.com/fitfinity.pc/",
      action: "Follow Us"
    },
  ];

  const operatingHours = [
    { day: "Monday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Tuesday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Wednesday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Thursday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Friday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Saturday", hours: "5:30 AM – 10 PM", staff: "5:30 AM – 10 PM" },
    { day: "Sunday", hours: "Closed", staff: "Off" }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Ready to start your fitness journey? We're here to help every step of the way
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <a
                  href="https://forms.gle/SUJ3he4uDJg4MCabA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 text-center glow-hover fade-in group"
              >
                <h3 className="text-xl font-bold mb-3 text-gradient-gold">
                  Book 1-Day Trial
                </h3>
                <p className="text-muted-foreground mb-4">
                  Experience Fitfinity risk-free with our complimentary day pass
                </p>
                <Button className="btn-premium group-hover:scale-105 transition-transform">
                  Book Now
                </Button>
              </a>

              <a
                  href="https://wa.me/918011257880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 text-center glow-hover fade-in"
                  style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-xl font-bold mb-3 text-gradient-gold">
                  WhatsApp Chat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get instant answers to your questions via WhatsApp
                </p>
                <Button variant="outline" className="btn-outline-premium">
                  Start Chat
                </Button>
              </a>

              <a
                  href="tel:+918011257880"
                  className="glass-card p-8 text-center glow-hover fade-in"
                  style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-bold mb-3 text-gradient-gold">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book a consultation with our fitness experts
                </p>
                <Button variant="outline" className="btn-outline-premium">
                  Book Call
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold mb-6 text-gradient-gold">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name*" required className="bg-muted/20 border-border"/>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email*" required className="bg-muted/20 border-border"/>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone"/>
                    <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject*" required/>
                  </div>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message*" rows={5} required className="bg-muted/20 border-border"/>
                  <Button type="submit" className="btn-premium w-full">Send Message</Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                      <a
                          key={info.title}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-card p-6 glow-hover fade-in flex items-start gap-4"
                          style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-primary">{info.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2 text-gradient-gold">{info.title}</h4>
                          {info.details.map((d, i) => (
                              <p key={i} className="text-muted-foreground">{d}</p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="btn-outline-premium">{info.action}</Button>
                      </a>
                  ))}
                </div>

                {/* Operating Hours */}
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-6 text-gradient-gold">Operating Hours</h3>
                  <div className="space-y-4">
                    {operatingHours.map(schedule => (
                        <div key={schedule.day} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                          <div>
                            <span className="font-semibold">{schedule.day}</span>
                            <p className="text-sm text-muted-foreground">Staff: {schedule.staff}</p>
                          </div>
                          <span className="text-primary font-semibold">{schedule.hours}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient-gold">Find Us</h2>
              <p className="text-muted-foreground mb-6">Located in the heart of Tinsukia, Assam</p>
              <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-primary/20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.669267032877!2d95.3387967!3d27.5131778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6b20f9e60e25%3A0xed046b11f816cbe4!2sFITFINITY+BY+POWERCREW!5e0!3m2!1sen!2sin!4v1692974800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a href="https://www.google.com/maps/place/FITFINITY+BY+POWERCREW/@27.5131778,95.3387967,14z/data=!4m7!3m6!1s0x373f6b20f9e60e25:0xed046b11f816cbe4!8m2!3d27.4893763!4d95.3622945!10e5!16s%2Fg%2F11srmm1jrf?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <Button className="btn-premium">Open in Google Maps</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">Ready to Visit Fitfinity?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience our world-class facilities and meet our expert team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7_oH-sQjUZR2iLqg_Jy2bQg0hpHL8UXlFGn4vsy8Z4-tokA/viewform?usp=sharing&ouid=101642107306155374619" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium group">Book Free Trial <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/></Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
