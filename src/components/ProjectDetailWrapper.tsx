import { useParams, Navigate } from 'react-router-dom';
import { useProjects } from '@/contexts/ProjectsContext';
import ProjectDetail from './ProjectDetail';

const ProjectDetailWrapper = ({ category }: { category: "web" | "video" | "design" }) => {
  const { projectId } = useParams();
  const { webProjects, videoProjects, designProjects } = useProjects();

  const getProject = () => {
    const normalizedId = projectId?.toLowerCase();
    let projects;
    
    switch (category) {
      case 'web':
        projects = webProjects;
        break;
      case 'video':
        projects = videoProjects;
        break;
      case 'design':
        projects = designProjects;
        break;
    }

    return projects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === normalizedId
    );
  };

  const project = getProject();

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectDetail project={project} category={category} />;
};

export default ProjectDetailWrapper; 