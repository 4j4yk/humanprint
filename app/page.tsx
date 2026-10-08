const timeline = [
  { year: '2020', label: 'Starting point' },
  { year: '2021', label: 'Progressive work' },
  { year: '2022', label: 'Enterprise adoption' },
  { year: '2023', label: 'AI native practice' },
  { year: '2024', label: 'Operational reality' },
  { year: '2025', label: 'Current state' },
  { year: 'Now', label: 'The next page' },
]

export default function Page() {
  return (
    <main className="paper-shell">
      <div className="paper-inner">
        <header className="masthead">
          <div className="utility-row">
            <span>THE ENTERPRISE AI EDITION</span>
            <span>2020 — NOW</span>
            <span>FOR TECHNICAL PEOPLE IN IT &amp; AI NATIVE</span>
          </div>
          <div className="brand-row">
            <div className="issue-mark" aria-label="Issue 01">01</div>
            <h1>HumanPrint</h1>
            <div className="date-block">
              <span>ONE-PAGE BRIEF</span>
              <strong>THE PRESENT</strong>
            </div>
          </div>
          <nav className="section-nav" aria-label="Newspaper sections">
            <a href="#front-page">Front page</a>
            <a href="#timeline">Timeline</a>
            <a href="#comparison">The comparison</a>
            <a href="#readers">For readers</a>
          </nav>
        </header>

        <section id="front-page" className="hero-section" aria-labelledby="main-headline">
          <div className="kicker">A progressive record</div>
          <h2 id="main-headline">The state of enterprise AI</h2>
          <p className="deck">
            Comparing the work of AI in enterprise from 2020 till now — a clear page for people building, operating, and understanding what comes next.
          </p>
          <div className="hero-meta">
            <span>HUMANPRINT / CURRENT STATE</span>
            <span>READING TIME: ONE PAGE</span>
          </div>
        </section>

        <section id="timeline" className="timeline-section" aria-labelledby="timeline-title">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h3 id="timeline-title">A timeline in motion</h3>
            <span className="rule" />
          </div>
          <div className="timeline-grid">
            {timeline.map((item, index) => (
              <article className={`timeline-item ${index === timeline.length - 1 ? 'current' : ''}`} key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" aria-hidden="true" />
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="comparison" className="comparison-section" aria-labelledby="comparison-title">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h3 id="comparison-title">What changed on the page?</h3>
            <span className="rule" />
          </div>
          <div className="comparison-grid">
            <article className="comparison-card">
              <span className="card-label">THEN / 2020</span>
              <h4>Progressive work begins</h4>
              <p>AI enters the enterprise story as work to compare, understand, and move forward.</p>
            </article>
            <div className="comparison-arrow" aria-hidden="true">→</div>
            <article className="comparison-card dark-card">
              <span className="card-label">NOW / CURRENT STATE</span>
              <h4>Adoption becomes the story</h4>
              <p>Enterprise AI is read through the work: technical practice, operational context, and AI-native thinking.</p>
            </article>
          </div>
        </section>

        <section id="readers" className="reader-note" aria-labelledby="reader-title">
          <div>
            <span className="kicker">Who this is for</span>
            <h3 id="reader-title">Built for the people close to the system.</h3>
          </div>
          <p>Technical people in IT and AI native. HumanPrint keeps the view direct, readable, and grounded in the progression from 2020 till now.</p>
        </section>

        <footer className="footer-row">
          <span>HUMANPRINT</span>
          <span>THE ENTERPRISE AI EDITION</span>
          <span>END OF PAGE / BEGIN AGAIN</span>
        </footer>
      </div>
    </main>
  )
}
