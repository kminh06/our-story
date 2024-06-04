import React from 'react'
import { languages } from './languages.js'
import { language } from './language.js'
import { useStore } from '@nanostores/react'

export default function FullPoem() {
  const $language = useStore(language)
  const poem = languages[$language].poem

  return (
    <article class='sm:text-lg z-40'>
      {poem.map((verse) => {
        return (
          <p class='poem-line'>
            <span class='opacity-75'>{poem.indexOf(verse) + 1}.</span> {verse}
          </p>
        )
      })}
    </article>
  )
}
