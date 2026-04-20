import js from "@eslint/js";
import globals from "globals";
import tailwind from "eslint-plugin-tailwindcss";
import html from "eslint-plugin-html";

export default [
  // 1. Core JS Rules
  js.configs.recommended,
  
  // 2. Tailwind CSS Rules
  ...tailwind.configs["flat/recommended"],

  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      html, 
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery, // Useful if your theme uses jQuery
        Shopify: "readonly", // Prevents 'Shopify is not defined' errors
      },
    },
   rules: {
  "no-unused-vars": "error",                 // Blocks merge if JS variables are unused
  "no-console": "error",                    // Blocks merge if console.log is present
},
  },
  
  // 3. Specifically for CommonJS files
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  // 4. Ignore compiled/vendor assets
  {
    ignores: [
      "assets/*.min.js",
      "assets/vendor.js",
      "node_modules/",
      ".shopify-cli.yml"
    ],
  },
];