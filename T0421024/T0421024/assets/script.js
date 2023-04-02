//nomor 5
function check8MinChar() {
	// fix untuk selector berulang : add tag defer in html file
	const usernameInput = document.querySelector('input[name="username"]');
	const passwordInput = document.querySelector('input[name="password"]');
	const checkImageUsername = document.querySelectorAll('.check_icons')[0];
	const checkImagePassword = document.querySelectorAll('.check_icons')[1];

	if (usernameInput.value.length >= 8) {
		checkImageUsername.classList.remove('hidden')
	}
	else {
		checkImageUsername.classList.add('hidden')
	}

	if (passwordInput.value.length >= 8) {
		checkImagePassword.classList.remove('hidden')
	}
	else {
		checkImagePassword.classList.add('hidden')
	}
}

//nomor 6
function initDoB() {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const daySelector = document.querySelector('select[name="day"]');
	const monthSelector = document.querySelector('select[name="month"]');
	const yearSelector = document.querySelector('select[name="year"]');

	// Menambah list hari dari 1 - 31
	for (let index = 1; index < 32; index++) {
		daySelector.add(new Option(index));
	}
	// memasukan nama bulan ke selector
	months.forEach(month => {
		monthSelector.add(new Option(month));
	});
	// memasukan tahun dari tahun sekarang
	const currentYear = new Date().getFullYear();
	for (let index = currentYear; index > currentYear - 11; index--) {
		yearSelector.add(new Option(index));
	}
}
// init userObj
let registData;

//nomor 9
function validation() {
	const checkImageUsername = document.querySelectorAll('.check_icons')[0];
	const checkImagePassword = document.querySelectorAll('.check_icons')[1];
	let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
	let selectedHobbies = Array.from(checkBoxes).map(type => type.value);

	let isChecked = selectedHobbies.length > 0; // cek apakah ada yang diceklis atau tidak

	const confirmationContainer = document.querySelector('#confirmation_container')

	if (checkImageUsername.classList.contains('hidden') === false &&
		checkImagePassword.classList.contains('hidden') === false &&
		isChecked === true) {
		confirmationContainer.classList.remove('hidden');
		// registData = new RegisterData(usernameValue, passwordValue, dob, ...selectedHobbies);
		return true;
	} else {
		confirmationContainer.classList.add('hidden');
		alert("Invalid inputs");
		return false;
	}
}

function parseAsRegistDataObj(formData) {
	const arrayOfData = Array.from(formData);
	// console.log(arrayOfData)
	const username = arrayOfData[0][1];
	const password = arrayOfData[1][1];
	const dob = `${arrayOfData[2][1]}-${arrayOfData[3][1]}-${arrayOfData[4][1]}`;
	let hobbies = '';
	for (let index = 5; index < arrayOfData.length; index++) {
		if (index < arrayOfData.length - 1) {
			hobbies += arrayOfData[index][1] + ', ';
			// tambahkan koma setelah setiap hobi
		} else {
			// kondisi untuk menghindari koma di index terakhir
			hobbies += arrayOfData[index][1];
		}
	}
	return registData = new RegisterData(username, password, dob, hobbies);
}

// fungsi untuk memasukkan confirmation data ke #confirmation container 
// menggunakan object RegisterData
function passRegisterData(registrationData) {
	document.querySelector('input[name="usernameconf"]').placeholder = `${registrationData.username}`;
	document.querySelector('input[name="dobconf"]').placeholder = `${registrationData.dob}`;
	document.querySelector('input[name="hobbyconf"]').placeholder = `${[...registrationData.hobby]}`;
	return true;
}

function showAll(form) {
	console.log(parseAsRegistDataObj(new FormData(form)));
}
//nomor 11
function submit() {
	const form = document.querySelector('#register_form');
	showAll(form); // print data
	let confirmation = confirm("Are you sure?");
	if (confirmation === true) {
		form.submit();
	}
	else {
		// do nothing
	}
}

document.addEventListener('DOMContentLoaded', function () {
	//nomor 3: mouse hover
	const title = document.querySelector('h1');
	title.addEventListener('mouseover', (e) => {
		e.preventDefault();
		title.style.color = 'Blue';
	})
	title.addEventListener('mouseout', (e) => {
		e.preventDefault();
		title.style.color = 'Black';
	})

	//nomor 6: dob
	initDoB();

	// check username n password
	const usernameInput = document.querySelector('input[name="username"]');
	const passwordInput = document.querySelector('input[name="password"]');
	usernameInput.addEventListener('input', check8MinChar);
	passwordInput.addEventListener('input', check8MinChar);

	// buat formdata untuk mengambil data :
	const form = document.querySelector('#register_form');

	// check apakah valid?
	const checkButton = document.querySelector('input[name="check"]');
	checkButton.addEventListener('click', (e) => {
		e.preventDefault();
		if (validation() === true) {
			passRegisterData(parseAsRegistDataObj(new FormData(form)));
		}

		// fix challenge untuk nomor terakhir
		window.addEventListener('input', () => {
			const confirmationContainer = document.querySelector('#confirmation_container')
			confirmationContainer.classList.add('hidden');
		});
	});

	const registerButton = document.querySelector('#confirmation_container > div.center-button > input[type=submit]');
	registerButton.addEventListener('click', (e) => {
		e.preventDefault();
		submit();
	})
})