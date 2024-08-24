import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginTailwindcss from "eslint-plugin-tailwindcss";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off"
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: pluginImport,
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      "import/order": ["error", { "newlines-between": "always" }],
      "import/no-unresolved": "error",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  }
];
