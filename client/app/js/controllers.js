function CurrentCtrl($scope, Weather){
    //$scope.temperature = {data: 33, dt: '12:33:22'};
    $scope.temperature = Weather.latest({type: 'temperature'});
    $scope.humidity = Weather.latest({type: 'humidity'});
}
function HistoryCtrl($scope, $filter, Weather){
    //$scope.temperature = {data: 33, dt: '12:33:22'};
    $scope.wtype = 'temperature';
    $scope.options = {
        bezierCurve: false,
        showTooltips: true,
        scaleShowHorizontalLines: true,
        //scaleShowLabels: true,
        scaleType: "date",
        //scaleLabel: "<%=value%>°C"
        scaleDateFormat: "mmm d",
        scaleTimeFormat: "h:MM",
        scaleDateTimeFormat: "mmm d, yyyy, hh:MM",
    };
    $scope.type = 'Scatter';
    $scope.data = [
        {
            label: $scope.wtype,
            strokeColor: '#F16220',
            pointColor: '#F16220',
            pointStrokeColor: '#fff',
            data: [],
        }
    ];
    //$scope.series = [$scope.wtype];
    //$scope.labels = [];
    $scope.onTypeChange = function() {
        Weather.history({type: $scope.wtype}, function(data) {
            //$scope.data = data;
            $scope.data[0].data = [];
            for (var i=0; i < data.length; i++) {
                //$scope.labels.unshift($filter('date')(data[i].dt,'dd MMM HH:mm'));
                $scope.data[0].data.unshift({x: new Date(data[i].dt), y: data[i].data});
            }
        });
    };

    $scope.onTypeChange();

}
/**
 *  *
 *   * Pass all functions into module
 *    */
angular
    .module('tempmon')
    .controller('CurrentCtrl', CurrentCtrl)
    .controller('HistoryCtrl', HistoryCtrl);
