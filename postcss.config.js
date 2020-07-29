const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('precss'),
        process.env.NODE_ENV === 'production' ?  require('autoprefixer') : require('autoprefixer'),
        process.env.NODE_ENV === 'production' ? cssnano({preset: 'default'}): null,
        purgecss({
          content: ['./public/**/*.html', './src/**/*.jsx', './src/**/*.tsx', './src/**/*.ts'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ],
};
