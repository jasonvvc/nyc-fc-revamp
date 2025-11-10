import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Wrench, PaintBucket, Zap, Droplet, Building2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "General Construction",
    description: "Full-service construction solutions from concept to completion with expert project management.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Transform your space with our comprehensive renovation services for residential and commercial properties.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electricians providing safe, code-compliant electrical installations and repairs.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description: "Professional plumbing services including installations, repairs, and maintenance.",
  },
  {
    icon: Wrench,
    title: "Carpentry",
    description: "Expert carpentry work with attention to detail and superior craftsmanship.",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Professional painting services for interior and exterior projects of any scale.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-service construction firm with a dedicated team ready to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
