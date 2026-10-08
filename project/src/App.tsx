import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Hammer,
  House,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const phoneNumber = '644 664 235';
const phoneLink = 'tel:+34644664235';
const whatsappLink = 'https://wa.me/34644664235';
const emailLink = 'mailto:reformasguadalajara1@gmail.com';

const services = [
  { title: 'Tejados y cubiertas', text: 'Reparación, retejado y soluciones duraderas para proteger tu vivienda.', icon: House },
  { title: 'Impermeabilizaciones', text: 'Tratamientos eficaces contra humedades, filtraciones y goteras.', icon: Droplets },
  { title: 'Fachadas y exteriores', text: 'Mejoramos el acabado y la protección exterior de cada edificio.', icon: Sparkles },
  { title: 'Reformas integrales', text: 'Coordinamos cada fase para transformar tu espacio sin complicaciones.', icon: Hammer },
  { title: 'Baños y cocinas', text: 'Alicatados, renovación y acabados pensados para el uso diario.', icon: Check },
  { title: 'Pladur y tabiquería', text: 'Distribuciones, techos 3D y soluciones interiores a medida.', icon: ShieldCheck },
];

const projects = [
  {
    image: '/images/projects/image.png',
    title: 'Reforma de fachada',
    category: 'Fachadas y exteriores',
    description: 'Una fachada renovada con líneas limpias y acabados que transforman la presencia de la vivienda.',
  },
  {
    image: '/images/projects/image copy.png',
    title: 'Pavimento exterior',
    category: 'Alicatados y exteriores',
    description: 'Colocación de pavimento cerámico para crear un patio resistente, funcional y fácil de mantener.',
  },
  {
    image: '/images/projects/image copy 2.png',
    title: 'Cubierta de pizarra',
    category: 'Tejados y cubiertas',
    description: 'Trabajo sobre cubierta inclinada para conservar la protección y el carácter de la vivienda.',
  },
  {
    image: '/images/projects/image copy 3.png',
    title: 'Encuentro de tejado',
    category: 'Reparación de goteras',
    description: 'Intervención precisa en una ventana de tejado para resolver puntos sensibles de la cubierta.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Solicitud de presupuesto de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\nProyecto:\n${message}`);
    window.location.href = `${emailLink}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Reformas Guadalajara, inicio">
          <img src="/images/image.png" alt="Reformas Guadalajara" />
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#nosotros" onClick={closeMenu}>Cómo trabajamos</a>
          <a href="#contacto" onClick={closeMenu} className="nav-cta">Pedir presupuesto <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Reformas en Guadalajara y provincia</p>
              <h1>Tu casa, <em>bien hecha.</em></h1>
              <p className="hero-text">Soluciones eficaces para tejados, impermeabilizaciones y reformas que están pensadas para durar.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#contacto">Pedir presupuesto <ArrowUpRight size={18} /></a>
                <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Contactar por WhatsApp</a>
              </div>
              <div className="hero-proof">
                <span><ShieldCheck size={18} /> Más de 15 años de experiencia</span>
                <span><Clock3 size={18} /> De 8:00 a 22:00</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-accent" />
              <img src="/images/projects/image copy 2.png" alt="Tejado de pizarra realizado por Reformas Guadalajara" />
              <div className="hero-caption"><span>Especialistas en</span><strong>tejados y cubiertas</strong></div>
              <div className="hero-number">01 <span>/ 04</span></div>
            </div>
          </div>
          <a href="#servicios" className="scroll-hint"><span>Descubre nuestros servicios</span><ChevronDown size={18} /></a>
        </section>

        <section className="intro-section" id="nosotros">
          <div className="section-label">01 — La diferencia</div>
          <div className="intro-content">
            <h2>Reformar no es solo cambiar.<br /><span>Es hacerlo bien.</span></h2>
            <div className="intro-description">
              <p>En Reformas Guadalajara ponemos experiencia, materiales de primera calidad y conocimiento sobre el terreno al servicio de cada proyecto.</p>
              <p>Trabajamos con un objetivo claro: ofrecer un resultado eficaz, resistente y duradero, cumpliendo lo que necesitas y esperas de tu reforma.</p>
              <a className="arrow-link" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="intro-stats">
            <div><strong>+15</strong><span>años de experiencia</span></div>
            <div><strong>08—22</strong><span>horario de atención</span></div>
            <div><strong>01</strong><span>equipo para cada proyecto</span></div>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="section-heading">
            <div className="section-label">02 — Lo que hacemos</div>
            <div><h2>Soluciones para<br /><span>cada espacio.</span></h2><p>Desde una reparación puntual hasta una reforma completa, nos ocupamos de que todo encaje.</p></div>
          </div>
          <div className="services-grid">
            {services.map(({ title, text, icon: Icon }, index) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span>0{index + 1}</span><Icon size={24} strokeWidth={1.5} /></div>
                <h3>{title}</h3><p>{text}</p><a href="#contacto" aria-label={`Consultar sobre ${title}`}><ArrowUpRight size={19} /></a>
              </article>
            ))}
          </div>
          <div className="service-note"><span className="note-dot" /> También trabajamos en canalones, panel sándwich, Onduline, retejados, techos 3D y reparación de goteras.</div>
        </section>

        <section className="projects-section" id="proyectos">
          <div className="projects-heading"><div><div className="section-label">03 — Trabajo real</div><h2>Hecho para <em>durar.</em></h2></div><p>Una muestra de nuestros trabajos. Cada proyecto empieza escuchando y termina cuidando cada detalle.</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <button className={`project-card project-${index + 1}`} key={project.title} onClick={() => setActiveProject(index)}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"><span>{project.category}</span><strong>{project.title}</strong><div className="project-view">Ver proyecto <ArrowUpRight size={16} /></div></div>
              </button>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-inner">
            <div className="contact-copy"><div className="section-label light">04 — Hablemos</div><h2>¿Tienes un proyecto<br />en mente?</h2><p>Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución para tu vivienda o negocio.</p><div className="contact-direct"><a href={phoneLink}><Phone size={18} /><span><small>Llámanos</small>{phoneNumber}</span></a><a href={emailLink}><Mail size={18} /><span><small>Escríbenos</small>reformasguadalajara1@gmail.com</span></a></div></div>
            <div className="contact-form-wrap">
              {submitted ? <div className="success-message"><div className="success-icon"><Check size={27} /></div><h3>Hemos recibido tu mensaje</h3><p>Gracias por contactar. Te responderemos lo antes posible.</p><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowUpRight size={17} /></a></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Nombre<input required name="name" placeholder="Tu nombre" /></label><label>Teléfono<input required name="phone" type="tel" placeholder="Tu teléfono" /></label></div><label>Email<input required name="email" type="email" placeholder="tu@email.com" /></label><label>¿Qué necesitas?<textarea required name="message" rows={4} placeholder="Cuéntanos brevemente tu proyecto..." /></label><button type="submit" className="button button-yellow">Pedir presupuesto <ArrowUpRight size={18} /></button></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a href="#inicio" className="footer-brand"><img src="/images/image.png" alt="" /></a><p>Reformas Guadalajara<br /><span>Guadalajara y provincia</span></p><div className="footer-links"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a href={phoneLink}>Llamar</a><a href={emailLink}>Email</a></div><p className="footer-copy">© {new Date().getFullYear()} Reformas Guadalajara</p></footer>

      <div className="mobile-bar"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a href={phoneLink}><Phone size={18} /> Llamar</a></div>

      {activeProject !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[activeProject].title} onClick={() => setActiveProject(null)}><button className="lightbox-close" onClick={() => setActiveProject(null)} aria-label="Cerrar"><X size={25} /></button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={projects[activeProject].image} alt={projects[activeProject].title} /><div><span>{projects[activeProject].category}</span><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p></div></div></div>}
    </div>
  );
}

export default App;
