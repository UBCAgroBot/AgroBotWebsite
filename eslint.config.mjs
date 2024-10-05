import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Disable react/no-unknown-property and ignore specific Three.js properties
      'react/no-unknown-property': [
        'off',
        { ignore: ['dispose', 'geometry', 'material', 'position', 'rotation'] },
      ],

      // Disable React JSX scope requirement for React 17+
      'react/react-in-jsx-scope': 'off',

      // Disable global "no-unused-vars" and "no-undef" rules
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-dupe-keys': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-undef': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-extra-semi': 'off',

      // You can disable or modify other rules here as needed
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
