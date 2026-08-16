import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../styles/portfolio.css"

const Arrow = () => <span aria-hidden="true">↗</span>

const work = [
  {
    number: "01",
    title: "Ads Web SDK",
    label: "Navi · 0 → 1 infrastructure",
    copy: "A reusable React + TypeScript SDK that brought advertising experiences into customer journeys across Personal Loans and AMC—with reliable analytics built in.",
    metrics: ["60% less onboarding effort", ">99% event delivery"],
    kind: "sdk",
    href: "/case-studies/#ads-sdk",
  },
  {
    number: "02",
    title: "Session infrastructure",
    label: "Navi · systems & performance",
    copy: "Reworked session handling from UUIDs to JWT-backed tokens with ElastiCache, making authentication both faster and ready for serious throughput.",
    metrics: ["20ms → 2ms latency", "~1.2M req/min"],
    kind: "systems",
    href: "/case-studies/#session-service",
  },
  {
    number: "03",
    title: "Funnel optimization",
    label: "Navi · browser behavior",
    copy: "Redesigned a Personal Loan popup flow around real browser constraints, moving critical work earlier and ensuring the interaction stayed user initiated.",
    metrics: ["₹73 Cr/month estimated uplift", "A/B tested"],
    kind: "funnel",
    href: "/case-studies/#funnel-optimization",
  },
  {
    number: "04",
    title: "Workflow platform",
    label: "Navi · internal tooling",
    copy: "Improved complex operations tooling built with React Flow—reducing slow paths, on-call load, and the time teams needed to resolve incidents.",
    metrics: ["8s → 2s workflows", "80–90% faster resolution"],
    kind: "flow",
    href: "/case-studies/#workflow-platform",
  },
]

const principles = [
  ["01", "Start at the sharp end", "Understand the user, the business constraint, and the failure mode before deciding what to build."],
  ["02", "Build for the next team", "I like systems that make the next integration, screen, or decision materially easier."],
  ["03", "Measure the change", "Latency, conversion, delivery, adoption, and engineering hours are all part of the implementation."],
  ["04", "Use AI with judgment", "AI accelerates research, implementation, tests, and debugging. Architecture and production quality still need ownership."],
]

