/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': 'var(--bg-primary)',
				'font-primary': 'var(--font-primary)',
				'font-secondary': 'var(--font-secondary)',
			},
			fontFamily: {
				irra: ['irra'],
			},
		},
	},
	plugins: [],
};
