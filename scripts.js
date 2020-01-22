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