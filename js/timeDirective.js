dirApp
  .directive('showTime', function(){
    return {
      template: '<div> The current time is {{time}} </div>',
      restrict: 'E',
      link: function(scope, element, attributes){
        var currentTime = new Date();
        scope.time = currentTime.toString();
      }
    };
});
