$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})


var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `scribbler
            [Entry mode; press Ctrl+D to save and quit; press Ctrl+C to quit without saving]

            // Hello World!!

            // About me

            - Friendly.
            - 18 years.
            - Scorpio.
            - And a lot of madness 😝`;
  var speed = 70;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

