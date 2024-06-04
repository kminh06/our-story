import React from 'react'
import { languages } from './languages.js'
import { language } from './language.js'
import { useStore } from '@nanostores/react'

export default function Intro() {
  const $language = useStore(language)
  const hero = languages[$language].hero

  return (
    <div class='p-5 text-center flex flex-col gap-1'>
      <p class='animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75'>
        {hero[0]}
      </p>
      <p class='animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white'>
        {hero[1]}
      </p>
      <p class='animated text-sm md:text-base lg:text-lg opacity-75'>
        {hero[2]}
      </p>
    </div>
  )
}
