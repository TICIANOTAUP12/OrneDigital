import { useEffect, useState, type ReactNode } from "react";

const WA_BASE = "https://wa.me/5492645720932";
const IG_HANDLE = "ornecerderaa.digital";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}/`;

function waLink(message: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

type Service = {
  id: string;
  title: string;
  blurb: string;
  includes: string[];
  note?: string;
};

const SERVICES: Service[] = [
  {
    id: "cm",
    title: "Community Manager (mensual)",
    blurb:
      "Gestión estratégica, constante y profesional de la presencia digital de la marca.",
    includes: [
      "Optimización estética del feed",
      "Ideas de contenido alineadas a la marca",
      "Planificación IG / TikTok",
      "Jornadas de contenido",
      "Historias destacadas",
      "Posteos, reels y edición",
    ],
  },
  {
    id: "estrategia",
    title: "Estrategia Marketing inicial",
    blurb:
      "Análisis para definir el rumbo del contenido y las acciones digitales.",
    includes: [
      "Definición de públicos",
      "Buyer persona",
      "Análisis de la competencia",
      "Análisis FODA",
      "Ideas de contenido estratégicas",
    ],
    note: "Incluida sin costo extra si contratás Community Manager.",
  },
  {
    id: "ads",
    title: "Meta Ads",
    blurb:
      "Configuración y gestión de campañas. Encargada: Denise Yafar.",
    includes: [
      "Configuración de campañas",
      "Segmentación de públicos",
      "Optimización de anuncios",
      "Análisis de resultados",
    ],
    note: "Recomendamos sumarlo después del primer mes de CM.",
  },
  {
    id: "contenido",
    title: "Creación de contenido (presencial)",
    blurb:
      "Producción audiovisual para alimentar las redes durante el mes.",
    includes: [
      "Valor por hora de creación de contenido",
      "Se realiza de forma presencial",
      "De 1 hora de grabación: aprox. 4 videos",
      "Independiente del servicio de Community Manager",
    ],
  },
  {
    id: "diseno",
    title: "Diseño gráfico",
    blurb: "Piezas para redes e impresión.",
    includes: [
      "Flyers",
      "Tarjetas",
      "Catálogos",
      "Piezas para feed, stories y más",
    ],
  },
  {
    id: "web",
    title: "Página web prediseñada",
    blurb: "Armado en Empretienda / Tienda Nube.",
    includes: [
      "Carga de productos",
      "Dominio propio incluido",
    ],
  },
];

type PdfProduct = {
  id: string;
  title: string;
  blurb: string;
  category: string;
  priceLabel: string;
  coverSrc: string;
};

const PDF_PRODUCTS: PdfProduct[] = [
  {
    id: "hooks",
    title: "Pack de 100 hooks para reel",
    blurb: "Aperturas listas para frenar el scroll y empezar fuerte.",
    category: "Recursos PDF",
    priceLabel: "Precio a confirmar",
    coverSrc: "/pdf/hooks-cover.jpg",
  },
  {
    id: "copys",
    title: "Copys estratégicos para reels y publicaciones",
    blurb: "Aprendé a escribir textos que venden sin sonar forzados.",
    category: "Recursos PDF",
    priceLabel: "Precio a confirmar",
    coverSrc: "/pdf/copys-cover.jpg",
  },
  {
    id: "ctas",
    title: "Pack de CTAs que convierten",
    blurb: "Llamados a la acción claros para stories, reels y feed.",
    category: "Recursos PDF",
    priceLabel: "Precio a confirmar",
    coverSrc: "/pdf/ctas-cover.jpg",
  },
  {
    id: "ideas",
    title: "X ideas de contenido para tu negocio",
    blurb: "Ideas accionables para no quedarte sin qué publicar.",
    category: "Recursos PDF",
    priceLabel: "Precio a confirmar",
    coverSrc: "/pdf/ideas-cover.jpg",
  },
];

type OfferCard = {
  id: string;
  title: string;
  blurb: string;
  cta: string;
  href: string;
  isExternal: boolean;
};

type Testimonial = {
  id: string;
  src: string;
  alt: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    src: "/testimonios/wa-1.jpg",
    alt: "Captura de WhatsApp — testimonio 1",
  },
  {
    id: "t2",
    src: "/testimonios/wa-2.jpg",
    alt: "Captura de WhatsApp — testimonio 2",
  },
  {
    id: "t3",
    src: "/testimonios/wa-3.jpg",
    alt: "Captura de WhatsApp — testimonio 3",
  },
  {
    id: "t4",
    src: "/testimonios/wa-4.jpg",
    alt: "Captura de WhatsApp — testimonio 4",
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}

function AssetSlot({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`asset-fallback ${className}`.trim()} role="img" aria-label={alt}>
        <span>{fallback}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

export default function App() {
  const [toast, setToast] = useState<string | null>(null);
  const [purchaseDone, setPurchaseDone] = useState<string | null>(null);
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  }

  function handleBuy(product: PdfProduct) {
    setPurchaseDone(product.title);
    showToast("Compra simulada · en prod el PDF llega a tu mail");
  }

  function closeThanks() {
    setPurchaseDone(null);
  }

  function toggleService(id: string) {
    setOpenServiceId((current) => (current === id ? null : id));
  }

  const contactHref = waLink(
    "Hola Orne! Quiero contactarte desde la web de Orne Digital.",
  );
  const hireHref = waLink(
    "Hola Orne! Quiero contratar servicios de Orne Digital.",
  );
  const meetingHref = waLink(
    "Hola Orne! Quiero agendar una reunión para hablar de mi marca / servicio.",
  );
  const cmHref = waLink(
    "Hola Orne! Soy Community Manager / freelancer y quiero una asesoría.",
  );

  const cmOffers: OfferCard[] = [
    {
      id: "asesoria",
      title: "¿Sentís que tu servicio está estancado?",
      blurb:
        "Una conversación 1:1 para destrabar dudas, ordenar tu oferta y dar el siguiente paso como CM o freelancer.",
      cta: "Reservar conversación",
      href: cmHref,
      isExternal: true,
    },
    {
      id: "guias",
      title: "Kit de recursos PDF",
      blurb:
        "Hooks, copys, CTAs e ideas de contenido para dejar de improvisar y trabajar con más claridad.",
      cta: "Ver recursos",
      href: "#tienda",
      isExternal: false,
    },
  ];

  const bannerItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top">
          Orne Digital
        </a>
        <nav className="nav" aria-label="Secciones">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#tienda">Recursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="cta-top" href={contactHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <section className="hero" id="top" aria-label="Inicio">
        <div className="hero-copy">
          <h1 className="brand-hero">Hola, soy Orne</h1>
          <p className="lede">
            Impulso marcas y acompaño Community Managers con estrategia,
            claridad y visión profesional.
          </p>
          <p className="hero-intro">
            Estos son mis servicios y recursos para marcas y Community Managers
            que quieren crecer de verdad.
          </p>
          <div className="cta-row">
            <a className="cta-primary" href={hireHref} target="_blank" rel="noreferrer">
              Contratar
            </a>
            <a className="cta-ghost" href="#tienda">
              Ver recursos
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/orne-perfil.png" alt="Orne — Community Manager" />
        </div>
      </section>

      <section className="about" id="sobre-mi">
        <Reveal className="about-copy">
          <h2>Sobre mí</h2>
          <p>
            Soy Community Manager con más de 4 años de experiencia en redes y
            crecimiento de marcas.
          </p>
          <p>
            Mi trabajo va más allá de publicar: construyo confianza, comunidad
            y una estrategia clara para que la marca se vea y se sienta
            profesional.
          </p>
          <p>
            Armé este espacio para que puedas acceder a mis servicios y
            recursos, ya sea que tengas un negocio o estés empezando tu camino
            como Community Manager.
          </p>
          <div className="cta-row">
            <a className="cta-primary" href={IG_URL} target="_blank" rel="noreferrer">
              Ver portfolio
            </a>
            <a className="cta-ghost" href="#contacto">
              Contacto
            </a>
          </div>
        </Reveal>
      </section>

      <section className="services" id="servicios">
        <Reveal className="section-head">
          <h2>Servicios</h2>
          <p className="section-lede">
            Tocá cada caja para ver qué incluye. “Contratar servicio” abre
            WhatsApp.
          </p>
        </Reveal>
        <ul className="service-list">
          {SERVICES.map((service, index) => {
            const isOpen = openServiceId === service.id;
            const panelId = `service-panel-${service.id}`;

            return (
              <li
                key={service.id}
                className={`service-item reveal${isOpen ? " is-open" : ""}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <button
                  type="button"
                  className="service-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleService(service.id)}
                >
                  <h3>{service.title}</h3>
                  <span className="service-chevron" aria-hidden="true" />
                </button>
                <div className="service-panel" id={panelId} hidden={!isOpen}>
                  <div className="service-panel-inner">
                    <p>{service.blurb}</p>
                    <ul className="service-includes">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {service.note ? (
                      <p className="service-note">{service.note}</p>
                    ) : null}
                    <p className="service-price">Consultar por WhatsApp</p>
                    <a
                      className="cta-service"
                      href={waLink(
                        `Hola Orne! Quiero contratar: ${service.title}`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contratar servicio
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Reveal className="mid-cta">
          <a className="cta-primary" href={meetingHref} target="_blank" rel="noreferrer">
            Agendar una reunión
          </a>
        </Reveal>
      </section>

      <section className="cm-offers" id="asesorias">
        <Reveal className="section-head">
          <h2>Servicios para Community Managers</h2>
          <p className="section-lede">
            Para CMs y freelancers que quieren ordenar su trabajo y crecer con
            más estrategia.
          </p>
        </Reveal>
        <ul className="offer-grid">
          {cmOffers.map((offer, index) => (
            <li
              key={offer.id}
              className="offer-card reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3>{offer.title}</h3>
              <p>{offer.blurb}</p>
              <a
                className="cta-service"
                href={offer.href}
                {...(offer.isExternal
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {offer.cta}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials" id="testimonios">
        <Reveal className="section-head">
          <h2>Testimonios</h2>
          <p className="section-lede">
            Capturas reales de chats de WhatsApp.
          </p>
        </Reveal>
        <div className="chat-banner" aria-label="Carrusel de testimonios">
          <div className="chat-track">
            {bannerItems.map((item, index) => (
              <figure key={`${item.id}-${index}`} className="testimonial-slide">
                <AssetSlot
                  src={item.src}
                  alt={item.alt}
                  fallback="Captura WhatsApp"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shop" id="tienda">
        <Reveal className="section-head">
          <h2>Guías prácticas</h2>
          <p className="section-lede">
            Recursos para avanzar más rápido, con claridad y estructura. Compra
            simulada: en producción, checkout → PDF al mail.
          </p>
        </Reveal>
        <ul className="product-grid">
          {PDF_PRODUCTS.map((product, index) => (
            <li
              key={product.id}
              className="product reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="product-cover" data-pdf-cover={product.id}>
                <AssetSlot
                  src={product.coverSrc}
                  alt={`Portada PDF — ${product.title}`}
                  fallback="Portada PDF"
                  className="product-cover-img"
                />
              </div>
              <p className="product-kicker">{product.category}</p>
              <h3>{product.title}</h3>
              <p>{product.blurb}</p>
              <p className="product-price">{product.priceLabel}</p>
              <button
                type="button"
                className="cta-buy"
                onClick={() => handleBuy(product)}
              >
                Comprar
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-final" id="siguiente-paso">
        <Reveal className="cta-final-inner">
          <p className="socials-kicker">Siguiente paso</p>
          <h2>¿Lista para dar el siguiente paso?</h2>
          <p className="section-lede">
            Ya sea que tengas una marca o quieras crecer como Community Manager,
            tengo una propuesta para vos.
          </p>
          <a className="cta-primary" href={hireHref} target="_blank" rel="noreferrer">
            Hablemos
          </a>
        </Reveal>
      </section>

      <section className="contact" id="contacto">
        <Reveal className="contact-card">
          <div className="contact-copy">
            <h2>Hablemos por WhatsApp</h2>
            <p>
              Contame tu marca y qué necesitás. Te respondo con claridad para
              ver el mejor siguiente paso.
            </p>
            <a
              className="cta-primary cta-contact"
              href={contactHref}
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <section className="socials" id="redes" aria-label="Redes sociales">
        <Reveal className="socials-inner">
          <p className="socials-kicker">Instagram</p>
          <h2>Seguime en redes</h2>
          <p className="section-lede">
            Contenido, detrás de escena y análisis de marcas en @{IG_HANDLE}.
          </p>
          <a className="cta-ghost-ink" href={IG_URL} target="_blank" rel="noreferrer">
            Seguir en Instagram
          </a>
        </Reveal>
      </section>

      <footer className="footer">
        <p className="footer-brand">Orne Digital</p>
        <p>Community · estrategia · recursos para CM</p>
        <a href={IG_URL} target="_blank" rel="noreferrer">
          @{IG_HANDLE}
        </a>
      </footer>

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}

      {purchaseDone ? (
        <div className="thanks-overlay" role="dialog" aria-modal="true">
          <div className="thanks-panel">
            <h2>¡Gracias!</h2>
            <p>
              Compra simulada de <strong>{purchaseDone}</strong>.
            </p>
            <p className="thanks-note">
              En producción recibirías el PDF en tu mail luego del checkout.
            </p>
            <button type="button" className="cta-primary" onClick={closeThanks}>
              Seguir explorando
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
