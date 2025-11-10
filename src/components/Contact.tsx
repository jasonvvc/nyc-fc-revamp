import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Printer, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "2692 Coney Island Ave #2fl",
    subdetails: "Brooklyn, NY 11235",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "(646) 533-7097",
    subdetails: "(718) 820-2531",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "fcznyc@gmail.com",
    subdetails: null,
  },
  {
    icon: Printer,
    title: "Fax",
    details: "(646) 820-2531",
    subdetails: null,
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="contact" 
      className={`py-32 bg-background relative overflow-hidden animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-emerald-light text-primary rounded-full text-sm font-semibold inline-block mb-6">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Reach out for a free consultation and project estimate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary group animate-on-scroll animate-on-scroll-delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <info.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {info.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="font-bold text-lg mb-1">{info.details}</p>
                {info.subdetails && (
                  <p className="text-muted-foreground">{info.subdetails}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-primary p-12 md:p-16 text-center text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                  Get a free consultation and discover how we can transform your construction vision into reality
                </p>
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="text-lg shadow-xl hover:shadow-2xl group"
                >
                  Request Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
