import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Wrench, PaintBucket, Zap, Droplet, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Building2,
    title: "General Construction",
    description: "Full-service construction solutions from concept to completion with expert project management.",
    color: "blue",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Transform your space with our comprehensive renovation services for residential and commercial properties.",
    color: "coral",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electricians providing safe, code-compliant electrical installations and repairs.",
    color: "blue",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description: "Professional plumbing services including installations, repairs, and maintenance.",
    color: "coral",
  },
  {
    icon: Wrench,
    title: "Carpentry",
    description: "Expert carpentry work with attention to detail and superior craftsmanship.",
    color: "blue",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Professional painting services for interior and exterior projects of any scale.",
    color: "coral",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="services" 
      className={`py-32 bg-background animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-blue-light text-primary rounded-full text-sm font-semibold inline-block mb-6">
            What We Do
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs with a dedicated team of specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card overflow-hidden animate-on-scroll animate-on-scroll-delay-${Math.min(index % 3 + 1, 4)} ${isVisible ? 'is-visible' : ''}`}
            >
              <CardHeader>
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === 'blue' 
                    ? 'bg-blue-light group-hover:bg-primary' 
                    : 'bg-coral-light group-hover:bg-accent'
                }`}>
                  <service.icon className={`w-10 h-10 transition-colors ${
                    service.color === 'blue'
                      ? 'text-primary group-hover:text-white'
                      : 'text-accent group-hover:text-white'
                  }`} />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
