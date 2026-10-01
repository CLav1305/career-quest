import '../styles/characterCard.css'
import type { CharacterCardProps } from "./types/CharacterProps"

function CharacterCard({ character }: CharacterCardProps) {
	return (
		<article className="character-card" style={{ '--card-accent': character.accent } as React.CSSProperties}>
			<div className="character-card__topline">
				<span>Your career character: is {character.name}</span>
			</div>

			<div className="character-card__visual" aria-hidden="true">
				<div className="character-card__grid" />
				<div className="character-card__badge">{character.icon}</div>
			</div>

			<div className="character-card__content">
				<p className="character-card__kicker">{character.title}</p>
				<h1>{character.name}</h1>
				<p className="character-card__tagline">{character.tagline}</p>
				<p className="character-card__description">{character.description}</p>

				<div className="character-card__section">
					<h2>Your strengths</h2>
					<ul className="character-card__traits">
						{(character.traits ?? []).map((trait) => <li key={trait}>{trait}</li>)}
					</ul>
				</div>
			</div>
		</article>
	)
}

export default CharacterCard