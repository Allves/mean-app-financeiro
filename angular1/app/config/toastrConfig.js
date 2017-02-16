(function () {
    angular.module('app').config([
        'toastrConfig',

        function (toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            preventOpenDuplicates: true,
            progressBar: true,
            timeOut: 5000,
        });
        }
    ])
})()