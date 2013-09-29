(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

jQuery(function($) {
  $('a:not([href*="'+document.domain+'"])').mousedown(function(event){
    var link = $(this)
    var href = link.attr('href')
    if(href.match(/^mailto:/i)) {
      var noProtocol = unescape(href.replace(/mailto:/i, ''))
      ga('send', 'event', 'email', 'click', noProtocol, { nonInteraction: true })
    } else if(href.match(/^https?:/i)) {
      var noProtocol = href.replace(/http[s]?:\/\//i, '')
      ga('send', 'event', 'external', 'click', noProtocol, { nonInteraction: true })
    }
  })
})
