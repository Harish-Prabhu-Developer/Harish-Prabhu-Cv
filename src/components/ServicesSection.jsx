import React from "react";
import { Code, Smartphone, Server, FileText } from "lucide-react";

const ServicesSection = () => {
  // Services Data
  const Services = [
    {
      id: 1,
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications using React Native and Expo for seamless performance and user experience.",
    },
    {
      id: 2,
      icon: Code,
      title: "Web Development",
      description:
        "Creating responsive and modern web applications using React, TailwindCSS, and modern libraries ensuring fast performance and intuitive UI/UX.",
    },
    {
      id: 3,
      icon: Server,
      title: "Backend Services",
      description:
        "Developing REST APIs, integrating Mail & SMS services, and implementing real-time notifications with secure and scalable server-side logic.",
    },
    {
      id: 4,
      icon: FileText,
      title: "Document Services",
      description:
        "Crafting professional documents, including Microsoft Word reports and engaging PowerPoint presentations tailored to your needs.",
    },
  ];

  // Service Card
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="gradient-border p-6 card-hover rounded-2xl min-w-full flex flex-col items-center gap-4">
      {/* Icon on top */}
      <div className="p-3 rounded-full bg-primary/10 transition duration-300">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      {/* Title */}
      <h4 className="font-semibold text-lg">{title}</h4>

      {/* Description */}
      <p className="text-muted-foreground text-justify text-sm leading-normal">
        {description}
      </p>
    </div>
  );
};


  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our <span className="text-primary">Services</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We provide high-quality Mobile App Development, Web Development,
          Backend Services, and Document Solutions to help businesses grow and
          succeed efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
