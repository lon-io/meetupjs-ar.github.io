const aload = require('aload')
const easterEgg = require('./common/easter-egg')
const greetings = require('./common/greetings')
const menu = require('./common/menu')
const offline = require('./common/offline')
const safariLinks = require('./common/safari-links')
const serviceWorker = require('./common/service-worker')

window.addEventListener('load', () => {
    aload()
    easterEgg()
    greetings([
        {
            activateAfter: 5000,
            expiration: new Date(2018, 1, 7, 23, 59, 59),
            hideAfter: 8000,
            key: '2018-happy-new-year',
            message: '¡Feliz año nuevo!'
        }
    ])
    menu()
    offline()
    safariLinks()
    serviceWorker()
})
