import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-available">
            <div className="avail-pulse"></div>Available for new projects
          </div>

          <h1 className="hero-h1">
            Software
            <br />
            <span className="is">Engineer</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-desc">
              I'm Adordev — a software engineer based in Abuja, Nigeria. I build
              high-performance backend systems with modern tech stacks and
              cross-platform mobile apps that users love. From REST APIs to
              production-ready mobile apps, I ship things that work.
            </p>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-code">
            <div className="hero-code-head">
              <div className="dot dot-r"></div>
              <div className="dot dot-y"></div>
              <div className="dot dot-g"></div>
              <div className="hero-code-file">auth.controller.ts</div>
            </div>
            <span className="cm">
              // Adordev — clean, typed, production-ready
            </span>
            <br />
            <span className="kw">import</span> {"{"}{" "}
            <span className="tp">Controller</span>,{" "}
            <span className="tp">Post</span>, <span className="tp">Body</span>{" "}
            {"}"}
            <br />
            &nbsp;&nbsp;<span className="kw">from</span>{" "}
            <span className="str">'@nestjs/common'</span>;<br />
            <br />@<span className="fn">Controller</span>(
            <span className="str">'auth'</span>)<br />
            <span className="kw">export class</span>{" "}
            <span className="fn">AuthController</span> {"{"}
            <br />
            &nbsp;&nbsp;<span className="kw">constructor</span>(
            <span className="kw">private</span>{" "}
            <span className="tp">authSvc</span>:{" "}
            <span className="tp">AuthService</span>) {"{}"}
            <br />
            <br />
            &nbsp;&nbsp;@<span className="fn">Post</span>(
            <span className="str">'login'</span>)<br />
            &nbsp;&nbsp;<span className="kw">async</span>{" "}
            <span className="fn">login</span>(@<span className="fn">Body</span>(){" "}
            <span className="tp">dto</span>: <span className="tp">LoginDto</span>){" "}
            {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span>{" "}
            <span className="kw">this</span>.<span className="tp">authSvc</span>.
            <span className="fn">issueToken</span>(<span className="tp">dto</span>
            );
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-solid">
              View Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-bottom-row">
          <div className="scroll-line">
            <div className="sl-bar"></div>
            Scroll to explore
          </div>

          <div className="hero-stats">
            <div>
              <div className="hstat-n">15+</div>
              <div className="hstat-l">Projects Shipped</div>
            </div>
            <div>
              <div className="hstat-n">5+</div>
              <div className="hstat-l">Years Coding</div>
            </div>
            <div>
              <div className="hstat-n">100%</div>
              <div className="hstat-l">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
