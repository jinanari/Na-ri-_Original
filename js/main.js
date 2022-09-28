$(function($){

    $(".hm-box").click(function () {
        $(".hm-box, .nav").toggleClass("add");
      });

      $(".li").click(function () {
        $(".hm-box, .nav").removeClass("add");
      });
      
    //   $('.readable').on('mouseenter', function() {
    //     $(".kaeri2,.cls-4,.hide,.jikanmore,.jikankanji,.kakikudasi1,.kuni,.yabu,.yama,.ga,.ari,.siro,.haru,.sou,.moku,.fuka,.kan,.toki,.hana,.soso,.namida,.ura,.waka,.tori,.hana,.soso,.namida,.ura,.waka,.tori,.odoro,.kokoro,.hou,.ka,.tura,.san,.getu,.ie,.syo,.ata,.ban,.kin,.haku,.tou,.kaku,.sara,.miji,.subete,.hossu,.zaru,.tae,.sin").addClass("move1");
    //     })

        // $('.trans').on('mouseenter', function() {
        //     $(".kakikudasi2,.kakikudasi-wide,.gendai").addClass("move2");
        //     })
        
            // $('.rethoric').on('mouseenter', function() {
            //     $(".tuiku,.tuiku1,.tuiku2,.tuiku3,.waku1,.waku2,.waku3,.in,.in1,.in2,.in3,.in4").addClass("move3");
            //     })
});


function animeMove1(){

    $('.readable').each(function(){ 
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight + windowHeight/2){
      $(".kaeri2,.cls-4,.hide,.jikanmore,.jikankanji,.kakikudasi1,.kuni,.yabu,.yama,.ga,.ari,.siro,.haru,.sou,.moku,.fuka,.kan,.toki,.hana,.soso,.namida,.ura,.waka,.tori,.hana,.soso,.namida,.ura,.waka,.tori,.odoro,.kokoro,.hou,.ka,.tura,.san,.getu,.ie,.syo,.ata,.ban,.kin,.haku,.tou,.kaku,.sara,.miji,.subete,.hossu,.zaru,.tae,.sin,.asirai-m,.asirai-m2").addClass('move1');
      }else{$(".kaeri2,.cls-4,.hide,.jikanmore,.jikankanji,.kakikudasi1,.kuni,.yabu,.yama,.ga,.ari,.siro,.haru,.sou,.moku,.fuka,.kan,.toki,.hana,.soso,.namida,.ura,.waka,.tori,.hana,.soso,.namida,.ura,.waka,.tori,.odoro,.kokoro,.hou,.ka,.tura,.san,.getu,.ie,.syo,.ata,.ban,.kin,.haku,.tou,.kaku,.sara,.miji,.subete,.hossu,.zaru,.tae,.sin,.asirai-m,.asirai-m2").removeClass('move1');
      }
      });
  }
  
    $(window).scroll(function (){
      animeMove1();
    });
  
    function animeMove2(){

        $('.trans').each(function(){ 
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight + windowHeight/1.2){
          $(".kakikudasi2,.kakikudasi-wide,.gendai").addClass('move2');
          $(".kaeri2,.cls-4,.hide,.jikanmore,.jikankanji,.kakikudasi1,.kuni,.yabu,.yama,.ga,.ari,.siro,.haru,.sou,.moku,.fuka,.kan,.toki,.hana,.soso,.namida,.ura,.waka,.tori,.hana,.soso,.namida,.ura,.waka,.tori,.odoro,.kokoro,.hou,.ka,.tura,.san,.getu,.ie,.syo,.ata,.ban,.kin,.haku,.tou,.kaku,.sara,.miji,.subete,.hossu,.zaru,.tae,.sin,.asirai-m,.asirai-m2").removeClass('move1');
          }else{$(".kakikudasi2,.kakikudasi-wide,.gendai").removeClass('move2');
          }
          });
      }
      
        $(window).scroll(function (){
          animeMove2();
        });

        function animeMove3(){

            $('.rethoric').each(function(){ 
              var elemPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll >= elemPos - windowHeight + windowHeight/1.2){
              $(".tuiku,.tuiku1,.tuiku2,.tuiku3,.waku1,.waku2,.waku3,.in,.in1,.in2,.in3,.in4").addClass('move3');
              $(".kakikudasi2,.kakikudasi-wide,.gendai").removeClass('move2');
              }else{$(".tuiku,.tuiku1,.tuiku2,.tuiku3,.waku1,.waku2,.waku3,.in,.in1,.in2,.in3,.in4").removeClass('move3');
              }
              });
          }
          
            $(window).scroll(function (){
              animeMove3();
            });

            function animeMove4(){

                $('.auther').each(function(){ 
                  var elemPos = $(this).offset().top;
                  var scroll = $(window).scrollTop();
                  var windowHeight = $(window).height();
                  if (scroll >= elemPos - windowHeight + windowHeight){
                    $(".tuiku,.tuiku1,.tuiku2,.tuiku3,.waku1,.waku2,.waku3,.in,.in1,.in2,.in3,.in4").removeClass('move3');
                  }
                  });
              }
              
                $(window).scroll(function (){
                  animeMove4();
                });
  