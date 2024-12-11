// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});


document.addEventListener('DOMContentLoaded', function () {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const textToCopy = this.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-check me-1"></i>Tersalin';
        this.classList.add('btn-success');
        this.classList.remove('btn-outline-dark');

        setTimeout(() => {
          this.innerHTML = originalText;
          this.classList.remove('btn-success');
          this.classList.add('btn-outline-dark');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Get all copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');

  // Add click event listener to each button
  copyButtons.forEach(button => {
    button.addEventListener('click', async function () {
      // Get the account number from data-copy attribute
      const accountNumber = this.getAttribute('data-copy');

      try {
        // Copy the text to clipboard
        await navigator.clipboard.writeText(accountNumber);

        // Store the original button text
        const originalText = this.innerHTML;

        // Change button text to show success
        this.innerHTML = '<i class="fa-solid fa-check me-1"></i>Tersalin!';

        // Reset button text after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);

      } catch (err) {
        console.error('Failed to copy text: ', err);

        // Show error message
        this.innerHTML = '<i class="fa-solid fa-xmark me-1"></i>Gagal!';

        // Reset button text after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);
      }
    });
  });
});


// Select all the copy buttons
const copyButtons = document.querySelectorAll('.copy-btn');

// Loop through each button and add a click event listener
copyButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Get the account number from the associated card
    const accountNumber = this.previousElementSibling.textContent.trim();

    // Copy the account number to the clipboard
    navigator.clipboard.writeText(accountNumber)
      .then(() => {
        // Optionally, you can notify the user that the copy was successful
        alert('Account number ' + accountNumber + ' copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  });
});

// Copy functionality for button with ID copy-btn1
document.querySelector('#copy-btn1').addEventListener('click', function () {
  // Get the associated account number (previous sibling of the button)
  const accountNumber = this.previousElementSibling.textContent.trim();

  // Copy the account number to the clipboard
  navigator.clipboard.writeText(accountNumber)
    .then(() => {
      alert('Account number ' + accountNumber + ' copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
});

// Copy functionality for button with ID copy-btn2
document.querySelector('#copy-btn2').addEventListener('click', function () {
  // Get the associated account number (previous sibling of the button)
  const accountNumber = this.previousElementSibling.textContent.trim();

  // Copy the account number to the clipboard
  navigator.clipboard.writeText(accountNumber)
    .then(() => {
      alert('Account number ' + accountNumber + ' copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get both copy buttons (with corrected IDs)
  const copyBtn1 = document.getElementById('copy-btn1');
  const copyBtn2 = document.getElementById('copy-btn2');

  // Rest of the code remains the same...
  function handleCopy(button) {
    const accountNumber = button.getAttribute('data-copy');
    const originalText = button.innerHTML;

    navigator.clipboard.writeText(accountNumber)
      .then(() => {
        button.innerHTML = '<i class="fa-solid fa-check me-1"></i>Copied!';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        button.innerHTML = '<i class="fa-solid fa-xmark me-1"></i>Failed!';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      });
  }

  if (copyBtn1) {
    copyBtn1.addEventListener('click', function () {
      handleCopy(this);
    });
  }

  if (copyBtn2) {
    copyBtn2.addEventListener('click', function () {
      handleCopy(this);
    });
  }
});

// Function to copy the account number
function copyToClipboard(text) {
  // Create a temporary textarea element
  const tempInput = document.createElement('textarea');

  // Set the value to the text to be copied
  tempInput.value = text;

  // Append to the body
  document.body.appendChild(tempInput);

  // Select the text
  tempInput.select();

  // Execute command to copy text into clipboard 
  document.execCommand("copy");

  // Remove temporary element after usage 
  document.body.removeChild(tempInput);

  // Optionally show confirmation message 
  alert(`Text ${text} copied.`);
}

// Target both buttons based on their new ids 
document.getElementById("copy-btn1").addEventListener("click", function () {
  const accountNumber = this.getAttribute('data-copy');

  // Call function with correct data attribute value 
  copyToClipboard(accountNumber);
});

document.getElementById("copy-btn2").addEventListener("click", function () {
  const accountNumber = this.getAttribute('data-copy');

  //Callfunctionwithcorrectdatavalue	
  copyToClipboard(accountnumber);
});