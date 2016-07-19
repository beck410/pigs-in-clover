;(function(){
    $(document).ready(function(){
        setImageDimensions();
    });

    $(window).resize(function(){
        setImageDimensions();
    });

    function setImageDimensions(){

        var browserWidth = $(window).width(),
            browserHeight = $(window).height() + addExtraPixels();

        $('.section').each(function() {
            if($(this).height() < browserHeight && browserWidth > 600) {
                $(this).css('height', browserHeight);
            } else {
                $(this).css('height', 'auto');
            }

            $(this).css('width', browserWidth);
        });
    }

    function addExtraPixels() {
        if(navigator.userAgent.indexOf('iPhone') != -1) {
          return 60;
        }

        return 0;
    };

})();
