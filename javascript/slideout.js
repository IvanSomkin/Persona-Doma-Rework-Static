var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('mobile-menu'),
  'padding': 350,
  'tolerance': 70
});

// Toggle button

/* Function by Chris Houghton */
var waitForHeader = function(callback) {
  if (document.getElementById("toggle-button") != null) {
    callback()
  } else {
    setTimeout(function() {
      waitForHeader(callback)
    }, 100)
  }
};

waitForHeader(function() {
  document.querySelector('#toggle-button').addEventListener('click', function() {
    slideout.toggle()
  })
})

window.addEventListener('resize', function(event) {
  if (window.screen.width > 900) {
    slideout.close()
  }
}, true);


/* Function by Chris Houghton */
var waitForMobileMenu = function(callback) {
  if (document.getElementById("close-mobile-menu") != null) {
    callback()
  } else {
    setTimeout(function() {
      waitForMobileMenu(callback)
    }, 100);
  }
};

waitForMobileMenu(function() {
  document.getElementById("close-mobile-menu").addEventListener('click', function(event) {
    slideout.close()
  }, true)
})