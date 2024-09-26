// app.js
document.getElementById("myButton")
.addEventListener("click", function(){
  document.getElementById("message").
  textContent = "Hello, you've clicked the button!";
});

document.addEventListener('DOMContentLoaded', function() {
  // Select the title and content elements
  const title = document.querySelector('.article-title');
  const content = document.querySelector('.article-content');

  // Add an event listener to the title
  title.addEventListener('click', function() {
      // Toggle the display of the article content
      content.classList.toggle('show');
  });
});
