import React from "react";

const Process: React.FC = () => {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow r">
          <span>Process</span>
          <span className="eyebrow-n">04</span>
        </div>
        <div className="process-g">
          {[
            {
              n: "01",
              t: "Discovery",
              p: "I start by deeply understanding your product, users, and technical constraints — before writing a single line of code.",
              d: "",
            },
            {
              n: "02",
              t: "Architecture",
              p: "I design the system architecture, database schema, and API contracts upfront — avoiding costly rewrites down the road.",
              d: "d1",
            },
            {
              n: "03",
              t: "Build & Test",
              p: "Feature development with test coverage, clean commit history, and regular check-ins. You always know exactly where things stand.",
              d: "d2",
            },
            {
              n: "04",
              t: "Ship & Support",
              p: "Deployment, handover documentation, and post-launch support. I don't disappear after the final PR is merged.",
              d: "d3",
            },
          ].map((p, i) => (
            <div className={`proc r ${p.d}`} key={i}>
              <div className="proc-n">{p.n}</div>
              <div className="proc-t">{p.t}</div>
              <p className="proc-p">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
