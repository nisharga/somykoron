/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            '2xl': '1380px'
        }
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    extend: {
        colors: {
            white: '#ffffff',
            primary: {
                300: '#222052',
                500: '#26235B'
            },
            gray: {
                25: '#DDDDDD',
                50: '#565656',
                75: '#DEDEE6',
                100: '#D0D1D4',
                150: '#8280A0',
                200: '#B9BABE',
                250: '#E9E9EF',
                300: '#A1A3A8',
                400: '#8A8C93',
                500: '#73747D',
                600: '#5B5D67',
                700: '#444651',
                800: '#2C2F3C',
                900: '#151826'
            }, 
            secondary: '#FFB606',
            success: '#F6F6F6',
            error: '#ff4444',
            warning: '#ffbb33',
            info: '#33b5e5'
        }, 
        boxShadow: {
            base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
        }
    }
},
  plugins: [],
};
