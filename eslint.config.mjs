import { FlatCompat } from "@eslint/eslintrc";

// Initialize compatibility mode
const compat = new FlatCompat({
    baseDirectory: import.meta.dirname, // Ensure this works in your Node.js version
});

export default [
    ...compat.config({
        extends: ["next"],
        rules: {
            "react/no-unescaped-entities": "off", // Disable warning for unescaped entities
            "@next/next/no-page-custom-font": "off", // Disable warning for custom fonts
            "@typescript-eslint/no-unused-vars": "off", // Disable unused variables error
            "no-console": "warn", // Allow console logs but show a warning
            "no-debugger": "warn", // Allow debugger but show a warning
        },
    }),
];
