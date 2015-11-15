function CurrentCtrl($scope, Temperature){
    //$scope.temperature = {data: 33, dt: '12:33:22'};
    $scope.temperature = Temperature.get();
    $scope.humidity = {data: 77, dt: '12:33:22'};
}
/**
 *  *
 *   * Pass all functions into module
 *    */
angular
    .module('tempmon')
    .controller('CurrentCtrl', CurrentCtrl);
