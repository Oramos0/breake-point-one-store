$('.container-card .title').each(function (idx, item) {
  var winnerId = "winner-" + idx;
   this.id = winnerId;
   $(this).click(function(){
     var btn = $("#winner-" + idx);
     var span = $(".close");
     var popId = $('#win-'+ idx);
     btn.click(function() {
        $(popId).addClass('on');
        $('body').addClass('lorem');
      }); 
      span.click(function() {
         $(popId).removeClass('on');
         $('body').removeClass('lorem');
       });
     
      
   
   });
});