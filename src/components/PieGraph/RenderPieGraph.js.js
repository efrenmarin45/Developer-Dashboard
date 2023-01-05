import React, { useEffect, useRef } from "react";
import PieGraph from "./PieGraph";
import "./PieGraphStyles.css";

const RenderPieChart = ({ data }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			PieGraph(ref.current, data);
		}
	}, [ref]);

	return (
		<div className='pie-container'>
      <p>Tech Stack</p>
			<div className='graph' ref={ref} />
		</div>
	);
};

export default React.memo(RenderPieChart);
