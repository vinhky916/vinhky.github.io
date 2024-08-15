// Hiệu ứng cuộn mượt mà
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng hoạt ảnh cho các phần tử khi cuộn trang
const elements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');

function handleScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Đảm bảo hiệu ứng hoạt động ngay từ đầu

// Menu điều hướng - thay đổi màu khi cuộn đến phần tử
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

function updateNav() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

window.addEventListener('scroll', updateNav);
