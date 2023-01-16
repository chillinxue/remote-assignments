/* request 1*/
function changeText() {
	document.querySelector('.welcome-message').innerHTML = 'Have a Good Time!';
}

/* request 2*/
function openMenu() {
	const sideMenuFixContainer = document.querySelector(
		'.sidemenu-fix-container'
	);
	sideMenuFixContainer.style.display = 'block';
}

function closeMenu() {
	const sideMenuFixContainer = document.querySelector(
		'.sidemenu-fix-container'
	);
	sideMenuFixContainer.style.display = 'none';
}
/* request 3*/
function actionButtonOnClick() {
	const hiddenContentBoxContainer = document.querySelector(
		'.content-box-section-container.hide'
	);
  hiddenContentBoxContainer.style.display = 'block';
}
