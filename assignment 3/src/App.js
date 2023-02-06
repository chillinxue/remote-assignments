import './App.css';
import { useState } from 'react';

function App() {
	const [welcomeMessage, setWelcomeMessage] = useState('Welcome Message');
	const [isActionButtonOnClick, setisActionButtonOnClick] = useState(false);
	const [openSideMenu, setOpenSideMenu] = useState(false);
	return (
		<div className='App'>
			<nav>
				<h1 className='website-title'>Website Title / Logo</h1>
				<div className='items-hamburger-menu-icon-container'>
					<ul>
						<li>
							<a href='/'>Item 1</a>
						</li>
						<li>
							<a href='/'>Item 2</a>
						</li>
						<li>
							<a href='/'>Item 3</a>
						</li>
						<li>
							<a href='/'>Item 4</a>
						</li>
					</ul>
					<button
						className='hamburger-menu-icon-button'
						onClick={() => setOpenSideMenu(!openSideMenu)}
					>
						<i class='fa fa-bars hamburger-menu-icon'></i>
					</button>
				</div>
			</nav>

			<div className='welcome-message-container'>
				<span
					className='welcome-message'
					onClick={() => setWelcomeMessage('Have a Good Time!')}
				>
					{welcomeMessage}
				</span>
			</div>
			<div className='content-box-section-container'>
				<span className='title'>Section Title</span>
				<div className='content-box-section'>
					<div className='content-box'>Content Box 1</div>
					<div className='content-box'>Content Box 2</div>
					<div className='content-box'>Content Box 3</div>
					<div className='content-box'>Content Box 4</div>
				</div>
			</div>
			{!isActionButtonOnClick && (
				<div className='call-to-action-button-container'>
					<button
						type='button'
						className='call-to-action-button'
						onClick={() => setisActionButtonOnClick(true)}
					>
						Call to Action
					</button>
				</div>
			)}
			{isActionButtonOnClick && (
				<div className='content-box-section-container'>
					<div className='content-box-section'>
						<div className='content-box'>Content Box 5</div>
						<div className='content-box'>Content Box 6</div>
						<div className='content-box'>Content Box 7</div>
						<div className='content-box'>Content Box 8</div>
					</div>
				</div>
			)}
			{openSideMenu && (
				<div class='sidemenu-fix-container'>
					<div class='side-menu'>
						<button
							class='close-menu-button'
							onClick={() => setOpenSideMenu(false)}
						>
							X
						</button>
						<a href='/'>Item 1</a>
						<a href='/'>Item 2</a>
						<a href='/'>Item 3</a>
						<a href='/'>Item 4</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
