import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{vue,js,ts}", "./components/**/*.{vue,js,ts}"],
  theme: { extend: {} },
  plugins: [typography],
};
