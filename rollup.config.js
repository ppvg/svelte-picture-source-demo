import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'

import pictureSource from 'svelte-picture-source'

const production = !process.env.ROLLUP_WATCH
const preprocess = !process.env.NO_PREPROCESS

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js',
	},
	plugins: [
		svelte({
			dev: !production,
			preprocess: preprocess && pictureSource({ staticDir: 'public' }),
		}),
		resolve({ browser: true, dedupe: ['svelte'] }),
		commonjs(),
		!production && serve(),
		!production && livereload('public'),
	],
	watch: { clearScreen: false },
}

function serve() {
	let started = false
	return {
		writeBundle() {
			if (!started) {
				started = true
				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true,
				})
			}
		},
	}
}
