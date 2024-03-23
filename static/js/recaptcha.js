import(
    'https://www.google.com/recaptcha/api.js?render={6LcO4aEpAAAAAEDwdADSDJSvgv_j0hAmXBsL9aWN}'
)
grecaptcha.ready(function () {
    grecaptcha
        .execute('{6LcO4aEpAAAAAEDwdADSDJSvgv_j0hAmXBsL9aWN}', {
            action: 'submit',
        })
        .then(function (token) {
            console.info('got token: ' + token)
            document.getElementById('g-recaptcha-response').value = token
        })
})
