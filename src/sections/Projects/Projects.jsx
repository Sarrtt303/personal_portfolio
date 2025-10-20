import { useState } from "react";
import Hom from "../../assets/homchang.png";
import Lotus from "../../assets/Lotusedu.png";
import ProjectCard from "../../components/ProjectCard";
import ProductDisplay from "../../assets/ProductDisplay.png";
import whatweather from "../../assets/whatweather.png";
import MLcode1 from "../../assets/ML_code1.png";
import MLcode2 from "../../assets/ML_code2.png";
import MLcode3 from "../../assets/ML_code3.png";
import erp from "../../assets/erp.png";

function Projects() {
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  const allProjects = [
    {
      src: ProductDisplay,
      link: "https://github.com/Sarrtt303/productDisplay",
      title: "Product Display",
      description: "Display products from API",
      skill: "Tools",
      fullDescription: "A comprehensive product display application that fetches and showcases products from various APIs. Features include responsive grid layouts, search functionality, and dynamic filtering capabilities.",
      technologies: ["Next.js", "MongoDB", "API Integration", "TailwindCSS"],
      features: [
        "Dynamic product fetching from APIs",
        "Responsive grid layout",
        "Search and filter functionality",
        "Mobile-optimized design"
      ],
      duration: "2 weeks",
      status: "Completed"
    },
    {
      src: whatweather,
      link: "https://github.com/Sarrtt303/whatweather?tab=readme-ov-file",
      title: "WhatWeather",
      description: "Weather Display App",
      skill: "Web Designs",
      fullDescription: "A modern weather application that provides real-time weather information with an intuitive and visually appealing interface. Includes forecasts, location-based weather, and interactive weather maps.",
      technologies: ["React", "OpenWeather API", "Geolocation", "Responsive Design"],
      features: [
        "Real-time weather data",
        "7-day weather forecast",
        "Location-based weather detection",
        "Interactive weather maps",
        "Temperature unit conversion"
      ],
      duration: "3 weeks",
      status: "Completed"
    },
    {
      src: Hom,
      link: "https://homchang.in/",
      title: "Homchang",
      description: "News website with admin panel for article creation and utilities",
      skill: "Tools",
      fullDescription: "A full-featured news platform with comprehensive content management system. Includes admin dashboard for article creation, user management, and analytics tracking.",
      technologies: ["React", "PHP", "MySQL", "Firebase", "Admin Dashboard"],
      features: [
        "Admin panel for content management",
        "Article creation and editing tools",
        "User authentication and roles",
        "Analytics and reporting",
        "SEO optimization",
        "Comment system"
      ],
      duration: "2 months",
      status: "Live"
    },
    {
      src: Lotus,
      link: "https://lotuseducation.tech/",
      title: "Lotus Education",
      description: "Course selling website complete with LMS page and payment gateway",
      skill: "Web Designs",
      fullDescription: "A comprehensive e-learning platform that combines course sales with a full learning management system. Features secure payment processing, progress tracking, and interactive learning modules.",
      technologies: ["PHP", "Payment Gateway", "LMS", "Database", "Authentication"],
      features: [
        "Course catalog and enrollment",
        "Integrated payment gateway",
        "Learning Management System (LMS)",
        "Progress tracking and certificates",
        "Video streaming capabilities",
        "Student-instructor communication"
      ],
      duration: "3 months",
      status: "Live"
    },
    {
      src: MLcode1,
      link: "https://colab.research.google.com/drive/10964vKFIpx3dsruxU-HyqiN0ctwyF4FG?usp=drive_link",
      title: "DR_MODEL 1",
      description: "Deep-learning model trained using ResNet",
      skill: "Other Projects",
      fullDescription: "A diabetic retinopathy detection model built using ResNet architecture. This model analyzes retinal images to detect and classify diabetic retinopathy stages with high accuracy.",
      technologies: ["Python", "TensorFlow", "ResNet", "Image Processing", "Medical AI"],
      features: [
        "ResNet-based architecture",
        "Multi-class classification",
        "Image preprocessing pipeline",
        "Model evaluation metrics",
        "Confusion matrix analysis"
      ],
      duration: "1 month",
      status: "Research Phase"
    },
    {
      src: MLcode2,
      link: "https://colab.research.google.com/drive/1PI59o_86ecco8sFE_zvrZuVLSaeppX_j?authuser=1",
      title: "DR_MODEL 2",
      description: "Deep-learning model that will be trained using EfficientNetB0",
      skill: "Other Projects",
      fullDescription: "An optimized diabetic retinopathy detection model using EfficientNetB0 architecture, focusing on better accuracy with reduced computational requirements.",
      technologies: ["Python", "TensorFlow", "EfficientNet", "Transfer Learning", "Medical Imaging"],
      features: [
        "EfficientNetB0 architecture",
        "Transfer learning implementation",
        "Optimized for mobile deployment",
        "Data augmentation techniques",
        "Performance benchmarking"
      ],
      duration: "3 weeks",
      status: "Development"
    },
    {
      src: MLcode3,
      link: "https://colab.research.google.com/drive/1JrKTgU_sYtk9hYHnnRuT5jcbCbZMqi3k?authuser=1#scrollTo=0MiZC-dtQir6",
      title: "DR_MODEL 3",
      description: "Deep-learning model that will be trained using VGG19",
      skill: "Other Projects",
      fullDescription: "A diabetic retinopathy classification model utilizing VGG19 architecture for deep feature extraction and accurate disease stage classification from retinal images.",
      technologies: ["Python", "TensorFlow", "VGG19", "Computer Vision", "Healthcare AI"],
      features: [
        "VGG19 deep architecture",
        "Feature extraction optimization",
        "Batch processing capabilities",
        "Cross-validation testing",
        "Clinical accuracy validation"
      ],
      duration: "1 month",
      status: "Testing Phase"
    },
     {
      src: erp,
      link: "/",
      title: "Kuppai Recyclers",
      description: "ERP website for managing inventory, labour, products and invoices",
      skill: "Other Projects",
      fullDescription: "The platform is complete with User authentication, Inflow & Outflow logic with dyanmic outstanding and netAmount calculations. The flow start from recieving a shipment of Raw Material and goes from processing to invoice where it is sold to a different set of clients",
      technologies: ["PHP", "MySQL", "Javascript", "JQuery"],
      features: [
        "Inflow, Outflow, and Labour flow setup",
        "Dynamic usage of clients and organizations for selling and buying",
        "Dashboard with real-time analytical data",
        "Fully relational database that changes with user input",
        
      ],
      duration: "2 months",
      status: "QA phase"
    },
  ];

  const filteredProjects =
    selectedSkill === "All"
      ? allProjects
      : allProjects.filter((project) => project.skill === selectedSkill);

  const handleProjectClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleAllFilter = () => {
    setSelectedSkill("All");
    setExpandedProject(null);
  };

  const handleSkillFilter = (skill) => {
    setSelectedSkill(skill);
    setExpandedProject(null);
  };

  // Calculate which row the expanded project should appear after
  const getRowEndIndex = (clickedIndex, itemsPerRow) => {
    return Math.floor(clickedIndex / itemsPerRow) * itemsPerRow + itemsPerRow - 1;
  };

  // Determine items per row based on screen size (we'll use lg breakpoint logic)
  const itemsPerRow = 4; // lg:grid-cols-4
  const expandedRowEndIndex = expandedProject !== null ? getRowEndIndex(expandedProject, itemsPerRow) : -1;

  return (
    <section id="projects" className="flex flex-col items-center text-center px-4">
      <h2 className="sectionTitle text-4xl mt-10 mb-8">Projects</h2>
      
      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={handleAllFilter}
          className={`px-6 py-2 rounded-lg transition-all duration-300 ${
            selectedSkill === "All" 
              ? "bg-custom-orange text-white shadow-lg transform scale-105" 
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {["Web Designs", "Tools", "Other Projects"].map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillFilter(skill)}
            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
              selectedSkill === skill
                ? "bg-custom-orange text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => {
            const isRowEnd = index % itemsPerRow === itemsPerRow - 1;
            const isLastItem = index === filteredProjects.length - 1;
            const shouldShowExpanded =
              expandedProject !== null &&
              (isRowEnd || isLastItem) &&
              index >= expandedProject &&
              index < expandedProject + itemsPerRow;
            return (
              <>
                {/* Project Card */}
                <div
                  key={`project-card-${index}`}
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <ProjectCard
                    src={project.src}
                    link={project.link}
                    h3={project.title}
                    p={project.description}
                    onExpand={() => handleProjectClick(index)} // pass expansion handler
                  />
                </div>

                {/* Expanded Project Details - Show after row ends */}
                {shouldShowExpanded && (
                  <div key={`expanded-project-${expandedProject}`} className="col-span-full w-full bg-white border border-gray-200 rounded-xl shadow-2xl mt-8 p-8 transform transition-all duration-500 animate-fadeIn">
                    <div className="max-w-6xl mx-auto">
                      {/* Close button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProject(null);
                        }}
                        className="float-right text-gray-500 hover:text-gray-700 text-2xl font-bold mb-4 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                      >
                        ×
                      </button>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Image */}
                        <div className="space-y-4">
                          <img
                            src={filteredProjects[expandedProject].src}
                            alt={filteredProjects[expandedProject].title}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                          />
                          
                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <a
                              href={filteredProjects[expandedProject].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-custom-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 flex-1 justify-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Project</span>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedProject(null);
                              }}
                              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 flex-1"
                            >
                              Close Details
                            </button>
                          </div>
                        </div>

                        {/* Right Column - Project Details */}
                        <div className="space-y-6">
                          {/* Project Title and Status */}
                          <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-3 text-left">
                              {filteredProjects[expandedProject].title}
                            </h3>
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                              filteredProjects[expandedProject].status === 'Live' ? 'bg-green-100 text-green-800' :
                              filteredProjects[expandedProject].status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {filteredProjects[expandedProject].status}
                            </span>
                          </div>

                          {/* Full Description */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 text-left">About this project:</h4>
                            <p className="text-gray-600 text-left leading-relaxed">
                              {filteredProjects[expandedProject].fullDescription}
                            </p>
                          </div>

                          {/* Duration */}
                          <div className="text-left">
                            <span className="font-semibold text-gray-800">Development Duration: </span>
                            <span className="text-gray-600">{filteredProjects[expandedProject].duration}</span>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 text-left">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {filteredProjects[expandedProject].technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 text-left">Key Features:</h4>
                            <ul className="text-left text-gray-600 space-y-2">
                              {filteredProjects[expandedProject].features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <span className="text-custom-orange mr-3 text-lg">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Projects;