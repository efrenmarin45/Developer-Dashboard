import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./PieGraphStyles.css";

const PieChart = ({ data }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			RenderPieGraph(ref.current, data);
		}
	}, [ref]);

	const RenderPieGraph = (element, data) => {
		const colors = [
			"#05BBD2",
			"#2070C4",
			"#FF2972",
			"#EB80F1",
			"#F5C842",
			"#37D400",
			"#FF6A22",
		];
		const boxSize = 500;

		d3.select(element).select("svg").remove(); // Remove the old svg
		// Create new svg
		const svg = d3
			.select(element)
			.append("svg")
			.attr("preserveAspectRatio", "xMidYMid meet")
			.attr("height", "100%")
			.attr("width", "100%")
			.attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
			.append("g")
			.attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

		const arcGenerator = d3
			.arc()
			.cornerRadius(5)
			.padAngle(0.02)
			.innerRadius(100)
			.outerRadius(250);
		const pieGenerator = d3
			.pie()
			.startAngle(-1.3 * Math.PI)
			.value((d) => d.value);
		const arcs = svg.selectAll().data(pieGenerator(data)).enter();
		arcs
			.append("path")
			.attr("d", arcGenerator)
			.style("fill", (d, i) => colors[i % data.length])
			.transition()
			.duration(1100)
			.attrTween("d", function (d) {
				const i = d3.interpolate(d.startAngle, d.endAngle);
				return function (t) {
					d.endAngle = i(t);
					return arcGenerator(d);
				};
			});
		arcs
			.append("text")
			.attr("text-anchor", "middle")
			.text((d) => `${d.data.label}`)
			.style("fill", "#fff")
			.style("font-size", "18px")
			.attr("transform", (d) => {
				const [x, y] = arcGenerator.centroid(d);
				return `translate(${x}, ${y})`;
			})
			.style("font-size", 0)
			.transition()
			.duration(1100)
			.style("font-size", "18px");
	};

	//* Changes pie title based on data
	let pieTitle = data[0].label.includes("JavaScript")
		? "Tech Stack"
		: data[0].label.includes("Resourceful")
		? "Value Breakdown"
		: data[0].label.includes("AWS")
		? "Currently Working On"
		: "Fun Facts!";

	return (
		<div className='pie-container'>
			<p> {pieTitle}</p>
			<div className='graph' ref={ref} />
		</div>
	);
};

export default PieChart;
