* {
  box-sizing: border-box;
}

:root {
  --bg: #f5efe6;
  --bg-strong: #efe2d0;
  --panel: #fffaf4;
  --panel-strong: #f3e0ca;
  --card: #f8f4ee;
  --text: #1f1b18;
  --muted: #5b524d;
  --line: rgba(31, 27, 24, 0.12);
  --accent: #b86f48;
  --accent-deep: #8d4f30;
  --sage: #cad4c3;
  --ink: #171312;
  --shadow: 0 30px 60px rgba(30, 22, 18, 0.1);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.14);
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--accent-deep);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p,
blockquote,
summary,
details {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 0.98;
  letter-spacing: -0.07em;
  margin-bottom: 1.2rem;
}

h2 {
  font-size: clamp(2.15rem, 3vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.35rem;
  line-height: 1.2;
  margin-bottom: 0.8rem;
}

p {
  font-size: 1.02rem;
  color: var(--muted);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  min-height: 54px;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  font-weight: 800;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--text);
  color: #fff;
  box-shadow: 0 18px 28px rgba(31, 27, 24, 0.16);
}

.btn-secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}

.btn-light {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(245, 239, 230, 0.8);
  border-bottom: 1px solid rgba(31, 27, 24, 0.05);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 84px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.brand-mark {
  width: 42px;
  height: 42px;
  padding: 0.45rem;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--panel-strong), #fff);
  border: 1px solid rgba(31, 27, 24, 0.08);
}

.brand-text {
  font-size: 1.1rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.96rem;
  font-weight: 600;
  color: var(--muted);
}

.main-nav a {
  position: relative;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 100%;
  height: 2px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.main-nav a:hover::after,
.main-nav a:focus-visible::after {
  transform: scaleX(1);
}

.nav-cta {
  margin-left: 0.5rem;
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 0.8rem 0.7rem;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  background: var(--text);
  margin: 0.25rem 0;
}

.hero {
  padding: 72px 0 50px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
  max-width: 620px;
}

.lead {
  font-size: 1.18rem;
  max-width: 550px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.hero-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.3rem;
  font-weight: 700;
  color: var(--text);
}

.hero-list li {
  position: relative;
  padding-left: 1.2rem;
}

.hero-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.48rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.dashboard-card {
  width: min(100%, 520px);
  padding: 1.2rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.15));
  border: 1px solid rgba(31, 27, 24, 0.08);
  border-radius: 30px;
  box-shadow: var(--shadow);
}

.panel-top {
  display: flex;
  gap: 0.55rem;
  padding: 0.4rem 0 1rem;
}

.panel-top span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(31, 27, 24, 0.2);
}

.mockup-window {
  background: rgba(255, 250, 243, 0.9);
  border: 1px solid rgba(31, 27, 24, 0.08);
  border-radius: 24px;
  padding: 1.2rem;
}

.mockup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.mockup-pill {
  background: rgba(184, 111, 72, 0.15);
  color: var(--accent-deep);
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pill-light {
  background: rgba(202, 212, 195, 0.48);
  color: #3c4336;
}

.mockup-content {
  display: grid;
  gap: 1rem;
}

.mockup-copy {
  background: linear-gradient(135deg, rgba(255,255,255,0.65), rgba(243,224,202,0.8));
  border-radius: 18px;
  padding: 1.2rem;
  border: 1px solid rgba(31, 27, 24, 0.05);
}

.mockup-copy h3 {
  margin-bottom: 0.6rem;
}

.stat-blocks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.stat-blocks div {
  background: linear-gradient(135deg, #f6efe8, #fff);
  border: 1px solid rgba(31, 27, 24, 0.06);
  border-radius: 18px;
  padding: 1rem;
}

.stat-blocks strong {
  display: block;
  font-size: 1.9rem;
  letter-spacing: -0.07em;
}

.stat-blocks span {
  color: var(--muted);
  font-size: 0.92rem;
}

.logo-bar {
  padding: 0 0 18px;
}

.logo-bar-inner {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.8rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.35);
  padding: 1.1rem 1.4rem;
  text-align: center;
  font-weight: 800;
  color: rgba(31, 27, 24, 0.75);
}

.intro-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2.5rem;
  align-items: start;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 2.3rem;
}

.feature-grid,
.card-grid,
.steps,
.testimonial-grid {
  display: grid;
  gap: 1.2rem;
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-card,
.info-card,
.step,
.project-card,
blockquote,
.faq-list details {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 18px 35px rgba(31, 27, 24, 0.04);
}

.feature-card,
.info-card,
.step {
  padding: 1.5rem;
}

.feature-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: rgba(184, 111, 72, 0.12);
  color: var(--accent-deep);
  font-weight: 800;
  margin-bottom: 1rem;
}

.card-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(184, 111, 72, 0.12);
  color: var(--accent-deep);
  font-weight: 800;
  margin-bottom: 1rem;
}

.steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.step span {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-deep);
}

.showcase {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 0.85fr;
  gap: 1.25rem;
}

.project-card {
  min-height: 240px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.project-card--large {
  min-height: 380px;
  background: linear-gradient(135deg, rgba(247, 235, 220, 0.82), rgba(255, 255, 255, 0.62));
}

.project-topline {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  color: var(--accent-deep);
}

.metrics {
  padding-top: 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.metric {
  padding: 1.6rem 1.2rem;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.42);
  text-align: center;
}

.metric strong {
  display: block;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
  color: var(--text);
}

.metric span {
  font-size: 0.95rem;
  color: var(--muted);
  font-weight: 700;
}

.testimonial-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

blockquote {
  margin: 0;
  padding: 1.8rem;
  font-size: 1.06rem;
  line-height: 1.7;
  color: var(--text);
}

blockquote footer {
  margin-top: 1.2rem;
  color: var(--muted);
  font-weight: 700;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 1rem;
}

.faq-list details {
  padding: 1.2rem 1.3rem;
}

.faq-list summary {
  cursor: pointer;
  list-style: none;
  font-weight: 800;
  color: var(--text);
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list p {
  margin: 0.9rem 0 0;
}

.cta-band {
  padding: 0 0 100px;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: linear-gradient(135deg, #1d1a18, #382b27);
  border-radius: 28px;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  border: 1px solid rgba(255,255,255,0.08);
}

.cta-inner h2 {
  margin-bottom: 0;
  color: #fff;
}

.cta-inner .eyebrow {
  color: #f0d0b5;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.site-footer {
  padding: 0 0 2rem;
}

.footer-wrap {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0 1rem;
  border-top: 1px solid rgba(31, 27, 24, 0.08);
}

.footer-brand {
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.4rem;
  color: var(--muted);
  font-weight: 700;
}

.copyright {
  color: var(--muted);
  font-size: 0.92rem;
  padding-top: 0.3rem;
}

@media (max-width: 980px) {
  .feature-grid,
  .card-grid,
  .steps,
  .metrics-grid,
  .testimonial-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-grid,
  .intro-grid,
  .showcase,
  .faq-wrap {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-block;
  }

  .site-header.is-open .main-nav {
    display: flex;
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 84px;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255,250,244,0.97);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  .site-header.is-open .nav-wrap {
    position: relative;
  }
}

@media (max-width: 640px) {
  .feature-grid,
  .card-grid,
  .steps,
  .metrics-grid,
  .testimonial-grid,
  .logo-bar-inner {
    grid-template-columns: 1fr;
  }

  .nav-cta {
    display: none;
  }

  .section {
    padding: 80px 0;
  }

  .hero {
    padding-top: 50px;
  }

  .cta-inner,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-actions {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
}
