import { React, useRef } from "react";
import "./NavbarStyles.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};

	return (
		<>
			<header>
				<nav className='navbar' ref={navRef}>
					<ul className='navList'>
						<li id='name-icon'>#EfrenMarin</li>
						<li>
							<a href='/EfrenMarin_Resume.pdf'>
								RESUME
							</a>
						</li>
						<li>
							<a
								href='https://github.com/efrenmarin45'
								target='_blank'
								rel='noreferrer'>
								GITHUB
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/efren-marin/'
								target='_blank'
								rel='noreferrer'>
								LINKEDIN
							</a>
						</li>
						<li>
							<a
								href='https://efren45marin.medium.com'
								target='_blank'
								rel='noreferrer'>
								MEDIUM ARTICLES
							</a>
						</li>
						<li className='currentView'>ABOUT ME</li>
					</ul>
				</nav>
				<div className='subNav'>
					<p>Overview</p>
					<button className='nav-btn' onClick={showNavbar}>
						<FaBars />
					</button>
				</div>
			</header>
		</>
	);
}

export default Navbar;
