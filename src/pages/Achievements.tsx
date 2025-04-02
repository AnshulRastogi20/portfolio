import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: "certification" | "award" | "recognition";
  link?: string;
  tags: string[];
}

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [selectedCertificate, setSelectedCertificate] = useState<Achievement | null>(null);
  
  const achievements: Achievement[] = [
    {
      id: "dsa",
      title: "Data Structures and Algorithms using Java",
      issuer: "NPTEL",
      date: "July 2024",
      description: "Certified in data structures and algorithms using java, covering concepts like OOP, functional programming, and algorithmic thinking.",
      image: "/certificates/dsa.png", 
      category: "certification",
      link: "https://www.freecodecamp.org/certification/example",
      tags: ["Java", "Algorithms", "Data Structures"]
    },
    {
      id: "java",
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "July 2024",
      description: "Certified in programming in java, covering concepts like OOP, functional programming, and algorithmic thinking.",
      image: "/certificates/java.png",
      category: "certification",
      link: "https://www.coursera.org/account/accomplishments/example",
      tags: ["Java", "Programming", "OOP"]
    },
    {
      id: "krmu",
      title: "Winners in Hackathon - HackKRMU 4.0",
      issuer: "KRM University",
      date: "February 2025",
      description: "First place winner in the annual hackathon for developing an innovative solution to address accessibility challenges in web applications.",
      image: "/certificates/hackathon.jpg",
      category: "award",
      tags: ["Hackathon", "Innovation", "Accessibility"]
    }
  ];
  
  const categories = [
    { id: "all", label: "All" },
    { id: "certification", label: "Certifications" },
    { id: "award", label: "Awards" },
    { id: "recognition", label: "Recognition" }
  ];
  
  const filteredAchievements = selectedCategory === null || selectedCategory === "all" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % achievements.length);
  };

  const handleViewCertificate = (achievement: Achievement) => {
    setSelectedCertificate(achievement);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-8">Achievements</h1>
        
        {/* Featured Slideshow */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-xl p-6 aspect-[16/9] overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={achievements[currentImageIndex].image} 
                alt={achievements[currentImageIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-semibold text-white">{achievements[currentImageIndex].title}</h3>
              <p className="text-white/80">{achievements[currentImageIndex].issuer} • {achievements[currentImageIndex].date}</p>
            </div>
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary/70 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-primary/70 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
            >
              <ChevronRight className="text-white" />
            </button>
          </motion.div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id === "all" ? null : category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="glass hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="capitalize">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{achievement.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <p>{achievement.issuer} • {achievement.date}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {achievement.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 dark:bg-white/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {achievement.image && (
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-2 mt-auto" 
                      onClick={() => handleViewCertificate(achievement)}
                    >
                      View Certificate <ExternalLink size={16} />
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certificate Dialog */}
      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-auto p-1 sm:p-6">
          <DialogHeader className="mb-4">
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-xl font-semibold">{selectedCertificate?.title}</DialogTitle>
                <DialogDescription className="text-sm">
                  {selectedCertificate?.issuer} • {selectedCertificate?.date}
                </DialogDescription>
              </div>
              {/* <DialogClose className="h-8 w-8 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors">
                <X size={16} />
              </DialogClose> */}
            </div>
          </DialogHeader>
          
          <div className="relative rounded-md overflow-hidden">
            <img 
              src={selectedCertificate?.image} 
              alt={selectedCertificate?.title || "Certificate"} 
              className="w-full h-auto object-contain max-h-[70vh]"
            />
          </div>
          
          <div className="p-4">
            <p className="text-sm mb-4">{selectedCertificate?.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedCertificate?.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            {selectedCertificate?.link && (
              <div className="mt-4">
                {/* <Button 
                  variant="secondary" 
                  asChild
                  className="flex items-center gap-2"
                >
                  <a href={selectedCertificate.link} target="_blank" rel="noopener noreferrer">
                    View Original <ExternalLink size={16} />
                  </a>
                </Button> */}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Achievements;
