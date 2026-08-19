const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.navlinks a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector('.navlinks a[href="#' + id + '"]');

    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      if (link) navLinks.forEach((l) => l.classList.remove('active'));
      if (link) link.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach((section) => observer.observe(section));
