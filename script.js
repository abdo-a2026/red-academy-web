// ===== DOM Elements =====
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const overlay = document.getElementById('overlay');
const coursesGrid = document.getElementById('coursesGrid');
const courseModal = document.getElementById('courseModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const bookingForm = document.getElementById('bookingForm');
const toast = document.getElementById('toast');
const mobileNav = document.getElementById('mobileNav');

// ===== Header Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Sidebar Menu =====
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on a link
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Load Courses =====
function loadCourses() {
    if (typeof courses === 'undefined') {
        console.error('Courses data not found');
        return;
    }

    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" onclick="openCourseModal(${course.id})">
            <div class="course-image">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-info">
                <div class="course-stage">${course.stage}</div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        <span>${course.students}</span>
                    </div>
                </div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    <i class="fas fa-info-circle"></i>
                    <span>التفاصيل</span>
                </button>
            </div>
        </div>
    `).join('');
}

// ===== Course Modal =====
function openCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                <i class="${course.icon}"></i>
            </div>
            <h2 class="modal-title">${course.title}</h2>
            <p class="modal-subtitle">${course.stage}</p>
        </div>
        
        <p class="modal-description">${course.fullDescription || course.description}</p>
        
        <div class="modal-links">
            ${course.links.lectures ? `
                <a href="${course.links.lectures}" target="_blank" class="modal-link">
                    <div class="modal-link-content">
                        <div class="modal-link-icon">
                            <i class="fas fa-play-circle"></i>
                        </div>
                        <div class="modal-link-text">
                            <h4>المحاضرات المسجلة</h4>
                            <p>شاهد جميع المحاضرات على يوتيوب</p>
                        </div>
                    </div>
                    <i class="fas fa-chevron-left"></i>
                </a>
            ` : ''}
            
            ${course.links.materials ? `
                <a href="${course.links.materials}" target="_blank" class="modal-link">
                    <div class="modal-link-content">
                        <div class="modal-link-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="modal-link-text">
                            <h4>شراء الملازم</h4>
                            <p>احصل على المواد التعليمية كاملة</p>
                        </div>
                    </div>
                    <i class="fas fa-chevron-left"></i>
                </a>
            ` : ''}
            
            ${course.links.exams ? `
                <a href="${course.links.exams}" target="_blank" class="modal-link">
                    <div class="modal-link-content">
                        <div class="modal-link-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <div class="modal-link-text">
                            <h4>الامتحانات</h4>
                            <p>اختبر معلوماتك مع امتحانات تجريبية</p>
                        </div>
                    </div>
                    <i class="fas fa-chevron-left"></i>
                </a>
            ` : ''}
            
            <a href="#booking" class="modal-link" onclick="closeModal()">
                <div class="modal-link-content">
                    <div class="modal-link-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="modal-link-text">
                        <h4>احجز الكورس</h4>
                        <p>سجل الآن وابدأ رحلتك التعليمية</p>
                    </div>
                </div>
                <i class="fas fa-chevron-left"></i>
            </a>
        </div>
    `;

    courseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    courseModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
courseModal.addEventListener('click', (e) => {
    if (e.target === courseModal) {
        closeModal();
    }
});

// ===== Booking Form =====
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('studentName').value,
        phone: document.getElementById('phone').value,
        stage: document.getElementById('stage').value,
        notes: document.getElementById('notes').value
    };
    
    // Create WhatsApp message
    const message = `
🎓 طلب حجز كورس جديد

👤 الاسم: ${formData.name}
📱 رقم الهاتف: ${formData.phone}
📚 المرحلة: ${getStageText(formData.stage)}
${formData.notes ? `📝 ملاحظات: ${formData.notes}` : ''}
    `.trim();
    
    const whatsappUrl = `https://wa.me/9647700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showToast('تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً');
    
    // Reset form
    bookingForm.reset();
});

function getStageText(stage) {
    const stages = {
        'third': 'الثالث متوسط',
        'fourth': 'الرابع علمي',
        'fifth': 'الخامس علمي',
        'sixth': 'السادس إعدادي'
    };
    return stages[stage] || stage;
}

// ===== Toast Notification =====
function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .course-card, .social-card, .about-card, .info-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ===== Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Prevent Context Menu on Images (Optional) =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment to disable right-click on images
        // e.preventDefault();
    });
});

// ===== Mobile Menu Close on Resize =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    
    // Add smooth scroll behavior to hero buttons
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        if (courseModal.classList.contains('active')) {
            closeModal();
        }
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        }
    }
});

// ===== Scroll Progress Indicator =====
function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // You can use this to show a progress bar if needed
    // document.getElementById('scrollProgress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===== Performance Optimization =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Any heavy scroll operations here
}, 100));

// ===== Add to Home Screen Prompt (PWA-like) =====
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // You can show a custom install button here
});

console.log('🎓 معهد التميز التعليمي - الموقع جاهز!');