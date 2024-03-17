/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '479.99px' },
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				heroGradient: 'linear-gradient(95deg, #4923B4 2.39%, #E878CF 97.66%)',
			},
			colors: {
				blueviolet: 'rgba(80, 39, 181, 1)',
				lightgray: 'rgba(102, 103, 104, 1)',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: '.1s fade-in ease-in-out',
			},
		},
	},
	plugins: [],
}
