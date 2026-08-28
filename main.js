
    /*------------ TOGGLE MENU -----------------*/

    $nav = $(".nav");
    $check = $(".check");
    $navItems = $(".nav-items");
    $closeMenu = $(".closeMenu");
    $social = $(".social");
    $banner = $(".banner");
    $navLink = $(".nav-link");
    $scrollTop = $(".scrollTop");
    $brand = $(".nav-brand");
    $main = $(".main");
    $content = $(".content");

    // Reveal elements progressively as they enter the viewport.
    const revealItems = document.querySelectorAll(".about .wrapper, .services .headingBx, .services .h3, .card, .contact .wrapper");
    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    // Keep the mobile menu accessible and close it after navigation.
    $check.attr("aria-expanded", "false");
    $check.on("change", function() {
      $(this).attr("aria-expanded", this.checked ? "true" : "false");
    });

    // A $( document ).ready() block.
    $(document ).ready(function() {
      $content.fadeIn(5000, function(){
        $content.css("display", "block");
        $content.css("top", "30vh");
        $content.css("transition" ,"1.5s ease-in")
    })
  });
  
    function checkFalse(){
      $check.prop('checked', false);
    }

    $bodyWidth = $('body').width();

    $(window).resize(function() {
    if ($(window).width() >= 768) {
      checkFalse();
    }
    }).resize();

    $closeMenu.click(function(){
     checkFalse();
    });

    $brand.click(function(){
      checkFalse();
    });


    /*------------ SCROLLED NAVBAR -----------------*/

    $(document).scroll(function(){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $scrollTop.toggleClass('bannerScrolled', $(this).scrollTop() > $banner.height());
    });

    /*------X----- SCROLLED NAVBAR --------X--------*/


    /*------------ MODAL IMGS -----------------*/

      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById("imgBrand");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
  
      img.onclick = function(){
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
  
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
  
      // When the user clicks on <span> (x), close the modal
      modal.onclick = function() { 
        modal.style.display = "none";
      }

    /*------X----- MODAL IMGS --------X--------*/
    
    /*------------ FADE IN / OUT CONTENT -----------------*/
      

      
    /*------X----- FADE IN / OUT CONTENT --------X--------*/
