import React from 'react'
import { Gif } from './gif/Gif'

type Props = {}

export const GifList = (props: Props) => {
	return (
		<div>
			<Gif />
			<Gif />
			<Gif />
			<Gif />
		</div>
	)
}
