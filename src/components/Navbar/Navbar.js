import React from "react";
import './NavbarStyles.css';

function Navbar() {
	return (
    <>
		<nav className='navbar'>
			<ul>
				<li id="name-icon">#EfrenMarin</li>
				<li>
					<a href='../docs/EfrenMarin Resume.pdf' target="_blank">RESUME</a>
				</li>
				<li>
					<a href='https://github.com/efrenmarin45' target="_blank">GITHUB</a>
				</li>
				<li><a href="https://www.linkedin.com/in/efren-marin/" target="_blank">LINKEDIN</a></li>
				<li><a href="https://efren45marin.medium.com" target="_blank">MEDIUM ARTICLES</a></li>
				<li className="currentView">ABOUT ME</li>
			</ul>
		</nav>
    <div className="subNav">
      <p>Overview</p>
    </div>
    </>
	);
}

export default Navbar;
