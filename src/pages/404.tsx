import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../styles/portfolio.css"

const NotFound = (_props: PageProps) => <>
  <a className="skip-link" href="#main-content">Skip to content</a>
  <nav className="nav" aria-label="Not found navigation"><a className="wordmark" href="/" aria-label="Suhail Malik home">SM<span>·</span></a><a className="nav-contact" href="/">← Back to portfolio</a></nav>
  <main className="case-hero" id="main-content">
    <p className="eyebrow">404 · Page not found</p>
    <h1>This page took a<br /><em>wrong turn.</em></h1>
    <p>It may have moved, or the link may be out of date. Head back to the portfolio to see selected work and get in touch.</p>
    <a className="hero-cta" href="/">Return to portfolio →</a>
  </main>
</>

export default NotFound

export const Head: HeadFC = () => <><title>Page not found — Suhail Malik</title><meta name="robots" content="noindex" /></>
