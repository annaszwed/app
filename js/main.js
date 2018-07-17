$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos < 100) {
                    $(".fixed-top").css('background-color', '#0ed8d6');
                }
            });
        });


