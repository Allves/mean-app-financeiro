(function () {
    angular.module('app').controller('BillingCycleController', [
        '$http',
        'messages',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, messages, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function(response){
                vm.billingCycle = {}
                vm.billingCycles = response.data
                tabs.show(vm, {tabList: true, tabCreate: true})
            })
        }

        vm.create = function () {            
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.refresh()
                messages.addSucess('Operação realizada com sucesso')
            }).catch(function (response) {
                messages.addError(response.data.errors)
            })
        }

        vm.refresh()

    }
})()