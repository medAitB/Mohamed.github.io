let images = ["images/Tent-Camping-page3.jpg", "images/Montain-Bking-page3.jpg", "images/Birdwatching-page3.jpg", "images/Fishing-page3.jpg", "images/Montain-hiking-page3.jpg"]

const image = document.querySelector('.page3-offers-right')
const btn = document.querySelector('.btn-page3')




// console.log(select.value)
// console.log(image.src)
// image.src = images[0]

// btn.addEventListener("change", function () {
//     // switch (true) 
//     // switch (this.value) this = select
//     switch (select.value) {
//         case "1":
//             image.src = images[0]
//             break
//         case "2":
//             image.src = images[1]
//             break
//         case "3":
//             image.src = images[2]
//             break
//         case "4":
//             image.src = images[3]
//             break
//         case "5":
//             image.src = images[4]
//             break
//     }
// })


function btnclick1() 
{
    var img = document.getElementById("image")
    img.src = images[0]
};

function btnclick2() 
{
    var img = document.getElementById("image")
    img.src = images[1]
};

function btnclick3() 
{
    var img = document.getElementById("image")
    img.src = images[2]
};

function btnclick4() 
{
    var img = document.getElementById("image")
    img.src = images[3]
};

function btnclick5() 
{
    var img = document.getElementById("image")
    img.src = images[4]
};


$(function(){
  $('.count-num').rCounter({
    duration: 30
    
  });
});


// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

AOS.init();



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the slider elements
    const sliders = document.querySelectorAll(".slider");
    const prevBtn = document.querySelector(".btn-prev");
    const nextBtn = document.querySelector(".btn-next");
    const dots = document.querySelectorAll(".slider-dots span");
  
    let currentSlide = 0;
  
    // Function to show the current slide
    function showSlide() {
      sliders.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add("active");
          dots[index].classList.add("active");
        } else {
          slide.classList.remove("active");
          dots[index].classList.remove("active");
        }
      });
    }
  
    // Function to navigate to the previous slide
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = sliders.length - 1;
      }
      showSlide();
    }
  
    // Function to navigate to the next slide
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= sliders.length) {
        currentSlide = 0;
      }
      showSlide();
    }
  
    // Add event listeners to the previous and next buttons
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  
    // Add event listeners to the dots for direct navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function() {
        currentSlide = index;
        showSlide();
      });
    });
  
    // Start the slider by showing the initial slide
    showSlide();
  });

  $('.up').click( function() {
    $(`html,body`).animate({scrollTop: 0 }, 2000 );
  })


  $(function(){
    $('.count-num').rCounter({
      duration: 30
      
    });
  });

  // $(document).ready(function() {
  //   $(this).scrollTop(0);
  // })

  

 

//   function startCounter(targetElementId, finalCount, duration, showDecimal) {
//     var counterElement = document.getElementById(targetElementId);
//     var startTimestamp = null;
//     var startCount = 0;
  
//     function updateCounter(timestamp) {
//       if (!startTimestamp) startTimestamp = timestamp;
//       var progress = timestamp - startTimestamp;
//       var currentCount = Math.min(progress / duration * finalCount, finalCount);
  
//       if (showDecimal && targetElementId === "counter3") {
//         counterElement.textContent = currentCount.toFixed(1);
//       } else {
//         counterElement.textContent = Math.floor(currentCount);
//       }
  
//       if (progress < duration) {
//         requestAnimationFrame(updateCounter);
//       }
//     }
  
//     requestAnimationFrame(updateCounter);
//   }
  
//   // Start the counters
//   startCounter("counter1", 3568, 3000);
// startCounter("counter2", 8453, 4000);
// startCounter("counter3", 99.3, 2000, true);
// startCounter("counter4", 63, 2000);
  


  





  

