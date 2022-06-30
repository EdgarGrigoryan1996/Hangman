import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
export default function Alphabet({ alphabet }) {
	const dispatch = useDispatch()
	return (
		<div className='alphabet' onClick={(e) => {
			dispatch({
				type: "CHECK_ALPHABET",
				payload: alphabet
			})
			dispatch({
				type: "MINUS_LIVE",
				payload: alphabet
			})
		}}>{alphabet}</div>
	)
}
