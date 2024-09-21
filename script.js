// script.js
function updateCharacterCount() {
    const textarea = document.getElementById("restricted-textarea");
    const charCount = document.getElementById("char-count");
    const maxChars = textarea.getAttribute("maxlength");
  
    const currentChars = textarea.value.length;
    charCount.textContent = `${currentChars} / ${maxChars}`;
  
    if (currentChars >= maxChars) {
      textarea.classList.add("limit-reached");
      charCount.classList.add("limit-reached");
    } else {
      textarea.classList.remove("limit-reached");
      charCount.classList.remove("limit-reached");
    }
  }
  