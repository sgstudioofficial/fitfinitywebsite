import { Check, Star, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Membership = () => {
  const plans = [
    {
      name: "One Day Pass",
      price: "₹300",
      period: "/day",
      description: "Perfect for trying us out",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Strength Training Zone",
        "Cardio Section",
        "Basic workout plans",
      ],
      popular: false,
      cta: "Get Day Pass",
      originalPrice: null,
      hasAdmission: false
    },
    {
      name: "1 Month",
      price: "₹1,500",
      period: "/month",
      description: "Flexible month-to-month membership",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Strength Training Zone",
        "Cardio Section",
        "Basic workout plans",
      ],
      popular: false,
      cta: "Start Monthly",
      originalPrice: null,
      hasAdmission: true
    },
    {
      name: "3 Months",
      price: "₹4,050",
      period: "/3 months",
      description: "Great value for committed members",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Strength Training Zone",
        "Cardio Section",
        "Basic workout plans",
        "No admission fee"
      ],
      popular: true,
      cta: "Choose 3 Months",
      originalPrice: "₹4,500",
      hasAdmission: false
    },
    {
      name: "6 Months",
      price: "₹7,650",
      period: "/6 months",
      description: "Best value for serious fitness goals",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Strength Training Zone",
        "Cardio Section",
        "Basic workout plans",
        "No admission fee"
      ],
      popular: false,
      cta: "Go 6 Months",
      originalPrice: "₹9,000",
      hasAdmission: false
    },
    {
      name: "12 Months",
      price: "₹14,400",
      period: "/12 months",
      description: "Ultimate value for fitness transformation",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Strength Training Zone",
        "Cardio Section",
        "Basic workout plans",
        "No admission fee"
      ],
      popular: false,
      cta: "Go Annual",
      originalPrice: "₹18,000",
      hasAdmission: false
    }
  ];

  const lockerAddon = {
    name: "Personal Locker",
    price: "₹400",
    period: "/month",
    description: "Secure personal storage space"
  };

  const formLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSf7_oH-sQjUZR2iLqg_Jy2bQg0hpHL8UXlFGn4vsy8Z4-tokA/viewform?usp=sharing&ouid=101642107306155374619";

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold fade-in">
              Membership Plans
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Choose the perfect plan to unlock your fitness potential
            </p>
          </div>
        </section>

        {/* Admission Fee Notice */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-gradient-gold">
                Admission Fee
              </h3>
              <p className="text-lg text-muted-foreground">
                One-time admission fee of{" "}
                <span className="text-primary font-bold">₹500</span> applies to
                monthly memberships
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {plans.map((plan, index) => (
                  <div
                      key={plan.name}
                      className={`relative glass-card p-8 glow-hover fade-in ${
                          plan.popular ? "border-2 border-primary scale-105" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Most Popular
                    </span>
                        </div>
                    )}

                    <div className="text-center mb-8">
                      <div className="text-primary mb-4 flex justify-center">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gradient-gold">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {plan.description}
                      </p>
                      <div className="mb-6">
                        {plan.originalPrice && (
                            <div className="text-sm text-muted-foreground mb-2">
                              <span className="line-through">{plan.originalPrice}</span>
                            </div>
                        )}
                        <span className="text-5xl font-bold text-gradient-gold">
                      {plan.price}
                    </span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-center text-muted-foreground"
                            >
                              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* All plan buttons now link to Google Form */}
                    <a
                        href={formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full block text-center rounded-lg py-3 text-lg font-semibold ${
                            plan.popular ? "btn-premium" : "btn-outline-premium"
                        }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locker Add-on Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                Optional Add-On
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your membership with secure storage
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-gradient-gold">
                {lockerAddon.name}
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                {lockerAddon.price}
                <span className="text-lg text-muted-foreground">
                {lockerAddon.period}
              </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {lockerAddon.description}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
                Ready to Transform Your Life?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of members who have achieved their fitness goals
                with Fitfinity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium text-center rounded-lg py-4 px-8 text-lg font-semibold"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Membership;
