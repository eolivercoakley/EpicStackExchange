/**
 * Created by ecoakley on 8/28/2014.
 */
var stackExchangeApp = angular.module('stackExchangeApp', []);

stackExchangeApp.controller('LoginController', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});