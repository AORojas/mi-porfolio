import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";

const API_URL = import.meta.env.VITE_API_URL || "/api";

const accentStyles = {
  orange:
    "group-hover:border-orange-400/50 group-hover:bg-orange-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(249,115,22,0.22)] group-hover:text-orange-100",
  sky:
    "group-hover:border-sky-400/50 group-hover:bg-sky-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(14,165,233,0.22)] group-hover:text-sky-100",
  yellow:
    "group-hover:border-yellow-400/50 group-hover:bg-yellow-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(234,179,8,0.22)] group-hover:text-yellow-100",
  cyan:
    "group-hover:border-cyan-400/50 group-hover:bg-cyan-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(34,211,238,0.22)] group-hover:text-cyan-100",
  green:
    "group-hover:border-green-400/50 group-hover:bg-green-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(34,197,94,0.22)] group-hover:text-green-100",
  slate:
    "group-hover:border-slate-300/50 group-hover:bg-slate-200/[0.08] group-hover:shadow-[0_18px_45px_rgba(148,163,184,0.18)] group-hover:text-slate-100",
  amber:
    "group-hover:border-amber-400/50 group-hover:bg-amber-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(245,158,11,0.22)] group-hover:text-amber-100",
  emerald:
    "group-hover:border-emerald-400/50 group-hover:bg-emerald-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(16,185,129,0.22)] group-hover:text-emerald-100",
  blue:
    "group-hover:border-blue-400/50 group-hover:bg-blue-500/[0.08] group-hover:shadow-[0_18px_45px_rgba(59,130,246,0.22)] group-hover:text-blue-100"
};

const iconAccentStyles = {
  orange: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(249,115,22,0.85))]",
  sky: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(14,165,233,0.85))]",
  yellow: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(234,179,8,0.85))]",
  cyan: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(34,211,238,0.85))]",
  green: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(34,197,94,0.85))]",
  slate: "group-hover:[filter:grayscale(0)_brightness(1.2)_drop-shadow(0_0_16px_rgba(226,232,240,0.75))]",
  amber: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(245,158,11,0.85))]",
  emerald: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(16,185,129,0.85))]",
  blue: "group-hover:[filter:grayscale(0)_brightness(1)_drop-shadow(0_0_18px_rgba(59,130,246,0.85))]"
};

