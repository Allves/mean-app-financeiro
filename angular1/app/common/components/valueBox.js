(function () {
    angular.module('app').component('valueBox', {
        bindings: {
            grid: '@',
            colorClass: '@',
            value: '@',
            text: '@',
            iconClass: '@',
        },
        controller: [
            'gridSystem',
            function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
    <div class="{{$ctrl.gridClasses}}">
        <div class="info-box {{$ctrl.colorClass}}">
            <span class="info-box-icon"><i class="fa {{$ctrl.iconClass}}"></i></span>
            <div class="info-box-content">
                <span class="info-box-text">{{$ctrl.text}}</span>
                <span class="info-box-number">R$ {{$ctrl.value}}</span>
            </div>
        </div>
    </div>
    `
    })
})()