module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        "primary-light": "#a78bfa",
        "primary-dark": "#7c3aed",
        secondary: "#10b981",
        accent: "#f59e0b",
        "dark-bg": "#0f172a",
        "gray-text": "#9ca3af",
        "light-bg": "#f9fafb",
        "neon-purple": "#b624ff",
        "electric-blue": "#0af",
        "cyber-green": "#00ffa3",
        "deep-space": "#050520",
        "nebula": "#9442fe",
        "cosmic-dust": "#ffcaff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        gradientFlow: "gradientFlow 3s ease infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        morph: "morph 8s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in-left": "fadeInLeft 1s ease-out",
        "fade-in-right": "fadeInRight 1s ease-out",
      },
      keyframes: {
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "40% 60% 30% 70%/60% 40% 70% 30%" },
          "75%": { borderRadius: "60% 40% 70% 30%/40% 60% 30% 70%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        'cyberpunk-grid': "linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(15, 23, 42, 0) 70%)",
        'cosmic-gradient': "linear-gradient(to right, #0f172a, #1e1b4b, #4c1d95)",
        'neon-glow': "linear-gradient(90deg, #b624ff 0%, #0af 50%, #00ffa3 100%)",
      },
      boxShadow: {
        'neon': '0 0 5px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-strong': '0 0 10px rgba(139, 92, 246, 0.7), 0 0 30px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'blob': '60% 40% 30% 70%/60% 30% 70% 40%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
