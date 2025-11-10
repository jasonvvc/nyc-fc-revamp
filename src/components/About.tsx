import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  "Over 15 years of construction excellence",
  "Fully licensed and insured",
  "Full-service construction firm",
  "Dedicated team of specialists",
  "On-time and on-budget delivery",
  "Quality craftsmanship guaranteed",
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="about" 
      className={`py-32 bg-gradient-subtle relative overflow-hidden animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="px-4 py-2 bg-blue-light text-primary rounded-full text-sm font-semibold inline-block mb-6">
              About Us
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Built on Trust & Quality
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Since 2005, First Construction Zone has been Brooklyn's trusted partner for exceptional 
              construction services. We specialize in developing and renovating across all aspects of construction.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our comprehensive team includes licensed electricians, plumbers, carpenters, sub-contractors, 
              painters, and architects—ensuring your project is completed correctly, safely, and on time.
            </p>
            <Button size="lg" variant="modern" className="text-lg">
              Discover Our Story
            </Button>
          </div>

          <div>
            <div className="bg-card p-10 rounded-3xl border-2 border-border shadow-lg">
              <h3 className="text-3xl font-bold mb-8">Why Choose FCZ</h3>
              <ul className="space-y-5">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg pt-0.5">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
