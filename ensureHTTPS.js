if (location.host !== 'localhost' && location.protocol.match(/http:/)) {
    location.href = location.href.replace(/http/, 'https');
}
