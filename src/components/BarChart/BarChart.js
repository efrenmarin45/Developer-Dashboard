import React, { useEffect, useRef, useState } from "react";
import "./BarChartStyles.css";
import * as d3 from "d3";

const valueData = [
	{ label: "Resourceful", value: 100 },
	{ label: "Communicative", value: 100 },
	{ label: "Resilient", value: 90 },
	{ label: "Team Mentality", value: 100 },
    { label: "Results Driven", value: 100 },
];

export const BarChart = () => {
	const d3Chart = useRef();
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const update = useRef(false);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			if (update.current) {
				d3.selectAll("g").remove();
			} else {
				update.current = true;
			}
		});
        RenderBarChart(valueData);
	}, [dimensions]);

    const margin = { top: 40, right: 20, bottom: 20, left: 30 };

const RenderBarChart = (data) => {
	const chartWidth =
		parseInt(d3.select(".bar-chart").style("width")) -
		margin.left -
		margin.right;
	const chartHeight =
		parseInt(d3.select(".bar-chart").style("height")) -
		margin.top -
		margin.bottom;
	const svg = d3
		.select(d3Chart.current)
		.attr("width", chartWidth + margin.left + margin.right)
		.attr("height", chartHeight + margin.top + margin.bottom);
	const x = d3
		.scaleBand()
		.domain(d3.range(data.length))
		.range([margin.left, chartWidth - margin.right])
		.padding(0.5);

	svg
		.append("g")
		.attr("transform", "translate(0," + chartHeight + ")")
		.call(
			d3
				.axisBottom(x)
				.tickFormat((i) => data[i].label)
				.tickSizeOuter(0)
		);

	const max = d3.max(data, function (d) {
		return d.value;
	});

	const y = d3.scaleLinear().domain([0, max]).range([chartHeight, margin.top]);

	svg
		.append("g")
		.attr("transform", "translate(" + margin.left + ", 0)")
		.call(d3.axisLeft(y));

	svg
		.append("g")
		.attr("fill", "#05BBD2")
		.selectAll("rect")
		.data(data)
		.join("rect")
		.attr("x", (d, i) => x(i))
		.attr("y", (d) => y(d.value))
		.attr("height", (d) => y(0) - y(d.value))
		.attr("width", x.bandwidth());
};

	return (
		<div className="bar-chart">
            <p>Value Breakdown</p>
			<svg ref={d3Chart}></svg>
		</div>
	);
};