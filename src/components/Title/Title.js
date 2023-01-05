import React from "react";
import "../DashBody/BodyStyles.css";

function Title() {
    const options = {
        month: "long",
        weekday: "long",
    };
    let date = new Date();
    let newDate = new Intl.DateTimeFormat("en-us", options).format(date);
    let month = newDate.split(' ')[0];
    let day = newDate.split(' ')[1];
    let year = date.getFullYear();
    let dayNum = date.getDay() + 1;
    let today = `Today's Date: ${day}, ${month} ${dayNum} ${year}`
	return (
		<div>
			<p id='title-name'>Efren Marin</p>
			<div id='title-box-bar'>
				<p id='title-position'>SOFTWARE DEVELOPER</p>
			</div>
			<hr color='#E1E1E1' />
            <p id="today-date">{today}</p>
		</div>
	);
}

export default Title;
