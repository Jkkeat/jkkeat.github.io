
$(window).load(function()
{
    $l = $('.left')
    $r = $('.right')
    $l.mouseenter(function(){
      $('.container').addClass('left-is-hovered');
      let videoleft = document.getElementById("videoleft");
      videoleft.play();
    })
    .mouseleave(function() {
      $('.container').removeClass('left-is-hovered');
      let videoleft = document.getElementById("videoleft");
      videoleft.pause();
    });
    
    $r.mouseenter(function() {
      $('.container').addClass('right-is-hovered');
      let videoleft = document.getElementById("videoright");
      videoleft.play();
    }).mouseleave(function() {
      $('.container').removeClass('right-is-hovered');
      let videoleft = document.getElementById("videoright");
      videoleft.pause();
    });
});
