// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.background = 'rgba(30, 61, 42, 0.96)';
    } else {
        navbar.style.background = 'rgba(46, 90, 60, 0.92)';
    }
});

// ===== BILINGUAL DICTIONARY (actualizado) =====
const translations = {
    en: {
        // Nav
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-advantages': 'Advantages',
        'nav-quote': 'Get a quote',
        // Hero
        'hero-tagline': 'Heavy Equipment · Land Preparation',
        'hero-title1': 'Precision',
        'hero-title2': 'earthwork',
        'hero-title3': 'and machinery',
        'hero-description': 'Professional land clearing, grading, excavation and heavy equipment rental for construction and agricultural projects. <br /><strong>Asheboro, NC</strong>',
        'hero-btn-quote': 'Request a quote',
        'hero-btn-whatsapp': 'WhatsApp',
        'media-placeholder': 'Video or image of our fleet',
        // Services
        'services-title': 'Our services',
        'services-subtitle': 'Land preparation and heavy machinery solutions for any scale.',
        'service1-title': 'Land Clearing',
        'service1-desc': 'Tree removal, stump grinding and brush clearing for site readiness.',
        'service2-title': 'Grading & Excavation',
        'service2-desc': 'Precision leveling, trenching and earthmoving for foundations and roads.',
        'service3-title': 'Material Hauling',
        'service3-desc': 'Transport of fill dirt, gravel, sand and construction debris.',
        'service4-title': 'Equipment Rental',
        'service4-desc': 'Excavators, bulldozers, skid steers and more – daily or weekly rates.',
        // About
        'about-title': '<span class="highlight">Building</span> strong · <span class="highlight">growing</span> together',
        'about-p1': 'At <strong>Ground Projects LLC</strong> we specialize in heavy equipment operations and land transformation. With over a decade of experience in Asheboro and surrounding areas, we provide reliable, efficient and safe earthwork services for residential, commercial and agricultural clients.',
        'about-p2': 'Our fleet includes modern excavators, bulldozers, graders and haul trucks, operated by certified professionals. We also offer flexible rental options for contractors and developers.',
        'stat1': 'Projects completed',
        'stat2': 'On‑time delivery',
        'stat3': 'Customer rating',
        'about-image-placeholder': 'Image of our equipment',
        // Advantages
        'advantages-title': 'Why Ground Projects?',
        'advantages-subtitle': 'The right equipment, the right team, the right results.',
        'benefit1-title': 'Fast & Reliable',
        'benefit1-desc': 'We mobilize quickly and complete projects on schedule, reducing your downtime.',
        'benefit2-title': 'Cost‑Effective',
        'benefit2-desc': 'Competitive pricing and rental options that fit your budget without compromising quality.',
        'benefit3-title': 'Safe & Insured',
        'benefit3-desc': 'Fully licensed, insured and OSHA‑compliant operators for your peace of mind.',
        // Contact
        'contact-title': "Let's discuss your land project",
        'contact-p1': '<strong>Email is our primary channel</strong> – we reply within 24 hours. You can also reach us by phone or WhatsApp for urgent inquiries.',
        'contact-priority': '(priority response)',
        'contact-badge': 'Free estimate · On‑site evaluation',
        // Form
        'form-name': 'Full name *',
        'form-email': 'Email *',
        'form-phone': 'Phone',
        'form-service': 'Service needed *',
        'form-select-default': 'Select a service',
        'form-service-other': 'Other / Multiple',
        'form-message': 'Message',
        'form-submit': 'Send request',
        'form-footer': 'Your data is secure',
        // Placeholders
        'placeholder-name': 'Your name',
        'placeholder-email': 'you@example.com',
        'placeholder-phone': '(336) 628-2096',
        'placeholder-message': 'Tell us about your project...',
        // Confirm
        'confirm-message': 'Thank you {name}! Your request has been received. We will reply by email to {email} within 24 hours.\n\n(This is a demo – in production, data would be sent to your CRM.)',
    },
    es: {
        // Nav
        'nav-services': 'Servicios',
        'nav-about': 'Nosotros',
        'nav-advantages': 'Ventajas',
        'nav-quote': 'Cotiza ahora',
        // Hero
        'hero-tagline': 'Equipo pesado · Preparación de terrenos',
        'hero-title1': 'Movimiento',
        'hero-title2': 'de tierra',
        'hero-title3': 'y maquinaria',
        'hero-description': 'Desmonte, nivelación, excavación y alquiler de maquinaria pesada para proyectos de construcción y agrícolas. <br /><strong>Asheboro, NC</strong>',
        'hero-btn-quote': 'Solicitar cotización',
        'hero-btn-whatsapp': 'WhatsApp',
        'media-placeholder': 'Video o imagen de nuestra flota',
        // Services
        'services-title': 'Nuestros servicios',
        'services-subtitle': 'Preparación de terrenos y soluciones en maquinaria pesada para cualquier escala.',
        'service1-title': 'Desmonte',
        'service1-desc': 'Eliminación de árboles, trituración de tocones y limpieza de maleza para preparar el sitio.',
        'service2-title': 'Nivelación y Excavación',
        'service2-desc': 'Nivelación de precisión, zanjeo y movimiento de tierras para cimientos y caminos.',
        'service3-title': 'Acarreo de Materiales',
        'service3-desc': 'Transporte de tierra, grava, arena y escombros de construcción.',
        'service4-title': 'Alquiler de Equipo',
        'service4-desc': 'Excavadoras, buldóceres, minicargadores y más – tarifas diarias o semanales.',
        // About
        'about-title': 'Construyendo <span class="highlight">fuerte</span> · creciendo <span class="highlight">juntos</span>',
        'about-p1': 'En <strong>Ground Projects LLC</strong> nos especializamos en operaciones con equipo pesado y transformación de terrenos. Con más de una década de experiencia en Asheboro y alrededores, ofrecemos servicios confiables, eficientes y seguros para clientes residenciales, comerciales y agrícolas.',
        'about-p2': 'Nuestra flota incluye excavadoras modernas, buldóceres, motoniveladoras y camiones de acarreo, operados por profesionales certificados. También ofrecemos opciones flexibles de alquiler para contratistas y desarrolladores.',
        'stat1': 'Proyectos completados',
        'stat2': 'Entrega a tiempo',
        'stat3': 'Calificación del cliente',
        'about-image-placeholder': 'Imagen de nuestro equipo',
        // Advantages
        'advantages-title': '¿Por qué Ground Projects?',
        'advantages-subtitle': 'El equipo adecuado, el equipo humano adecuado, los resultados adecuados.',
        'benefit1-title': 'Rápido y Confiable',
        'benefit1-desc': 'Movilizamos rápidamente y completamos los proyectos a tiempo, reduciendo tus tiempos de inactividad.',
        'benefit2-title': 'Costo‑Efectivo',
        'benefit2-desc': 'Precios competitivos y opciones de alquiler que se ajustan a tu presupuesto sin comprometer la calidad.',
        'benefit3-title': 'Seguro y Asegurado',
        'benefit3-desc': 'Operadores con licencia, asegurados y cumpliendo con OSHA para tu tranquilidad.',
        // Contact
        'contact-title': 'Hablemos de tu proyecto de tierra',
        'contact-p1': '<strong>El correo electrónico es nuestro canal principal</strong> – respondemos en 24 horas. También puedes contactarnos por teléfono o WhatsApp para consultas urgentes.',
        'contact-priority': '(respuesta prioritaria)',
        'contact-badge': 'Presupuesto gratuito · Evaluación en sitio',
        // Form
        'form-name': 'Nombre completo *',
        'form-email': 'Correo electrónico *',
        'form-phone': 'Teléfono',
        'form-service': 'Servicio necesario *',
        'form-select-default': 'Selecciona un servicio',
        'form-service-other': 'Otro / Varios',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar solicitud',
        'form-footer': 'Tus datos están seguros',
        // Placeholders
        'placeholder-name': 'Tu nombre',
        'placeholder-email': 'tú@ejemplo.com',
        'placeholder-phone': '(336) 628-2096',
        'placeholder-message': 'Cuéntanos sobre tu proyecto...',
        // Confirm
        'confirm-message': 'Gracias {name}! Hemos recibido tu solicitud. Te responderemos por email a {email} en menos de 24 horas.\n\n(Esta es una demo – en producción los datos se enviarían a tu CRM.)',
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (t[key] !== undefined) {
            if (el.innerHTML.includes('<')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    const placeholders = {
        'nombre': 'placeholder-name',
        'email': 'placeholder-email',
        'telefono': 'placeholder-phone',
        'mensaje': 'placeholder-message'
    };
    for (const [id, key] of Object.entries(placeholders)) {
        const input = document.getElementById(id);
        if (input && t[key]) {
            input.placeholder = t[key];
        }
    }

    document.documentElement.lang = lang;
    document.getElementById('langLabel').textContent = lang.toUpperCase();
    localStorage.setItem('preferredLang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
});

const savedLang = localStorage.getItem('preferredLang');
const initialLang = (savedLang === 'en' || savedLang === 'es') ? savedLang : 'en';
setLanguage(initialLang);

// ===== FORMULARIO =====
const form = document.getElementById('leadForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        const msg = currentLang === 'en'
            ? 'Please fill in at least name and email (required fields).'
            : 'Por favor, completa al menos nombre y email (campos obligatorios).';
        alert(msg);
        return;
    }

    const t = translations[currentLang];
    const confirmMsg = t['confirm-message']
        .replace(/{name}/g, nombre)
        .replace(/{email}/g, email);
    alert(confirmMsg);
    form.reset();
    setLanguage(currentLang);
});
