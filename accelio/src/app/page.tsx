import Link from "next/link";
import {
  BrainCircuit,
  CloudLightning,
  Layers3,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_65%)]" />
      <header className="relative border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              AL
            </span>
            <span>Accelio Lab</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {["Solutions", "Services", "Process", "Clients", "Insights"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-white"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20"
          >
            Schedule a call
          </a>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Logos />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Insights />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20" id="solutions">
      <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-500/40 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Enterprise AI Infrastructure
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build AI infrastructure that scales with your ambition.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Accelio Lab partners with medium to large enterprises to architect
            resilient AI platforms—from data foundations and orchestration to
            automated model delivery—so your teams can activate AI safely,
            securely, and at speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
            >
              Book a strategy session
              <span aria-hidden className="text-slate-900">
                →
              </span>
            </Link>
            <Link
              href="#insights"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Download capability deck
            </Link>
          </div>
          <dl className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
            {[
              {
                label: "Weeks to first production model",
                value: "6-12",
              },
              {
                label: "Operational cost savings",
                value: "28%",
              },
              {
                label: "Enterprise deployments delivered",
                value: "65+",
              },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative isolate flex w-full max-w-md flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="absolute -top-28 -right-14 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                AI platform blueprint
              </p>
              <p className="text-xs text-slate-400">
                Architecture tailored to your data, governance, and compliance
                realities.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/20 text-blue-200">
              <Workflow className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Automated delivery pipelines
              </p>
              <p className="text-xs text-slate-400">
                Unified repos, CI/CD, and monitoring for reproducible model
                releases.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-200">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Responsible AI controls
              </p>
              <p className="text-xs text-slate-400">
                Guardrails woven into your infrastructure to ensure trustworthy
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="relative border-y border-white/10 bg-slate-900/40 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-5 text-xs uppercase tracking-[0.35em] text-slate-500 lg:px-8">
        {[
          "Apex Manufacturing",
          "Northwind Energy",
          "Lumina Health",
          "CipherBank",
          "Skyward Logistics",
          "Omnivue Retail",
        ].map((name) => (
          <span key={name} className="whitespace-nowrap">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Layers3 className="h-6 w-6 text-cyan-200" />,
      title: "AI platform architecture",
      description:
        "Design scalable, cloud-agnostic AI platforms aligned with your security and compliance posture. We blueprint feature stores, vector databases, orchestration, and lineage.",
      deliverables: [
        "Reference architecture & roadmap",
        "Cost & risk assessment",
        "Toolchain evaluation and selection",
      ],
    },
    {
      icon: <CloudLightning className="h-6 w-6 text-cyan-200" />,
      title: "Data foundation engineering",
      description:
        "Modernize data pipelines with reliable ingestion, governance, and real-time infrastructure to ensure models are trained on trusted, high quality signals.",
      deliverables: [
        "Batch & streaming pipeline deployment",
        "Quality, catalog, and governance controls",
        "Observability & incident playbooks",
      ],
    },
    {
      icon: <Workflow className="h-6 w-6 text-cyan-200" />,
      title: "MLOps automation",
      description:
        "Implement automated training, validation, and deployment workflows with integrated guardrails, runtime monitoring, and rollback strategies.",
      deliverables: [
        "CI/CD for models & prompts",
        "Integrated evaluation harnesses",
        "Lifecycle dashboards & alerting",
      ],
    },
  ];

  return (
    <section
      className="relative border-b border-white/5 bg-slate-950/95 pb-24 pt-24"
      id="services"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            AI infrastructure built for the enterprise realities you face.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We orchestrate your operating models, data layers, and MLOps
            practices so AI moves from proof-of-concept to production with
            confidence.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition hover:border-cyan-300/50 hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
              <ul className="mt-auto space-y-2 text-sm text-slate-400">
                {item.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discovery & alignment",
      description:
        "Assess current data, infrastructure, governance, and business objectives to define the transformation scope.",
      metric: "2-3 weeks",
    },
    {
      title: "Architecture sprints",
      description:
        "Co-design target state blueprint, reference implementations, and sequencing to reach desired maturity.",
      metric: "4-6 weeks",
    },
    {
      title: "Implementation pods",
      description:
        "Deploy cross-functional pods to build data pipelines, orchestration, and automation with your teams.",
      metric: "6-18 weeks",
    },
    {
      title: "Scale & upskill",
      description:
        "Operationalize governance, knowledge transfer, and run maturity assessments for continuous improvement.",
      metric: "Ongoing",
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-b border-white/5 bg-slate-900/30 pb-24 pt-24"
      id="process"
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_20%_0%,rgba(94,234,212,0.2),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            A proven operating model that accelerates delivery.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We embed strategic consultants, solution architects, and platform
            engineers with your leaders to de-risk adoption and transfer
            capability.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50"
            >
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-sm text-white">
                  {index + 1}
                </span>
                {step.metric}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CaseStudies() {
  const items = [
    {
      title: "Global manufacturer accelerates predictive maintenance",
      result:
        "Unified IoT ingestion and deployed auto-retraining pipelines that reduced unplanned downtime by 31% across 18 facilities.",
      tags: ["Azure", "Databricks", "Kubernetes", "LLMOps"],
    },
    {
      title: "Enterprise bank unlocks AI-driven risk analytics",
      result:
        "Implemented governed feature store and bias-monitoring, resulting in 4x faster model releases and regulatory-ready reporting.",
      tags: ["AWS", "Feature Store", "Model Risk", "Governance"],
    },
    {
      title: "Healthcare network personalizes care pathways",
      result:
        "Designed privacy-preserving data mesh and real-time inference APIs, enabling personalized care plans across 220 clinics.",
      tags: ["GCP", "Healthcare", "Realtime AI", "Security"],
    },
  ];

  return (
    <section
      className="relative border-b border-white/5 bg-slate-950/90 pb-24 pt-24"
      id="clients"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Proven in mission-critical environments.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              From regulated banking environments to healthcare networks, we
              deliver resilient AI systems with measurable business outcomes.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Request detailed playbooks →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-8"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.result}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      content:
        "Accelio Lab rapidly aligned our leadership, data engineering, and security teams around a single AI platform vision. Their playbooks were battle-tested and saved us months of trial and error.",
      name: "Maya Singh",
      role: "Chief Data Officer, Lumina Health",
    },
    {
      content:
        "They engineered our model delivery pipelines with measurable guardrails. We can now deploy compliant AI services in weeks rather than quarters.",
      name: "Gabriel Ortiz",
      role: "SVP Technology, CipherBank",
    },
  ];

  return (
    <section className="relative border-b border-white/5 bg-slate-900/20 pb-24 pt-24">
      <div className="absolute inset-x-0 top-24 mx-auto h-64 max-w-4xl rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-5 text-center lg:px-8">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Trusted by leaders modernizing AI at scale.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((quote) => (
            <blockquote
              key={quote.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
            >
              <p className="text-lg text-slate-200">“{quote.content}”</p>
              <footer className="mt-auto">
                <div className="text-sm font-semibold text-white">
                  {quote.name}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {quote.role}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const posts = [
    {
      title: "The enterprise guide to responsible LLM deployment",
      description:
        "Patterns for aligning security, legal, and product stakeholders before launching generative AI in production.",
      link: "#",
    },
    {
      title: "Reference architecture: Data foundation for realtime AI",
      description:
        "How to weave streaming infrastructure, feature stores, and observability into a single blueprint.",
      link: "#",
    },
    {
      title: "MLOps automation checklist for regulated industries",
      description:
        "A self-assessment that benchmarks your infrastructure against leading financial institutions.",
      link: "#",
    },
  ];

  return (
    <section className="relative border-b border-white/5 bg-slate-950/95 pb-24 pt-24" id="insights">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Insights engineered for decision makers.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Stay ahead with frameworks, assessments, and architecture guides
              from Accelio Lab.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Access resource library →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-200/60"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-cyan-200">
                Insight
              </div>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-slate-300">{post.description}</p>
              <Link
                href={post.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Read the insight →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section
      className="relative overflow-hidden pb-24 pt-24"
      id="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(65%_85%_at_50%_0%,rgba(56,189,248,0.4),transparent)]" />
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-950/90 p-12 text-center shadow-[0_45px_80px_-40px_rgba(34,211,238,0.45)]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10">
          <Rocket className="h-6 w-6 text-cyan-200" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          Ready to activate enterprise-grade AI infrastructure?
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Partner with Accelio Lab to align leadership, establish data
          foundations, and automate delivery pipelines. We work as an extension
          of your teams to deliver measurable outcomes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:hello@accelio.ai"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            hello@accelio.ai
          </Link>
          <Link
            href="https://cal.com/accelio-lab/strategy-session"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            Book strategy session
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
            AL
          </span>
          <div>
            <div className="text-sm font-semibold text-white">Accelio Lab</div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              AI Infrastructure Consulting
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#services"
            className="transition hover:text-cyan-100"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="transition hover:text-cyan-100"
          >
            Process
          </Link>
          <Link
            href="#clients"
            className="transition hover:text-cyan-100"
          >
            Case Studies
          </Link>
          <Link
            href="#insights"
            className="transition hover:text-cyan-100"
          >
            Insights
          </Link>
          <Link
            href="mailto:hello@accelio.ai"
            className="transition hover:text-cyan-100"
          >
            Contact
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Accelio Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
