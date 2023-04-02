//nomor 5
function checkMin8Char() {
	const usernameField = document.querySelector('input[type="text"]');
	const passwordField = document.querySelector('input[type="password"]');

	const checklistImageUsername = document.querySelector('.check_icons')[0];
	const checklistImagePassword = document.querySelector('.check_icons')[1];

	const usernameLength = usernameField.value.length;
	const passwordLength = passwordField.value.length;

	if (usernameLength >= 8) {
		checklistImageUsername.classList.remove('hidden');
	} else {
		checklistImageUsername.classList.add('hidden');
	}

	if (passwordLength >= 8) {
		checklistImagePassword.classList.remove('hidden');
	} else {
		checklistImagePassword.classList.add('hidden');
	}
}

//nomor 6
function initDoB(day_el, month_el, year_el) {
	// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// for (let i = 0; i < months.length; i++) {
	// 	let month_item = document.createElement('option');
	// 	month_item.value = months[i];
	// 	month_item.textContent = i;
	// 	month_el.appendChild(month_item);
	// }


}

//nomor 9
function validation(event) {

}

//nomor 11
function submit(event) {

}


(function () {
	document.addEventListener("DOMContentLoaded", function () {
		//nomor 3: mouse hover
		const h1 = document.querySelector('h1');

		h1.addEventListener('mouseover', () => {
			h1.style.color = 'Blue';
		});
		h1.addEventListener('mouseout', () => {
			h1.style.color = 'black';
		});

		//nomor6: dob


		//event listener check input, button, submit
		// input.textContent = 'tes';
		const username = document.querySelector('input[type="text"]');
		const password = document.querySelector('input[type="password"]');

		username.addEventListener('input', checkMin8Char());
		password.addEventListener('input', checkMin8Char);


		const selectDay = document.querySelector('select[name="day"]');
		const selectMonth = document.querySelector('select[name="month"]');
		const selectYear = document.querySelector('select[name="year"]');

		// selectDay
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		// for (let index = 0; index < months.length; index++) {
		// 	const element = document.createElement('option');
		// 	element.text(months[index])
		// 	selectDay.add(element);
		// }
	});
})();