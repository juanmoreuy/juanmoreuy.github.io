const API_BASE = 'https://script.google.com/macros/s/AKfycbzlzNobHRxVJg_IKgG3lOYcg1KjucdXjyxidqq_RfHJV9Uqb6c/exec';
// https://script.google.com/macros/s/AKfycbzlzNobHRxVJg_IKgG3lOYcg1KjucdXjyxidqq_RfHJV9Uqb6c/exec?key=jYpdvrsGo86POPfAITngKKPwBDVSsQVXN5PJ2cPU
const API_KEY = 'jYpdvrsGo86POPfAITngKKPwBDVSsQVXN5PJ2cPU';

const juanMoreContact = 'Error en el sitio, contactanos por instagram @Juanmoretorneos. Seguramente ya ingresaste estos datos.'
// for future use
// function init() {}

//instagramAcc, usr1, usr1Plat, usr2, usr2plat,
//mail, stream, state
function writeInfo() {
    console.log('tring to write data');

    var usr1 = document.getElementById('usuarioJ1').value;
    var usr1Plat = document.getElementById('plataformaJ1').value;
    var usr2 = document.getElementById('usuarioJ2').value;
    var usr2Plat = document.getElementById('plataformaJ2').value;
    var instagram = document.getElementById('instagram').value;
    var email = document.getElementById('email').value;
    var stream = document.getElementById('stream').value;
    var state = document.getElementById('departamentoJ1').value;

    fetch(_buildApiUrl(usr1, usr1Plat, usr2, usr2Plat, 
            instagram, email, stream, state))
        .then((response) => response.json())
        .then((json) => {
            if (json.status !== 'success') {
                alert();
                console.log(json.message);
            }
            console.log(json.message);
        }).catch((error) => {
            alertWarning(); // this shoulndt be a warning
        })
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
    console.log(url);
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
function alertWarning() {
    bootstrap_alert.warning(juanMoreContact);
}