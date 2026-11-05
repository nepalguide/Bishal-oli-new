export function renderFooter() {
  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Bishal Oli <span style="color: var(--color-gold-500);">.com</span></h3>
            <p>SEO & AI Search Optimization Expert in Nepal specializing in Semantic SEO, Topical Authority, and Entity SEO. Founder of GrowZari.</p>
            <div style="margin-top: 1.25rem;" class="badge badge-gold">
              Tarakeshwar, Kathmandu, Nepal • Global Delivery
            </div>
            <!-- Social Media Profile Links (with SVG Icons & YouTube) -->
            <div style="margin-top: 1.25rem;" class="social-links-grid">
              <a href="https://www.facebook.com/bishaloliseo" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="Facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/seo-expert-nepal-bishal-oli/" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@rambknows" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="YouTube" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/bishaloli_77/" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="Instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Instagram</span>
              </a>
              <a href="https://x.com/OliBishal95189" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="X (Twitter)" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X</span>
              </a>
              <a href="https://www.tiktok.com/@bishaloli602" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="TikTok" aria-label="TikTok">
                <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.56.03.95.53 1.87 1.34 2.37.9.56 2.07.63 3.01.18.95-.45 1.59-1.42 1.65-2.48.05-2.61.02-5.22.03-7.83 0-2.37.01-4.75.01-7.12z"/></svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">Core Services</h4>
            <div class="footer-links">
              <a href="seo-expert-nepal.html">SEO Consultant Nepal</a>
              <a href="seo-service-nepal.html">SEO Service in Nepal</a>
              <a href="google-map-pack-seo-service-nepal.html">Google Map Pack SEO</a>
              <a href="website-design-service-nepal.html">Website Design Service</a>
              <a href="work-with-me.html">SEO Audits & Strategy</a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">Navigation</h4>
            <div class="footer-links">
              <a href="about.html">About Bishal Oli</a>
              <a href="case-studies.html">Case Studies & Results</a>
              <a href="testimonials.html">Client Testimonials</a>
              <a href="blogs.html">Blogs & Resources</a>
              <a href="work-with-me.html">Work With Me</a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">Direct Contact</h4>
            <p style="font-size: 0.9375rem; margin-bottom: 0.5rem;">Have a project or strategy inquiry?</p>
            <a href="work-with-me.html" class="btn btn-gold btn-sm" style="margin-top: 0.5rem; width: 100%;">
              Request Consultation
            </a>
            <div style="margin-top: 1.25rem; font-size: 0.875rem; line-height: 1.6;">
              <strong>Phone:</strong> <a href="tel:+9779866735560" style="color: var(--color-gold-400);">+977 9866735560</a><br>
              <strong>Email:</strong> <a href="mailto:bishaloli610@gmail.com" style="color: var(--color-gold-400);">bishaloli610@gmail.com</a><br>
              <strong>Location:</strong> Tarakeshwar, Kathmandu, 44600, Nepal
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © ${new Date().getFullYear()} Bishal Oli. All rights reserved. Founder & CEO at GrowZari.
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="about.html" style="color: var(--color-slate-400);">About Entity</a>
            <a href="work-with-me.html" style="color: var(--color-slate-400);">Contact</a>
            <a href="testimonials.html" style="color: var(--color-slate-400);">Testimonials</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const footerMount = document.getElementById('footer-mount');
  if (footerMount) {
    footerMount.innerHTML = footerHtml;
  }
}

