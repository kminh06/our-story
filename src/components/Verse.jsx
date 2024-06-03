export const poem = [
  'In the beginning there was Earth, and animals, and there was man.',
  'Man populated the Earth plenty, and they prospered.',
  'Man built technologies, and cities, and weapons.',
  'For thousands of years, fantastical civilizations thrived.',
  'Then they angered the Gods, and a Great Flood sank the world.',
  'Those that tended herds and farmed crops lived high up, and they survived.',
  'They then populated the Earth plenty, and they prospered.',
]

export default function Verse({ number }) {
  return (
    <article class='sm:text-lg'>
      <p class='poem-line relative bottom-20'>
        <span class='opacity-75'>{number}.</span> {poem[number - 1]}
      </p>
    </article>
  )
}
