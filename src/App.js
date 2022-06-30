import AlphabetInstruction from "./components/AlphabetInstruction";
import Alphabets from "./components/alphabets/Alphabets.jsx";
import Lives from "./components/Lives";
import Question from "./components/Question";
import Title from "./components/Title";
import "./style.css"
function App() {
	return (
		<div className="App">
			<div className="hangman-wrapper">
				<div className="hangman-block">
					<div className="text-center">
						<Title />
						<AlphabetInstruction />
					</div>
					<Alphabets />
					<Question />
					<Lives />
				</div>
			</div>

		</div>
	);
}

export default App;
