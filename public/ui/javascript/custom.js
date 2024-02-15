(function ($) {
    'use strict';
    var a = 0;
    function counterInc0(){
        var oTop = $(".counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
        
            $(".counter1").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {countNum: countTo,},

                    {duration: 850,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                // Math.ceil(this.countNum, -1)
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        }
                    }
                );

                
            });
            a = 0;
        }
    }
    //
    function counterInc1(){
    var oTop = $(".counter-box").offset().top - window.innerHeight;
     if (a == 0 && $(window).scrollTop() > oTop) {
       
         $(".counter2").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo,
                    
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            // Math.ceil(this.countNum, -1)
                            Math.ceil(Math.round(this.countNum * 100)) / 100
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(Math.round(this.countNum * 100)) / 100
                        );
                    }
                }
            );

            
        });
        a = 0;
    }
    }

    function counterInc2(){
        var oTop = $(".counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
        
            $(".counter3").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo,
                        
                    },

                    {
                        duration: 850,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                // Math.ceil(this.countNum, -1)
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        }
                    }
                );

                
            });
            a = 0;
        }
    }

    function counterInc3(){
        var oTop = $(".counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
        
            $(".counter4").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo,
                        
                    },

                    {
                        duration: 850,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                // Math.ceil(this.countNum, -1)
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(Math.round(this.countNum * 100)) / 100
                            );
                        }
                    }
                );

                
            });
            a = 0;
        }
    }

     $(document).ready(function() {
        var $sm = $('.second-menu-section');
    
        if ( $sm.length > 0){
            var changePoint = $('#second-menu-section').offset().top
            console.log("working")
        }

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop();

            $('.second-menu-section').removeClass('mini');
    
            if (windowScroll >= changePoint) {
                $('.second-menu-section').addClass('mini');
            } else {
                $('.second-menu-section').removeClass('mini');
            }
    

        })
    
    
    });

    $(window).scroll(function () {
        
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 150) {
            sticky.addClass('sticky-nav');
            $("body").addClass("scrollingheader");
        }else {
            sticky.removeClass('sticky-nav');
            $("body").removeClass("scrollingheader");
        }

        if($('.list-auto-width').length >0 ){
            counterInc0();
        }

        if($('.about-page-counter').length >0 ){
            counterInc1()
        }

        if($('.evntd-page-counter').length >0 ){
            counterInc2()
        }

        if($('.evntd-page-counter2').length >0 ){
            counterInc3()
        }

       

        

        $('.obd-list-item .column .bod-row').each(function() {
            var distance = $(this).offset().top - 350;
            if ($(window).scrollTop() >= distance) {
              $(this).addClass('active');
            } else {
              $(this).removeClass('active');
            }
          });

        
    });


   AOS.init({
    once: true,
    });

    jQuery(document).ready(function ($) {
        var mydir = $("html").attr("lang");

        if (mydir == 'ar') {
            var rtlVal = true
        } else {
            var rtlVal = false
        }

        $('.home-slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            rtl: rtlVal,
            // autoplay: true,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            navText:["<div class='nav-btn prev-slide'><i class='fal fa-chevron-left'></i> Prev</div>","<div class='nav-btn next-slide'>Next</div>"],
        });

        $('.award-image-carousel .owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })

        $('.award-carousel .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            autoplay:false,
            dots:false,
            autoWidth:true,
            margin:30,
            items:5
           
        })

        

        $('.award-image-carousel2 .owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })

        $('.award-carousel2 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            autoplay:false,
            dots:false,
            autoWidth:true,
            margin:30,
            items:5
           
        })


        var owlJourney = $('.journey .owl-carousel');
        owlJourney.owlCarousel({
            loop:false,
            // nav:true,
            margin:10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },            
                960:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });
        owlJourney.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owlJourney.trigger('next.owl');
            } else {
                owlJourney.trigger('prev.owl');
            }
            e.preventDefault();
        });

        $(".prev-journey").click(function() {
            owlJourney.trigger('prev.owl.carousel');
        });

        $(".next-journey").click(function() {
            owlJourney.trigger('next.owl.carousel');
        });

        //

        

        $('.our-industries .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:true,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });
        //


        $('.our-industries1 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries2 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries3 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries4 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries5 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries6 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries7 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries8 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.our-industries9 .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });

        //

        $('.maintenance-contracts .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        //
        $('.data-center .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });


        //
        $('.oi-carousel .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            // center:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        
        
        $('.ep-carousel .owl-carousel').owlCarousel({
            loop:true,
            // autoplay:true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            dots:false,
            nav:true,
            responsiveClass: true,
            autoplayHoverPause: true,
            navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })

        //

        
        $('.sol-carousel .owl-carousel').owlCarousel({
            loop:true,
            // autoplay:true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            dots:false,
            nav:true,
            responsiveClass: true,
            autoplayHoverPause: true,
            navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })

        //

       
        $('.op-carousel .owl-carousel').owlCarousel({
            loop:true,
            // autoplay:true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            dots:false,
            nav:true,
            responsiveClass: true,
            autoplayHoverPause: true,
            navText: ["<i class='fas fa-long-arrow-left'></i>", "<i class='fas fa-long-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                }
            }
        })

        //
        $('.partners-sec .owl-carousel').owlCarousel({
            loop:true,
            // autoplay:true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            dots:false,
            nav:true,
            responsiveClass: true,
            autoplayHoverPause: true,
            navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })
        
        
       
        // function videoTrigger() {
        //     var trigger = $('.video-trigger');
        //     if (!trigger.length) return;
        //     trigger.fancybox();
        // }
        // videoTrigger();
        
        $('.sidebar-toggle-btn').on('click', function(){
            $('.side-menu').toggleClass('open');
        })
        $('.sidebar-close').on('click', function(){
            $('.side-menu').removeClass('open');
        })



        // $('.dropdown').mouseenter(function(){
        //     if(!$('.navbar-toggle').is(':visible')) {
        //         if(!$(this).hasClass('open')) {
        //             $('.dropdown-toggle', this).trigger('click');
        //         }
        //     }
        // });


    });

    $(window).resize(function(){

     })

     $(".dropdown-menu").parent('.dropdown').css({'position':'static'}) 

     //dd

     $(".megamenu li:has(div)").children('a').addClass('arrow');
    //  $(".megamenu li:has(div)").prepend('<span class="down"><i class="fal fa-angle-down"></i></span>');

    //
    $(document).on('click', 'a[href^="#"]', function(e) {
            
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        
        var pos = $id.offset().top - 300
        $('body, html').animate({scrollTop: pos});
    });

    // $('.second-menu li').eq(0).addClass('active')
    $('.second-menu li').click(function(){
        $('.second-menu li').removeClass('active');
        $(this).addClass('active')
    })
    

    // $("#whoweare").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $("#whoweare1").offset().top - 200,
    //     }, 2000);
    // });


   

    

    var $post = $(".ai-box");
    $post.addClass("interval");
        setInterval(function(){
        $post.toggleClass("interval");
    }, 15000);


    //

    $('.ab').hide();
    $('.ab').eq(0).show();
    $('.ah').eq(0).addClass('active');

    $('.ah').click(function(){
        $(this).parent('.ssrow').siblings('.ssrow').children('.ab').slideUp();
        $(this).siblings('.ah').next().slideUp();
        $(this).parent('.ssrow').siblings('.ssrow').children('.ah').removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.ab').slideToggle();
    });

    $('.abb').hide();
    $('.abb').eq(0).show();
    $('.ahh').eq(0).addClass('active');

    $('.ahh').click(function(){
        $(this).parent('.sdrow').siblings('.sdrow').children('.abb').slideUp();
        $(this).siblings('.ahh').next().slideUp();
        $(this).parent('.sdrow').siblings('.sdrow').children('.ahh').removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.abb').slideToggle();
    });

    var ben = $('.benefits-carousel2 .owl-carousel').owlCarousel({
        loop:false,
        // nav:true,
        autoplay:false,
        dots:false,
        margin:0,
        touchDrag:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            }
        }
    })

    $('.benefits-carousel2 .owl-carousel').find('.active').children('.item').children('.tdw').children('.a_col').eq(0).addClass('active-hover')

    $(".prev-ben").click(function() {
        ben.trigger('prev.owl.carousel');
        console.log(ben.trigger('prev.owl'))
        ben.trigger('prev.owl').find('.active').children('.item').children('.tdw').children('.a_col').eq(0).addClass('active-hover')
    });

    $(".next-ben").click(function() {
        ben.trigger('next.owl.carousel');
        ben.trigger('next.owl').find('.active').children('.item').children('.tdw').children('.a_col').eq(0).addClass('active-hover')
    });

   

    $(".item .tdw .a_col").mouseenter(function(){
        $('.item .tdw .a_col').removeClass('active-hover');
        $(this).addClass('active-hover');
    });

    //

   


$('.step-box').click(function(){
    $(this).addClass('complete');
})

$("#mvp-step, #mvp-step2, #mvp-step3, #mvp-step4, #mvp-step5").mCustomScrollbar({
    axis:"x",
    advanced:{autoExpandHorizontalScroll:true}
});

$( function() {
$( "#eventdatefilter" ).datepicker();
});

$( function() {
    $( "#dob" ).datepicker();
} );

//////////////////////////////////////////////////////////
if($('#canv').length>0){
    var c=document.getElementById("canv"),cCont=c.getContext("2d"),w=c.width=window.innerWidth,h=c.height=500,txt=function(){var t="".split("").join(String.fromCharCode(8196));return cCont.font="4em Poiret One",cCont.fillStyle="rgba(25, 45, 64, 1)",cCont.fillText(t,.5*(c.width-cCont.measureText(t).width),.5*c.height),t},draw=function(t,n,i){cCont.lineWidth=.8,cCont.fillStyle="rgba(25, 45, 64, 1)",cCont.fillRect(0,0,w,h);for(var e=-60;e<60;e+=1){cCont.strokeStyle="rgba(255, 255, 255, .15)",cCont.beginPath(),cCont.moveTo(0,h/2);for(var o=0;o<w;o+=10)cCont.lineTo(10*Math.sin(e/10)+o+.008*o*o,Math.floor(h/2+o/2*Math.sin(o/50-i/50-e/118)+.9*e*Math.sin(o/25-(e+i)/65)));cCont.stroke()}},t=0;window.addEventListener("resize",function(){c.width=w=window.innerWidth,c.height=h=500,cCont.fillStyle="rgba(25, 45, 64, 1)"},!1);var run=function(){window.requestAnimationFrame(run),t+=5,draw(33,52*Math.sin(t/2400),t),txt()};run();
}

////////////////////////////////////////////////
if($('#myCanvas').length>0){
function Properties(){this.segments=8,this.growth=86,this.step=.04,this.rows=100,this.lineDiff=.06,this.curveDiff=1,this.lineWidth=1,this.lineColor="#ffffff",this.bgColor="#182d40"}var ClassicalNoise=function(t){null==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var i=0;i<256;i++)this.p[i]=Math.floor(256*t.random());this.perm=[];for(i=0;i<512;i++)this.perm[i]=this.p[255&i]};ClassicalNoise.prototype.dot=function(t,i,e,r){return t[0]*i+t[1]*e+t[2]*r},ClassicalNoise.prototype.mix=function(t,i,e){return(1-e)*t+e*i},ClassicalNoise.prototype.fade=function(t){return t*t*t*(t*(6*t-15)+10)},ClassicalNoise.prototype.noise=function(t,i,e){var r=Math.floor(t),s=Math.floor(i),o=Math.floor(e);t-=r,i-=s,e-=o,r&=255,s&=255,o&=255;var n=this.perm[r+this.perm[s+this.perm[o]]]%12,a=this.perm[r+this.perm[s+this.perm[1+o]]]%12,h=this.perm[r+this.perm[1+s+this.perm[o]]]%12,p=this.perm[r+this.perm[1+s+this.perm[1+o]]]%12,d=this.perm[1+r+this.perm[s+this.perm[o]]]%12,c=this.perm[1+r+this.perm[s+this.perm[1+o]]]%12,f=this.perm[1+r+this.perm[1+s+this.perm[o]]]%12,o=this.perm[1+r+this.perm[1+s+this.perm[1+o]]]%12,n=this.dot(this.grad3[n],t,i,e),d=this.dot(this.grad3[d],t-1,i,e),h=this.dot(this.grad3[h],t,i-1,e),f=this.dot(this.grad3[f],t-1,i-1,e),a=this.dot(this.grad3[a],t,i,e-1),c=this.dot(this.grad3[c],t-1,i,e-1),p=this.dot(this.grad3[p],t,i-1,e-1),o=this.dot(this.grad3[o],t-1,i-1,e-1),t=this.fade(t),i=this.fade(i),e=this.fade(e),d=this.mix(n,d,t),c=this.mix(a,c,t),f=this.mix(h,f,t),t=this.mix(p,o,t),f=this.mix(d,f,i),i=this.mix(c,t,i);return this.mix(f,i,e)};var canvas,ctx,segmentSize,number,n,prop=new Properties;function init(){number=0,iterate()}function calculateResize(){canvas.width=$(window).width(),canvas.height=$(window).height()/2,segmentSize=distance(0,canvas.height/2,canvas.width,canvas.height/2)/prop.segments}function iterate(){clearCanvas();for(var t=1;t<=Math.floor(prop.rows);t++)drawCurve(t);number+=prop.step,setTimeout(function(){iterate()},50)}function drawCurve(t){var i=canvas.height/(prop.rows+1)*t,e=n.noise(number,t*prop.lineDiff,0),r="M0,"+Math.round(i+e*prop.growth);ctx.save(),ctx.strokeStyle=prop.lineColor,ctx.lineWidth=prop.lineWidth,ctx.beginPath();for(var s=1;s<=prop.segments;s++)var o=n.noise(number,t*prop.lineDiff,s*prop.curveDiff),a=n.noise(number,t*prop.lineDiff,(s-.5)*prop.curveDiff),r=r+" S"+Math.round(segmentSize*(s-1)+segmentSize/2)+","+Math.round(i+o*prop.growth)+" "+Math.round(segmentSize*s)+","+Math.round(i+a*prop.growth);ctx.stroke(new Path2D(r)),ctx.restore()}function clearCanvas(){ctx.save(),ctx.fillStyle=prop.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height),ctx.restore()}function distance(t,i,e,r){return Math.sqrt((e-=t)*e+(r-=i)*r)}$(document).ready(function(){var t=new dat.GUI,i=t.add(prop,"segments",1,15).step(1);t.add(prop,"growth",1,1e3),t.add(prop,"step",.01,1),t.add(prop,"rows",1,100).step(1),t.add(prop,"lineDiff",.001,1),t.add(prop,"curveDiff",.001,1),t.add(prop,"lineWidth",1,10),t.addColor(prop,"lineColor"),t.addColor(prop,"bgColor"),this.curveDiff=1,canvas=document.getElementById("myCanvas"),calculateResize(),ctx=canvas.getContext("2d"),n=new ClassicalNoise,init(),i.onChange(function(){calculateResize()}),$(window).resize(function(){calculateResize()})});
}

