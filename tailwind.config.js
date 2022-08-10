/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./views/*"],
    content: ["./node_modules/flowbite/**/*.js", "views/**/*.ejs"],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
