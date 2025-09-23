/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f4ff',
					100: '#e1eaff',
					200: '#c9d7ff',
					300: '#a8baff',
					400: '#8694ff',
					500: '#667eea',
					600: '#5a67d8',
					700: '#4c51bf',
					800: '#434190',
					900: '#3c366b',
				},
				secondary: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#764ba2',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				}
			},
			fontFamily: {
				sans: ['Delight', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}