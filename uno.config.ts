// uno.config.ts

import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import { defineConfig } from 'unocss'

export default defineConfig({
	presets: [presetUno(), presetAttributify()],
	transformers: [transformerAttributifyJsx()],
})
