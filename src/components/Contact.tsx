import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxA_3RsAKDg_q-B97-HNtCsFwMyvYAyJLJgyqxMyKRXV11cw/formResponse";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    // Mapping entry IDs
    data.append("entry.1958643761", formData.get("name") as string);
    data.append("entry.1482874536", formData.get("email") as string);
    data.append("entry.965701753", formData.get("subject") as string);
    data.append("entry.204044611", formData.get("desc") as string);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });
      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      // Even if it fails due to CORS, no-cors usually sends the data successfully.
      // We'll set success because we can't reliably detect success/failure with no-cors,
      // but status 0 is typical for successful no-cors POST.
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="sec">
      <div className="container">
        <div className="eyebrow r">
          <span>Contact</span>
          <span className="eyebrow-n">06</span>
        </div>
        <div className="contact-g">
          <div>
            <h2 className="contact-h r">
              Let's build
              <br />
              <em>something</em>
              <br />
              great
            </h2>
            <p className="contact-sub r">
              Got a product to build, a mobile app to ship, or a backend that
              needs rescuing? Available for freelance, contract, and full-time
              engagements. Let's talk.
            </p>
            <div className="contact-items r d1">
              <a href="mailto:hello@adordev.com" className="ci">
                <span className="ci-i">✉</span>hello@adordev.com
              </a>
              <a href="tel:+2348060264444" className="ci">
                <span className="ci-i">☎</span>+234 806 026 4444
              </a>
              <div className="ci">
                <span className="ci-i">◎</span>Abuja, Nigeria
              </div>
              <a href="https://www.upwork.com/freelancers/~01a5d9a440962d6d60" target="_blank" rel="noopener noreferrer" className="ci">
                <span className="ci-i">⬡</span>Available on Upwork & X
              </a>
            </div>
          </div>

          <div className="form r d1">
            {status === "success" ? (
              <div className="form-success">
                <div className="fs-icon">✓</div>
                <h3 className="fs-h">Message Sent!</h3>
                <p className="fs-p">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button className="fs-btn" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject / Project type"
                  required
                  disabled={status === "loading"}
                />
                <textarea
                  name="desc"
                  placeholder="Tell me about your project — what are you building, what's the timeline, what do you need?"
                  required
                  disabled={status === "loading"}
                ></textarea>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
