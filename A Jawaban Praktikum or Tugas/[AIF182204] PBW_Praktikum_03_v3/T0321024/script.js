// Nama : Ralvin Adrian
// NPM : 6182101024

/*
[Catatan Penggunaan Template]
- implementasi sesuai apa yang diminta.
- tidak mengubah flow kode pada bagian IIFE.
- tidak mengubah method signature dan parameter.
- selain data inisialisasi, tidak ada kode HARDCODE.
*/

/*
Kelas Rider di sini
mempunyai constructor dengan parameter sesuai
mempunyai method toString yg mengembalikan
  string sesuai keluaran dengan memanfaatkan string templating
*/
class Rider {
	constructor(number, name, team) {
		this.number = number;
		this.name = name;
		this.team = team;
	}
}

class Prix {
	//constructor dengan parameter name
	constructor(name) {
		this.name = name;
		this.rider_array = [];
	}

	//memasukkan SATU buah rider ke dalam array of Rider
	addRider(item) {
		this.rider_array.push(item);
	}

	//mengembalikan array of Rider 
	showRiders() {
		let result = "";
		for (let index = 0; index < this.rider_array.length; index++) {
			const rider = this.rider_array[index];
			result += `#${rider.number} : ${rider.name} (${rider.team})`;
			if (index < this.rider_array.length - 1) {
				result += ", ";
			}
		}
		return result;
	}

	//buat implementasi insertion sort dalam bahasa js
	//sort berdasarkan nomor motor 
	sortA() {
		let n = this.rider_array.length;
		let sorted_rider = this.rider_array;
		for (let i = 1; i < n; i++) {
			const currentRider = sorted_rider[i];
			let j = i - 1;
			while (j >= 0 && sorted_rider[j].number > currentRider.number) {
				sorted_rider[j + 1] = sorted_rider[j];
				j--;
			}
			sorted_rider[j + 1] = currentRider;
		}
		return sorted_rider;
	}

	//Challenge : buat sort dengan memanfaatkan array.sort
	//sort berdasarkan nomor motor
	//jika mengerjakan ini, bukan berarti method sortA tidak dibuat
	sortB() {
		return this.rider_array.sort((a, b) => a.number - b.number);
	}

	showSortedRiders() {
		let sortedRider = this.sortA();
		// let sortedRider = this.sortB();
		let n = sortedRider.length;
		let result = "";

		for (let i = 0; i < n; i++) {
			const rider = sortedRider[i];
			result += `#${rider.number} : ${rider.name} (${rider.team})`;
			if (i < n - 1) {
				result += ", ";
			}
		}
		return result;
	}

	//melakukan pengolahan data sehingga dimunculkan output sesuai
	//dengan instruksi pada soal
	//BUKAN DI HARDCODE!!
	//hint: manfaatkan kemampuan dynamic type dari js
	showByBike() {
		let result = "";
		const listTeam = new Set(this.rider_array.map((rider) => rider.team));
		listTeam.forEach((teamName) => {
			result += `${teamName}\n`;
			this.rider_array
				.filter((rider) => rider.team === teamName) // filter team
				.forEach((rider) => { // return berdasarkan tim yg sama
					result += `#${rider.number} : ${rider.name} (${rider.team})\n`;
					// TODO: formatting yang pake koma :/
					// if (...) {
					// 	result += `#${rider.number} : ${rider.name} (${rider.team}),`
					// }
					// else {
					// 	result += `#${rider.number} : ${rider.name} (${rider.team})\n`
					// }
				});
		});
		return result;
	}

	//melakukan random antara index dari array
	//mengembalikan rider pada index sesuai random
	pickWinner() {
		let winner = this.rider_array[Math.floor(Math.random() * this.rider_array.length)]; //randomize winner
		return `#${winner.number} : ${winner.name} (${winner.team})`;
	}
}

/*
buat fungsi initPrix di sini.
-inisialisasi variable riders sesuai dengan di soal
-inisialisasi prix dengan nama "mandalika"
-masukkan semua rider ke dalam prix
-mengembalikan referensi prix
*/
function initPrix() {
	const riders = [
		new Rider(88, "Miguel Oliveira", "KTM"),
		new Rider(20, "Fabio Quartararo", "Yamaha"),
		new Rider(5, "Johann Zarco", "Ducati"),
		new Rider(43, "Jack Miller", "Ducati"),
		new Rider(42, "Alex Rins", "Suzuki"),
	]
	const grandPrix = new Prix(''); //todo : pass constructor name
	riders.forEach(element => {
		grandPrix.addRider(element);
	});
	return grandPrix;
}
(function () {
	const mandalika = initPrix();
	console.log("[Rider] " + mandalika.showRiders());
	console.log("[Sorted] " + mandalika.showSortedRiders());
	console.log("[By Bike]\n" + mandalika.showByBike());
	console.log("[Winner] " + mandalika.pickWinner());

})();

/*
jelaskan penggunaan Immediately Invoked Function Expression (IIFE) di sini:
	
	
	
	
	
*/


displayData = [{
	nama:'Gharlan Winarno',
	npm:'6181901044',
	tahunAngkatan:'Mahasiswa angkatan 2019',
	usia:'20 Tahun 2 Bulan',
	dob:'2001-04-03',
	email:'6181901044@student.unpar.ac.id',
	nilaiTOEFL:'',
	ips:2.9,
	ipk:2.48,
	SKSLulus:42,
	SKSTempuh:49,
}];