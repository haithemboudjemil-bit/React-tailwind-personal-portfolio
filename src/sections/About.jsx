import React from "react";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}

          <div className="space-y-8">
            <div className="aniamte-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animatin-delay-200">
              <p>
                I'm a full-stack developer and AI engineer with a Master's
                degree in Artificial Intelligence. I specialize in building
                modern web applications using JavaScript and React, while also
                designing and integrating intelligent systems that solve
                real-world problems.
              </p>
              <p>
                On the frontend, I craft clean and responsive user interfaces,
                and on the backend I build robust, scalable APIs and services.
                My AI background allows me to bridge the gap between traditional
                software engineering and machine learning, bringing smarter
                solutions to every project I work on.
              </p>
              <p>
                I'm a self-driven learner who is constantly leveling up through
                platforms like Udemy, always staying ahead of the latest
                technologies and best practices. Whether it's a new framework, a
                new tool, or a new concept — I'm always hungry to learn and
                grow.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to build powerful, intelligent digital experiences
                that merge the precision of clean code with the potential of
                artificial intelligence — creating solutions that are not just
                functional, but meaningful."
              </p>
            </div>
          </div>

          {/* right column highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* closing of the grid */}
        </div>
      </div>
    </section>
  );
};

export default About;
