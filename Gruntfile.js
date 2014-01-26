module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combine: {
			single: {
				input: "./src/fedora-address-ui.html",
				output: "./fedora-address.html",
				tokens: [
					{ token: "//array.map.js", file: "./src/js/array.map.js" },
					{ token: "//biginteger.js", file: "./src/js/biginteger.js" },
					{ token: "//bitcoinjs-lib.js", file: "./src/js/bitcoinjs-lib.js" },
					{ token: "//bitcoinjs-lib.address.js", file: "./src/js/bitcoinjs-lib.address.js" },
					{ token: "//bitcoinjs-lib.base58.js", file: "./src/js/bitcoinjs-lib.base58.js" },
					{ token: "//bitcoinjs-lib.ecdsa.js", file: "./src/js/bitcoinjs-lib.ecdsa.js" },
					{ token: "//bitcoinjs-lib.eckey.js", file: "./src/js/bitcoinjs-lib.eckey.js" },
					{ token: "//bitcoinjs-lib.util.js", file: "./src/js/bitcoinjs-lib.util.js" },
					{ token: "//cryptojs.js", file: "./src/js/cryptojs.js" },
					{ token: "//cryptojs.sha256.js", file: "./src/js/cryptojs.sha256.js" },
					{ token: "//cryptojs.pbkdf2.js", file: "./src/js/cryptojs.pbkdf2.js" },
					{ token: "//cryptojs.hmac.js", file: "./src/js/cryptojs.hmac.js" },
					{ token: "//cryptojs.aes.js", file: "./src/js/cryptojs.aes.js" },
					{ token: "//cryptojs.blockmodes.js", file: "./src/js/cryptojs.blockmodes.js" },
					{ token: "//cryptojs.ripemd160.js", file: "./src/js/cryptojs.ripemd160.js" },
					{ token: "//crypto-scrypt.js", file: "./src/js/crypto-scrypt.js" },
					{ token: "//ellipticcurve.js", file: "./src/js/ellipticcurve.js" },
					{ token: "//ninja.key.js", file: "./src/js/ninja.key.js" },
					{ token: "//ninja.misc.js", file: "./src/js/ninja.misc.js" },
					{ token: "//ninja.onload.js", file: "./src/js/ninja.onload.js" },
					{ token: "//ninja.unittests.js", file: "./src/js/ninja.unittests.js" },
					{ token: "//ninja.translator.js", file: "./src/js/ninja.translator.js" },
					{ token: "//ninja.singlewallet.js", file: "./src/js/ninja.singlewallet.js" },
					{ token: "//ninja.paperwallet.js", file: "./src/js/ninja.paperwallet.js" },
					{ token: "//ninja.bulkwallet.js", file: "./src/js/ninja.bulkwallet.js" },
					{ token: "//ninja.brainwallet.js", file: "./src/js/ninja.brainwallet.js" },
					{ token: "//ninja.detailwallet.js", file: "./src/js/ninja.detailwallet.js" },
					{ token: "//qrcode.js", file: "./src/js/qrcode.js" },
					{ token: "//securerandom.js", file: "./src/js/securerandom.js" },
					{ token: "//jquery.min.js", file: "./src/js/jquery.min.js" },
					{ token: "//bootstrap.min.js", file: "./src/js/bootstrap.min.js" },
					{ token: "//tabsetup.js", file: "./src/js/tabsetup.js" },
					{ token: "//bootstrap.min.css", file: "./src/css/bootstrap.min.css" },
					{ token: "//nav.css", file: "./src/css/nav.css" },
					{ token: "//main.css", file: "./src/css/main.css" }
				]
			}
		}
	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-combine");
	grunt.registerTask("default", ["combine:single"]);
};
