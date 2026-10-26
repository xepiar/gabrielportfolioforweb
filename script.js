/**
 * GABRIEL, JEROME EDWARD M. — PORTFOLIO INTERACTIVE ENGINE
 * Vanilla JavaScript implementation for performance and reliability.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Theme Toggle (Dark & Light Editorial) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('gabriel_portfolio_theme') || 'dark';

  body.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('gabriel_portfolio_theme', newTheme);
    });
  }

  // --- 2. Scroll Progress Bar & Header Shadow ---
  const scrollProgressBar = document.getElementById('scroll-progress');
  const siteHeader = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // --- 3. Active Nav Link Scroll Spy ---
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // --- 4. Mobile Drawer Navigation ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileDrawer.setAttribute('aria-hidden', !isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // --- 5. Skill Category Filters ---
  const skillFilterPills = document.querySelectorAll('.filter-pill');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      skillFilterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });

      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const filterValue = pill.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 6. Project Category Filters ---
  const projectFilterPills = document.querySelectorAll('.project-filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      projectFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'grid';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 7. Project Case Studies & Modal ---
  const caseStudiesData = {
    final_act3: {
      title: "Interactive jQuery DOM Engine (Final Activity 3)",
      category: "Front-End Interactivity & jQuery",
      year: "2026",
      image: "assets/images/gabrielfinalact3.png",
      liveUrl: "GabrielFinalAct3/index.html",
      folderPath: "GabrielFinalAct3/",
      description: "An interactive client-side web application built for Final Activity 3 demonstrating advanced jQuery event architectures, dynamic styling manipulation, mouse gesture listeners (dblclick, hover, focus, blur), and animated element hide/show toggles.",
      challenge: "Implementing chained jQuery selectors, multi-state button handlers, input focus/blur color toggles, and animated table transitions without event collisions.",
      solution: "Leveraged jQuery 3.7.1 event binding ($(document).ready), parameterized animation methods (.hide('slow'), .show('slow')), and direct DOM property mutators.",
      metrics: [
        "jQuery 3.7.1 DOM traversal & real-time style injection",
        "Smooth animated table visibility transitions",
        "Multi-event button handling (click, double-click, mouseenter/leave)"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "jQuery 3.7.1", "GabrielFinalAct3/"]
    },
    final_act1: {
      title: "Dynamic DOM Event Profile (Final Activity 1)",
      category: "JavaScript DOM Events",
      year: "2026",
      image: "Gabriel_Final_Act1/sasuke.jpg",
      liveUrl: "Gabriel_Final_Act1/profile.html",
      folderPath: "Gabriel_Final_Act1/",
      description: "An interactive student profile interface showcasing core vanilla JavaScript DOM event listeners, conditional text morphing, dynamic styling manipulation on single and double-click, and input focus background highlights.",
      challenge: "Wiring distinct listener functions to multiple interactive button and input elements with immediate visual response.",
      solution: "Utilized addEventListener for click, dblclick, and input interactions with direct innerHTML and style property manipulation.",
      metrics: [
        "Vanilla JavaScript event listeners (click, dblclick, input)",
        "Real-time DOM text updates & dynamic CSS color transitions",
        "Styled profile card layout with avatar image"
      ],
      techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "DOM Events", "Gabriel_Final_Act1/"]
    },
    ahamay: {
      title: "Ahamay Motorcycles Showcase (Laboratory Activity 5)",
      category: "Front-End Web & Commercial Showcase",
      year: "2026",
      image: "gabrielact5/NMAX-NEW-2.jpg",
      liveUrl: "gabrielact5/Home.html",
      folderPath: "gabrielact5/",
      description: "A multi-section motorcycle brand and model showcase website created for Laboratory Activity 5. It presents detailed showcases for automatic motorbikes (Yamaha NMAX) and manual motorbikes (Yamaha Sniper), together with a brand history narrative and a custom stylesheet.",
      challenge: "Designing structured presentation grids, clean image embedding for automatic and manual models, and implementing dedicated anchor navigation for sections.",
      solution: "Implemented semantic HTML5 sections (#Home, #Automatic, #Manual, #AboutUs) combined with flexbox layouts and external CSS styling.",
      metrics: [
        "Featuring automatic (NMAX) & manual (Sniper) motorcycle models",
        "Includes 135 Years of Yamaha / Ahamay brand history",
        "Pure semantic HTML5 and CSS3 styling with zero external dependencies"
      ],
      techStack: ["HTML5", "CSS3", "Flexbox", "gabrielact5/Home.html"]
    },
    academic_portal: {
      title: "Student Personal Academic Portal (Laboratory Activity 3)",
      category: "Multi-Page Web Portal & Academic Forms",
      year: "2026",
      image: "chambir.png",
      liveUrl: "Gabriel_BSIT31A_ACT3/Home.html",
      folderPath: "Gabriel_BSIT31A_ACT3/",
      description: "A comprehensive multi-page academic website comprising a student home dashboard, interactive student registration form with input controls, a detailed academic grade report table, and a personal profile page featuring Gabriel's hand-drawn character illustration.",
      challenge: "Building interconnected pages with consistent top-level navigation, structured table rows/columns for university subjects, and full form input controls.",
      solution: "Created clean HTML table matrix with units, grades, and remarks calculations, alongside an interconnected top navigation bar linking all 4 activity documents.",
      metrics: [
        "4 interconnected pages (Home, Registration Form, Grade Table, My Profile)",
        "Structured academic grade report table with subject units & marks",
        "Student registration form with specialized input controls"
      ],
      techStack: ["HTML5", "HTML Tables", "Web Forms", "Multi-Page Architecture", "Gabriel_BSIT31A_ACT3/"]
    },
    student_info: {
      title: "Jerome's Student Website & Journal (Laboratory Activity 2)",
      category: "Student Web Portal & Directory",
      year: "2026",
      image: "assets/images/gabrielbsit31a.png",
      liveUrl: "GabrielBSIT31A/home.html",
      folderPath: "GabrielBSIT31A/",
      description: "Jerome's personal academic directory website developed for BSIT 31A containing personal information records, academic expectations, and daily student journal sub-pages.",
      challenge: "Establishing initial web design fundamentals, ordered lists, hyperlinked document hierarchies, and clean return navigation.",
      solution: "Developed a clean semantic HTML hierarchy with cross-linked HTML pages and intuitive return navigation back to the home portal.",
      metrics: [
        "Modular navigation directory for student profile and journal",
        "Structured academic expectations lists",
        "Cross-linked sub-pages with return navigation"
      ],
      techStack: ["HTML5", "Hyperlinks", "Semantic Lists", "Document Architecture", "GabrielBSIT31A/"]
    }
  };

  const modalBackdrop = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close');
  const viewCaseStudyBtns = document.querySelectorAll('.view-case-study');

  function openModal(projectId) {
    const data = caseStudiesData[projectId];
    if (!data || !modalContent || !modalBackdrop) return;

    modalContent.innerHTML = `
      <div class="modal-meta-strip">
        <span>${data.year}</span>
        <span>•</span>
        <span>${data.category}</span>
      </div>
      <h3 class="modal-heading">${data.title}</h3>
      <div class="modal-image-preview" style="max-height: 380px; overflow: hidden; background: #121417; display: flex; align-items: center; justify-content: center;">
        <img src="${data.image}" alt="${data.title}" style="max-height: 360px; width: auto; max-width: 100%; object-fit: contain; display: block; margin: 0 auto;">
      </div>
      
      <h4 class="modal-section-title">Overview</h4>
      <p class="modal-text">${data.description}</p>

      <h4 class="modal-section-title">Project Implementation</h4>
      <p class="modal-text">${data.solution}</p>

      <h4 class="modal-section-title">Key Components & Features</h4>
      <ul style="padding-left: 20px; margin-top: 8px; color: var(--text-secondary); font-size: 0.95rem;">
        ${data.metrics.map(m => `<li style="margin-bottom: 6px;">${m}</li>`).join('')}
      </ul>

      <h4 class="modal-section-title">Technologies & Folder Source</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; margin-bottom: 20px;">
        ${data.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-hairline); display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="${data.liveUrl}" target="_blank" class="btn btn-primary btn-sm">
          <span>Open Full Project in New Tab ↗</span>
        </a>
      </div>
    `;

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewCaseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 8. Copy Email to Clipboard & Toast ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailTextElem = document.getElementById('user-email-text');
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (copyEmailBtn && emailTextElem) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailTextElem.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard: " + email);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast("Email copied: " + email);
      });
    });
  }

  // --- 9. Contact Form Real-Time Validation & Async Simulation ---
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('submit-btn');
  const formFeedback = document.getElementById('form-feedback');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    // Clear validation error on typing
    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        const parent = input.closest('.form-field');
        if (parent) parent.classList.remove('has-error');
        if (formFeedback) formFeedback.style.display = 'none';
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-field').classList.add('has-error');
        hasError = true;
      }

      // Validate Email
      if (!validateEmail(emailInput.value.trim())) {
        emailInput.closest('.form-field').classList.add('has-error');
        hasError = true;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-field').classList.add('has-error');
        hasError = true;
      }

      if (hasError) return;

      // Loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Simulate sending to backend
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        formFeedback.className = "form-feedback-message success";
        formFeedback.textContent = "Thank you, " + nameInput.value.trim() + "! Your message has been received. I'll get back to you shortly.";
        showToast("Message successfully sent!");

        contactForm.reset();
      }, 1200);
    });
  }

  // --- 10. Live WIB / UTC+7 Local Time Clock ---
  const clockElement = document.getElementById('local-time-clock');

  function updateClock() {
    if (!clockElement) return;
    try {
      const now = new Date();
      // Format to Asia/Jakarta (WIB: UTC+7)
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      clockElement.textContent = formatter.format(now);
    } catch (err) {
      const fallback = new Date();
      clockElement.textContent = fallback.toTimeString().split(' ')[0];
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  // --- 11. Footer Copyright Year ---
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- 12. Smooth Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
