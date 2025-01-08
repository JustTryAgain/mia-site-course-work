const bookButton = document.getElementById("bookBtn");
const bookModal = document.getElementById("bookModal");
const successModal = document.getElementById("successModal");
const scrollDownBtn = document.getElementById('scrollDownBtn');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const reviewNames = document.querySelectorAll('.reviewName');
const reviewTexts = document.querySelectorAll('.reviewText');

const closeBookBtn = bookModal.querySelector("#closeBookModalBtn");
const closeSuccessBtn = successModal.querySelector("#closeSuccessModalBtn");
const submitModalBtn = bookModal.querySelector("#bookModalSubmitBtn");
const successMessage = successModal.querySelector("h2");
const nameInputModal = bookModal.querySelector("#modalName");
const phoneInputModal = bookModal.querySelector("#modalPhone");

bookButton.addEventListener('click', () => {
  bookModal.classList.remove('hidden');
});

closeBookBtn.addEventListener('click', () => {
  bookModal.classList.add('hidden');
});

closeSuccessBtn.addEventListener('click', () => {
  successModal.classList.add('hidden');
});

submitModalBtn.addEventListener('click', (event) => {
  const userName = nameInputModal.value.trim();
  const userPhone = phoneInputModal.value.trim();

  if (!userName || !userPhone) {
    return;
  }

  if (userName.length < 2 || userName.length > 15) {
    return;
  }

  const phonePattern = /^\+?\d{10,15}$/;
  if (!phonePattern.test(userPhone)) {
    return;
  }

  event.preventDefault();
  successMessage.textContent = `Дякую ${userName}, очікуйте, ми вам скоро передзвонимо!`;

  bookModal.classList.add('hidden');
  successModal.classList.remove("hidden");
});

window.addEventListener('click', (event) => {
  if (event.target === bookModal) {
    bookModal.classList.add('hidden');
  } else if (event.target === successModal) {
    successModal.classList.add('hidden');
  }
});

scrollDownBtn.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

let currentSlideIndex = 0;

function showSlide(index) {
  reviewNames.forEach((slide, i) => {
    slide.classList.add('hidden');
    if (i === index) {
      slide.classList.remove('hidden');
    }
  });
  reviewTexts.forEach((slide, i) => {
    slide.classList.add('hidden');
    if (i === index) {
      slide.classList.remove('hidden');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === 0) ? reviewNames.length - 1 : currentSlideIndex - 1;
  showSlide(currentSlideIndex);
});

nextBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === reviewNames.length - 1) ? 0 : currentSlideIndex + 1;
  showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);

submitBtn.addEventListener("click", (e) => {
  const userName = nameInput.value.trim();
  const userPhone = phoneInput.value.trim();

  if (!userName || !userPhone) {
    return;
  }

  if (userName.length < 2 || userName.length > 15) {
    return;
  }

  const phonePattern = /^\+?\d{10,15}$/;
  if (!phonePattern.test(userPhone)) {
    return;
  }

  e.preventDefault();
  successMessage.textContent = `Дякую ${userName}, очікуйте, ми вам скоро передзвонимо!`;

  bookModal.classList.add('hidden');
  successModal.classList.remove("hidden");
});