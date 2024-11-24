

// $(".btn-search").click(function() {
        //     $(".search").css("display", "block").animate({ top: "0%" }, 300);
        // });

        // $(".btn-end").click(function() {
        //     $(".search").animate({ top: "-100%" }, 300, function() {
        //         $(this).css("display", "none"); // 애니메이션이 끝난 후 display: none 설정
        //     });
        // });

        $(".btn-search").click(function(){
            $(".search").animate({top : "0%"});
        });

        $(".btn-end").click(function(){
            $(".search").animate({top : "-100%"});
        });

        $(".btn-menu").click(function(){
            $("nav").animate({right : "0%"});
        });
        $(".btn-close").click(function(){
            $("nav").animate({right : "-100%"});
        });

        $(document).ready(function(){
            function menuHandler(){
                if ($(window).width() <= 1200){
                    $('.menu>li>a').off('click').on('click', function(e){
                        e.preventDefault();

                        var $sub = $(this).next('.sub');

                        $('.sub').not($sub).slideUp();
                        $sub.stop(true, true).slideToggle();
                    });
                } else {
                    $('.menu>li>a').off('click');
                    $('.sub').removeAttr('style');
                }
            }

            $(window).resize(menuHandler);
            menuHandler();
        });

        $(window).resize(function() {
            if ($(window).width() >= 1200) {
                $(".menu>li").mouseover(function() {
                    $(".sub").stop().slideDown(200);
                }).mouseout(function() {
                    $(".sub").stop().slideUp(200);
                });
            } else {
                
                $(".menu>li").off("mouseover mouseout");
            }
        }).resize();

        var swiper = new Swiper(".mySwiper_s1", {
            cssMode: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".s1_swiper-button-next",
                prevEl: ".s1_swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            mousewheel: true,
            keyboard: true,
        });

        var swiper = new Swiper(".mySwiper_s4", {
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop:true,
        });

        $(".s4 .tab li").on("click", function(){
            $(this).toggleClass("on");
            $(this).siblings().removeClass("on");
            const i = $(this).index();
            if(i === 0) {
                $(".notice").show();
                $(".festival").hide();
            } else if (i === 1) {
                $(".notice").hide();
                $(".festival").show();
            }
        });

        var swiper = new Swiper(".mySwiper_news", {
            slidesPerView: 1.2,
            spaceBetween: 12,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
            loop:true,
        });

        var imgslide = new Swiper(".myimgslide", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".imgslide .swiper-button-next",
                prevEl: ".imgslide .swiper-button-prev",
            },
        });

        var swiper2 = new Swiper(".mySwiper_s5", {
            spaceBetween: 10,
            effect: "fade",
            //   noSwiping : false,
                allowTouchMove : false,
                watchSlidesProgress: true,
        });

        var swiper = new Swiper(".mySwiper_s5_2", {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                nextEl: ".mySwiper_s5_2 .swiper-button-next",
                prevEl: ".mySwiper_s5_2 .swiper-button-prev",
            },
            loop: true,
            thumbs: {
                swiper: swiper2,
            },
            watchSlidesProgress: false,
        });

        const testSlider = new Swiper(".mySwiper_s6", {
            breakpoints: {
                1200: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    loop: true,
                },
                
            },
            pagination:{
                clickable: true,
            },
            navigation: {
            nextEl: ".mySwiper_s6 .swiper-button-next",
            prevEl: ".mySwiper_s6 .swiper-button-prev",
        },
            on : {
                breakpoint : function(s, b) {
                    if(s.currentBreakpoint === "1200") {
                        s.enable();
                        console.log("over 1200" , s,b);
                    } else {
                        s.disable();
                        console.log("under 1200", s,b);
                    }
                }
            }
        });

        var swiper = new Swiper(".mySwiper_s7", {
            slidesPerView: 1.2,
            spaceBetween: 30,
            navigation: {
                nextEl: ".mySwiper_s7 .swiper-button-next",
                prevEl: ".mySwiper_s7 .swiper-button-prev",
            },
            breakpoints: {
                600: {
                    slidesPerView: 2.2,
                    slideOffsetAfter: 10,
                },

                927: {
                    slidesPerView: 3.2,
                    slideOffsetAfter: 10,
                },

                1200: {
                    slidesPerView: 4,
                    slideOffsetAfter: 10,
                }
            },
        });

        // $(document).ready(function(){
        //     $(".site1>button").click(function(){
        //         $(".site1_list").addClass("active")
        //     });

        //     $("#site1_bg").click(function(e){
        //         if ($(e.target).is("#site1_bg")){
        //             $("#site1_bg").removeClass("active");
        //         }
        //     });
        // });

        // $(document).ready(function(){
        //     $(".site3>button").click(function(){
        //         $(".site3_list").addClass("active")
        //     });

        //     $("#site3_bg").click(function(e){
        //         if ($(e.target).is("#site3_bg")){
        //             $("#site3_bg").removeClass("active");
        //         }
        //     });
        // });

        $(document).ready(function(){
            function applyPopupEvents() {
                if ($(window).width() <= 1199){
                    $(".site1>button").click(function(){
                        $(".site1_list").addClass("active");
                    });

                    $("#site1_bg").click(function(e){
                        if ($(e.target).is("#site1_bg")){
                            $("#site1_bg").removeClass("active");
                        }
                    });

                    $(".site3>button").click(function(){
                        $(".site3_list").addClass("active");
                    });

                    $("#site3_bg").click(function(e){
                        if ($(e.target).is("#site3_bg")){
                            $("#site3_bg").removeClass("active");
                        }
                    });
                } else {
            
                    $(".site1>button").off("click");
                    $("#site1_bg").off("click");
                    $(".site3>button").off("click");
                    $("#site3_bg").off("click");
                }
            } 

            applyPopupEvents();

            $(window).resize(function(){
                applyPopupEvents();
            });
        });

        // $(document).ready(function(){
        //     $(".site1_btn").click(function(){
        //         $(".site1_list").slideToggle(300);
        //     });
        // });

        $(document).ready(function(){
            $(".site1_btn").click(function(){
                const $list = $(".site1_list");

                if ($list.is(":visible")){
                    $list.animate({
                        opacity: 0,
                        marginTop: "0px",
                    }, 300, function(){
                        $list.css("display", "none");
                    });
                } else {
                    $list.css({
                        display : "block",
                        opacity: 0,
                        marginTop : "0px",
                    }).animate({
                        opacity: 1,
                        marginTop: "0px",
                    }, 300)
                }
            });

            $(".site3_btn").click(function(){
                const $list = $(".site3_list");

                if ($list.is(":visible")){
                    $list.animate({
                        opacity: 0,
                        marginTop: "0px",
                    }, 300, function(){
                        $list.css("display", "none");
                    });
                } else {
                    $list.css({
                        display : "block",
                        opacity: 0,
                        marginTop : "0px",
                    }).animate({
                        opacity: 1,
                        marginTop: "0px",
                    }, 300)
                }
            });
        });