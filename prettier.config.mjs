/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  arrowParens: "avoid",
  bracketSpacing: true,
  printWidth: 100,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  useTabs: true,
};

export default config;
