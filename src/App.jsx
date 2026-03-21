import { useState, useEffect } from 'react'
import './App.css'

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 3C9.37 3 4 8.37 4 15c0 4.5 2.3 8.47 5.8 10.8L16 29l6.2-3.2C25.7 23.47 28 19.5 28 15c0-6.63-5.37-12-12-12z" fill="#1a6b4a"/>
              <path d="M16 8v14M10 14h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Kebi Care</span>
            <span className="logo-tagline">Home Health Services</span>
          </div>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="tel:+17047618192" className="btn-primary nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (704) 761-8192
          </a>
        </div>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <img src="/images/caregiver-elderly.jpg" alt="Kebi Care compassionate caregivers" className="hero-img" />
      </div>
      <div className="container hero-content">
        <div className="hero-text animate-fade-up">
          <div className="section-tag" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>
            Licensed Home Health &amp; Group Home Provider
          </div>
          <h1 className="hero-title">
            Compassionate Care<br />
            <span className="hero-title-accent">For Every Stage of Life</span>
          </h1>
          <p className="hero-subtitle">
            Kebi Care provides professional, person-centered home health and group home services 
            for at-risk youth, adults with IDD, and seniors needing assisted living support — 
            all delivered with dignity, respect, and compassion.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-accent hero-btn">
              Get Care Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary hero-btn-outline">
              Our Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Care Programs</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-num">NC</span>
              <span className="stat-label">Licensed Provider</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#services">
          <div className="scroll-indicator">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'At-Risk Youth Care',
      subtitle: 'Under 18 Residential Support',
      description: 'We provide safe, structured, and nurturing residential environments for at-risk youth under 18. Our trained staff offer behavioral support, life skills development, and therapeutic programming to help young people thrive.',
      features: ['Behavioral Support', 'Life Skills Training', 'Educational Assistance', 'Therapeutic Programming'],
      color: '#1a6b4a',
      bg: 'rgba(26, 107, 74, 0.06)',
      img: '/images/youth-counselor.jpg',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Assisted Living',
      subtitle: 'Senior Residential Care',
      description: 'Our assisted living services provide seniors with the support they need while preserving their independence and dignity. We offer personalized care plans, daily assistance, and a warm, home-like environment.',
      features: ['Daily Living Assistance', 'Medication Management', 'Nutritious Meals', 'Social Activities'],
      color: '#2563eb',
      bg: 'rgba(37, 99, 235, 0.06)',
      img: '/images/assisted-living.jpg',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
          <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>
        </svg>
      ),
      title: 'IDD Adult Care',
      subtitle: 'Intellectual & Developmental Disabilities',
      description: 'We specialize in person-centered care for adults with Intellectual and Developmental Disabilities (IDD). Our compassionate team supports independence, community integration, and quality of life for every individual.',
      features: ['Person-Centered Plans', 'Community Integration', 'Skill Development', 'Health Monitoring'],
      color: '#7c3aed',
      bg: 'rgba(124, 58, 237, 0.06)',
      img: '/images/idd-care.jpg',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      ),
      title: 'IDD Youth Care',
      subtitle: 'Under 18 with IDD',
      description: 'For children and adolescents under 18 with Intellectual and Developmental Disabilities, we offer specialized residential care that supports growth, development, and family engagement in a safe, structured setting.',
      features: ['Specialized Programming', 'Family Engagement', 'Educational Support', 'Behavioral Therapy'],
      color: '#d97706',
      bg: 'rgba(217, 119, 6, 0.06)',
      img: '/images/at-risk-youth.webp',
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">Our Programs</div>
          <h2 className="section-title">Specialized Care Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of home health and group home services tailored to meet 
            the unique needs of every individual we serve.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card" style={{'--card-color': service.color, '--card-bg': service.bg}}>
              <div className="service-card-img">
                <img src={service.img} alt={service.title} />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <div className="service-icon" style={{color: service.color, background: service.bg}}>
                  {service.icon}
                </div>
                <div className="service-badge">{service.subtitle}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-cta" style={{color: service.color}}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const values = [
    { icon: '🤝', title: 'Person-Centered', desc: 'Every care plan is tailored to the individual\'s unique needs, goals, and preferences.' },
    { icon: '🏠', title: 'Home-Like Environment', desc: 'We create warm, safe, and nurturing spaces where residents feel truly at home.' },
    { icon: '📋', title: 'Licensed & Compliant', desc: 'Fully licensed in North Carolina with NPI #1295503464, meeting all state and federal standards.' },
    { icon: '❤️', title: 'Compassionate Staff', desc: 'Our team is trained, certified, and deeply committed to the well-being of every resident.' },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <img src="/images/caregiver-elderly.jpg" alt="Kebi Care team providing compassionate care" />
            </div>
            <div className="about-img-accent">
              <img src="/images/idd-care.jpg" alt="IDD care services" />
            </div>
            <div className="about-badge">
              <div className="badge-icon">✓</div>
              <div>
                <div className="badge-title">NC Licensed</div>
                <div className="badge-sub">NPI #1295503464</div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-tag">About Kebi Care</div>
            <h2 className="section-title">Dedicated to Transforming Lives Through Quality Care</h2>
            <p className="about-text">
              Kebi Care is a licensed home health and group home provider based in Raleigh, North Carolina. 
              We are committed to delivering exceptional, person-centered care to some of the most vulnerable 
              members of our community — at-risk youth, seniors needing assisted living, and individuals 
              with Intellectual and Developmental Disabilities (IDD).
            </p>
            <p className="about-text">
              Our mission is simple: to provide a safe, supportive, and empowering environment where every 
              individual can grow, thrive, and live with dignity. We believe that quality care is not just 
              a service — it is a calling.
            </p>

            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <h4 className="value-title">{v.title}</h4>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-creds">
              <div className="cred-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a6b4a" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Licensed by the State of North Carolina</span>
              </div>
              <div className="cred-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a6b4a" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>24/7 Care &amp; Support Available</span>
              </div>
              <div className="cred-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a6b4a" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <span>Trained &amp; Certified Care Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHO WE SERVE ─────────────────────────────────────────────────────────────
