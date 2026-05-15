import React from "react";
import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub",
  "Machine learning",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Jupyter Notebook",
];
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-bg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gardient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                Software Engineer · AI Engineer · Full Stack Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">full stack</span>
                <br />
                solutions with modern technology
                <br />
                <span className="font-serif italic font-normal text-white">
                  and AI-driven thinking.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm a full-stack developer with a passion for building modern
                web applications using React. I have hands-on experience working
                with AI tools and systems, integrating them into real-world
                projects to create smarter, more efficient solutions. I enjoy
                working across the entire stack , from crafting clean,
                responsive user interfaces to building robust backends, and I'm
                always exploring new technologies to level up my skills
              </p>
              <div className="flex flez-wrap gap-4 cursor-pointer animate-fade-in animation-delay-300">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact me
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton>
                  <a
                    href="/cv.pdf"
                    download="Haithem_Boudjemil_CV.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </AnimatedBorderButton>
              </div>

              <div className="flex items-center gap-4 animate-fade-in animation-delay-100">
                <span className="text-sm text-muted-foreground">
                  Follow me:{" "}
                </span>
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Boudjemil haithem"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -botton-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3 ">
                    <div className="w-3 h-3 bg-green-500 rounded-full animale-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* closing of the grid */}
        </div>
        {/* skills section  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skills, idx) => {
                return (
                  <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skills}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
