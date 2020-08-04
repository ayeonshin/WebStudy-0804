$(document).ready(function(){
    (function(){
        $.fn.writeText = function(content){
            var contentArray = content.split(""),
            current =0;
            elem = this;
            setInterval(function(){
                if(current < contentArray.length){
                    elem.text(elem.text() + contentArray[current++]);
                }
               
            }, 100);
        }
    })();

    $('#holder').writeText('WEB DESIGNER + FRONT + END DEVELOPER');

    new WOW().init();

    $('#fullPage').fullpage({
        scrollBar:true,
        responsiveWidth:400,
        navigation:true,
        navigationTooltips:['Home','About','Portfolio','Contact','Connect'],
        anchors:['home','about','portfolio','contact','connect'],
        menu:'#myMenu',
        fitToSection:false,
        afterLoad:function(anchorLink, index){
            var loadedSection = $(this);
            if(index==1){
                $('.fa-chevron-down').each(function(){ $(this).css('opacity','0.5') });
                $('.header-links a').each(function(){ $(this).css('color','white') });
                $('.header-links').css('background-color','transparent');
            }
            else if(index!==1){
                $('.header-links a').each(function(){ $(this).css('color','black') });
                $('.header-links').css('background-color','white');
            }// index ==1일때 

            if(index==2){
                $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    },2500);
                });
            }
        }
        // fullpage js에서 afterLoad는 로드후에 실행하라 뜻
        
        
    });//fullpage end
    $(document).on('click','#moveDown',function(){
        $.fn.fullpage.moveSectionDown();
    });

    $(document).on('click','#skills',function(){
        $.fn.fullpage.moveTo(2);
    });

    $(document).on('click','#projects',function(){
        $.fn.fullpage.moveTo(3);
    });

    $(document).on('click','#contact',function(){
        $.fn.fullpage.moveTo(4);
    });

    var main = function(){
        $('.fa-bars').click(function(){
            $('.nav-screen').animate({right:"0px"}, 200);
            $('body').animate({right:"285px"}, 200);
        });

        $('.fa-times').click(function(){
            $('.nav-screen').animate({right: "-285px"}, 200);
            $('body').animate({right: '0px'}, 200);
        });

        $('.nav-link a').click(function(){
            $('.nav-screen').animate({right:"-285px"}, 500);
            $('body').animate({right:"0px"}, 500);
        });
    };

    $(document).ready(main);

});