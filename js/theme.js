// Replacer theme 2.0.0
// --------------------


// Smooth scroll for links
var scroll = new SmoothScroll('a[href*="#"]');


// Navbar styles switcher for scrolled navbar
function scrolled_navbar() {
  var scroll = window.scrollY;
	if (scroll > 0) {
		$(".navbar-dark").addClass("navbar-light");
		$(".navbar-dark").addClass("navbar-dark-scrolled");
		$(".navbar-dark-scrolled").removeClass("navbar-dark");
		$(".navbar").addClass("navbar-light-scrolled");
	} else {
		$(".navbar-dark-scrolled").removeClass("navbar-light");
		$(".navbar-dark-scrolled").addClass("navbar-dark");
		$(".navbar-dark").removeClass("navbar-dark-scrolled");
		$(".navbar").removeClass("navbar-light-scrolled");
	}
}


// Scrolled navbar init
$(window).scroll(function() { scrolled_navbar(); });
$(document).ready(function() { scrolled_navbar(); });


// Auto-hide for navbar
$(".auto-hiding-navbar").autoHidingNavbar({
  "animationDuration": 300,
  "showOnBottom": false
});


// Open dropdowns by hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Parallax
$('.jarallax').jarallax({
    speed: 0.5
});


// AOS
AOS.init({
	once: true,
	startEvent: 'load'
});
