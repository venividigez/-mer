// GSAP ve ScrollTrigger'ı kaydet
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Section Giriş Animasyonu
const tl = gsap.timeline();

tl.from(".glass-nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".reveal-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Elemanların sırayla gelmesi
    ease: "power3.out"
}, "-=0.5");

// 2. Scroll Animations (Manifesto, Moments, Form)
const revealElements = document.querySelectorAll('.gsap-reveal');

revealElements.forEach((element) => {
    gsap.fromTo(element, 
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Eleman ekranın %85'ine geldiğinde tetikle
                toggleActions: "play none none reverse" 
                // Yukarı kaydırıldığında tekrar animasyon oynatması için
            }
        }
    );
});

// Horizontal Gallery Parallax İllüzyonu (İsteğe bağlı zenginleştirme)
// Kartların üzerine gelindiğinde içerideki yazının hafif hareket etmesi
const cards = document.querySelectorAll('.gallery-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Işık efektinin (glow) mouse'u takip etmesi (Eğer istersen)
        const glow = card.querySelector('.card-glow');
        glow.style.left = `${x}px`;
    });
});