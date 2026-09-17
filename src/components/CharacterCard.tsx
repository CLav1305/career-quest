import type { ReactNode } from 'react'

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

type CharacterCardProps = {
	character: Character
	index: number
}

function CharacterCard({ character, index }: CharacterCardProps) {
	return (
		<article className="group grid w-full overflow-hidden rounded-lg border border-[#d8e5df] bg-[#fffdf8] text-left text-[#163332] shadow-[14px_14px_0_#dff0e9] motion-safe:animate-[card-arrives_650ms_ease-out_both] max-[700px]:shadow-[8px_8px_0_#dff0e9] md:grid-cols-[minmax(150px,0.7fr)_minmax(220px,1.3fr)]" style={{ '--card-accent': character.accent } as React.CSSProperties}>
			<div className="col-span-full flex justify-between border-b border-[#d8e5df] px-6 py-[18px] text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#55716b]">
				<span>Your career character</span>
				<span className="text-[var(--card-accent)]">{String(index + 1).padStart(2, '0')} / 04</span>
			</div>

			<div className="relative grid min-h-[360px] place-items-center overflow-hidden bg-[#0f3d3a] max-[700px]:min-h-[280px]" aria-hidden="true">
				<div className="absolute inset-0 rotate-[-8deg] scale-[1.25] opacity-25 [background-image:linear-gradient(#a9e4d0_1px,transparent_1px),linear-gradient(90deg,#a9e4d0_1px,transparent_1px)] [background-size:34px_34px]" />
				<div className="relative z-[1] grid aspect-square w-[140px] place-items-center rounded-full border-[10px] border-[#f6bd63] bg-[#f7e7c4] text-[4.5rem] text-[#0f3d3a] shadow-[0_0_0_18px_rgba(246,189,99,0.12),18px_18px_0_rgba(7,30,29,0.28)] transition-transform duration-300 group-hover:scale-105 md:w-[170px] md:border-[12px] md:text-[5.5rem]">{character.icon}</div>
				<span className="absolute bottom-[22px] right-6 text-[0.7rem] font-bold tracking-[0.16em] text-[#a9e4d0]">MAKE IT REAL</span>
			</div>

			<div className="px-[30px] pb-[34px] pt-[30px] md:px-[42px] md:pb-[42px] md:pt-9">
				<p className="text-[0.82rem] font-bold uppercase tracking-[0.11em] text-[var(--card-accent)]">{character.title}</p>
				<h1 className="mt-1 font-serif text-[clamp(3rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.06em] text-[#163332]">{character.name}</h1>
				<p className="mt-5 font-serif text-[1.2rem] font-bold leading-[1.25] text-[#c2573d]">{character.tagline}</p>
				<p className="mt-3 max-w-[38rem] text-[0.98rem] leading-[1.65] text-[#55716b]">{character.description}</p>

				<div className="mt-[30px]">
					<h2 className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[#163332]">Your strengths</h2>
					<ul className="m-0 flex list-none flex-wrap gap-2 p-0">
						{character.traits.map((trait) => <li className="rounded-full border border-[#b9d9cc] px-3 py-2 text-[0.82rem] font-bold text-[#28645a] before:text-[#c2573d] before:content-['+_']" key={trait}>{trait}</li>)}
					</ul>
				</div>

				<div className="mt-[30px]">
					<h2 className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[#163332]">Try exploring</h2>
					<div className="flex flex-wrap gap-2">
						{character.careers.map((career) => <span className="rounded-full border border-[#f1d49a] bg-[#fff5df] px-3 py-2 text-[0.82rem] font-bold text-[#8f5d19]" key={career}>{career}</span>)}
					</div>
				</div>
			</div>
		</article>
	)
}

export default CharacterCard