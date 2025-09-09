import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "styled-system/**",
    ],
  },
  {
    plugins: { "@stylistic": stylistic },
    rules: {
      "import/no-anonymous-default-export": "off",
      "@stylistic/semi": "error",
      "@stylistic/quotes": "error",
      "@stylistic/array-bracket-newline": ["error", "consistent"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": "error",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": "error",
      "@stylistic/comma-style": "error",
      "@stylistic/computed-property-spacing": "error",
      "@stylistic/curly-newline": ["error", { "consistent": true }],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": "error",
      "@stylistic/function-call-spacing": "error",
      "@stylistic/function-paren-newline": ["error", "consistent"],
      "@stylistic/implicit-arrow-linebreak": "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-closing-bracket-location": "error",
      "@stylistic/jsx-closing-tag-location": "error",
      "@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      "@stylistic/jsx-curly-newline": ["error", "consistent"],
      "@stylistic/jsx-curly-spacing": ["error", { when: "never", children: false }],
      "@stylistic/jsx-equals-spacing": ["error", "never"],
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "@stylistic/jsx-pascal-case": "error",
      "@stylistic/jsx-wrap-multilines": ["error", {
        "declaration": "parens-new-line",
        "return": "parens-new-line",
        "assignment": "parens-new-line",
      }],
      "@stylistic/jsx-self-closing-comp": ["error", {
        "component": true,
        "html": true,
      }],
      "@stylistic/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
      "@stylistic/jsx-quotes": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-before-function-paren": ["warn", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
      }],
      "@stylistic/space-in-parens": "error",
      "@stylistic/spaced-comment": [
        "error",
        "always",
        {
          "exceptions": ["-", "*"],
          "markers": ["/"],
        },
      ],
      "@stylistic/switch-colon-spacing": "error",
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/no-multiple-empty-lines": "error",
      "@stylistic/type-annotation-spacing": "warn",
      "@stylistic/type-generic-spacing": "warn",
      "@stylistic/type-named-tuple-spacing": "warn",

      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
