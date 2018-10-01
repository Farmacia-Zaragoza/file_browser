// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }


  // jquery contect menu plugins start Here
  $.contextMenu({
    selector: '.view-file-maneger-wrapper', 
    callback: function(key, options) {
        var m = "clicked: " + key;
        window.console && console.log(m) || alert(m); 
    },
    items: {
        "edit": {name: "Edit", icon: "edit"},
        "cut": {name: "Cut", icon: "cut"},
       copy: {name: "Copy", icon: "copy"},
        "paste": {name: "Paste", icon: "paste"},
        "delete": {name: "Delete", icon: "delete"},
        "sep1": "---------",
        "quit": {name: "Quit", icon: function(){
            return 'context-menu-icon context-menu-icon-quit';
        }}
    }
});
$('.view-file-maneger-wrapper').on('click', function(e){
  console.log('clicked', this);
})


}());




// Place any jQuery/helper plugins in here.


