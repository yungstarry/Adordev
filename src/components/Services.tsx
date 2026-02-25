import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="sec sec-alt">
      <div className="container">
        <div className="eyebrow r">
          <span>Services</span>
          <span className="eyebrow-n">03</span>
        </div>
        <div className="svc-layout">
          <div>
            <h2 className="svc-intro-h r">
              What I<br />
              <em>build</em>
            </h2>
            <p className="svc-intro-p r d1">
              I take products from idea to production — backend systems, mobile
              apps, APIs, and infrastructure. Every service below is something I
              deliver end-to-end.
            </p>
          </div>
          <div className="svc-list">
            {[
              {
                icon: "⬡",
                t: "Backend Development",
                p: "High-performance backend systems built with modern stacks — Node.js, NestJS, and TypeScript. Microservices, monoliths, background processing, event-driven architectures — built clean, tested, and ready for scale.",
                d: "",
              },
              {
                icon: "◱",
                t: "Mobile App Development",
                p: "Cross-platform mobile apps for iOS and Android using React Native and Flutter. From concept to App Store — smooth UX, offline support, push notifications, and deep backend integration.",
                d: "d1",
              },
              {
                icon: "⟳",
                t: "API Design & Development",
                p: "REST and GraphQL APIs engineered for developer experience — versioning, OAuth 2.0 auth, rate limiting, webhook systems, and thorough documentation. Clean contracts, zero ambiguity.",
                d: "d2",
              },
              {
                icon: "◎",
                t: "Database & Infrastructure",
                p: "Schema design, query optimisation, and cloud deployment across PostgreSQL, MongoDB, and Redis on AWS or any cloud provider. Systems that stay fast and maintainable as you grow.",
                d: "d3",
              },
            ].map((s, i) => (
              <div className={`svc-item r ${s.d}`} key={i}>
                <div className="svc-icon">{s.icon}</div>
                <div>
                  <div className="svc-t">{s.t}</div>
                  <p className="svc-p">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
