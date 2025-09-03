document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const msg = document.getElementById("msg");
  const darkBtn = document.getElementById("darkToggle");

  // 🌙 Dark mode toggle
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  // 🚀 Form submission to Google Sheets
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbx5YqYB7tRrrYdrYHCAPLVDoZQ-5j3-2q3rUvhRVbzqYP5FvQKUVnZFXuBD9q1u7VnjIQ/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        msg.textContent = "🎉 Thanks, your entry has been saved!";
        form.reset();
      })
      .catch((err) => {
        msg.textContent = "⚠️ Error saving entry!";
        console.error(err);
      });
  });
});
