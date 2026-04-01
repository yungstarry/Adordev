const Different = () => {
  return (
    <section id="different">
      <div className="container">
        <div className="different-center">
          <p className="label reveal" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>My philosophy</p>
          <h2 className="different-headline reveal">
            Most editors focus on<br /><strong>"making videos look good."</strong>
          </h2>
          <p className="display-light reveal" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: 'var(--muted)', marginTop: '.5rem' }}>
            I focus on what actually matters.
          </p>

          <div className="different-pillars reveal">
            <div className="pillar"><i className="fa-solid fa-chart-line pillar-icon"></i> Viewer Retention</div>
            <div className="pillar"><i className="fa-solid fa-film pillar-icon"></i> Story Flow</div>
            <div className="pillar"><i className="fa-solid fa-heart pillar-icon"></i> Emotional Impact</div>
            <div className="pillar"><i className="fa-solid fa-bolt pillar-icon"></i> Content That Performs</div>
          </div>

          <p className="different-kicker reveal">
            "Because a beautiful video that nobody watches… is useless."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Different;
