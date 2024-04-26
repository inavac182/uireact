const { readdirSync, existsSync, mkdirSync, rmSync, cpSync } =  require('fs');

console.log('Compiling packages metadata...');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const getFilesInDirectory = source => readdirSync(source, { withFileTypes: true });

// Get package folders list
const directories = getDirectories('packages');

// Copy docs files from package folder to docs package folder
directories.map((directory) => {
    const packageDocsEntries = getFilesInDirectory(`./packages/${directory}/docs`);
    const packageJson = `./packages/${directory}/package.json`;
    const singleDocPage = packageDocsEntries.filter((docEntry) => docEntry.name === 'page.mdx').length > 0;

    if (!existsSync(packageJson)) {
        console.error(`No package json found in package: ${directory}`);
        return;
    }

    if (singleDocPage) {
        cpSync(`./packages/${directory}/package.json`, `./packages/${directory}/docs/package-metadata.json`);
    } else {
        packageDocsEntries.forEach((entry) => {
            cpSync(`./packages/${directory}/package.json`, `./packages/${directory}/docs/${entry.name}/package-metadata.json`);
        });
    }
});

console.log('Packages metada compiled...');
