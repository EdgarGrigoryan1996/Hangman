import React from 'react'

export default function AlphabetInstruction() {
	const style = {
		"font-weight": "900",
		"color": "#222",
		"font-size": "20px"
	}
	return (
		<div className='instruction-wrapper'>
			<p>Օգտագործիր ստորև գտնվող տառերը,ճիշտ պատասխանը գտնելու համար</p>
			<p style={style}>Պատասխանիր Անգլերեն</p>
		</div>
	)
}
