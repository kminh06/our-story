import { language } from './language.js'
import { useStore } from '@nanostores/react'

export default function Select() {
  const $language = useStore(language)

  return (
    <select
      id='language'
      className='py-1 px-3 truncate rounded text-sm lg:text-base border border-white/25 blend bg-black w-40'
      value={$language}
      onChange={(event) => {
        language.set(event.target.value)
      }}
    >
      <option value='en'>English</option>
      <option value='vi'>Tiếng Việt</option>
      <option value='es'>Español</option>
      <option value='zh'>中文</option>
      <option value='fr'>Français</option>
      <option value='ar'>العربية</option>
    </select>
  )
}
