import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Maximize2, Calendar, MapPin } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import project images
import kitchenBefore from "@/assets/projects/kitchen-before.jpg";
import kitchenAfter from "@/assets/projects/kitchen-after.jpg";
import officeBefore from "@/assets/projects/office-before.jpg";
import officeAfter from "@/assets/projects/office-after.jpg";
import bathroomBefore from "@/assets/projects/bathroom-before.jpg";
import bathroomAfter from "@/assets/projects/bathroom-after.jpg";
import exteriorBefore from "@/assets/projects/exterior-before.jpg";
import exteriorAfter from "@/assets/projects/exterior-after.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Residential",
    location: "Brooklyn Heights, NY",
    date: "2024",
    beforeImage: kitchenBefore,
    afterImage: kitchenAfter,
    description: "Complete kitchen transformation with custom cabinetry, marble countertops, and modern lighting.",
  },
  {
    id: 2,
    title: "Corporate Office Redesign",
    category: "Commercial",
    location: "Manhattan, NY",
    date: "2024",
    beforeImage: officeBefore,
    afterImage: officeAfter,
    description: "Full office renovation featuring open floor plan, contemporary design, and collaborative spaces.",
  },
  {
    id: 3,
    title: "Luxury Bathroom Remodel",
    category: "Residential",
    location: "Park Slope, NY",
    date: "2023",
    beforeImage: bathroomBefore,
    afterImage: bathroomAfter,
    description: "High-end bathroom renovation with marble finishes, custom fixtures, and spa-like amenities.",
  },
  {
    id: 4,
    title: "Building Exterior Restoration",
    category: "Commercial",
    location: "Downtown Brooklyn, NY",
    date: "2023",
    beforeImage: exteriorBefore,
    afterImage: exteriorAfter,
    description: "Complete exterior transformation with modern facade design and updated architectural elements.",
  },
];

const categories = ["All", "Residential", "Commercial"];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = 
    selectedCategory === "All" 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="portfolio" 
      className={`py-32 bg-gradient-subtle relative overflow-hidden animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-emerald-light text-primary rounded-full text-sm font-semibold inline-block mb-6">
            Our Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Project Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Explore our completed projects showcasing quality craftsmanship and attention to detail
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "modern" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="lg"
                className="text-base"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-2xl animate-on-scroll animate-on-scroll-delay-${index % 2 + 1} ${isVisible ? 'is-visible' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button 
                    variant="accent" 
                    size="lg"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <Maximize2 className="mr-2" />
                    View Full Project
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="relative aspect-[16/10]">
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage}
                  afterImage={selectedProject.afterImage}
                />
              </div>
              
              <div className="p-8 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">
                    {selectedProject.category}
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {selectedProject.date}
                  </Badge>
                  <Badge variant="outline">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedProject.location}
                  </Badge>
                </div>
                
                <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