function WhoWeServe() {
  const populations = [
    {
      title: 'At-Risk Youth (Under 18)',
      icon: '👦',
      color: '#1a6b4a',
      items: [
        'Youth in foster care or transitional housing',
        'Adolescents with behavioral health challenges',
        'Youth involved in the juvenile justice system',
        'Children needing structured residential support',
      ],
    },
    {
      title: 'Seniors & Assisted Living',
      icon: '👴',
      color: '#2563eb',
      items: [
        'Seniors requiring daily living assistance',
        'Elderly individuals with mobility limitations',
        'Seniors needing medication management',
        'Those seeking a safe, home-like community',
      ],
    },
    {
      title: 'Adults with IDD',
      icon: '🧑',
      color: '#7c3aed',
      items: [
        'Adults with intellectual disabilities',
        'Individuals with developmental disabilities',
        'Those transitioning from institutional care',
        'Adults seeking community integration support',
      ],
    },
    {
      title: 'Youth with IDD (Under 18)',
      icon: '👧',
      color: '#d97706',
      items: [
        'Children with intellectual disabilities',
        'Youth with autism spectrum disorder',
        'Adolescents with developmental delays',
        'Young people needing specialized residential care',
      ],
    },
  ]

  return (
    <section id="who-we-serve" className="who-section">
      <div className="who-bg"></div>
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">Who We Serve</div>
          <h2 className="section-title">Care for Every Individual</h2>
          <p className="section-subtitle">
            We proudly serve diverse populations across North Carolina, providing specialized 
            care programs designed to meet each group's unique needs.
          </p>
        </div>

        <div className="who-grid">
          {populations.map((pop, i) => (
            <div key={i} className="who-card" style={{'--who-color': pop.color}}>
              <div className="who-icon">{pop.icon}</div>
              <h3 className="who-title">{pop.title}</h3>
              <ul className="who-list">
                {pop.items.map((item, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="who-cta">
                Get Started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Maria T.',
      role: 'Family Member of Resident',
      text: 'Kebi Care has been an absolute blessing for our family. The staff treats my mother with such warmth and respect. We finally have peace of mind knowing she is in good hands.',
      stars: 5,
    },
    {
      name: 'James R.',
      role: 'Social Worker',
      text: 'I regularly refer youth in my caseload to Kebi Care. Their structured environment and compassionate approach have made a real difference in the lives of the young people they serve.',
      stars: 5,
    },
    {
      name: 'Denise M.',
      role: 'Parent of IDD Resident',
      text: 'Finding quality IDD care for our son was challenging until we found Kebi Care. The person-centered approach and community integration programs have helped him grow in ways we never imagined.',
      stars: 5,
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">What Families Are Saying</h2>
          <p className="section-subtitle">
            The trust of the families and communities we serve is our greatest achievement.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name[0]}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await new Promise(r => setTimeout(r, 1000))
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag">Contact Us</div>
            <h2 className="section-title" style={{color: 'white'}}>Ready to Get Started?</h2>
            <p style={{color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: '1.7'}}>
              Reach out to our team today to learn more about our care programs or to begin 
              the enrollment process. We are here to help you find the right care solution.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+17047618192" className="contact-detail-value">(704) 761-8192</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Address</div>
                  <div className="contact-detail-value">4030 Wake Forest Rd Ste 349<br />Raleigh, NC 27609</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">NPI Number</div>
                  <div className="contact-detail-value">1295503464</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Hours</div>
                  <div className="contact-detail-value">24/7 — We Are Always Here</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3 className="form-title">Request Information</h3>
            <p className="form-subtitle">Fill out the form below and a member of our team will contact you within 24 hours.</p>

            {status === 'success' && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Thank you! We will be in touch with you shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                There was an error. Please call us directly at (704) 761-8192.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Service of Interest *</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  <option value="at-risk-youth">At-Risk Youth Care (Under 18)</option>
                  <option value="assisted-living">Assisted Living</option>
                  <option value="idd-adult">IDD Adult Care</option>
                  <option value="idd-youth">IDD Youth Care (Under 18)</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your care needs..."></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C9.37 3 4 8.37 4 15c0 4.5 2.3 8.47 5.8 10.8L16 29l6.2-3.2C25.7 23.47 28 19.5 28 15c0-6.63-5.37-12-12-12z" fill="#2d9e6e"/>
                <path d="M16 8v14M10 14h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span>Kebi Care</span>
            </div>
            <p className="footer-desc">
              Compassionate home health and group home services for at-risk youth, adults with IDD, 
              and seniors across North Carolina.
            </p>
            <div className="footer-contact">
              <a href="tel:+17047618192">(704) 761-8192</a>
              <span>4030 Wake Forest Rd Ste 349, Raleigh, NC 27609</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">At-Risk Youth Care</a></li>
              <li><a href="#services">Assisted Living</a></li>
              <li><a href="#services">IDD Adult Care</a></li>
              <li><a href="#services">IDD Youth Care</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#who-we-serve">Who We Serve</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Information</h4>
            <ul>
              <li><span>NPI: 1295503464</span></li>
              <li><span>Licensed in NC</span></li>
              <li><span>24/7 Support</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kebi Care. All rights reserved.</p>
          <p>Licensed Home Health &amp; Group Home Provider | Raleigh, NC</p>
        </div>
      </div>
    </footer>
  )
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Experience Compassionate Care?</h2>
            <p>Contact Kebi Care today. Our team is ready to help you find the right care solution for your loved one.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+17047618192" className="btn-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call (704) 761-8192
            </a>
            <a href="#contact" className="btn-secondary" style={{borderColor: 'white', color: 'white'}}>
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhoWeServe />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  )
}
