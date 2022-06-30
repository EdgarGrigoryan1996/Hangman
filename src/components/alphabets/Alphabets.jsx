import React from 'react'
import Alphabet from './Alphabet'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function Alphabets() {
	const alphabets = useSelector((state) => {
		return state.alphabets
	})
	return (
		<div className='alphabets-block'>
			{alphabets.map((alphabet) => {
				return <Alphabet alphabet={alphabet} key={Math.random()} />
			})}
		</div>
	)
}
