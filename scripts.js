$(document).ready(function(){
  $('.bank__link').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.bank__item'),
        container = $this.closest('.wrapper'),
        contentItems = container.find('.content__item'),
        active = contentItems.filter('.active'),
        href = $this.attr('href'),
        reqItem = contentItems.filter('.content__item_' + href),
        duration = 400;
    
      item.addClass('active').siblings().removeClass('active');
      active.stop(true).fadeOut(duration, function(){
        reqItem.stop(true).fadeIn(duration).addClass('active').siblings().removeClass('active')
      })
  })
});


(function(){
  $('.review__button').on('click', function(){
    var $this = $(this),
        wrapper = $this.closest('.wrapper'),
        cover = wrapper.closest('body').find('.popup__full_cover');
    cover.fadeIn()
    wrapper.addClass('blur')
  })
  $('.popup__close').on('click', function(e){
    e.preventDefault();
    var $this = $(this),
        cover = $this.closest('.popup__full_cover'),
        wrapper = cover.closest('body').find('.wrapper')
    cover.fadeOut();
    wrapper.removeClass('blur')
  })
})()

$(document).ready(function(){
  $('.question__show').on('click', function(e){
    e.preventDefault();
    var list = $('.question__list');
    if(list.hasClass('hidden')) {
      list.removeClass('hidden')
    }else{
      list.addClass('hidden')
    }

  })
})

