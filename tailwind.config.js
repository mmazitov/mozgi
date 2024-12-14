/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',  // Путь к вашим Vue-компонентам
  ],
  theme: {
    extend: {
			animation: {
        'left-to-right': 'leftToRight 10s ease-in-out infinite',
        'right-to-left': 'rightToLeft 10s ease-in-out infinite',
				'rotate-clockwise': 'rotateClockwise 5s ease-in-out infinite',
      },
			keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-50%) scaleY(-1)' },
          '50%': { transform: 'translateX(50%) scaleY(-1)' },
          '100%': { transform: 'translateX(-50%) scaleY(-1)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(50%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(50%)' },
        },
				rotateClockwise: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' },
				},
      },
		},
  },
  plugins: [],
}
