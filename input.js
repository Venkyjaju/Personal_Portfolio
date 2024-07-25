

// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// typing line
const text = document.querySelector(".sec-text");
const textLoading = () => {
    setTimeout(() => {
        text.textContent = "Vyankatesh Jaju";
    }, 0);
    setTimeout(() => {
        text.textContent = "UX/UI designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Front-end developer";
    }, 8000); 
}
textLoading();
setInterval(textLoading, 9000);


// Redirecting another website after click on PROJECT--CARD
// ===card-1===
const card1 = document.getElementById('procard1')
function mycard1() {
  window.open("https://nflixbyvenkyy.netlify.app/", "_blank");
}

// ===card-2===
const card2 = document.getElementById('procard2')
function mycard2() {
  window.open("https://royaloakbyvenky.netlify.app/", "_blank");
}

// ===card-3===
const card3 = document.getElementById('procard3')
function mycard3() {
  window.open("https://annapurnaveg.netlify.app/", "_blank");
}






// card hover effect 
const cards = document.querySelectorAll('.project--card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.zIndex = 10; // Bring card to front on hover
  });

  card.addEventListener('mouseout', () => {
    card.style.zIndex = 0; // Reset card z-index onmouseout
  });
});



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// mail


// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     try {
//         const response = await fetch('http://localhost:3000/send-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, message })
//         });
//         if (response.ok) {
//             alert('Email sent successfully!');
//             contactForm.reset();
//         } else {
//             throw new Error('Failed to send email');
//         }
//     } catch (error) {
//         console.error(error.message);
//         alert('An error occurred, please try again later');
//     }
// });