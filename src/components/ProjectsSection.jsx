import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Milk Delivery & Ordering App",
    description:
      "A cross-platform mobile app built for customers and milk vendors to simplify daily milk and dairy product orders. The app provides customers with easy ordering, flexible delivery options, and order tracking, while enabling shop owners to manage sales, deliveries, routes, and reports seamlessly.",
    image: "/projects/project1.png",
    tags: [
      "React Native",
      "FCM",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "NativeWind",
      "Postman"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Harish-Prabhu-Developer/Milk-Shop-App",
  },
  {
    id: 2,
    title: "Task Management Application",
    description:
      "An enterprise-level task management application featuring real-time collaboration, role-based access control, analytics, and a cross-platform experience with web and mobile interfaces.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "React Native",
      "Redux",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
      "TypeScript",
      "NativeWind",
    ],
    demoUrl: "https://taskappswomb.netlify.app/",
    githubUrl: "https://github.com/Harish-Prabhu-Developer/Task_Mobile_App",
  },
  {
    id: 3,
    title: "TimeSheet Mobile Application",
    description:
      "A cross-platform time-tracking app developed using React Native and Node.js. Includes Two-Factor Authentication (TFA) and OTP via Nodemailer, REST API integration, and role-based access control.",
    image: "/projects/project3.png",
    tags: ["React Native", "Expo", "REST API", "Figma", "Postman"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Harish-Prabhu-Developer/Time_Sheet_ReactNative",
  },
  {
    id: 4,
    title: "IPL Match Winner Prediction",
    description:
      "A machine learning model to predict IPL match outcomes using historical data. Utilized K-Means for clustering, and multiple classifiers including Random Forest (99.89% accuracy), Decision Tree, Logistic Regression, and Naive Bayes. Built with scikit-learn, pandas, and NumPy on Google Colab.",
    image: "/projects/project4.png",
    tags: [
      "Python",
      "Machine Learning",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Google Colab",
    ],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Harish-Prabhu-Developer/IPL_Match_Winner_Prediction",
  },
  {
    id: 5,
    title: "College Management System",
    description:
      "A classroom-focused Android application developed using Java and Firebase. Includes features like student data management and real-time Database updates.",
    image: "/projects/project5.png",
    tags: ["Java", "Android Studio", "Firebase", "Figma"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Harish-Prabhu-Developer/College-android-project-me",
  },
  {
  id: 6,
  title: "Tournament Entry Platform",
  description:
    "A full-stack MERN application deployed on Hostinger with Nginx reverse proxy configuration. The platform enables tournament organizers to manage player entries, academy submissions, and event operations with a secure and scalable architecture.",
  image: "/projects/project6.png",
  tags: ["MERN STACK", "Hostinger", "Nginx", "PMS"],
  demoUrl: "https://lionssportsfoundation.org/",
  githubUrl: "#"
}

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                  {/* Mobile: Show all tags; Desktop: Show only 3, hover to reveal all */}
                  <div className="flex flex-wrap gap-2 overflow-hidden md:max-h-10 md:group-hover:max-h-40 transition-all duration-300 ease-in-out">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`py-1 px-2 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground
                                  ${index >= 3 ? "md:hidden md:group-hover:inline-flex" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* "+N more" text only on desktop before hover */}
                  {project.tags.length > 3 && (
                    <div className="text-xs text-muted-foreground mt-2 hidden md:block md:group-hover:hidden">
                      +{project.tags.length - 3} more
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-justify text-sm mb-4">
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
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
