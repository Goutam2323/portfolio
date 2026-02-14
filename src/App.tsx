import React, {
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
} from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Layers,
  Gitlab,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Server,
  Cloud,
  ChevronDown,
  ArrowRight,
  Zap,
  Star,
  Monitor,
} from "lucide-react";

/* ============================
   TYPES
============================ */

interface Profile {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  gitlab: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
  points: string[];
}

interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  stack: string[];
  link?: string;
  creds?: string;
}

interface SkillGroup {
  title: string;
  skills: string[];
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "purple" | "cyan" | "green";
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

interface NavProps {
  scrolled: boolean;
  activeSection: string;
  profile: Profile;
}

interface HeroProps {
  profile: Profile;
}

interface SectionHeaderProps {
  label: string;
  gradient?: string;
  title?: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

interface ProjectsProps {
  projects: ProjectItem[];
}

interface SkillsProps {
  skillGroups: SkillGroup[];
}

interface FooterProps {
  profile: Profile;
}

interface EducationProps {    
  profile: Profile;
}

const GlassCard = ({ children, className = '', hover = true, style }: GlassCardProps) => (
  <div className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${hover ? 'transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-0.5' : ''} ${className}`} style={style}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-white/5 border-white/10 text-slate-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${variants[variant]}`}>
      {children}
    </span>
  );
};

const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 ${className}`}>
    {children}
  </span>
);

const Dot = () => (
  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shrink-0 mt-1.5" />
);

const AmbientOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
    <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #1e293b 0%, #0f172a 60%, #020617 100%)' }} />
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />
    <div className="absolute top-1/3 -right-60 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
    <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)' }} />
    <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
  </div>
);

const Nav = ({ scrolled, activeSection, profile }: NavProps) => (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 border-b border-white/5' : 'py-6'}`}
    style={scrolled ? { background: 'rgba(9,11,21,0.75)', backdropFilter: 'blur(20px)' } : {}}>
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <a href="#home" className="flex items-center gap-3 group">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center w-full h-full text-white font-black text-sm">GB</div>
        </div>
        <span className="text-white font-bold tracking-tighter text-lg">bisht<span className="text-cyan-400">.</span></span>
      </a>
      <div className="hidden md:flex items-center gap-1">
        {['experience', 'projects', 'skills', 'education'].map(item => (
          <a key={item} href={`#${item}`}
            className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${activeSection === item ? 'text-white bg-white/10' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
            {item}
          </a>
        ))}
      </div>
      <a href={`mailto:${profile.email}`}
        className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
        Hire Me <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  </nav>
);

const Hero = ({ profile }: HeroProps) => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <div className="mb-8 flex items-center gap-3">
        <Badge variant="green">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          Available for projects
        </Badge>
      </div>
      <div className="grid lg:grid-cols-[1fr,380px] gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-tighter text-white">
              Full Stack<br />
              <GradientText>Engineer.</GradientText>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I'm <strong className="text-white font-semibold">Goutam Bisht</strong> — I architect scalable, mission-critical systems
              with <strong className="text-violet-300">Angular</strong> & <strong className="text-cyan-300">NestJS</strong>.
              Currently building CRM & service automation at <strong className="text-white font-semibold">Infervize</strong>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-[11px] uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)', boxShadow: '0 8px 32px rgba(124,58,237,0.3)' }}>
              View Work <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="/Goutam_Bisht_CV.pdf" download
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/15 text-slate-300 font-bold text-[11px] uppercase tracking-widest hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300">
              Download CV <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-3">
              {[
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: profile.gitlab, icon: Gitlab, label: 'GitLab' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200">
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <div className="h-5 w-px bg-white/10" />
            <span className="text-[11px] text-slate-600 font-medium tracking-wide">📍 Amritsar, Punjab</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <GlassCard className="p-7 col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Current Role</div>
                <div className="text-white font-bold text-base leading-snug">Fullstack Software<br />Engineer</div>
                <div className="text-slate-500 text-xs mt-1">Infervize Private Ltd.</div>
              </div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(8,145,178,0.3))' }}>
                <Briefcase size={18} className="text-violet-300" />
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-7">
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Experience</div>
            <div className="text-4xl font-black text-white tracking-tighter">1+</div>
            <div className="text-slate-500 text-xs mt-1">Years in Dev</div>
          </GlassCard>
          <GlassCard className="p-7">
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Shipped</div>
            <div className="text-4xl font-black text-white tracking-tighter">10+</div>
            <div className="text-slate-500 text-xs mt-1">Projects</div>
          </GlassCard>
          <GlassCard className="p-7 col-span-2 overflow-hidden relative" hover={false}
            style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(8,145,178,0.10) 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.2),transparent)' }} />
            <div className="relative">
              <Award size={22} className="text-amber-400 mb-3" />
              <div className="text-white font-black text-lg tracking-tight">Hackerwrath 2025</div>
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-1">1st Runner-Up Winner</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-16">
      <div className="flex flex-col items-center gap-2 text-slate-700">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </div>
  </section>
);

