import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Task Management Application",
    description:
      "An enterprise-level task management application featuring real-time collaboration, role-based access control, analytics, and a cross-platform experience with web and mobile interfaces.",
    image: "/projects/project1.png",
    tags: [
      "React", "React Native", "TailwindCSS", "Node.js", "Express.js",
      "MongoDB", "Postman", "TypeScript", "NativeWind"
    ],
    demoUrl: "https://taskappswomb.netlify.app/",
    githubUrl: "https://github.com/Harish-Prabhu-Developer/Task_Mobile_App",
  },
  {
    id: 2,
    title: "TimeSheet Mobile Application",
    description:
      "A cross-platform time-tracking app developed using React Native and Node.js. Includes Two-Factor Authentication (TFA) and OTP via Nodemailer, REST API integration, and role-based access control.",
    image: "/projects/project2.png",
    tags: ["React Native", "Expo", "REST API", "Figma", "Postman"],
    demoUrl: "#", // You can replace "#" with the actual deployed link if available
    githubUrl: "https://github.com/Harish-Prabhu-Developer/Time_Sheet_ReactNative",
  },
  {
    id: 3,
    title: "IPL Match Winner Prediction",
    description:
      "A machine learning model to predict IPL match outcomes using historical data. Utilized K-Means for clustering, and multiple classifiers including Random Forest (99.89% accuracy), Decision Tree, Logistic Regression, and Naive Bayes. Built with scikit-learn, pandas, and NumPy on Google Colab.",
    image: "/projects/project3.png",
    tags: ["Python", "Machine Learning", "scikit-learn", "pandas", "NumPy", "Google Colab"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harish-Prabhu-Developer/IPL_Match_Winner_Prediction",
  },
  {
    id: 4,
    title: "College Management System",
    description:
      "A classroom-focused Android application developed using Java and Firebase. Includes features like student data management and real-time Database updates.",
    image: "/projects/project4.png",
    tags: ["Java", "Android Studio", "Firebase", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harish-Prabhu-Developer/College-android-project-me",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="relative group mb-4">
                  <div className="flex flex-wrap gap-2 max-h-10 overflow-hidden group-hover:max-h-full transition-all duration-300 ease-in-out">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground 
                        ${index >= 3 ? "hidden group-hover:inline-flex" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.tags.length > 3 && (
                    <div className="text-xs text-muted-foreground mt-2 group-hover:hidden">
                      +{project.tags.length - 3} more
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-justify -tracking-tighter text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Harish-Prabhu-Developer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
