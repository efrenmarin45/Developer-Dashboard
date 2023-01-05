import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DashBody from "./components/DashBody/DashBody";
import RenderPieChart from "./components/PieGraph/RenderPieGraph.js";

const data = [
	{ name: "JavaScript", value: 40 },
	{ name: "HTML", value: 20 },
	{ name: "CSS", value: 20 },
  { name: "React", value: 15},
  {name: "TypeScript", value: 5 },
];

function App() {
	return (
		<div className='App'>
			<Navbar />
			<DashBody />
			<RenderPieChart data={data} />
		</div>
	);
}

export default App;
