import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProjects } from '@/contexts/ProjectsContext';

interface Project {
  title: string;
  year: number;
  type: string;
  problem: string;
  solution: string;
  technologies: string[];
  beforeImage: string;
  afterImage: string;
  demoLink: string;
  canvaLink: string;
}

const GraphicDesign = () => {
  const [sortBy, setSortBy] = useState<"year" | "type">("year");
  const [selectedType, setSelectedType] = useState<string>("all");
  const { designProjects } = useProjects();

  const sortedProjects = [...designProjects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    return a.type.localeCompare(b.type);
  }).filter(project => selectedType === "all" || project.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-8">Graphic Design Projects</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={sortBy} onValueChange={(value: "year" | "type") => setSortBy(value)}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">Sort by Year</SelectItem>
              <SelectItem value="type">Sort by Type</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Branding">Branding</SelectItem>
              <SelectItem value="Social Media">Social Media</SelectItem>
              <SelectItem value="Print">Print Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8">
          {sortedProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/projects/design/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="glass hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">
                          {project.title}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span>{project.year}</span>
                          <span>{project.type}</span>
                        </div>
                      </div>
                      <ChevronRight className="text-primary dark:text-white" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GraphicDesign;