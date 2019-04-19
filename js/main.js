const API_BASE = 'https://script.google.com/macros/s/AKfycbzlzNobHRxVJg_IKgG3lOYcg1KjucdXjyxidqq_RfHJV9Uqb6c/exec';
const API_KEY = 'jYpdvrsGo86POPfAITngKKPwBDVSsQVXN5PJ2cPU';

const juanMoreContact = 'Error en los datos, contactanos por instagram @Juanmoretorneos. Seguramente ya los ingresaste.';
const juanMoreContactDespido = 'Error en el sitio, contactanos por instagram @Juanmoretorneos y pedi que despidan al ingeniero';
const juanMoreSuccess =  'Inscripccion realizada con exito, nos vemos en las canchas y suerte!';
// for future use
// function init() {}

//instagramAcc, usr1, usr1Plat, usr2, usr2plat,
//mail, stream, state
function writeInfo() {
    var usr1 = document.getElementById('usuarioJ1').value;
    var usr1Plat = document.getElementById('plataformaJ1').value;
    var usr2 = document.getElementById('usuarioJ2').value;
    var usr2Plat = document.getElementById('plataformaJ2').value;
    var instagram = document.getElementById('instagram').value;
    var email = document.getElementById('email').value;
    var stream = document.getElementById('stream').value;
    var state = document.getElementById('departamentoJ1').value;

    if (usr1 != "" && usr2 != "" && instagram != "" && email != "") {
        fetch(_buildApiUrl(usr1, usr1Plat, usr2, usr2Plat, 
                instagram, email, stream, state))
            .then((response) => response.json())
            .then((json) => {
                if (json.status !== 'success') {
                    alertWarning(); // if API fails
                } else {
                    alertSuccess();
                }
            }).catch((error) => {
                alertDanger(); // if fecth API fails
            })
    } else {
        bootstrap_alert.warning('Asegurate de llenar los campos obligatorios marcados con un *');
    }
}

function _buildApiUrl(usr1, usr1Plat, usr2, usr2Plat,
        instagram, email, stream, state){
    let url = API_BASE;
    url += '?key=' + API_KEY;
    url += '&usr1=' + usr1;
    url += '&usr1Plat=' + usr1Plat;
    url += '&usr2=' + usr2;
    url += '&usr2Plat=' + usr2Plat;
    url += '&instagram=' + instagram;
    url += '&email=' + email;
    url += '&stream=' + stream;
    url += '&state=' + state;
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

bootstrap_alert.danger = function(message) {
            $('#alert_placeholder').html(
                '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
                    message +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                '</div>')
        }
bootstrap_alert.success = function(message) {
            $('#alert_placeholder').html(
                '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                    message +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                '</div>')
        }

function alertWarning() {
    bootstrap_alert.warning(juanMoreContact);
}

function alertDanger() {
    bootstrap_alert.danger(juanMoreContactDespido);
}

function alertSuccess() {
    bootstrap_alert.success(juanMoreSuccess);
}
