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
directories.forEach((directory) => {
    const packageDocsEntries = getFilesInDirectory(`./packages/${directory}/docs`);
    const packageJson = `./packages/${directory}/package.json`;
    const singleDocPage = packageDocsEntries.filter((docEntry) => docEntry.name === 'page.mdx').length > 0;

    if (!existsSync(packageJson)) {
        console.error(`No package json found in package: ${directory}`);
        return;
    }

    if (singleDocPage) {
        if (!existsSync(`./packages/${directory}/package.json`)) {
            console.error(`No package.json found in: ${directory}`);
            return;
        }

        if (!existsSync(`./packages/${directory}/docs/`)) {
            console.error(`No docs folder found in: ${directory}`);
            return;
        }

        if (!existsSync(`./packages/${directory}/docs/package-metadata.json`)) {
            console.error(`No package-metadata found in: ${directory}`);
        }

        try {
            cpSync(`./packages/${directory}/package.json`, `./packages/${directory}/docs/package-metadata.json`, { force: true, recursive: true });
        } catch(error) {
            console.error(error);
        }
        
    } else {
        packageDocsEntries.forEach((entry) => {
            if (!existsSync(`./packages/${directory}/package.json`)) {
                console.error(`No package.json found in: ${directory}`);
                return;
            }

            if (!existsSync(`./packages/${directory}/docs/${entry.name}/`)) {
                console.error(`No docs folder found in: ${directory}/docs/${entry.name}`);
                return;
            }

            if (!existsSync(`./packages/${directory}/docs/${entry.name}/package-metadata.json`)) {
                console.error(`No docs folder found in: ${directory}/docs/${entry.name}`);
            }

            try {
                cpSync(`./packages/${directory}/package.json`, `./packages/${directory}/docs/${entry.name}/package-metadata.json`, { force: true, recursive: true });
            } catch(error) {
                console.error(error);
            }
        });
    }
});

console.log('Packages metada compiled...');
