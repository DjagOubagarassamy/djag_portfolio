import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Plateforme E-Commerce "Lydae"',
      description: "Lydae Shop est un site e-commerce complet conçu pour une entreprise de textile comprenant : un front-end utilisateur, une API REST dédiée et une base de données MongoDB. Il intègre un système de paiement fonctionnel via Stripe.",
      image: '/data/Lydae.png',
      tags: ['Full-Stack', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Site Vitrine "House24"',
      description: 'House 24 est un site vitrine conçu pour une entreprise de restauration. Il propose un mécanisme de réservation et, surtout, un rendu 3D sur la page d’accueil réalisé avec Three.js.',
      image: '/data/House24.png',
      tags: ['Front-end', 'React', 'Three.js', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Programme d’automatisation "DearBot"',
      description: 'DearBot est un bot Python développé pour un serveur Discord de revente. Il est réalisé avec BeautifulSoup 4 et Discord.js et inclut un contournement de Cloudflare. Connecté à l’API Vinted, il permet de récupérer les articles plus rapidement.',
      image: '/data/Dearbot.png',
      tags: ['Back-End','JavaScript', 'API', 'CSS'],
    },
    {
      id: 4,
      title: 'Site Vitrine "Basalt COD"',
      description: 'Basalt COD est un site vitrine conçu pour une entreprise de developpement de jeux vidéos, créé pour le lancement de ce jeu mobile. Il intègre des animations dynamiques, réalisées avec SVGator et GSAP, spécialement pour le défilement horizontal.',
      image: '/data/Basalt.png',
      tags: ['Front-end', 'Gsap', 'SvgAtor'],
    },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-up">Projets</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6" data-aos="fade-up"></div>
          <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-up">
            Voici les projets sur lesquels j'ai travaillé et qui m'ont demandé le plus de temps. Ils reflètent mes compétences et ma passion pour le développement web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 none">
          <button 
            onClick={() => setActiveFilter('all')} 
            className={`px-4 display:none py-2 rounded-full text-sm ${
              activeFilter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-colors duration-300`}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button 
              key={index}
              onClick={() => setActiveFilter(tag)} 
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === tag 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors duration-300`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} id='card_project' className="bg-gray-800 rounded-lg overflow-hidden group" data-aos="fade-up">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;