$(document).ready(function() {
    const tags = $(".tag");
    const homeTag = tags[0];
    $(homeTag).addClass("visible");
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
    //console.log(pageBottom);
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      }
    } 
});