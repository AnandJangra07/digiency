/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: '16px',
      },
      boxShadow:{
        'card':'0px 1px 4px 0px #0000001A',
        
        
        
        // box-shadow: ;


        

      },
      fontFamily:{
    
        'poppins':[ "Poppins", "sans-serif"],
        'work-sans':[ "Work Sans", "sans-serif"]

      }
     
      
    },
  },
  plugins: [],
}

