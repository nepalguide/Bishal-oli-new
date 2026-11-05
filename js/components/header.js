export function renderHeader(activePage = 'home') {
  const navItems = [
    { id: 'home', label: 'Home', href: 'index.html' },
    {
      id: 'about',
      label: 'About Me',
      href: 'about.html',
      children: [
        { id: 'seo-expert-nepal', label: 'SEO Expert in Nepal', href: 'seo-expert-nepal.html' },
        { id: 'ai-seo-expert-nepal', label: 'AI SEO Expert in Nepal', href: 'ai-seo-expert-nepal.html' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      href: 'seo-service-nepal.html',
      children: [
        { id: 'ai-seo-nepal', label: 'AI SEO & GEO Service', href: 'ai-seo-expert-nepal.html' },
        { id: 'seo-service-nepal', label: 'SEO Service in Nepal', href: 'seo-service-nepal.html' },
        { id: 'map-pack-seo-nepal', label: 'Google Map Pack SEO Service in Nepal', href: 'google-map-pack-seo-service-nepal.html' },
        { id: 'web-design-nepal', label: 'Website Design Service in Nepal', href: 'website-design-service-nepal.html' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      href: 'blogs.html',
      children: [
        { id: 'blogs', label: 'Blogs', href: 'blogs.html' },
        { id: 'case-studies', label: 'Case Studies', href: 'case-studies.html' },
        { id: 'checklist', label: 'Checklist', href: 'checklist.html' },
        { id: 'experiment', label: 'Experiment', href: 'experiments.html' },
        { id: 'glossaries', label: 'Glossaries', href: 'glossary.html' },
        { id: 'news', label: 'News', href: 'news.html' }
      ]
    },
    { id: 'testimonials', label: 'Testimonial', href: 'testimonials.html' },
    { id: 'contact', label: 'Contact Us', href: 'work-with-me.html' }
  ];

  const headerHtml = `
    <header class="header">
      <div class="container header-container">
        <a href="index.html" class="brand-logo">
          BISHAL OLI <span class="highlight">•</span>
        </a>

        <nav class="nav-menu" id="nav-menu">
          ${navItems.map(item => {
            const hasChildren = item.children && item.children.length > 0;
            const isParentActive = activePage === item.id || (item.children && item.children.some(c => c.id === activePage));

            if (!hasChildren) {
              return `
                <a href="${item.href}" class="nav-link ${activePage === item.id ? 'active' : ''}">
                  ${item.label}
                </a>
              `;
            }

            return `
              <div class="nav-dropdown">
                <a href="${item.href}" class="nav-link dropdown-toggle ${isParentActive ? 'active' : ''}">
                  <span>${item.label}</span>
                  <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div class="dropdown-menu">
                  ${item.children.map(child => `
                    <a href="${child.href}" class="dropdown-item ${activePage === child.id ? 'active' : ''}">
                      <span class="dropdown-item-title">${child.label}</span>
                      ${child.subtitle ? `<span class="dropdown-item-sub">${child.subtitle}</span>` : ''}
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </nav>

        <div class="nav-actions">
          <a href="work-with-me.html" class="btn btn-primary btn-sm btn-header-cta">
            Schedule a Free SEO Consultation
          </a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;

  const headerMount = document.getElementById('header-mount');
  if (headerMount) {
    headerMount.innerHTML = headerHtml;

    // Mobile main menu toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }

    // Mobile dropdown chevron accordions
    const dropdownChevrons = headerMount.querySelectorAll('.dropdown-chevron');
    dropdownChevrons.forEach(chevron => {
      chevron.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          e.stopPropagation();
          const parent = chevron.closest('.nav-dropdown');
          if (parent) {
            parent.classList.toggle('active');
          }
        }
      });
    });
  }
}
