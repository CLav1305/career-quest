import type { ReactNode } from "react"

export type Character = {
	name: string
	title: string
	tagline: string
	description: string
	traits: string[]
	careers: string[]
	accent: string
	icon: ReactNode
}

export type CharacterCardProps = {
	character: Character
}