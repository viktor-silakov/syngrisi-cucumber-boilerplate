/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require('vite');

// Define your output directories
const outputDirs = ['dist', 'dist/lorem'];

// eslint-disable-next-line require-jsdoc
async function multiBuild() {
    for (const outputDir of outputDirs) {
        console.log(`Building to ${outputDir}...`);

        // Build the project for the current output directory
        await build({
            build: {
                outDir: outputDir,
            },
        });

        console.log(`Finished building to ${outputDir}.`);
    }

    console.log('All builds completed.');
}

multiBuild();
