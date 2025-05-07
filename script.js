function joinTelegram() {
  window.location.href = "https://t.me/+tSVAcORtv3FmNDZi";
}

function copyAddress() {
  const address = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12"; // Заміни на реальний
  const statusEl = document.getElementById("copyStatus");

  navigator.clipboard.writeText(address)
    .then(() => {
      statusEl.innerText = "Адресу скопійовано ✅";
      statusEl.style.opacity = 1;
      setTimeout(() => statusEl.style.opacity = 0, 3000);
    })
    .catch(() => {
      statusEl.innerText = "Помилка при копіюванні ❗";
      statusEl.style.opacity = 1;
      setTimeout(() => statusEl.style.opacity = 0, 3000);
    });
}

function triggerAnimations() {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTop");

  // Показуємо кнопку при скролі
  window.addEventListener("scroll", () => {
    triggerAnimations();

    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Клік по кнопці — скрол вгору
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Анімація при завантаженні
  triggerAnimations();
});