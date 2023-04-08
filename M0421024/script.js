// Ralvin Adrian 
// NPM : 6182101024
// Modul 04 PBW - Asynchronous Function & Promise
// Rev 1 : 2023-04-04
// run with npm

const dumpFunction = async (promise) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomizer = Math.random();
			if (randomizer < 0.1) {
				reject("promise rejected");
			} else {
				resolve(promise);
			}
		}, 1000);
	});
};

// Fungsi retryUntilSucceed
async function retryUntilSucceed() {
	while (true) { // run loop hingga promise berhasil
		try {
			const result = await dumpFunction("success 1");
			return result;
		} catch (err) {
			console.log(err);
		}
	}
}

// Fungsi retryNTimes
async function retryNTimes(n, retryInterval) {
	for (let i = 1; i <= n; i++) {
		try {
			const result = await dumpFunction("success 2");
			return result;
		} catch (err) {
			console.log(`Error, promise rejected. Membuat promise baru... `);
			await new Promise((resolve) => setTimeout(resolve, retryInterval));
		}
	}
}

// Panggil fungsi retryUntilSucceed dan retryNTimes
(async () => {
	console.log(await retryUntilSucceed());
	console.log(await retryNTimes(3, 1000));
})();