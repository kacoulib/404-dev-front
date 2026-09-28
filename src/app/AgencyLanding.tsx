import type { ReactNode } from 'react'

type Locale = 'fr' | 'en'
const CONTACT = 'contact@404-dev.com'

const COPY = {
  fr: {
    nav: ['Expertises', 'Réalisations', 'Méthode', 'Parler du projet'],
    eyebrow: 'Studio produit · Web, mobile & IA',
    title: <>Votre produit numérique,<br /><em>bien pensé. Bien construit.</em></>,
    intro: 'Une équipe senior pour transformer une idée ou un besoin métier en site performant, application mobile ou solution IA utile — avec des coûts maîtrisés.',
    cta: 'Estimer mon projet', secondary: 'Voir nos expertises',
    response: 'Réponse humaine sous 24 h · Premier échange sans engagement',
    metrics: [['10+ ans', 'd’expérience produit'], ['3 + 1', 'développeurs & designer'], ['De A à Z', 'design, code & lancement']],
    services: {
      eyebrow: 'Ce que nous construisons', title: 'Une équipe compacte. Toutes les compétences utiles.',
      body: 'Pas de couche commerciale inutile : vous échangez directement avec les personnes qui conçoivent et réalisent votre produit.',
      items: [
        ['01 · Web', 'Sites & applications web', 'Landing pages qui convertissent, plateformes métier et SaaS rapides, accessibles et simples à faire évoluer.', ['Next.js', 'React', 'Node.js', 'SaaS']],
        ['02 · Mobile', 'Applications iOS & Android', 'Une base de code moderne pour livrer sur les deux stores, tester vite et garder une expérience native soignée.', ['React Native', 'Expo', 'iOS', 'Android']],
        ['03 · IA', 'IA appliquée au métier', 'Agents, automatisations et recherche augmentée pour réduire les tâches répétitives et créer un avantage concret.', ['Agents IA', 'RAG', 'Automatisation', 'LLM']],
      ],
    },
    proof: {
      eyebrow: 'Expérience réelle', title: 'Des produits livrés dans des contextes exigeants.',
      body: 'E-commerce, immobilier, hôtellerie, fintech et logistique : notre expérience couvre autant les grandes marques que les produits en phase de lancement.',
      label: 'Missions & collaborations',
      items: [['Wealthcome', 'Fintech · Mobile', 'Application iOS & Android'], ['Roomchazer', 'Proptech · Web + Mobile', 'Produit multi-plateforme'], ['Accor', 'Hospitality · Web', 'Expérience accessible'], ['Balenciaga', 'Luxury · Mobile', 'Outil interne sur mesure']],
    },
    process: {
      eyebrow: 'Une méthode sans tunnel', title: 'Du premier échange à la mise en ligne.',
      items: [['01', 'Cadrer', 'Objectif, utilisateurs, périmètre et budget : le chemin le plus court vers une première valeur.'], ['02', 'Concevoir', 'Parcours, interface et architecture sont pensés ensemble pour éviter les surprises.'], ['03', 'Construire', 'Avancement visible, démonstrations régulières et arbitrages rapides avec votre équipe.'], ['04', 'Lancer', 'Mise en production, mesure et évolution du produit avec les vrais retours.']],
    },
    value: {
      eyebrow: 'Senior sans surcoût d’agence', title: 'Plus d’expertise. Moins de frais de structure.',
      body: 'Notre organisation légère concentre votre budget sur le produit. Vous obtenez une équipe expérimentée, un périmètre transparent et des choix techniques adaptés à votre réalité — pas à notre facturation.',
      points: ['Périmètre et devis lisibles', 'Interlocuteurs directement impliqués', 'Technologies éprouvées', 'Livraison progressive, risque réduit'],
    },
    faq: {
      eyebrow: 'Questions fréquentes', title: 'Avant de nous écrire.',
      items: [['Travaillez-vous avec de petits budgets ?', 'Oui. Nous cherchons le périmètre le plus utile pour lancer proprement, mesurer la demande et investir ensuite sur ce qui crée de la valeur.'], ['Pouvez-vous reprendre un produit existant ?', 'Oui. Nous pouvons auditer, stabiliser puis faire évoluer une base existante, ou recommander une reprise ciblée lorsque c’est plus responsable.'], ['L’IA est-elle pertinente pour tous les projets ?', 'Non — et nous vous le dirons. Nous l’utilisons quand elle améliore réellement un processus, une expérience client ou une décision.'], ['Où travaillez-vous ?', 'À distance avec des clients en France, Belgique, Suisse, Luxembourg, Canada et États-Unis, en français comme en anglais.']],
    },
    final: ['Un projet en tête ?', 'Parlons du résultat à obtenir.', 'Décrivez-nous votre contexte en quelques lignes. Nous vous répondrons avec les premières pistes et la meilleure prochaine étape.', 'Écrire à 404‑DEV'],
    footer: ['Studio de conception et développement produit.', '404‑DEV, INC. · Tous droits réservés.'],
  },
  en: {
    nav: ['Services', 'Work', 'Process', 'Discuss a project'],
    eyebrow: 'Product studio · Web, mobile & AI',
    title: <>Your digital product,<br /><em>thoughtful. Built right.</em></>,
    intro: 'A senior team turning ideas and business needs into high-performing websites, mobile apps and useful AI solutions — without big-agency overhead.',
    cta: 'Estimate my project', secondary: 'Explore our services',
    response: 'A human reply within 24 hours · No-obligation first call',
    metrics: [['10+ years', 'of product experience'], ['3 + 1', 'developers & designer'], ['End-to-end', 'design, code & launch']],
    services: {
      eyebrow: 'What we build', title: 'A compact team. Every skill that matters.',
      body: 'No unnecessary sales layer: you work directly with the people designing and building your product.',
      items: [
        ['01 · Web', 'Websites & web apps', 'Conversion-focused landing pages, business platforms and fast, accessible SaaS products built to evolve.', ['Next.js', 'React', 'Node.js', 'SaaS']],
        ['02 · Mobile', 'iOS & Android apps', 'One modern foundation for both stores, fast iteration and a polished native-feeling experience.', ['React Native', 'Expo', 'iOS', 'Android']],
        ['03 · AI', 'Practical business AI', 'Agents, automation and augmented search that reduce repetitive work and create a measurable advantage.', ['AI agents', 'RAG', 'Automation', 'LLMs']],
      ],
    },
    proof: {
      eyebrow: 'Real-world experience', title: 'Products delivered in demanding environments.',
      body: 'E-commerce, real estate, hospitality, fintech and logistics — experience spanning major brands and early-stage products.',
      label: 'Selected work & collaborations',
      items: [['Wealthcome', 'Fintech · Mobile', 'iOS & Android application'], ['Roomchazer', 'Proptech · Web + Mobile', 'Multi-platform product'], ['Accor', 'Hospitality · Web', 'Accessible experience'], ['Balenciaga', 'Luxury · Mobile', 'Bespoke internal tool']],
    },
    process: {
      eyebrow: 'A straightforward process', title: 'From first conversation to launch.',
      items: [['01', 'Frame', 'Goals, users, scope and budget: the shortest route to meaningful first value.'], ['02', 'Design', 'Journey, interface and architecture are shaped together to avoid surprises.'], ['03', 'Build', 'Visible progress, frequent demos and quick decisions with your team.'], ['04', 'Launch', 'Production release, measurement and ongoing support guided by real feedback.']],
    },
    value: {
      eyebrow: 'Senior talent, lean overhead', title: 'More expertise. Less agency overhead.',
      body: 'Our lean setup keeps your budget focused on the product. You get an experienced team, transparent scope and technical choices shaped around your reality — not our billing model.',
      points: ['Clear scope and estimates', 'Direct access to the team', 'Battle-tested technology', 'Progressive delivery, lower risk'],
    },
    faq: {
      eyebrow: 'Frequently asked', title: 'Before you reach out.',
      items: [['Can you work with smaller budgets?', 'Yes. We identify the smallest useful scope, launch it properly, measure demand and invest next where value is proven.'], ['Can you take over an existing product?', 'Yes. We can audit, stabilize and extend an existing codebase, or recommend a focused rebuild when that is the responsible option.'], ['Is AI right for every project?', 'No — and we will say so. We use it when it genuinely improves a process, customer experience or decision quality.'], ['Where do you work?', 'Remotely with clients in Europe, Canada and the United States, in both English and French.']],
    },
    final: ['Have a project in mind?', 'Let’s talk about the outcome.', 'Share your context in a few lines. We will reply with initial directions and the best next step.', 'Email 404‑DEV'],
    footer: ['Digital product design and development studio.', '404‑DEV, INC. · All rights reserved.'],
  },
} as const

