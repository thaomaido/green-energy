

// Define the solutions as an object
const solutions = {
  1: {
      title: "Solution 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image: "./img/asset01.jpg" 
  },
  2: {
      title: "Solution 2",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      image: "./img/asset02.jpg" 
  },
  3: {
      title: "Solution 3",
      content: "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
      image: "./img/asset03.jpg" 
  }
};
  // Get the buttons and content
  const buttons = document.querySelectorAll(".button-group button");
  const content = document.querySelector("#content");
  
  // Loop through the buttons and add a click event listener
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Remove the active class from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove("active-button");
        });
        // Add the active class to the clicked button
        button.classList.add("active-button");
        // Get the ID of the clicked button
const id = button.getAttribute("id").slice(-1);
// Get the solution from the solutions object
const solution = solutions[id];
// Update the content
content.innerHTML = `
<h2>${solution.title}</h2>
<img src="${solution.image}" alt="${solution.title} Image">
<p>${solution.content}</p>
`;
});

  });
  
  // Set the first button to active by default
  buttons[0].classList.add("active-button");
  
  // Responsive design
  const mediaQuery = window.matchMedia('(min-width: 30rem)');
  const container = document.querySelector('.container');
  const masthead = document.querySelector('.masthead');
  
  function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    container.style.fontSize = '1.2rem';
    masthead.style.height = '50vh';
  } else {
    container.style.fontSize = '1rem';
    masthead.style.height = '30rem';
  }
  }
  
  handleMediaQuery(mediaQuery);
  mediaQuery.addListener(handleMediaQuery);


  
