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

const phoneNumber = '+34 644 66 42 35';
const phoneLink = 'tel:+34644664235';
const whatsappLink = 'https://wa.me/34644664235';
const businessEmail = 'Tejadosycubiertasvaloria@gmail.com';
const emailLink = `mailto:${businessEmail}`;

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
    image: '/images/projects/tejado-teja.jpg',
    width: 1400,
    height: 1050,
    title: 'Cubierta de teja',
    category: 'Tejados',
    alt: 'Cubierta de teja árabe vista desde el tejado, con chimenea y ventana de cubierta',
    description:
      'Vista de una cubierta de teja árabe desde el propio tejado, con la cumbrera, la chimenea, los pasos de instalaciones y una ventana de cubierta.',
  },
  {
    image: '/images/projects/tejado-pizarra.jpg',
    width: 921,
    height: 523,
    title: 'Cubierta de pizarra',
    category: 'Tejados',
    alt: 'Cubierta de pizarra con su cumbrera, vista desde la altura',
    description:
      'Cubierta de pizarra con su cumbrera de piezas curvas, vista desde la altura con las casas del entorno al fondo.',
  },
  {
    image: '/images/projects/canalon-detalle.jpg',
    width: 1400,
    height: 1050,
    title: 'Detalle de canalón',
    category: 'Canalones',
    alt: 'Canalón pintado de gris bajo el alero, junto a la bajante',
    description:
      'Detalle de un canalón pintado de gris bajo el alero, con el paso de la bajante y la salida de desagüe.',
  },
  {
    image: '/images/projects/canalon-impermeabilizado.jpg',
    width: 1400,
    height: 1050,
    title: 'Canalón impermeabilizado',
    category: 'Canalones',
    alt: 'Interior de un canalón impermeabilizado visto desde la cubierta',
    description:
      'Interior de un canalón impermeabilizado y pintado de gris, visto en longitudinal desde la cubierta, con las tejas del alero a un lado.',
  },
  {
    image: '/images/projects/fachada-pintada-detalle.jpg',
    width: 1050,
    height: 1400,
    title: 'Fachada pintada',
    category: 'Fachadas',
    alt: 'Muro exterior pintado de rojo junto a una vivienda de ladrillo',
    description:
      'Muro exterior pintado de rojo junto a una vivienda de ladrillo, con ventanal, puerta metálica y terreno seco alrededor.',
  },
  {
    image: '/images/projects/fachada-pintada-general.jpg',
    width: 1050,
    height: 1400,
    title: 'Fachada pintada, vista general',
    category: 'Fachadas',
    alt: 'Muro largo pintado de rojo bajo el alero de tejado',
    description:
      'Muro largo pintado de rojo bajo el alero de tejado, con terreno seco y un árbol en primer plano.',
  },
  {
    image: '/images/projects/terraza-impermeabilizada.jpg',
    width: 1400,
    height: 1050,
    title: 'Terraza impermeabilizada',
    category: 'Otros trabajos',
    alt: 'Terraza con el suelo impermeabilizado en tono ocre y muro de ladrillo',
    description:
      'Terraza con el suelo impermeabilizado en tono ocre, muro de ladrillo y ventanas con contraventanas.',
  },
  {
    image: '/images/projects/patio-alicatado.jpg',
    width: 1400,
    height: 1050,
    title: 'Patio alicatado',
    category: 'Otros trabajos',
    alt: 'Patio alicatado con baldosas terracota y escalera metálica',
    description:
      'Patio alicatado con baldosas cuadradas de tono terracota, escalera metálica y un árbol en el centro.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitState('sending');
    setSubmitMessage('');

    try {
      const payload = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
      const response = await fetch(`https://formsubmit.co/ajax/${businessEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...payload,
          _subject: `Nueva solicitud de presupuesto: ${payload.name}`,
          _replyto: payload.email,
          _template: 'table',
          _honey: formData.get('website'),
          _url: window.location.href,
        }),
      });
      if (!response.ok) throw new Error('email_delivery_failed');
      await response.json();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
      setSubmitMessage('No se pudo enviar la solicitud. Llámanos o escríbenos por WhatsApp.');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Reformas Guadalajara, inicio">
          <img src="/images/logo-reformas-guadalajara-transparente.png" alt="" />
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
              <h1>Tejados y cubiertas en <em>Guadalajara</em></h1>
              <p className="hero-text"><strong>Tu casa, bien hecha.</strong> Soluciones eficaces para impermeabilizaciones, tejados y reformas que están pensadas para durar.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#contacto">Pedir presupuesto <ArrowUpRight size={18} /></a>
                <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Contactar por WhatsApp</a>
              </div>
              <div className="hero-proof">
                <span><ShieldCheck size={18} /> Más de 15 años de experiencia</span>
                <span><Clock3 size={18} /> Lunes a viernes · 8:00 a 22:00</span>
              </div>
            </div>
            <div className="hero-visual">
              <img className="hero-illustration" src="/images/hero-roof-illustration.png" alt="Ilustración de una cubierta de teja en perspectiva con canalón y bajante" width={1254} height={1254} fetchPriority="high" decoding="async" />
              <div className="hero-caption"><span>Especialistas en</span><strong>tejados y cubiertas</strong></div>
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
            <div><strong>08—22</strong><span>lunes a viernes</span></div>
            <div><strong>Guadalajara</strong><span>y provincia</span></div>
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
                <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" decoding="async" />
                <div className="project-overlay"><span>{project.category}</span><strong>{project.title}</strong><div className="project-view">Ver proyecto <ArrowUpRight size={16} /></div></div>
              </button>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-inner">
            <div className="contact-copy"><div className="section-label light">04 — Hablemos</div><h2>¿Tienes un proyecto<br />en mente?</h2><p>Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución para tu vivienda o negocio.</p><div className="contact-direct"><a href={phoneLink}><Phone size={18} /><span><small>Llámanos</small>{phoneNumber}</span></a><a href={emailLink}><Mail size={18} /><span><small>Escríbenos</small>{businessEmail}</span></a></div></div>
            <div className="contact-form-wrap">
              {submitState === 'success' ? <div className="success-message" role="status"><div className="success-icon"><Check size={27} /></div><h3>Solicitud enviada</h3><p>Gracias por escribirnos. Hemos recibido tu solicitud y te responderemos lo antes posible.</p><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowUpRight size={17} /></a></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Nombre<input required name="name" placeholder="Tu nombre" /></label><label>Teléfono<input required name="phone" type="tel" placeholder="Tu teléfono" /></label></div><label>Email<input required name="email" type="email" placeholder="tu@email.com" /></label><label>¿Qué necesitas?<textarea required name="message" rows={4} placeholder="Cuéntanos brevemente tu proyecto..." /></label><label className="privacy-consent"><input required type="checkbox" name="privacy" /><span>He leído la <a href="/privacidad/" target="_blank" rel="noreferrer">Política de privacidad</a> y entiendo cómo se utilizarán mis datos para gestionar esta consulta.</span></label><label className="form-honeypot" aria-hidden="true">No rellenar<input name="website" tabIndex={-1} autoComplete="off" /></label>{submitState === 'error' && <p className="form-feedback" role="alert">{submitMessage}</p>}<button type="submit" className="button button-yellow" disabled={submitState === 'sending'}>{submitState === 'sending' ? 'Enviando…' : 'Pedir presupuesto'} <ArrowUpRight size={18} /></button></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a href="#inicio" className="footer-brand"><img src="/images/logo-reformas-guadalajara-transparente.png" alt="" /></a>
          <p>Reformas Guadalajara<br /><span>Guadalajara y provincia</span></p>
          <div className="footer-links"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a href={phoneLink}>Llamar</a><a href={emailLink}>Email</a></div>
        </div>
        <div className="footer-legal-row">
          <nav className="footer-legal" aria-label="Información legal"><a href="/aviso-legal/">Aviso legal</a><a href="/privacidad/">Privacidad</a><a href="/cookies/">Cookies</a></nav>
          <a className="footer-credit" href="https://molvida.es/" target="_blank" rel="noreferrer">Web creada por <strong>MOLVIDA</strong> <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Reformas Guadalajara</p>
        </div>
      </footer>

      <div className="mobile-bar"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a href={phoneLink}><Phone size={18} /> Llamar</a></div>

      {activeProject !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[activeProject].title} onClick={() => setActiveProject(null)}><button className="lightbox-close" onClick={() => setActiveProject(null)} aria-label="Cerrar"><X size={25} /></button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={projects[activeProject].image} alt={projects[activeProject].alt} /><div><span>{projects[activeProject].category}</span><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p></div></div></div>}
    </div>
  );
}

export default App;
