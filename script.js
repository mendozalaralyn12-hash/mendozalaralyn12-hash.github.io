document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "🌙";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "☀";
    }
  });
});
const aboutBtn = document.getElementById("aboutBtn");
const aboutText = document.getElementById("aboutText");

if (aboutBtn && aboutText) {
  aboutBtn.addEventListener("click", () => {
    if (aboutText.style.display === "none") {
      aboutText.style.display = "block";
      aboutBtn.textContent = "Show Less"; 
    } else {
      aboutText.style.display = "none";
      aboutBtn.textContent = "Read More";
    }
  });
}

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


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// CONTACT FORM - SAVE LOCALLY
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const contactData = {
      name,
      email,
      message,
      date: new Date().toLocaleString()
    };

    let messages = JSON.parse(localStorage.getItem("contacts")) || [];
    messages.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(messages));

    alert("Message saved locally ✔");

    contactForm.reset();
  });
}
