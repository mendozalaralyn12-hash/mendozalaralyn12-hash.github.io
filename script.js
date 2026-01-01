document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeBtn");

  if (!btn) {
    console.error("Theme button not found!");
    return; 
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀";
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  btn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀";

  btn.addEventListener("click", toggleTheme);
});

const aboutBtn = document.getElementById("aboutBtn");
const aboutText = document.getElementById("aboutText");

aboutBtn.addEventListener("click", () => {
  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
    aboutBtn.textContent = "Show Less"; 
  } else {
    aboutText.style.display = "none";
    aboutBtn.textContent = "Read More";
  }
});

function toggleBox(box) {
  const content = box.querySelector(".about-box-content");
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}

function showProject(type) {
  const output = document.getElementById("projectOutput");

  if(type === "description") {
    output.innerHTML = "A simple website to showcase my bio, hobbies, skills, and projects. It helps visitors get to know me as an IT student. This project is a personal website I made in my first year of college for the IT Era subject. I created it to meet course requirements and to show my hobbies, interests, and personal style. The website includes hover effects, works well on mobile devices, has a navigation bar, and shows images and videos. It also allows smooth movement between pages. This project shows my first steps in learning web development and the skills I had at that time.";
  } else if(type === "role") {
    output.innerHTML = "I designed and built the entire website on my own from scratch. This was my first time creating a complete website, which helped me practice the basic concepts I learned in class and try out different designs and layouts. Through this project, I gained practical experience and developed a stronger interest in web development, enjoying the challenge and learning a lot along the way.";
  } else if(type === "tools") {
    output.innerHTML = "HTML, CSS, JavaScript, GitHub, VSCode";
  }
}

const cardPhotos = {
  "Family": ["images/family1.jpg", "images/family2.jpg", "images/family3.jpg"],
  "Hobbies": ["images/hobby1.jpg", "images/hobby2.jpg", "images/hobby3.jpg"],
  "Partner": ["images/partner1.jpg", "images/partner2.jpg", "images/partner3.jpg"]
};

const modal = document.getElementById("photoModal");
const modalPhotos = document.getElementById("modalPhotos");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".about-card").forEach(card => {
  card.addEventListener("click", () => {
    const cardTitle = card.dataset.card;
    modalPhotos.innerHTML = ""; 

    cardPhotos[cardTitle].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalPhotos.appendChild(img);
    });

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