function NeonLetters({ text, className = "" }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="mr-[0.32em] inline-block whitespace-nowrap">
          {word.split("").map((letter, letterIndex) => (
            <span
              key={`${letter}-${letterIndex}`}
              className="inline-block transition duration-200 ease-out hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.95),0_0_22px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.45)]"
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function TypewriterTitle({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) {
      return undefined;
    }

    const currentPhrase = phrases[phraseIndex];
    const isComplete = displayedText === currentPhrase;
    const isEmpty = displayedText === "";

    let timeout = 90;

    if (!isDeleting && isComplete) {
      timeout = 1600;
    } else if (isDeleting && isEmpty) {
      timeout = 300;
    } else if (isDeleting) {
      timeout = 35;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases]);

  return (
    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
      <span>{displayedText}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-1 animate-pulse bg-brand-200 align-middle" />
    </h1>
  );
}

function TechnologyCard({ item }) {
  const imageClassName = item.invertOnDark
    ? `h-10 w-10 object-contain [filter:grayscale(1)_brightness(1.35)_invert(1)] transition duration-300 group-hover:scale-110 ${iconAccentStyles[item.accent] || ""}`
    : `h-10 w-10 object-contain [filter:grayscale(1)_brightness(0.9)] transition duration-300 group-hover:scale-110 ${iconAccentStyles[item.accent] || ""}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-900/65 px-4 py-3.5 transition duration-300 hover:-translate-y-1 ${accentStyles[item.accent] || ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(77,99,255,0.16),_transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full min-h-[104px] flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.06] transition duration-300 group-hover:scale-105">
          <img
            src={item.logo}
            alt={item.name}
            className={imageClassName.replace("h-10 w-10", "h-7 w-7")}
          />
        </div>
        <span className="block text-center text-[0.92rem] font-medium leading-5 tracking-[0.01em] text-slate-200 transition duration-300 group-hover:text-white">
          {item.name}
        </span>
      </div>
    </article>
  );
}

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const response = await fetch(`${API_URL}/portfolio`);

        if (!response.ok) {
          throw new Error("No se pudo cargar la información del portfolio.");
        }

        const data = await response.json();
        setPortfolio(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, []);

  const hero = portfolio?.hero;
  const projects = portfolio?.projects || [];
  const skills = portfolio?.skills || [];
  const highlights = portfolio?.highlights || [];
  const education = portfolio?.education || [];
  const normalizeCategory = (value = "") =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const academicEducation = education.filter(
    (item) => normalizeCategory(item.category) === "Educacion"
  );
  const courses = education.filter((item) => item.category === "Cursos");
  const contact = portfolio?.contact;
  const projectPlaceholders = Array.from({ length: 1 }, (_, index) => ({
    title: `Proyecto ${String(index + 3).padStart(2, "0")}`,
    description: "proximamente...",
    stack: ["Próximamente"],
    comingSoon: true
  }));
  const displayProjects = [...projects, ...projectPlaceholders];
  const heroPhrases = [
    hero?.title || "Desarrollador full stack construyendo experiencias web dinámicas y escalables",
    "Échale un vistazo a mi portfolio"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(77,99,255,0.25),_transparent_35%),linear-gradient(180deg,_#020617_0%,_#020617_45%,_#0f172a_100%)]" />

      <header className="flex items-center justify-between max-w-6xl px-6 py-6 mx-auto">
        <NeonLetters
          text="PORTFOLIO"
          className="text-lg font-semibold tracking-[0.24em] text-brand-300"
        />
        <a
          href="#contacto"
          className="px-4 py-2 text-sm transition border rounded-full border-white/15 text-slate-200 hover:border-brand-400 hover:text-white"
        >
          Hablemos
        </a>
      </header>

      <main className="flex flex-col max-w-6xl gap-20 px-6 pt-8 pb-16 mx-auto">
        <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex px-4 py-2 text-sm border rounded-full border-brand-400/30 bg-brand-500/10 text-brand-100">
              {loading ? "Cargando presentación..." : hero?.badge}
            </span>
            <div className="space-y-4">
              <TypewriterTitle
                phrases={
                  loading
                    ? ["Construyendo una presencia digital moderna."]
                    : heroPhrases
                }
              />
              <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {loading
                  ? "Preparando una base visual y técnica para un portfolio atractivo, rápido y escalable."
                  : hero?.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="px-6 py-3 font-medium text-white transition rounded-full bg-brand-500 shadow-glow hover:bg-brand-400"
              >
                Ver proyectos
              </a>
              <a
                href="#sobre-mi"
                className="px-6 py-3 font-medium transition border rounded-full border-white/15 text-slate-200 hover:border-white/40 hover:text-white"
              >
                Sobre mí
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Tailwind", "JavaScript", "Node", "Express", "MongoDB"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-2 text-sm border rounded-full border-white/10 bg-slate-900/80 text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 border rounded-2xl border-white/10 bg-slate-900/70"
                  >
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-4">
            <SectionTitle eyebrow="Tecnologías" title="Stack principal para frontend, backend y datos" />
            <p className="leading-8 text-slate-300">
              Trabajo principalmente con tecnologías orientadas a productos web modernos,
              interfaces cuidadas y APIs preparadas para escalar.
            </p>
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-brand-200">
                  {skill.category}
                </p>
                <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skill.items.map((item) => (
                    <TechnologyCard
                      key={item.name}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="sobre-mi"
          className="flex justify-center px-1"
        >
          <div className="group relative w-full max-w-5xl overflow-hidden rounded-[2rem] p-[2px]">
            <div className="absolute inset-[-20%] opacity-100 animate-[spin_5s_linear_infinite]">
              <div className="h-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#00d2ff_15%,#3a7bd5_30%,transparent_45%)] blur-[24px]" />
            </div>
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[2rem] border border-blue-500/20" />
            <div className="relative z-20 flex w-full flex-col items-center gap-12 rounded-[calc(2rem-2px)] bg-[#0b0f1a] p-10 md:flex-row md:p-14">
              <div className="flex-1 space-y-6 text-gray-300">
                <span className="font-mono text-sm tracking-widest text-blue-500 uppercase">
                  Sobre mí
                </span>
                <div className="space-y-5 text-lg leading-relaxed">
                  <p>{loading ? "Cargando..." : portfolio?.about?.description}</p>
                  {!loading && portfolio?.about?.bio?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {portfolio?.about?.image && (
                <div className="relative h-72 w-72 shrink-0 md:h-96 md:w-96">
                  <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-lg" />
                  <img
                    src={portfolio.about.image}
                    alt="Foto de perfil"
                    className="relative object-cover object-center w-full h-full border shadow-2xl rounded-full border-white/5"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="proyectos" className="space-y-8">
          <SectionTitle
            eyebrow="Proyectos"
            title="Soluciones digitales desarrolladas con el stack óptimo para cada desafío técnico"
          />

          {error ? (
            <div className="p-6 border rounded-3xl border-rose-400/20 bg-rose-400/10 text-rose-100">
              {error}
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {displayProjects.map((project) => (
                <div key={project.title}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="formacion" className="space-y-8">
          <SectionTitle
            eyebrow="Formación"
            title="Base técnica en evolución constante"
          />
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-brand-400/70 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-200">
                  Educación
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {academicEducation.map((item) => (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="rounded-[1.75rem] border border-brand-300/20 bg-brand-500/10 p-6 shadow-[0_18px_55px_rgba(77,99,255,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-sm text-brand-200">{item.period}</span>
                    </div>
                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-300">
                      {item.institution}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-white/25 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                  Cursos
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {courses.map((item) => (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-sm text-brand-200">{item.period}</span>
                    </div>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                      {item.institution}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <SectionTitle eyebrow="Contacto" title="Listo para transformar ideas en producto" />
          <div className="flex flex-col gap-4 mt-6 text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>
              <p>{contact?.email || "tu-email@ejemplo.com"}</p>
              <p>{contact?.location || "Tu ciudad, tu país"}</p>
            </div>
            <a
              href={`mailto:${contact?.email || "tu-email@ejemplo.com"}`}
              className="inline-flex px-6 py-3 font-medium transition bg-white rounded-full text-slate-950 hover:bg-brand-100"
            >
              Enviar email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
