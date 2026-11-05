import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

export function initApp(activePage = 'home') {
  renderHeader(activePage);
  renderFooter();

  // Video Lightbox Modal Logic
  initVideoModal();

  // Accordion Logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      const parentContainer = item.parentElement;
      if (parentContainer) {
        parentContainer.querySelectorAll('.accordion-item').forEach(otherItem => {
          otherItem.classList.remove('active');
        });
      }

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Horizontal System Tabs Interaction
  const tabBtns = document.querySelectorAll('.horizontal-tab-btn');
  const track = document.getElementById('horizontal-track');

  if (tabBtns.length > 0 && track) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const stepTarget = btn.getAttribute('data-step');
        const targetCard = document.getElementById(`step-card-${stepTarget}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
      });
    });
  }

  // Google Review Read More / Show Less Toggle
  const readMoreBtns = document.querySelectorAll('.google-read-more');
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.google-review-card');
      if (!card) return;
      const textEl = card.querySelector('.google-review-text');
      if (!textEl) return;

      const isExpanded = textEl.classList.contains('expanded');
      if (isExpanded) {
        textEl.classList.remove('expanded');
        btn.textContent = 'Read more';
      } else {
        textEl.classList.add('expanded');
        btn.textContent = 'Show less';
      }
    });
  });

  // Lead Form Handling
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting...';
        
        setTimeout(() => {
          const successAlert = document.getElementById('form-success');
          if (successAlert) {
            successAlert.style.display = 'block';
            leadForm.reset();
          } else {
            alert('Thank you! Your SEO consultation request has been submitted successfully.');
            leadForm.reset();
          }
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }, 1200);
      }
    });
  }

  // AI Readiness Self-Check Quiz Interaction
  initReadinessQuiz();

  // Trust Strip Animated Counters
  initTrustCounters();
}

function initReadinessQuiz() {
  const quiz = document.querySelector('.readiness-quiz-container');
  if (!quiz) return;

  const cards = quiz.querySelectorAll('.readiness-question-card');
  const scoreBadge = document.getElementById('readiness-score-badge');
  const resultText = document.getElementById('readiness-result-text');

  const answers = {};

  cards.forEach((card, idx) => {
    const btns = card.querySelectorAll('.readiness-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => {
          b.classList.remove('selected-yes', 'selected-partial', 'selected-no');
        });

        const val = btn.getAttribute('data-value');
        if (val === 'yes') {
          btn.classList.add('selected-yes');
          answers[idx] = 2;
        } else if (val === 'partial') {
          btn.classList.add('selected-partial');
          answers[idx] = 1;
        } else {
          btn.classList.add('selected-no');
          answers[idx] = 0;
        }

        updateScore();
      });
    });
  });

  function updateScore() {
    const totalAnswered = Object.keys(answers).length;
    let score = 0;
    for (let k in answers) score += answers[k];

    if (!scoreBadge || !resultText) return;

    if (totalAnswered < cards.length) {
      scoreBadge.innerText = `Answered: ${totalAnswered}/${cards.length}`;
      resultText.innerText = 'Please select an answer for all 3 questions to calculate your AI Search Readiness score.';
      return;
    }

    if (score <= 2) {
      scoreBadge.innerText = `Score: ${score}/6 — Critical AI Blindspot`;
      scoreBadge.style.background = '#EF4444';
      scoreBadge.style.color = '#FFFFFF';
      resultText.innerText = 'Your brand is likely invisible to generative search engines (ChatGPT Search, Perplexity, Google AI Overviews) or losing citations to competitors. Immediate entity disambiguation and crawlability fixes are recommended.';
    } else if (score <= 4) {
      scoreBadge.innerText = `Score: ${score}/6 — Moderate / Fragile Authority`;
      scoreBadge.style.background = '#F59E0B';
      scoreBadge.style.color = '#FFFFFF';
      resultText.innerText = 'You have basic search visibility, but inconsistent entity data, thin AEO content structures, or missing schema prevent AI models from confidently recommending your services.';
    } else {
      scoreBadge.innerText = `Score: ${score}/6 — Solid Foundation`;
      scoreBadge.style.background = '#10B981';
      scoreBadge.style.color = '#FFFFFF';
      resultText.innerText = 'Strong baseline! With systematic Generative Engine Optimization (GEO) and structured external corroboration, your business can become a dominant cited authority in your niche.';
    }
  }
}

function initVideoModal() {
  const modalHTML = `
    <div class="video-modal-overlay" id="video-modal">
      <div class="video-modal-container">
        <button class="video-modal-close" id="video-modal-close" aria-label="Close Modal">✕</button>
        <div class="video-modal-wrapper">
          <video id="modal-video-element" controls playsinline style="width:100%; height:100%; object-fit:contain;">
            <source id="modal-video-source" src="" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  `;

  if (!document.getElementById('video-modal')) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('video-modal-close');
  const videoEl = document.getElementById('modal-video-element');
  const videoSrc = document.getElementById('modal-video-source');

  const reelCards = document.querySelectorAll('.video-reel-card, .video-testimonial-card');
  reelCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-video-src') || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
      videoSrc.src = src;
      videoEl.load();
      modal.classList.add('active');
      videoEl.play().catch(err => console.log('Autoplay handled:', err));
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    videoEl.pause();
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function initTrustCounters() {
  const strip = document.querySelector('.trust-strip-grid');
  if (!strip) return;

  const cards = strip.querySelectorAll('.trust-stat-card');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;

        // Staggered card reveal
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('revealed');
          }, index * 80);
        });

        // Animated counting
        const counters = strip.querySelectorAll('.counter-val');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = parseInt(counter.getAttribute('data-duration') || '1600', 10);
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);

            counter.innerText = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = `${prefix}${target.toLocaleString()}${suffix}`;
            }
          }

          requestAnimationFrame(updateCount);
        });

        observer.disconnect();
      }
    });
  }, { threshold: 0.15 });

  observer.observe(strip);
}
