$(function($){

    $(".hm-box").click(function () {
        $(".hm-box, .nav").toggleClass("add");
      });

      $('.readable').on('mouseenter', function() {
        $(".kaeri2,.cls-4,.hide,.jikanmore,.jikankanji,.kakikudasi1,.kuni,.yabu,.yama,.ga,.ari,.siro,.haru,.sou,.moku,.fuka,.kan,.toki,.hana,.soso,.namida,.ura,.waka,.tori,.hana,.soso,.namida,.ura,.waka,.tori,.odoro,.kokoro,.hou,.ka,.tura,.san,.getu,.ie,.syo,.ata,.ban,.kin,.haku,.tou,.kaku,.sara,.miji,.subete,.hossu,.zaru,.tae,.sin").addClass("move1");
        })

        $('.trans').on('mouseenter', function() {
            $(".kakikudasi2,.kakikudasi-wide,.gendai").addClass("move2");
            })
        
            $('.rethoric').on('mouseenter', function() {
                $(".tuiku,.tuiku1,.tuiku2,.tuiku3,.waku1,.waku2,.waku3,.in,.in1,.in2,.in3,.in4").addClass("move3");
                })
});
