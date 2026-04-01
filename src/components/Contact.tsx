import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(
      "%c✅ Adordev: Message received!",
      "color:#00e8ff;font-weight:bold",
    );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="section-label reveal">
              <span className="label">Get In Touch</span>
            </div>
            <h2 className="reveal">
              Ready to Create Something People Won't Scroll Past?
            </h2>

            <div className="contact-info reveal">
              <div className="contact-row">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:hello@adordev.com">hello@adordev.com</a>
              </div>
              <div className="contact-row">
                <i className="fa-brands fa-x-twitter"></i>
                <a href="https://x.com/Adordev_" target="_blank" rel="noopener">
                  @Adordev_
                </a>
              </div>
              <div className="contact-row">
                <i className="fa-solid fa-location-dot"></i>
                <span>Abuja, Nigeria · Global Delivery</span>
              </div>
            </div>

            <div className="contact-tags reveal">
              <span className="contact-tag">⚡ Fast Turnaround</span>
              <span className="contact-tag">🌍 Global Delivery</span>
              <span className="contact-tag">✅ 100% Satisfaction</span>
            </div>
          </div>

          <div>
            {!isSubmitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                id="contactForm"
              >
                <input
                  type="text"
                  className="form-field"
                  placeholder="Your name"
                  required
                  aria-label="Your name"
                />
                <input
                  type="email"
                  className="form-field"
                  placeholder="Your email"
                  required
                  aria-label="Your email"
                />
                <textarea
                  className="form-field"
                  placeholder="Tell me about your project - what do you want people to feel?"
                  rows={5}
                  required
                  aria-label="Your message"
                ></textarea>
                <button type="submit" className="form-submit">
                  <i className="fa-solid fa-paper-plane"></i> Send Message
                </button>
              </form>
            ) : (
              <div
                className="success-msg"
                id="successMsg"
                style={{ display: "block" }}
              >
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "var(--cyan)", marginRight: ".5rem" }}
                ></i>
                Message sent! I'll be in touch within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
