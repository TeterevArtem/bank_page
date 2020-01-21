$(document).ready(function(){
    $('.bank__link').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            content = $this.closest('.wrapper').find('.content__item'),
            active = content.filter('.active'),
            href = $this.attr('href');




    })
});