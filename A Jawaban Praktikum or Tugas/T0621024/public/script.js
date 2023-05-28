const filterButton = document.querySelector('#filterbutton');
const userSelect = document.querySelector('#user');

filterButton.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedUser = userSelect.value;
    window.location.href = `/filter/:${selectedUser}`;
});