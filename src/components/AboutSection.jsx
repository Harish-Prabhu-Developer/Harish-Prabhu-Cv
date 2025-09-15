import {
  Smartphone,
  PhoneCall,
  Monitor,
  Server,
  Layers,
} from "lucide-react";

export const AboutSection = () => {
  const DesignationData = [
    {
      id: 1,
      icon: Smartphone,
      title: "Mobile App Developer",
      description:
        "Building high-performance cross-platform mobile apps using React Native and Expo.",
    },
    {
      id: 2,
      icon: PhoneCall,
      title: "React Native Developer",
      description:
        "Creating sleek and native-like mobile UIs with NativeWind and TypeScript.",
    },
    {
      id: 3,
      icon: Layers,
      title: "Full Stack Developer",
      description:
        "Delivering full-stack applications with the MERN stack and modern Dev practices.",
    },
    {
      id: 4,
      icon: Monitor,
      title: "React Developer",
      description:
        "Building dynamic, responsive web interfaces using React, TailwindCSS, and modern libraries.",
    },
    {
      id: 5,
      icon: Server,
      title: "NodeJS Developer",
      description:
        "Developing REST APIs and scalable backends with Node.js, Express, and MongoDB.",
    },
  ];

  // Designation Card Component
  const Card = ({ icon: Icon, title, description }) => (
    <div className="gradient-border p-6 card-hover min-w-full">
      <div className="flex items-start gap-2 md:gap-4">
        <div className="p-2 md:p-3 rounded-full bg-primary/10">
          <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-md md:text-lg">{title}</h4>
          <p className="text-muted-foreground text-justify leading-normal text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold animate-fade-in">
              Passionate Full Stack Mobile App Developer
            </h3>

            <p className="text-justify indent-10 md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-1">
              I’m a <strong>Full Stack Mobile App Developer</strong> with 
              <strong> 7 months of internship experience</strong> in mobile and full-stack development. 
              I specialize in building secure, real-time applications using 
              <strong> React Native</strong> and <strong> Node.js</strong>.
            </p>

            <p className="text-justify indent-10 md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-2">
              I’m passionate about turning complex problems into simple, elegant solutions. 
              Continuously learning and experimenting with new technologies, 
              I strive to deliver scalable, high-performance digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-3">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Harish_Prabhu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 animate-fade-in-delay-4"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Scrollable Designation Cards */}
          <div className="relative h-auto md:h-[460px] overflow-visible md:overflow-hidden">
            <div className="space-y-6 pr-2 will-change-transform md:animate-auto-scroll">
              {DesignationData.map((item) => (
                <Card
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
