

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
        text.textContent = "Front-end developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "UI designer";
    }, 8000); 
}
textLoading();
setInterval(textLoading, 9000);


// Redirecting another website after click on PROJECT--CARD
// ===card-1===
const card1 = document.getElementById('procard1')
function mycard1() {
  window.open("https://www.geeksforgeeks.org/", "_blank");
}

// ===card-2===
const card2 = document.getElementById('procard2')
function mycard2() {
  window.open("https://www.geeksforgeeks.org/", "_blank");
}

// ===card-3===
const card3 = document.getElementById('procard3')
function mycard3() {
  window.open("https://www.geeksforgeeks.org/", "_blank");
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
"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);