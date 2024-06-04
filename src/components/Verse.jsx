import { language } from './language.js'
import { useStore } from '@nanostores/react'
import { languages } from './languages.js'

export default function Verse({ number }) {
  const $language = useStore(language)
  const poem = languages[$language].poem

  return (
    <article class='sm:text-lg'>
      <p class='poem-line relative bottom-20'>
        <span class='opacity-75'>{number}.</span> {poem[number - 1]}
      </p>
    </article>
  )
}
