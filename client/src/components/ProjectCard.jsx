function ProjectCard({ project }) {
  if (project.comingSoon) {
    return (
      <article className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.88),rgba(8,15,32,0.82))] p-4 md:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)] opacity-80" />
        <div className="relative space-y-4">
          <div className="overflow-hidden rounded-[1.45rem] border border-dashed border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,15,32,0.88))]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#161b24] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500/60" />
              </div>
              <div className="flex-1 min-w-0 px-4 py-2 text-xs border rounded-full border-white/10 bg-slate-950/90 text-slate-500">
                <span className="block truncate">nuevo-proyecto.dev</span>
              </div>
            </div>
            <div className="flex aspect-[1.7/1] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),rgba(8,15,28,0.72)_48%,rgba(8,15,28,0.92)_100%)] px-6 text-center">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Proximo caso</p>
                <p className="text-lg font-semibold text-slate-300">Espacio para proyecto real</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-300 transition-all border rounded-lg border-blue-400/50 bg-blue-500/10 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200"
                >
                  <span>Ver en vivo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
                  </svg>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-lg border-slate-500/50 bg-slate-500/10 text-slate-300 hover:border-slate-400 hover:bg-slate-500/20 hover:text-slate-200"
                >
                  <span>Repositorio</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(8,15,32,0.9))] p-4 md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)] opacity-80" />
      <div className="relative space-y-4">
        {project.image ? (
          <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0a0f1b] shadow-[0_20px_55px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#161b24] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              </div>
              <div className="flex-1 min-w-0 px-4 py-2 text-xs border rounded-full border-white/10 bg-slate-950/90 text-slate-300">
                <span className="block truncate">
                  {project.liveUrl
                    ?.replace(/^https?:\/\//, "")
                    .replace(/\/$/, "") || "juegosrapidos.netlify.app"}
                </span>
              </div>
            </div>

            <div className="relative aspect-[1.7/1] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),rgba(8,15,28,0.72)_48%,rgba(8,15,28,0.92)_100%)]">
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 object-cover object-center w-full h-full scale-125 opacity-40 blur-2xl"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%),linear-gradient(180deg,rgba(8,15,28,0.08),rgba(8,15,28,0.38))]" />
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="relative z-10 block object-contain object-center w-full h-full"
              />
              <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(2,6,23,0.14))]" />
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-300 transition-all border rounded-lg border-blue-400/50 bg-blue-500/10 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200"
              >
                <span>Ver en vivo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
                </svg>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-lg border-slate-500/50 bg-slate-500/10 text-slate-300 hover:border-slate-400 hover:bg-slate-500/20 hover:text-slate-200"
              >
                <span>Repositorio</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