const SectionHeader = ({ label, gradient, title }: SectionHeaderProps) => (
  <div className="mb-16">
    <Badge variant="purple">{label}</Badge>
    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tighter text-white leading-none mt-3">
      {gradient && <GradientText>{gradient}</GradientText>}
      {title && <span className="text-500"> {title}</span>}
    </h2>
    <div className="mt-6 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
  </div>
);

const Experience = ({ experience }: ExperienceProps) => (
  <section id="experience" className="py-8 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader label="Career" gradient="Professional" title="Journey" />
      <div className="space-y-5">
        {experience.map((job, idx) => (
          <GlassCard key={idx} className="p-8 md:p-10 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(8,145,178,0.2))' }}>
                  <Briefcase size={20} className="text-violet-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors duration-200">{job.role}</h3>
                  <p className="text-slate-500 text-sm font-medium mt-0.5">{job.company}</p>
                </div>
              </div>
              <Badge variant="default">{job.period}</Badge>
            </div>
            <div className="grid md:grid-cols-[200px,1fr] gap-8">
              <p className="text-slate-500 text-sm italic leading-relaxed">{job.desc}</p>
              <ul className="space-y-3">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <Dot /><span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ projects }: ProjectsProps) => (
  <section id="projects" className="py-8 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader label="Work" gradient="Case" title="Studies" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <GlassCard key={idx} className="p-8 md:p-10 flex flex-col group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                {idx === 0 ? <ShieldCheck size={22} /> : <Smartphone size={22} />}
              </div>
              {project.link && project.link !== '#' ? (
                <a href={project.link} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200">
                  <ExternalLink size={16} />
                </a>
              ) : (
                <Badge variant="cyan">In Progress</Badge>
              )}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] mb-2">{project.category}</div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-4">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(s => (
                <span key={s} className="px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-bold text-slate-500 uppercase tracking-widest" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  {s}
                </span>
              ))}
            </div>
            {project.creds && (
              <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <Zap size={13} className="text-amber-400 shrink-0" />
                <code className="text-[10px] text-slate-500 font-mono">{project.creds}</code>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Skills = ({ skillGroups }: SkillsProps) => {
  const icons = [Monitor, Server, Cloud, Layers];
  const colors = ['text-violet-400', 'text-blue-400', 'text-cyan-400', 'text-slate-400'];
  return (
    <section id="skills" className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Expertise" gradient="The" title="Toolkit" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, idx) => {
            const Icon = icons[idx];
            return (
              <GlassCard key={idx} className="p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <Icon size={16} className={colors[idx]} />
                  <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-semibold text-slate-400 cursor-default hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Education = ({ profile }: EducationProps) => (
  <section id="education" className="py-8 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader label="Background" gradient="Academic" title="Credentials" />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          <GlassCard className="p-8">
            <GraduationCap size={28} className="text-violet-400 mb-6" />
            <div className="text-2xl font-black text-white tracking-tight mb-1">MCA</div>
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">IGNOU · 2025–Present</div>
            <p className="text-sm text-slate-500 leading-relaxed">Master of Computer Applications — advancing system architecture & distributed systems expertise.</p>
          </GlassCard>
          <div className="space-y-5">
            <GlassCard className="p-8">
              <GraduationCap size={28} className="text-cyan-400 mb-5" />
              <div className="flex items-end justify-between mb-1">
                <div className="text-2xl font-black text-white tracking-tight">B.Sc IT</div>
                <div className="text-2xl font-black tracking-tight text-cyan-400">79<span className="text-base">%</span></div>
              </div>
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">DAV College, Amritsar · 2022–25</div>
            </GlassCard>
            <GlassCard className="p-8">
              <div className="flex items-end justify-between mb-1">
                <div className="text-xl font-black text-white tracking-tight">12th Standard</div>
                <div className="text-xl font-black tracking-tight text-violet-400">94<span className="text-sm">%</span></div>
              </div>
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">SSS School · 2022</div>
            </GlassCard>
          </div>
        </div>
        <GlassCard className="p-8 relative overflow-hidden" hover={false}
          style={{ background: 'linear-gradient(160deg, rgba(109,40,217,0.2) 0%, rgba(8,145,178,0.15) 100%)' }}>
          <div className="absolute -right-8 -bottom-8 opacity-10"><Star size={140} /></div>
          <div className="relative z-10">
            <Award size={28} className="text-white mb-6" />
            <h4 className="text-xl font-black text-white tracking-tight mb-6">Honors &amp;<br />Recognition</h4>
            <ul className="space-y-3">
              {["Hackerwrath '24 — Runner Up", "Gemini API Developer", "Google Cloud Goodies", "Oracle AI Certified"].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[11px] font-bold text-slate-300 pb-3 border-b border-white/10 last:border-0 last:pb-0">
                  <Zap size={12} className="text-cyan-400 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
);

const CertTicker = () => {
  const certs = ["Machine Learning – AWS", "Prompt Engineering – IBM", "Agile Methodology – Infosys", "Python – Guvi", "C# Foundation – Microsoft", "AI Premier League", "Oracle AI Certified", "Google Cloud Certified"];
  const doubled = [...certs, ...certs];
  return (
    <div className="py-8 overflow-hidden border-t border-white/5">
      <div className="flex gap-4 whitespace-nowrap w-max" style={{ animation: 'ticker 45s linear infinite' }}>
        {doubled.map((cert, i) => (
          <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-[0.18em] text-600" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <Sparkles size={12} className="text-cyan-500/60" />{cert}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ profile }: FooterProps) => (
  <footer className="py-8 border-t border-white/5 px-6 text-center">
    <div className="max-w-6xl mx-auto">
      <div className="text-white font-black text-5xl tracking-tighter mb-4">GB<span className="text-cyan-400">.</span></div>
      <p className="text-slate-600 text-sm mb-8 max-w-xs mx-auto leading-relaxed">Building scalable digital futures at the intersection of efficiency and innovation.</p>
      <div className="flex justify-center gap-3 mb-12">
        {[{ href: profile.github, icon: Github }, { href: profile.gitlab, icon: Gitlab }, { href: profile.linkedin, icon: Linkedin }, { href: `mailto:${profile.email}`, icon: Mail }].map(({ href, icon: Icon }, i) => (
          <a key={i} href={href} target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-600 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
            <Icon size={17} />
          </a>
        ))}
      </div>
      <p className="text-[9px] font-bold text-800 uppercase tracking-[0.4em]">© 2025 Goutam Bisht — Precision Code</p>
    </div>
  </footer>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Goutam Bisht",
    email: "bishtgoutam3@gmail.com",
    github: "https://github.com/Goutam2323",
    linkedin: "https://linkedin.com/in/goutam-bisht-058171245",
    gitlab: "https://gitlab.com/bishtgoutam3"
  };

  const experience = [
    {
      company: "Infervize Private Limited",
      role: "Fullstack Software Engineer",
      period: "July 2025 – Present",
      desc: "Architecting scalable CRM modules and service automation tools.",
      points: ["Managing and enhancing internal CRM systems using Angular and NestJS.", "Optimizing APIs, fixing bugs, and improving workflow efficiency.", "Implemented real-time technician availability using geo-indexing and event-driven APIs.", "Worked on Quik Serviz workflow and ServizCare Extended Warranty modules."]
    },
    {
      company: "Infervize Private Limited",
      role: "Software Development Intern",
      period: "Jan 2025 – July 2025",
      desc: "Built foundation modules for fintech and service tracking.",
      points: ["Integrated Razorpay for payments and Google Maps API for real-time tracking.", "Developed modules for service scheduling and technician coordination.", "Contributed to QuikServiz and CRM application features."]
    },
    {
      company: "Edunet Foundation (IBM SkillsBuild)",
      role: "Cloud Technology Intern",
      period: "June 2023 – Aug 2023",
      desc: "Gained hands-on experience with IBM Cloud and AI services.",
      points: ["Worked with IBM Cloud and Watson AI on cloud-based applications.", "Deployed cloud-native apps and explored AI-driven workflows.", "Explored storage services and cloud function implementations."]
    }
  ];

  const projects = [
    {
      title: "CareBridge AI",
      category: "Healthcare Platform",
      desc: "A mission-critical AI platform for patient-doctor ecosystems. Features GenAI insights, offline data capture, and role-based access control.",
      stack: ["Angular", "NestJS", "MongoDB", "Gemini AI"],
      link: "http://13.53.42.105:8032/#/dashboard",
      creds: "Gojo@example.com / Gojo1234#$"
    },
    {
      title: "Expensii",
      category: "Fintech Solution",
      desc: "Smart expense tracker featuring GenAI suggestions, category insights, and receipt upload capabilities.",
      stack: ["Angular", "Node.js", "Express", "GenAI"],
      link: "#"
    }
  ];

  const skillGroups = [
    { title: "Frontend", skills: ["Angular", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"] },
    { title: "Backend", skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "Redis"] },
    { title: "Data & Cloud", skills: ["MongoDB", "Firebase", "AWS Hosting", "PM2", "Nginx"] },
    { title: "Tools", skills: ["Git", "Postman", "Razorpay API", "Google Maps API", "SonarQube"] }
  ];

  return (
    <div className="min-h-screen text-slate-300 antialiased selection:bg-violet-500/30 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        * { font-family: 'DM Sans', system-ui, sans-serif; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}} />
      <AmbientOrbs />
      <Nav scrolled={scrolled} activeSection={activeSection} profile={profile} />
      <Hero profile={profile} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Skills skillGroups={skillGroups} />
      <Education profile={profile} />
      <CertTicker />
      <Footer profile={profile} />
    </div>
  );
}