const IndexPage = (_props: PageProps) => (
  <main>
    <nav className="nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Suhail Malik home">SM<span>·</span></a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="/notes/">Notes</a>
        <a href="/Suhail-Malik-Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        <a href="#approach">Approach</a>
        <a href="#about">About</a>
      </div>
      <a className="nav-contact" href="https://www.linkedin.com/in/suhailma1ik/" target="_blank" rel="noreferrer">Let’s talk <Arrow /></a>
    </nav>

    <section className="hero" id="top">
      <p className="eyebrow reveal">Suhail Malik <i /> Bengaluru, India</p>
      <div className="hero-grid">
        <h1 className="reveal reveal-2">I build products<br />that <em>move</em> things<br />forward.</h1>
        <div className="hero-side reveal reveal-3">
          <p>Product-minded software engineer with frontend depth, systems range, and a bias for 0 → 1 ownership.</p>
          <a className="text-link" href="#work">Explore selected work <Arrow /></a>
          <a className="text-link secondary-link" href="/Suhail-Malik-Resume.pdf" target="_blank" rel="noreferrer">Download résumé ↓</a>
        </div>
      </div>
      <div className="hero-footer reveal reveal-4">
        <span>Currently</span><strong>SDE-2 at Navi</strong>
        <span className="hero-line" />
        <span>Building</span><strong>scalable, useful software</strong>
      </div>
      <div className="hero-mark" aria-hidden="true">0<br /><b>→</b><br />1</div>
    </section>

    <section className="intro-band" aria-label="Introduction">
      <p>I work where the product gets real: web SDKs, high-scale systems, internal platforms, and AI-powered tools. The common thread is leverage—make something better once, then let it improve everything around it.</p>
    </section>

    <section className="work section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <p>Engineering that connects details to outcomes.</p>
      </div>
      <div className="work-list">
        {work.map((item) => (
          <article className={`work-item ${item.kind}`} key={item.number}>
            <div className="work-number">{item.number}</div>
            <div className="work-copy">
              <p className="work-label">{item.label}</p>
              <h2><a href={item.href}>{item.title} <Arrow /></a></h2>
              <p>{item.copy}</p>
            </div>
            <div className="work-visual" aria-hidden="true">
              {item.kind === "sdk" && <><span className="node n1" /><span className="node n2" /><span className="node n3" /><i /><b /></>}
              {item.kind === "systems" && <><strong>JWT</strong><i /><span>Redis</span><b>2ms</b></>}
              {item.kind === "funnel" && <><i /><i /><i /><b>✓</b></>}
              {item.kind === "flow" && <><span /><span /><span /><i /><i /></>}
            </div>
            <div className="work-metrics">
              {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="notes section" id="notes">
      <div className="section-heading"><p className="eyebrow">Engineering notes</p><p>Patterns from the sharp end of product work.</p></div>
      <div className="notes-list">
        <a href="/notes/#reliable-analytics"><span>01</span><div><p>Client-side infrastructure</p><h3>Reliability belongs in the SDK, not in every integration.</h3></div><Arrow /></a>
        <a href="/notes/#browser-behavior"><span>02</span><div><p>Browser behavior</p><h3>Small interaction details can be a product constraint, not a UI detail.</h3></div><Arrow /></a>
        <a href="/notes/#performance"><span>03</span><div><p>Systems thinking</p><h3>Performance work earns its place when it removes friction at scale.</h3></div><Arrow /></a>
      </div>
    </section>

    <section className="clipify section" id="clipify">
      <div className="clipify-head">
        <p className="eyebrow">Independent product</p>
        <p>Idea → architecture → public release</p>
      </div>
      <div className="clipify-layout">
        <div>
          <p className="clipify-kicker">Meet Clipify</p>
          <h2>AI that stays<br />in your <em>flow.</em></h2>
          <p className="clipify-copy">A shortcut-first writing assistant that turns repetitive AI prompts into a system-wide action. Select text, use a hotkey, paste the result—without breaking concentration.</p>
          <a className="text-link clipify-link" href="https://clipify.space/" target="_blank" rel="noreferrer">Visit Clipify <Arrow /></a>
        </div>
        <a className="clipify-shot" href="https://clipify.space/" target="_blank" rel="noreferrer">
          <img src="https://clipify.space/og-image.svg" alt="Clipify, an AI assistant for browser text transformations" />
        </a>
      </div>
      <div className="clipify-foot">
        <span>React + TypeScript</span><span>Tauri 2.0</span><span>Go Fiber</span><span>Chrome extension</span><span>500+ users</span>
      </div>
    </section>

    <section className="approach section" id="approach">
      <div className="approach-intro">
        <p className="eyebrow">How I build</p>
        <h2>Good engineering<br />has a <em>throughline.</em></h2>
      </div>
      <div className="principles">
        {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <section className="about section" id="about">
      <p className="eyebrow">A little more context</p>
      <div className="about-grid">
        <h2>Strong frontend<br />depth. <em>Full</em> product<br />ownership.</h2>
        <div>
          <p>At Navi, I’ve moved between customer funnels, frontend infrastructure, security hardening, localization, backend services, and developer tooling. Before that, I built mobile products with React Native at Phurti and Neurobit.</p>
          <p>I’m drawn to ambitious teams building AI products, developer tools, SaaS, and technically demanding user-facing software.</p>
          <div className="capabilities" aria-label="Core capabilities">
            <div><strong>Frontend systems</strong><span>React · TypeScript · performance</span></div>
            <div><strong>Backend & infra</strong><span>Go · Redis · PostgreSQL · cloud</span></div>
            <div><strong>Developer tools</strong><span>SDKs · testing · internal platforms</span></div>
            <div><strong>AI-native workflows</strong><span>planning · testing · diagnostics</span></div>
          </div>
        </div>
      </div>
    </section>

    <footer id="contact">
      <p className="eyebrow">The next useful thing</p>
      <h2>Let’s build something<br /><em>ambitious.</em></h2>
      <p className="footer-copy">I’m always interested in hard product problems, high-ownership teams, and ideas that deserve to exist.</p>
      <p className="availability">Open to thoughtful product and engineering conversations.</p>
      <a className="footer-cta" href="mailto:suhailmalik2000@gmail.com">Email Suhail <Arrow /></a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Suhail Malik</span><span><a href="https://github.com/suhailma1ik" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/suhailma1ik/" target="_blank" rel="noreferrer">LinkedIn</a></span></div>
    </footer>
  </main>
)

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <title>Suhail Malik — Product-minded Software Engineer</title>
    <meta name="description" content="Suhail Malik is a product-minded software engineer building scalable products, developer tools, and AI-powered workflows." />
    <meta property="og:title" content="Suhail Malik — Product-minded Software Engineer" />
    <meta property="og:description" content="Scalable products, developer tools, and AI-powered workflows." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </>
)
