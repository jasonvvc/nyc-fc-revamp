import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Printer } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "2692 Coney Island Ave #2fl",
    subdetails: "Brooklyn, NY 11235",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(646) 533-7097",
    subdetails: "(718) 820-2531",
  },
  {
    icon: Mail,
    title: "Email",
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
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{info.details}</p>
                {info.subdetails && (
                  <p className="text-muted-foreground">{info.subdetails}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-hero p-8 md:p-12 rounded-2xl text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Project Today
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can bring your construction vision to life
          </p>
          <Button size="lg" variant="hero" className="text-lg">
            Request a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
