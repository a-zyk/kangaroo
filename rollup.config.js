import json from '@rollup/plugin-json';


const preprocessOptions = require("./svelte.config").preprocessOptions;
const production = !process.env.ROLLUP_WATCH;

export default {
    // ...

    plugins: [
        // ...
        svelte({
            // enable run-time checks when not in production
            dev: !production,

            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('public/build/bundle.css');
            },
            preprocess: sveltePreprocess({
                ...preprocessOptions,
                sourceMap: !production,
            }),
        }),
        // ...
    ,
     
      json({
        compact: true
      }),]
};