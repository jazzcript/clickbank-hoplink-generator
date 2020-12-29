var https = require('https');

function hoplinkUrl(affiliate, product, trackId) {
	return 'https://accounts.clickbank.com/info/hoplinkGenerator.htm?affiliate=' + affiliate + '&promocode=' + trackId + '&source=&vendor=' + product + '&submit=Generate+HopLinks&results=';
}

function parseHoplink(doc) {
	let target = doc.match(/(https:\/\/.+hop\.clickbank\.net.+)</);
	let hoplink;

	if (target && target[1]) {
		hoplink = target[1];
	}

	return hoplink;
}

function clickbankHoplinkGenerator(affiliate, product, trackId) {
	trackId = typeof trackId === 'undefined' ? '' : trackId;
	return new Promise(function (resolve, reject) {
		https.get(hoplinkUrl(affiliate, product, trackId), function (res) {
			var buffer = "";
			res.on('data', (data) => {
				buffer += data;
			});
			res.on('end', () => {
				resolve(parseHoplink(buffer));
			});
		});
	});
}

module.exports = clickbankHoplinkGenerator;