export function AgencyLanding({ locale }: { locale: Locale }) {
  const c = COPY[locale]
  const isFr = locale === 'fr'
  const mailto = `mailto:${CONTACT}?subject=${encodeURIComponent(isFr ? 'Nouveau projet — 404-DEV' : 'New project — 404-DEV')}`
  return <main className="site-shell">
    <header className="site-nav wrap">
      <Brand href={isFr ? '/' : '/en'} />
      <nav className="nav-links"><a href="#services">{c.nav[0]}</a><a href="#work">{c.nav[1]}</a><a href="#process">{c.nav[2]}</a></nav>
      <div className="nav-actions"><a className="lang" href={isFr ? '/en' : '/'}>{isFr ? 'EN' : 'FR'}</a><a className="button button--small button--dark" href={mailto}>{c.nav[3]}</a></div>
    </header>

    <section className="hero wrap">
      <div className="hero-copy"><Eyebrow>{c.eyebrow}</Eyebrow><h1>{c.title}</h1><p className="hero-intro">{c.intro}</p>
        <div className="hero-actions"><a className="button button--primary" href={mailto}>{c.cta}<Arrow /></a><a className="button button--ghost" href="#services">{c.secondary}</a></div>
        <p className="microcopy"><Status />{c.response}</p>
      </div>
      <HeroVisual />
    </section>

    <section className="metrics-wrap"><div className="metrics wrap">{c.metrics.map(item => <Metric key={item[0]} value={item[0]} label={item[1]} />)}</div></section>

    <section className="section wrap" id="services"><SectionHead eyebrow={c.services.eyebrow} title={c.services.title} body={c.services.body} />
      <div className="service-grid">{c.services.items.map((item, index) => <article className={`service-card service-card--${index + 1}`} key={item[1]}>
        <div className="service-icon"><ServiceIcon index={index} /></div><p className="card-kicker">{item[0]}</p><h3>{item[1]}</h3><p>{item[2]}</p><div className="tag-list">{item[3].map(tag => <span key={tag}>{tag}</span>)}</div>
      </article>)}</div>
    </section>

    <section className="section section--ink" id="work"><div className="wrap"><SectionHead eyebrow={c.proof.eyebrow} title={c.proof.title} body={c.proof.body} inverted /><p className="work-label">{c.proof.label}</p>
      <div className="work-grid">{c.proof.items.map((item, index) => <article className="work-card" key={item[0]}><div className={`work-mark work-mark--${index + 1}`}>{item[0][0]}</div><div><p>{item[1]}</p><h3>{item[0]}</h3><span>{item[2]}</span></div><Arrow /></article>)}</div>
    </div></section>

    <section className="section wrap" id="process"><SectionHead eyebrow={c.process.eyebrow} title={c.process.title} />
      <div className="process-grid">{c.process.items.map(item => <article className="process-step" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
    </section>

    <section className="section wrap value-section"><ValueArt /><div className="value-copy"><Eyebrow>{c.value.eyebrow}</Eyebrow><h2>{c.value.title}</h2><p>{c.value.body}</p><ul>{c.value.points.map(point => <li key={point}><Check />{point}</li>)}</ul></div></section>

    <section className="section wrap faq-section"><SectionHead eyebrow={c.faq.eyebrow} title={c.faq.title} /><div className="faq-list">{c.faq.items.map((item, index) => <details key={item[0]} open={index === 0}><summary>{item[0]}<span>+</span></summary><p>{item[1]}</p></details>)}</div></section>

    <section className="final-cta wrap"><div><Eyebrow>{c.final[0]}</Eyebrow><h2>{c.final[1]}</h2><p>{c.final[2]}</p></div><a className="button button--light" href={mailto}>{c.final[3]}<Arrow /></a></section>

    <footer className="footer wrap"><div><Brand href={isFr ? '/' : '/en'} /><p>{c.footer[0]}</p></div><div className="footer-contact"><a href={`mailto:${CONTACT}`}>{CONTACT}</a><a href="/support">Support</a><span>{c.footer[1]}</span></div></footer>
  </main>
}

function Brand({ href }: { href: string }) { return <a className="brand" href={href} aria-label="404-DEV"><span className="logo-mark"><i /><i /></span><span>404<span className="brand-dot">.</span>DEV</span></a> }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow"><span />{children}</p> }
function Status() { return <span className="status-dot" /> }
function Metric({ value, label }: { value: string; label: string }) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div> }
function SectionHead({ eyebrow, title, body, inverted = false }: { eyebrow: string; title: string; body?: string; inverted?: boolean }) { return <div className={`section-head${inverted ? ' section-head--inverted' : ''}`}><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>{body && <p>{body}</p>}</div> }
function Arrow() { return <svg viewBox="0 0 18 18"><path d="M4 9h10M10 5l4 4-4 4" /></svg> }
function Check() { return <svg viewBox="0 0 18 18"><path d="m4 9 3 3 7-7" /></svg> }
function HeroVisual() { return <div className="hero-visual" aria-hidden="true"><div className="orbit orbit--one" /><div className="orbit orbit--two" /><div className="studio-card"><div className="studio-top"><span /><span /><span /><b>404‑DEV / PROJECT</b></div><div className="studio-grid"><div className="signal-card signal-card--blue"><small>PRODUCT</small><strong>From idea<br />to launch.</strong><i>→</i></div><div className="signal-card signal-card--light"><small>DELIVERY</small><div className="bars"><span /><span /><span /></div><b>On time</b></div><div className="signal-card signal-card--ink"><small>AI READY</small><strong>Useful,<br />not gimmicky.</strong></div><div className="signal-card signal-card--accent"><small>EXPERIENCE</small><strong>10+</strong><b>years</b></div></div></div><div className="floating-note floating-note--top">Web · Mobile · AI</div><div className="floating-note floating-note--bottom"><Status /> Senior team</div></div> }
function ValueArt() { return <div className="value-art" aria-hidden="true"><span className="value-ring value-ring--1" /><span className="value-ring value-ring--2" /><div className="value-badge"><small>404‑DEV</small><strong>Lean<br />by design.</strong><span>↗</span></div></div> }
function ServiceIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 28 28"><rect x="3" y="5" width="22" height="18" rx="3" /><path d="M3 10h22M7 7.5h.01M10 7.5h.01" /></svg>
  if (index === 1) return <svg viewBox="0 0 28 28"><rect x="7" y="2.5" width="14" height="23" rx="3" /><path d="M12 22h4" /></svg>
  return <svg viewBox="0 0 28 28"><path d="M14 2.5 16.5 10 24 12.5 16.5 15 14 22.5 11.5 15 4 12.5 11.5 10 14 2.5Z" /><path d="m22 19 .9 2.6 2.6.9-2.6.9L22 26l-.9-2.6-2.6-.9 2.6-.9L22 19Z" /></svg>
}
