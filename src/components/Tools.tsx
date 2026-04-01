const Tools = () => {
  return (
    <section id="tools">
      <div className="container">
        <div className="section-label reveal">
          <span className="label">My Arsenal</span>
        </div>
        <h2 className="section-title reveal">Tools I Use</h2>
        <div className="tools-grid reveal">
          <div className="tool-chip" data-label="Graphics Suite"><span>Affinity</span></div>
          <div className="tool-chip" data-label="VFX & Motion"><span>Fusion</span></div>
          <div className="tool-chip" data-label="Pro Editing"><span>DaVinci Resolve</span></div>
          <div className="tool-chip" data-label="Short-Form"><span>CapCut</span></div>
          <div className="tool-chip" data-label="Design"><span>Photoshop</span></div>
          <div className="tool-chip" data-label="Graphics"><span>Canva</span></div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
