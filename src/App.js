import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DashBody from "./components/DashBody/DashBody";
import RenderPieChart from "./components/PieGraph/RenderPieGraph.js";
// import { BarChart } from "./components/BarChart/BarChart";

const techData = [
	{ label: "JavaScript", value: 40 },
	{ label: "HTML", value: 20 },
	{ label: "CSS", value: 20 },
	{ label: "React", value: 15 },
	{ label: "TypeScript", value: 10 },
	{ label: "SQL/NoSQL", value: 10 },
];

const valueData = [
	{ label: "Resourceful", value: 100 },
	{ label: "Communicative", value: 100 },
	{ label: "Resilient", value: 100 },
	{ label: "Team Mentality", value: 100 },
	{ label: "Results Driven", value: 100 },
	{ label: "Mentor", value: 80 },
	{ label: "Proactive", value: 100 },
];

const goalsData = [
	{ label: "AWS", value: 60 },
	{ label: "Legacy Code Refactor", value: 100 },
	{ label: "Side Projects", value: 100 },
	{ label: "My Dad Jokes", value: 40 },
	{ label: "Motorcycle License", value: 80 },
	{ label: "GraphQL", value: 70 },
];

function App() {
	return (
		<div className='App'>
			<Navbar />
			<DashBody />
			<div className='chart-container'>
				<RenderPieChart data={techData} />
				<RenderPieChart data={valueData} />
				<RenderPieChart data={goalsData} />
			</div>
		</div>
	);
}

export default App;
