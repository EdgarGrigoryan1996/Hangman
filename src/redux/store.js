import { createStore } from "redux";
import data from "../data/data"
import alphabets from "../components/alphabets/alphabets"
const thisData = data[Math.floor(Math.random() * 6) + 1]
const answer = thisData.answer.split("").map((alphabet) => {
	return {
		status: false,
		alphabet: alphabet
	}
})
const initialState = {
	forCheck: thisData.answer.split(""),
	alphabets: alphabets,
	question: thisData.question,
	answer,
	lives: 10
}



function reducer(state, action) {
	switch (action.type) {
		case "CHECK_ALPHABET":

			return {
				...state,
				alphabets: state.alphabets.filter((alphabet) => {
					return alphabet !== action.payload
				}),
				answer: state.answer.map((obj) => {
					if (action.payload === obj.alphabet) {
						return {
							...obj,
							status: true
						}
					}
					else {
						return obj
					}
				})
			}
		case "MINUS_LIVE":
			return {
				...state,
				lives: state.forCheck.indexOf(action.payload) === -1 ? --state.lives : state.lives
			}

		default:
			break;
	}
	return state
}

const store = createStore(reducer, initialState)

export default store