//canvas-1
var SEPARATION,AMOUNTX,AMOUNTY,container,stats,camera,scene,renderer,particles,particle,count,mouseX,mouseY,windowHalfX,windowHalfY;function init(){container=$("#home_wave"),(camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e4)).position.z=1e4,(scene=new THREE.Scene).fog=new THREE.Fog(1584448,2e3,1e4),particles=new Array;for(var r=2*Math.PI,e=new THREE.SpriteCanvasMaterial({color:16777215,program:function(e){e.beginPath(),e.arc(0,0,1,0,r,!0),e.fill()}}),t=0,i=0;i<AMOUNTX;i++)for(var n=0;n<AMOUNTY;n++)(particle=particles[t++]=new THREE.Sprite(e)).position.x=i*SEPARATION-AMOUNTX*SEPARATION/2,particle.position.z=n*SEPARATION-AMOUNTY*SEPARATION/2,scene.add(particle);(renderer=new THREE.CanvasRenderer({alpha:!0})).setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,600),renderer.setClearColor(scene.fog.color),container.append(renderer.domElement),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,600)}function animate(){requestAnimationFrame(animate),render()}function render(){camera.position.set(0,355,122);for(var e=0,r=0;r<AMOUNTX;r++)for(var t=0;t<AMOUNTY;t++)(particle=particles[e++]).position.y=50*Math.sin(.3*(r+count))+50*Math.sin(.5*(t+count)),particle.scale.x=particle.scale.y=4*(Math.sin(.3*(r+count))+1)+4*(Math.sin(.5*(t+count))+1);renderer.render(scene,camera),count+=.1}THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.isSpriteCanvasMaterial=!0,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return e.copy(this),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){console.log("THREE.CanvasRenderer",THREE.REVISION),e=e||{};var h,f,m,u,v,y,x,R,T,w,g,S,H,M,C,b,z,V,O,j=this,A=new THREE.Projector,i=void 0!==e.canvas?e.canvas:document.createElement("canvas"),L=i.width,P=i.height,N=Math.floor(L/2),B=Math.floor(P/2),W=0,k=0,F=L,U=P,n=1,I=i.getContext("2d",{alpha:!0===e.alpha}),t=new THREE.Color(16711680),o=1,a=1,s=0,l=null,c=null,p=null,d=null,E=null,r=[],D=new THREE.Color,G=new THREE.Color,X=new THREE.Color,Y=new THREE.Color,q={},$=new THREE.Box2,_=new THREE.Box2,J=new THREE.Box2,K=new THREE.Color,Q=new THREE.Color,Z=new THREE.Color,ee=new THREE.Vector3,re=new THREE.Vector3,te=new THREE.Vector3,ie=new THREE.Matrix3;function ne(e,r,t,i){de(r),Ee(t),he(i),fe(e.getStyle()),I.stroke(),J.expandByScalar(2*r)}function oe(e){me(e.getStyle()),I.fill()}function ae(e){if(0===e.version||e instanceof THREE.CompressedTexture||e instanceof THREE.DataTexture)return{canvas:void 0,version:e.version};var r=e.image;if(!1===r.complete)return{canvas:void 0,version:0};var t=e.wrapS===THREE.RepeatWrapping||e.wrapS===THREE.MirroredRepeatWrapping,i=e.wrapT===THREE.RepeatWrapping||e.wrapT===THREE.MirroredRepeatWrapping,n=e.wrapS===THREE.MirroredRepeatWrapping,o=e.wrapT===THREE.MirroredRepeatWrapping,a=document.createElement("canvas");a.width=r.width*(n?2:1),a.height=r.height*(o?2:1);var s=a.getContext("2d");s.setTransform(1,0,0,-1,0,r.height),s.drawImage(r,0,0),!0==n&&(s.setTransform(-1,0,0,-1,r.width,r.height),s.drawImage(r,-r.width,0)),!0==o&&(s.setTransform(1,0,0,1,0,0),s.drawImage(r,0,r.height)),!0==n&&!0==o&&(s.setTransform(-1,0,0,1,r.width,0),s.drawImage(r,-r.width,r.height));r="no-repeat";!0==t&&!0==i?r="repeat":!0==t?r="repeat-x":!0==i&&(r="repeat-y");r=I.createPattern(a,r);return e.onUpdate&&e.onUpdate(e),{canvas:r,version:e.version}}function se(e,r,t,i,n,o,a,s,l,c,p,d,E){var h=q[E.id];if(void 0!==h&&h.version===E.version||(h=ae(E),q[E.id]=h),void 0===h.canvas)return me("rgba( 0, 0, 0, 1)"),void I.fill();me(h.canvas);var f=E.offset.x/E.repeat.x,m=E.offset.y/E.repeat.y,h=E.image.width*E.repeat.x,E=E.image.height*E.repeat.y;l=(l+f)*h,c=(c+m)*E,p=(p+f)*h,d=(d+m)*E,t-=e,i-=r,n-=e,o-=r,0!=(E=(l-=a=(a+f)*h)*(d-=s=(s+m)*E)-(p-=a)*(c-=s))&&(t=e-(E=(d*t-c*n)*(e=1/E))*a-(n=(l*n-p*t)*e)*s,s=r-(c=(d*i-c*o)*e)*a-(e=(l*o-p*i)*e)*s,I.save(),I.transform(E,c,n,e,t,s),I.fill(),I.restore())}function le(e,r,t){var i=r.x-e.x,n=r.y-e.y,o=i*i+n*n;0!=o&&(i*=o=t/Math.sqrt(o),n*=o,r.x+=i,r.y+=n,e.x-=i,e.y-=n)}function ce(e){a!==e&&(I.globalAlpha=e,a=e)}function pe(e){s!==e&&(e===THREE.NormalBlending?I.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?I.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending?I.globalCompositeOperation="darker":e===THREE.MultiplyBlending&&(I.globalCompositeOperation="multiply"),s=e)}function de(e){p!==e&&(I.lineWidth=e,p=e)}function Ee(e){d!==e&&(I.lineCap=e,d=e)}function he(e){E!==e&&(I.lineJoin=e,E=e)}function fe(e){l!==e&&(I.strokeStyle=e,l=e)}function me(e){c!==e&&(I.fillStyle=e,c=e)}function ue(e){r.length!==e.length&&(I.setLineDash(e),r=e)}void 0===I.setLineDash&&(I.setLineDash=function(){}),this.domElement=i,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.supportsVertexTextures=function(){},this.setFaceCulling=function(){},this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.getPixelRatio=function(){return n},this.setPixelRatio=function(e){void 0!==e&&(n=e)},this.setSize=function(e,r,t){L=e*n,P=r*n,i.width=L,i.height=P,N=Math.floor(L/2),B=Math.floor(P/2),!1!==t&&(i.style.width=e+"px",i.style.height=r+"px"),$.min.set(-N,-B),$.max.set(N,B),_.min.set(-N,-B),_.max.set(N,B),a=1,s=0,E=d=p=c=l=null,this.setViewport(0,0,e,r)},this.setViewport=function(e,r,t,i){W=e*n,k=r*n,F=t*n,U=i*n},this.setScissor=function(){},this.setScissorTest=function(){},this.setClearColor=function(e,r){t.set(e),o=void 0!==r?r:1,_.min.set(-N,-B),_.max.set(N,B)},this.setClearColorHex=function(e,r){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),this.setClearColor(e,r)},this.getClearColor=function(){return t},this.getClearAlpha=function(){return o},this.getMaxAnisotropy=function(){return 0},this.clear=function(){!1===_.isEmpty()&&(_.intersect($),_.expandByScalar(2),_.min.x=_.min.x+N,_.min.y=-_.min.y+B,_.max.x=_.max.x+N,_.max.y=-_.max.y+B,o<1&&I.clearRect(0|_.min.x,0|_.max.y,_.max.x-_.min.x|0,_.min.y-_.max.y|0),0<o&&(pe(THREE.NormalBlending),ce(1),me("rgba("+Math.floor(255*t.r)+","+Math.floor(255*t.g)+","+Math.floor(255*t.b)+","+o+")"),I.fillRect(0|_.min.x,0|_.max.y,_.max.x-_.min.x|0,_.min.y-_.max.y|0)),_.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,r){if(void 0!==r.isCamera){var t=e.background;t&&t.isColor?(me("rgb(0,0,0)"),I.fillRect(0,0,L,P)):!0===this.autoClear&&this.clear(),j.info.render.vertices=0,j.info.render.faces=0,I.setTransform(F/L,0,0,-U/P,W,P-k),I.translate(N,B),h=A.projectScene(e,r,this.sortObjects,this.sortElements),f=h.elements,m=h.lights,ie.getNormalMatrix(r.matrixWorldInverse),function(){K.setRGB(0,0,0),Q.setRGB(0,0,0),Z.setRGB(0,0,0);for(var e=0,r=m.length;e<r;e++){var t=m[e],i=t.color;t.isAmbientLight?K.add(i):t.isDirectionalLight?Q.add(i):t.isPointLight&&Z.add(i)}}();for(var i,n,o,a,s,l,c=0,p=f.length;c<p;c++){var d=f[c],E=d.material;if(void 0!==E&&0!==E.opacity){if(J.makeEmpty(),d instanceof THREE.RenderableSprite)(u=d).x*=N,u.y*=B,function(e,r,t){ce(t.opacity),pe(t.blending);var i,n,o,a,s=r.scale.x*N,l=r.scale.y*B,c=Math.sqrt(s*s+l*l);J.min.set(e.x-c,e.y-c),J.max.set(e.x+c,e.y+c),t.isSpriteMaterial?null!==(a=t.map)?(void 0!==(n=q[a.id])&&n.version===a.version||(n=ae(a),q[a.id]=n),void 0!==n.canvas&&(me(n.canvas),o=a.image,i=o.width*a.offset.x,r=o.height*a.offset.y,c=o.width*a.repeat.x,n=o.height*a.repeat.y,o=s/c,a=l/n,I.save(),I.translate(e.x,e.y),0!==t.rotation&&I.rotate(t.rotation),I.translate(-s/2,-l/2),I.scale(o,a),I.translate(-i,-r),I.fillRect(i,r,c,n),I.restore())):(me(t.color.getStyle()),I.save(),I.translate(e.x,e.y),0!==t.rotation&&I.rotate(t.rotation),I.scale(s,-l),I.fillRect(-.5,-.5,1,1),I.restore()):t.isSpriteCanvasMaterial?(fe(t.color.getStyle()),me(t.color.getStyle()),I.save(),I.translate(e.x,e.y),0!==t.rotation&&I.rotate(t.rotation),I.scale(s,l),t.program(I),I.restore()):t.isPointsMaterial&&(me(t.color.getStyle()),I.save(),I.translate(e.x,e.y),0!==t.rotation&&I.rotate(t.rotation),I.scale(s*t.size,-l*t.size),I.fillRect(-.5,-.5,1,1),I.restore())}(u,d,E);else if(d instanceof THREE.RenderableLine)u=d.v1,v=d.v2,u.positionScreen.x*=N,u.positionScreen.y*=B,v.positionScreen.x*=N,v.positionScreen.y*=B,J.setFromPoints([u.positionScreen,v.positionScreen]),!0===$.intersectsBox(J)&&function(e,r,t,i){if(ce(i.opacity),pe(i.blending),I.beginPath(),I.moveTo(e.positionScreen.x,e.positionScreen.y),I.lineTo(r.positionScreen.x,r.positionScreen.y),i.isLineBasicMaterial){if(de(i.linewidth),Ee(i.linecap),he(i.linejoin),i.vertexColors!==THREE.VertexColors)fe(i.color.getStyle());else{var n=t.vertexColors[0].getStyle(),o=t.vertexColors[1].getStyle();if(n===o)fe(n);else{try{var a=I.createLinearGradient(e.positionScreen.x,e.positionScreen.y,r.positionScreen.x,r.positionScreen.y);a.addColorStop(0,n),a.addColorStop(1,o)}catch(e){a=n}fe(a)}}I.stroke(),J.expandByScalar(2*i.linewidth)}else i.isLineDashedMaterial&&(de(i.linewidth),Ee(i.linecap),he(i.linejoin),fe(i.color.getStyle()),ue([i.dashSize,i.gapSize]),I.stroke(),J.expandByScalar(2*i.linewidth),ue([]))}(u,v,d,E);else if(d instanceof THREE.RenderableFace){if(u=d.v1,v=d.v2,y=d.v3,u.positionScreen.z<-1||1<u.positionScreen.z)continue;if(v.positionScreen.z<-1||1<v.positionScreen.z)continue;if(y.positionScreen.z<-1||1<y.positionScreen.z)continue;u.positionScreen.x*=N,u.positionScreen.y*=B,v.positionScreen.x*=N,v.positionScreen.y*=B,y.positionScreen.x*=N,y.positionScreen.y*=B,0<E.overdraw&&(le(u.positionScreen,v.positionScreen,E.overdraw),le(v.positionScreen,y.positionScreen,E.overdraw),le(y.positionScreen,u.positionScreen,E.overdraw)),J.setFromPoints([u.positionScreen,v.positionScreen,y.positionScreen]),!0===$.intersectsBox(J)&&(i=u,n=v,o=y,a=0,s=1,l=2,d=d,E=E,j.info.render.vertices+=3,j.info.render.faces++,ce(E.opacity),pe(E.blending),x=i.positionScreen.x,R=i.positionScreen.y,T=n.positionScreen.x,w=n.positionScreen.y,g=o.positionScreen.x,S=o.positionScreen.y,function(e,r,t,i,n,o){I.beginPath(),I.moveTo(e,r),I.lineTo(t,i),I.lineTo(n,o),I.closePath()}(x,R,T,w,g,S),(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial)&&null===E.map?(G.copy(E.color),X.copy(E.emissive),E.vertexColors===THREE.FaceColors&&G.multiply(d.color),D.copy(K),re.copy(i.positionWorld).add(n.positionWorld).add(o.positionWorld).divideScalar(3),function(e,r,t){for(var i=0,n=m.length;i<n;i++){var o,a,s=m[i];Y.copy(s.color),s.isDirectionalLight?(o=ee.setFromMatrixPosition(s.matrixWorld).normalize(),(a=r.dot(o))<=0||(a*=s.intensity,t.add(Y.multiplyScalar(a)))):s.isPointLight&&(o=ee.setFromMatrixPosition(s.matrixWorld),(a=r.dot(ee.subVectors(o,e).normalize()))<=0||0!=(a*=0==s.distance?1:1-Math.min(e.distanceTo(o)/s.distance,1))&&(a*=s.intensity,t.add(Y.multiplyScalar(a))))}}(re,d.normalModel,D),D.multiply(G).add(X),!0===E.wireframe?ne(D,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):oe(D)):E.isMeshBasicMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial?null!==E.map?E.map.mapping===THREE.UVMapping&&(H=d.uvs,se(x,R,T,w,g,S,H[a].x,H[a].y,H[s].x,H[s].y,H[l].x,H[l].y,E.map)):null!==E.envMap?E.envMap.mapping===THREE.SphericalReflectionMapping&&(te.copy(d.vertexNormalsModel[a]).applyMatrix3(ie),M=.5*te.x+.5,C=.5*te.y+.5,te.copy(d.vertexNormalsModel[s]).applyMatrix3(ie),b=.5*te.x+.5,z=.5*te.y+.5,te.copy(d.vertexNormalsModel[l]).applyMatrix3(ie),V=.5*te.x+.5,O=.5*te.y+.5,se(x,R,T,w,g,S,M,C,b,z,V,O,E.envMap)):(D.copy(E.color),E.vertexColors===THREE.FaceColors&&D.multiply(d.color),!0===E.wireframe?ne(D,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):oe(D)):(E.isMeshNormalMaterial?(te.copy(d.normalModel).applyMatrix3(ie),D.setRGB(te.x,te.y,te.z).multiplyScalar(.5).addScalar(.5)):D.setRGB(1,1,1),!0===E.wireframe?ne(D,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):oe(D)))}_.union(J)}}I.setTransform(1,0,0,1,0,0)}else console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")}},THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){var r,_,o,J,K,Q,Z,ee,n,re,te,t=[],i=0,ie=[],a=0,s=[],l=0,c=[],p=0,d=[],E=0,ne={objects:[],lights:[],elements:[]},oe=new THREE.Vector3,ae=new THREE.Vector4,m=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),u=new THREE.Box3,v=new Array(3),se=new THREE.Matrix4,le=new THREE.Matrix4,ce=new THREE.Matrix4,pe=new THREE.Matrix3,de=new THREE.Frustum,Ee=new THREE.Vector4,he=new THREE.Vector4;this.projectVector=function(e,r){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(r)},this.unprojectVector=function(e,r){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(r)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var fe=new function(){var l=[],n=[],c=[],p=null,d=null,E=new THREE.Matrix3;function i(e){var r=e.position,t=e.positionWorld,i=e.positionScreen;t.copy(r).applyMatrix4(te),i.copy(t).applyMatrix4(le);t=1/i.w;i.x*=t,i.y*=t,i.z*=t,e.visible=-1<=i.x&&i.x<=1&&-1<=i.y&&i.y<=1&&-1<=i.z&&i.z<=1}function h(e,r,t){return!0===e.visible||!0===r.visible||!0===t.visible||(v[0]=e.positionScreen,v[1]=r.positionScreen,v[2]=t.positionScreen,m.intersectsBox(u.setFromPoints(v)))}function f(e,r,t){return(t.positionScreen.x-e.positionScreen.x)*(r.positionScreen.y-e.positionScreen.y)-(t.positionScreen.y-e.positionScreen.y)*(r.positionScreen.x-e.positionScreen.x)<0}return{setObject:function(e){d=(p=e).material,E.getNormalMatrix(p.matrixWorld),l.length=0,n.length=0,c.length=0},projectVertex:i,checkTriangleVisibility:h,checkBackfaceCulling:f,pushVertex:function(e,r,t){(o=ve()).position.set(e,r,t),i(o)},pushNormal:function(e,r,t){l.push(e,r,t)},pushColor:function(e,r,t){n.push(e,r,t)},pushUv:function(e,r){c.push(e,r)},pushLine:function(e,r){var t=ie[e],i=ie[r];t.positionScreen.copy(t.position).applyMatrix4(ce),i.positionScreen.copy(i.position).applyMatrix4(ce),!0===Te(t.positionScreen,i.positionScreen)&&(t.positionScreen.multiplyScalar(1/t.positionScreen.w),i.positionScreen.multiplyScalar(1/i.positionScreen.w),(Z=xe()).id=p.id,Z.v1.copy(t),Z.v2.copy(i),Z.z=Math.max(t.positionScreen.z,i.positionScreen.z),Z.renderOrder=p.renderOrder,Z.material=p.material,p.material.vertexColors===THREE.VertexColors&&(Z.vertexColors[0].fromArray(n,3*e),Z.vertexColors[1].fromArray(n,3*r)),ne.elements.push(Z))},pushTriangle:function(e,r,t){var i=ie[e],n=ie[r],o=ie[t];if(!1!==h(i,n,o)&&(d.side===THREE.DoubleSide||!0===f(i,n,o))){(K=ye()).id=p.id,K.v1.copy(i),K.v2.copy(n),K.v3.copy(o),K.z=(i.positionScreen.z+n.positionScreen.z+o.positionScreen.z)/3,K.renderOrder=p.renderOrder,K.normalModel.fromArray(l,3*e),K.normalModel.applyMatrix3(E).normalize();for(var a=0;a<3;a++){var s=K.vertexNormalsModel[a];s.fromArray(l,3*arguments[a]),s.applyMatrix3(E).normalize(),K.uvs[a].fromArray(c,2*arguments[a])}K.vertexNormalsLength=3,K.material=p.material,ne.elements.push(K)}}}};function me(e){(r=function(){if(_!==i)return t[_++];var e=new THREE.RenderableObject;return t.push(e),i++,_++,e}()).id=e.id,r.object=e,oe.setFromMatrixPosition(e.matrixWorld),oe.applyMatrix4(le),r.z=oe.z,r.renderOrder=e.renderOrder,ne.objects.push(r)}function ue(e,r,t){var i=1/e.w;e.z*=i,-1<=e.z&&e.z<=1&&((n=function(){if(re!==E)return d[re++];var e=new THREE.RenderableSprite;return d.push(e),E++,re++,e}()).id=r.id,n.x=e.x*i,n.y=e.y*i,n.z=e.z,n.renderOrder=r.renderOrder,n.object=r,n.rotation=r.rotation,n.scale.x=r.scale.x*Math.abs(n.x-(e.x+t.projectionMatrix.elements[0])/(e.w+t.projectionMatrix.elements[12])),n.scale.y=r.scale.y*Math.abs(n.y-(e.y+t.projectionMatrix.elements[5])/(e.w+t.projectionMatrix.elements[13])),n.material=r.material,ne.elements.push(n))}function ve(){if(J!==a)return ie[J++];var e=new THREE.RenderableVertex;return ie.push(e),a++,J++,e}function ye(){if(Q!==l)return s[Q++];var e=new THREE.RenderableFace;return s.push(e),l++,Q++,e}function xe(){if(ee!==p)return c[ee++];var e=new THREE.RenderableLine;return c.push(e),p++,ee++,e}function Re(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.z!==r.z?r.z-e.z:e.id!==r.id?e.id-r.id:0}function Te(e,r){var t=0,i=1,n=e.z+e.w,o=r.z+r.w,a=-e.z+e.w,s=-r.z+r.w;return 0<=n&&0<=o&&0<=a&&0<=s||!(n<0&&o<0||a<0&&s<0)&&(n<0?t=Math.max(t,n/(n-o)):o<0&&(i=Math.min(i,n/(n-o))),a<0?t=Math.max(t,a/(a-s)):s<0&&(i=Math.min(i,a/(a-s))),!(i<t)&&(e.lerp(r,t),r.lerp(e,1-i),!0))}this.projectScene=function(e,r,t,i){re=ee=Q=0,!(ne.elements.length=0)===e.autoUpdate&&e.updateMatrixWorld(),null===r.parent&&r.updateMatrixWorld(),se.copy(r.matrixWorldInverse),le.multiplyMatrices(r.projectionMatrix,se),de.setFromMatrix(le),_=0,ne.objects.length=0,ne.lights.length=0,function e(r){if(!1!==r.visible){if(r instanceof THREE.Light)ne.lights.push(r);else if(r instanceof THREE.Mesh||r instanceof THREE.Line||r instanceof THREE.Points){if(!1===r.material.visible)return;if(!0===r.frustumCulled&&!1===de.intersectsObject(r))return;me(r)}else if(r instanceof THREE.Sprite){if(!1===r.material.visible)return;if(!0===r.frustumCulled&&!1===de.intersectsSprite(r))return;me(r)}for(var t=r.children,i=0,n=t.length;i<n;i++)e(t[i])}}(e),!0===t&&ne.objects.sort(Re);for(var n=ne.objects,o=0,a=n.length;o<a;o++){var s=n[o].object,l=s.geometry;if(fe.setObject(s),te=s.matrixWorld,J=0,s instanceof THREE.Mesh){if(l instanceof THREE.BufferGeometry){var c=l.attributes,p=l.groups;if(void 0!==c.position){for(var d=0,E=($=c.position.array).length;d<E;d+=3)fe.pushVertex($[d],$[d+1],$[d+2]);if(void 0!==c.normal)for(var h=c.normal.array,d=0,E=h.length;d<E;d+=3)fe.pushNormal(h[d],h[d+1],h[d+2]);if(void 0!==c.uv)for(var f=c.uv.array,d=0,E=f.length;d<E;d+=2)fe.pushUv(f[d],f[d+1]);if(null!==l.index){var m=l.index.array;if(0<p.length)for(var u=0;u<p.length;u++)for(var v=p[u],d=v.start,E=v.start+v.count;d<E;d+=3)fe.pushTriangle(m[d],m[d+1],m[d+2]);else for(d=0,E=m.length;d<E;d+=3)fe.pushTriangle(m[d],m[d+1],m[d+2])}else for(d=0,E=$.length/3;d<E;d+=3)fe.pushTriangle(d,d+1,d+2)}}else if(l instanceof THREE.Geometry){var y=l.vertices,x=l.faces,R=l.faceVertexUvs[0];pe.getNormalMatrix(te);for(var T=s.material,w=Array.isArray(T),g=0,S=y.length;g<S;g++){var H=y[g];if(oe.copy(H),!0===T.morphTargets)for(var M=l.morphTargets,C=s.morphTargetInfluences,b=0,z=M.length;b<z;b++){var V,O=C[b];0!==O&&(V=M[b].vertices[g],oe.x+=(V.x-H.x)*O,oe.y+=(V.y-H.y)*O,oe.z+=(V.z-H.z)*O)}fe.pushVertex(oe.x,oe.y,oe.z)}for(var j=0,A=x.length;j<A;j++){var L=x[j];if(void 0!==(T=!0===w?s.material[L.materialIndex]:s.material)){var P=T.side,N=ie[L.a],B=ie[L.b],W=ie[L.c];if(!1!==fe.checkTriangleVisibility(N,B,W)){var k=fe.checkBackfaceCulling(N,B,W);if(P!==THREE.DoubleSide){if(P===THREE.FrontSide&&!1===k)continue;if(P===THREE.BackSide&&!0===k)continue}(K=ye()).id=s.id,K.v1.copy(N),K.v2.copy(B),K.v3.copy(W),K.normalModel.copy(L.normal),!1!==k||P!==THREE.BackSide&&P!==THREE.DoubleSide||K.normalModel.negate(),K.normalModel.applyMatrix3(pe).normalize();for(var F=L.vertexNormals,U=0,I=Math.min(F.length,3);U<I;U++){var D=K.vertexNormalsModel[U];D.copy(F[U]),!1!==k||P!==THREE.BackSide&&P!==THREE.DoubleSide||D.negate(),D.applyMatrix3(pe).normalize()}K.vertexNormalsLength=F.length;var G=R[j];if(void 0!==G)for(var X=0;X<3;X++)K.uvs[X].copy(G[X]);K.color=L.color,K.material=T,K.z=(N.positionScreen.z+B.positionScreen.z+W.positionScreen.z)/3,K.renderOrder=s.renderOrder,ne.elements.push(K)}}}}}else if(s instanceof THREE.Line){if(ce.multiplyMatrices(le,te),l instanceof THREE.BufferGeometry){if(void 0!==(c=l.attributes).position){for(d=0,E=($=c.position.array).length;d<E;d+=3)fe.pushVertex($[d],$[d+1],$[d+2]);if(void 0!==c.color)for(var Y=c.color.array,d=0,E=Y.length;d<E;d+=3)fe.pushColor(Y[d],Y[d+1],Y[d+2]);if(null!==l.index)for(d=0,E=(m=l.index.array).length;d<E;d+=2)fe.pushLine(m[d],m[d+1]);else for(var q=s instanceof THREE.LineSegments?2:1,d=0,E=$.length/3-1;d<E;d+=q)fe.pushLine(d,d+1)}}else if(l instanceof THREE.Geometry)if(0!==(y=s.geometry.vertices).length){(N=ve()).positionScreen.copy(y[0]).applyMatrix4(ce);for(q=s instanceof THREE.LineSegments?2:1,g=1,S=y.length;g<S;g++)(N=ve()).positionScreen.copy(y[g]).applyMatrix4(ce),0<(g+1)%q||(B=ie[J-2],Ee.copy(N.positionScreen),he.copy(B.positionScreen),!0===Te(Ee,he)&&(Ee.multiplyScalar(1/Ee.w),he.multiplyScalar(1/he.w),(Z=xe()).id=s.id,Z.v1.positionScreen.copy(Ee),Z.v2.positionScreen.copy(he),Z.z=Math.max(Ee.z,he.z),Z.renderOrder=s.renderOrder,Z.material=s.material,s.material.vertexColors===THREE.VertexColors&&(Z.vertexColors[0].copy(s.geometry.colors[g]),Z.vertexColors[1].copy(s.geometry.colors[g-1])),ne.elements.push(Z)))}}else if(s instanceof THREE.Points){if(ce.multiplyMatrices(le,te),l instanceof THREE.Geometry)for(g=0,S=(y=s.geometry.vertices).length;g<S;g++){H=y[g];ae.set(H.x,H.y,H.z,1),ae.applyMatrix4(ce),ue(ae,s,r)}else if(l instanceof THREE.BufferGeometry)if(void 0!==(c=l.attributes).position)for(var $,d=0,E=($=c.position.array).length;d<E;d+=3)ae.set($[d],$[d+1],$[d+2],1),ae.applyMatrix4(ce),ue(ae,s,r)}else s instanceof THREE.Sprite&&(ae.set(te.elements[12],te.elements[13],te.elements[14],1),ae.applyMatrix4(le),ue(ae,s,r))}return!0===i&&ne.elements.sort(Re),ne}},0<$("#home_wave").length&&(SEPARATION=200,AMOUNTX=40,AMOUNTY=60,mouseY=mouseX=count=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,init(),animate());

///canvas-5

var a,ab;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)};var c=460,ax=460,bx=460,cx=90,dx=ax/2,ex=bx/2,sl=0,st=-15,sb=0,u=0;function draw(){a=document.getElementById("wave4"),ab=a.getContext("2d"),setInterval(X,60)}function Sa(a,e,n){var t=c/(c+n);return[(a-dx)*t+dx,(e-ex)*t+ex-.01*n]}function j(a,e){return 2.55*(Math.sin(.172*e)+Math.sin(.2*(a+.347*e)))}function X(){ab.fillStyle="rgba(24, 45, 64, .65)",ab.fillRect(0,0,ax,bx),sb+=1,sl+=1,ab.lineWidth=.22;for(var a=ax/cx,e=sl%1*cx,n=sb%1*cx,t=[0,0],i=100;10<=i;i--){ab.beginPath();var o=1.25*i,r=i*cx-n,s=!1;ab.strokeStyle="rgba(360,255,255,1)";for(var x=!0,b=-o;b<=a+o;b++){var m=j(b+sl,sb+i);(t=Sa(b*cx-e,(m-st)*cx,r))[1]>ax?t[1]=bx:t[1]<0?t[1]=0:s=!0,x?(ab.moveTo(t[0],t[1]),x=!1):ab.lineTo(t[0],t[1])}s&&ab.stroke()}}window.requestAnimFrame(draw);





}(jQuery));



