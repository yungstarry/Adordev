import React from "react";
import StatCard from "./StatCard";

const About: React.FC = () => {
  return (
    <section id="about" className="sec sec-alt">
      <div className="container">
        <div className="eyebrow r">
          <span>About</span>
          <span className="eyebrow-n">01</span>
        </div>
        <div className="about-g">
          <div>
            <h2 className="about-h r">
              I build systems
              <br />
              that <em>scale</em>
            </h2>
            <p className="about-p r">
              I'm Adordev — a software engineer with 5+ years building
              production systems. My focus is modern backend engineering and
              cross-platform mobile apps. I write code that's clean, tested, and
              built to survive real-world traffic.
            </p>
            <p className="about-p r d1">
              From designing high-performance REST APIs and microservices to
              shipping mobile apps on iOS and Android, I own the full product
              stack — backend, database, infrastructure, and mobile. I pick the
              right tool for the job, not the most familiar one.
            </p>
            <div className="stats-g r d2">
              <StatCard count={15} suffix="+" label="Projects Delivered" />
              <StatCard count={5} suffix="+" label="Years Experience" />
              <StatCard count={Infinity} suffix="" label="Lines of Code" />
              <StatCard count={24} suffix="h" label="Response Time" />
            </div>
          </div>
          <div className="skills-list r d1">
            {[
              { n: "Backend Development", c: ["Node.js", "NestJS"] },
              { n: "API Engineering", c: ["REST", "GraphQL"] },
              { n: "Mobile Development", c: ["React Native", "Flutter"] },
              { n: "Database Architecture", c: ["PostgreSQL", "MongoDB"] },
              { n: "Auth & Security", c: ["OAuth 2.0", "JWT"] },
              { n: "Cloud & Infrastructure", c: ["AWS", "Docker"] },
              { n: "Real-time Systems", c: ["WebSockets", "Redis"] },
              { n: "DevOps & CI/CD", c: ["GitHub Actions", "Linux"] },
            ].map((s, i) => (
              <div className="sk" key={i}>
                <span className="sk-n">{s.n}</span>
                <div className="sk-chips">
                  {s.c.map((chip, ci) => (
                    <span className="chip" key={ci}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
