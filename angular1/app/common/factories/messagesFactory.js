(function () {
    angular.module('app').factory('messages', [
        'toastr',
        MessagesFactroy
    ])

    function MessagesFactroy(toastr) {

        function addSuccess(msgs) {
            addMsg(msgs, 'Sucesso', 'success')
        }

        function addError(msgs) {
            addMsg(msgs, 'Erro', 'error')
        }

        function addMsg(msgs, title, method) {
            if (msgs instanceof Array) {
                msgs.forEach(msg => toastr[method](msg, title))
            } else {
                toastr[method](msgs, title)
            }
        }
        
        return {
            addSuccess,
            addError
        }
    }
})()