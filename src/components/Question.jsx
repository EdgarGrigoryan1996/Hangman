import React, { useState } from 'react'
import data from '../data/data'
import Alphabet from './alphabets/Alphabet'
import { useSelector } from 'react-redux'
export default function Question() {
	const thisData = useSelector((state) => {
		return state
	})


	return (
		<div className='question-wrapper'>
			<div className="question">{thisData.question}</div>
			<div className="answer-wrapper">
				<div className="answer-block">
					{thisData.answer.map((obj) => {
						if (obj.status) {
							return <Alphabet key={Math.random()} alphabet={obj.alphabet} />
						}
						else {
							return <Alphabet key={Math.random()} />
						}

					})}
				</div>
			</div>
		</div>
	)

}
