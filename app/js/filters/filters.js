/**
 * Created by humberto.morera on 1/25/15.
 */


var customFilters = angular.module('customFilters',[]);

customFilters.filter('sexFilter', function() {

    return function(input) {
        return (input == '1') ?  'MASCULINO' : 'FEMENINO';
    };
});

customFilters.filter('vencimientoCed', function(){
    return function (date){
        return  date.substring(6,8)+'/'+date.substring(4,6)+'/'+date.substring(0,4);
    }
});