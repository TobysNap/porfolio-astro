/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				txt: '#e1f6f9',
				bg: '#051719',
				accent: {
					DEFAULT: '#2BBFD0',
					50: '#DAF4F7',
					100: '#C9EFF4',
					200: '#A7E6ED',
					300: '#85DCE6',
					400: '#56CFDC',
					500: '#2BBFD0',
					600: '#2194A2',
					700: '#186A73',
					800: '#0E3F44',
					900: '#041416',
					950: '#000000',
				},
				secondary: {
					DEFAULT: '#351A81',
					50: '#C4B4F0',
					100: '#B6A3ED',
					200: '#9C81E6',
					300: '#815FDF',
					400: '#663DD8',
					500: '#5128C5',
					600: '#4321A3',
					700: '#351A81',
					800: '#221152',
					900: '#0F0724',
					950: '#05020C',
				},
				primary: '#b051db',
			},
			fontFamily: {
				accent: '"Mulish Variable"',
			},
		},
	},
	plugins: [],
};
