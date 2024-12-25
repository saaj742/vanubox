$(function(){
    // counter plugin start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter plugin end
    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "10/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());

        $(function(){
            $(".typed").typed({
                strings: ["sohora.", "nogora.", "grama."],
                // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
                stringsElement: null,
                // typing speed
                typeSpeed: 30,
                // time before typing starts
                startDelay: 1200,
                // backspacing speed
                backSpeed: 20,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: 5,
                // show cursor
                showCursor: false,
                // character for cursor
                cursorChar: "|",
                // attribute to type (null == text)
                attr: null,
                // either html or text
                contentType: 'html',
                // call when done callback function
                callback: function() {},
                // starting callback function before each string
                preStringTyped: function() {},
                //callback for every typed string
                onStringTyped: function() {},
                // callback for reset
                resetCallback: function() {}
            });
        });
    //    -------------------
    AOS.init({
        duration:400
    });
    // -------------------------
    $('.sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
       
      });
        


    
   
   

        
})