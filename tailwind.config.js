/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               fontFamily: {
                    poppins: "Poppins",
               },
               animation: {
                    progress: "progress 10s linear",
               },
               keyframes: {
                    progress: {
                         "0%": {
                              width: 0,
                              background: "#555",
                         },
                         "79%": {
                              width: "79%",
                              background: "#555",
                         },
                         "80%": {
                              width: "80%",
                              background: "orangered",
                         },
                         "100%": {
                              width: "100%",
                              background: "orangered",
                         },
                    },
               },
               width: {
                    optionWidth: "calc(50% - 20px)",
               },
          },
     },
     plugins: [],
};
