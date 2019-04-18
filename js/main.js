const API_BASE = 'https://script.google.com/macros/s/AKfycbzlzNobHRxVJg_IKgG3lOYcg1KjucdXjyxidqq_RfHJV9Uqb6c/exec';
const API_KEY = 'jYpdvrsGo86POPfAITngK//KPwBD/VSsQVXN5PJ2cPU=';

const juanMoreContact = 'Error en el sitio, contactanos por instagram @Juanmoretorneos'
// for future use
function init() {
    _writeInfo();
}
//instagramAcc, usr1, usr1Plat, usr2, usr2plat,
//mail, stream, state
function _writeInfo() {
    console.log('tring to write data');
    fetch(_buildApiUrl())
        .then((response) => response.json())
        .then((json) => {
            if (json.status !== 'success') {
                _setNotice(json.message);
            }
            console.log(json.message);
        }).catch((error) => {
            _setNotice(juanMoreContact);
        })
}

function _buildApiUrl(){
    let url = API_BASE;
    url += '?key=' + API_KEY;

    return url;
}

function setNoticeTest() {
    _setNotice('test label');
}

function _setNotice (label) {
    page.notice.innerHTML = label;
}

bootstrap_alert = function() {}
bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html(
                '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                    message +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                '</div>')
        }
function alert() {
    bootstrap_alert.warning('Your text bla bla');
}