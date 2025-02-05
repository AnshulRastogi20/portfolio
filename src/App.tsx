import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/skills/WebDevelopment";
import VideoEditing from "./pages/skills/VideoEditing";
import GraphicDesign from "./pages/skills/GraphicDesign";
import { ProjectsProvider } from '@/contexts/ProjectsContext';
import ProjectDetailWrapper from '@/components/ProjectDetailWrapper';
import { BlogProvider } from '@/contexts/BlogContext';
import BlogDetailWrapper from './components/BlogDetailWrapper';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProjectsProvider>
        <BlogProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetailWrapper />} />
              <Route path="/skills/web-development" element={<WebDevelopment />} />
              <Route path="/skills/video-editing" element={<VideoEditing />} />
              <Route path="/skills/graphic-design" element={<GraphicDesign />} />
              <Route path="/projects/web/:projectId" element={<ProjectDetailWrapper category="web" />} />
              <Route path="/projects/video/:projectId" element={<ProjectDetailWrapper category="video" />} />
              <Route path="/projects/design/:projectId" element={<ProjectDetailWrapper category="design" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </BlogProvider>
      </ProjectsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;