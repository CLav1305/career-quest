import CharacterCard from './components/CharacterCard'
import characters from './data/characters.json'
import './App.css'

function App() {
  return (
    <main className="grid min-h-screen place-items-center gap-6 bg-[#f3f7f1] bg-[radial-gradient(#cfe5d9_1px,transparent_1px)] bg-[size:18px_18px] px-8 pb-[72px] pt-14 max-[700px]:px-4">
      <p className="w-full max-w-[960px] text-left text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#55716b]">Career Quest / results preview</p>
      <section className="grid w-full max-w-[1960px] grid-cols-1 gap-12 min-[981px]:grid-cols-2" aria-label="Career character results">
        {characters.map((character, index) => (
          <CharacterCard
            key={character.name}
            character={{ ...character, icon: ['✦', '⌁', '✳', '◎'][index] }}
            index={index}
          />
        ))}
      </section>
    </main>
  )
}

export default App
