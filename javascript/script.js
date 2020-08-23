$(document).ready(function() {


    //up down buttons
    $(function(){       
        $(".up").on("click", function(e) {
            $('html, body').animate({scrollTop:$(this).parent().prev().offset().top}, 'slow');
            // $(this).parent().next() // this is the next div container.
            return false; // prevent anchor
        });

         $(".down").on("click", function(e) {
            $('html, body').animate({scrollTop:$(this).parent().next().offset().top}, 'slow');
            // $(this).parent().next() // this is the next div container.
            return false; // prevent anchor
        });



        //hamburger menu
        $('.fa-bars').on('click', function(e) {

            //header black background
            $('header').toggleClass('black'); 
            
            //slide down nav display
            $('header ul').slideToggle();
        });







    
        
     $('.caitlyn').on('click', function(e) {
        var obj = document.createElement("audio");
          obj.src = "assets/birthday-wishes/caitlyn.ogg"; 
          obj.play();
       })

        $('.vikki').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/birthday-wishes/vikki.ogg"; 
            obj.play();
        })

        $('.zof').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/birthday-wishes/zof.mp4"; 
            obj.play();
        })
        $('.alex').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/birthday-wishes/alex.ogg"; 
            obj.play();
        })
        $('.kumar').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/birthday-wishes/kumar.ogg"; 
            obj.play();
        })
        $('.tia').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/birthday-wishes/tia.ogg"; 
            obj.play();
        })
        $('.ted').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "asset/birthday-wishes/"; 
            obj.play();
        })

        


    });












});