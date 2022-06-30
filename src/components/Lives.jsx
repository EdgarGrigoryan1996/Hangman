import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function Lives() {
	const lives = useSelector((state) => {
		return state.lives
	})

	useEffect(() => {
		if (lives < 1) {
			alert("Ուուուպս Դուք պարտվեցիք")
			window.location.reload()
		}
	}, [lives])
	return (
		<div className='lives text-center'>Դուք ունեք {lives} հնարավորություն</div>
	)
}