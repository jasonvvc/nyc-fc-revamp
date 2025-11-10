import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Over 15 years of construction excellence",
  "Fully licensed and insured",
  "Full-service construction firm",
  "Dedicated team of specialists",
  "On-time and on-budget delivery",
  "Quality craftsmanship guaranteed",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Trust Through Quality Work
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              First Construction Zone was founded in 2005 with a simple mission: deliver exceptional 
              construction services with integrity and professionalism. For over a decade, we've been 
              specializing in developing and renovating across all aspects of construction.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our full team includes electricians, plumbers, carpenters, sub-contractors, painters, 
              and architects—all at your disposal to ensure your project is completed correctly, 
              safely, and in a timely manner.
            </p>
            <Button size="lg" variant="construction">
              Learn More About Us
            </Button>
          </div>

          <div>
            <div className="bg-muted/50 p-8 rounded-2xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{highlight}</span>
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
