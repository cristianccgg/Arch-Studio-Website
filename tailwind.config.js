/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["League Spartan"],
      },
      colors: {
        veryDarkBlue: "#1B1D23",
        darkGrey: "#60636D",
        mediumGrey: "#7D828F",
        lightGrey: "#C8CCD8",
        veryLightGrey: "#EEEFF4",
        redErrors: "#DF5656",
      },
      backgroundImage: {
        "slide-mobile": "url('/images/home/mobile/image-hero-paramour.jpg')",
        "small-mobile": "url('/images/home/mobile/image-small-team.jpg')",
        "small-desktop": "url('/images/home/desktop/image-small-team.jpg')",
        "sol-mobile": "url('/images/portfolio/mobile/image-del-sol.jpg')",
        "sol-desktop": "url('/images/portfolio/desktop/image-del-sol.jpg')",
        "228b-mobile": "url('/images/portfolio/mobile/image-228b.jpg')",
        "228b-desktop": "url('/images/portfolio/desktop/image-228b.jpg')",
        prototype: "url('/images/portfolio/mobile/image-prototype.jpg')",
        "prototype-desktop":
          "url('/images/portfolio/desktop/image-prototype.jpg')",
        "trinity-mobile": "url('/images/portfolio/mobile/image-trinity.jpg')",
        "seraph-mobile": "url('/images/portfolio/mobile/image-seraph.jpg')",
        "paramount-mobile":
          "url('/images/portfolio/mobile/image-paramour.jpg')",
        "federal-mobile": "url('/images/portfolio/mobile/image-federal.jpg')",
        edelweiss: "url('/images/portfolio/mobile/image-edelweiss.jpg')",
        eebox: "url('/images/portfolio/mobile/image-eebox.jpg')",
        hypers: "url('/images/portfolio/mobile/image-hypers.jpg')",
        netcry: "url('/images/portfolio/mobile/image-netcry.jpg')",
        sxiv: "url('/images/portfolio/mobile/image-sxiv.jpg')",
      },
    },
  },
  plugins: [],
};
