import React from "react";

const Stack: React.FC = () => {
  return (
    <section id="stack" className="sec sec-alt">
      <div className="container">
        <div className="eyebrow r">
          <span>Tech Stack</span>
          <span className="eyebrow-n">05</span>
        </div>
        <div className="stack-top">
          <h2 className="stack-h r">
            My tools
            <br />
            of choice
          </h2>
          <p className="stack-sub r">
            Everything I use in production — no fluff, no hype. Just tools that
            get the job done reliably.
          </p>
        </div>
        <div className="stack-g">
          <div className="r">
            <div className="sg-head">Backend & APIs</div>
            <div className="sg-items">
              {[
                "Node.js",
                "NestJS",
                "TypeScript",
                "Express.js",
                "REST API Design",
                "GraphQL",
                "WebSockets",
              ].map((item, i) => (
                <div className="sg-item" key={i}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="r d1">
            <div className="sg-head">Mobile Development</div>
            <div className="sg-items">
              {[
                "React Native",
                "Flutter / Dart",
                "Expo",
                "iOS & Android",
                "Push Notifications",
                "Offline-first Apps",
                "App Store Deployment",
              ].map((item, i) => (
                <div className="sg-item" key={i}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="r d2">
            <div className="sg-head">Database, Cloud & DevOps</div>
            <div className="sg-items">
              {[
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "AWS (EC2, S3, RDS)",
                "Docker & CI/CD",
                "GitHub Actions",
                "Linux / CLI / SSH",
              ].map((item, i) => (
                <div className="sg-item" key={i}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
