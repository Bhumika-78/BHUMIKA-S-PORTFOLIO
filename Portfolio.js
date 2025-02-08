function toggleDescription(projectId) {
    const description = document.getElementById(projectId);
    if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  }
const typingText = document.getElementById('typingText');
const text = "Hi, I'm Bhumika! A passionate coder and chess enthusiast navigating the infinite cosmos of technology.I specialize in Web Development including HTML, CSS and JavaScript. Besides coding, I am an avid chess player who enjoys strategy and critical thinking.";

let index = 0;
function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50); 
  }
}
typeText(); 
