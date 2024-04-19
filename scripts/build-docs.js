const { readdirSync, existsSync, mkdirSync, rmSync, cpSync } =  require('fs');

const baseDocsAppPath = `./apps/docs/src/app/docs/(pages)`;

console.log('Compiling doc pages...');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const getFilesInDirectory = source => readdirSync(source, { withFileTypes: true });

// verify base path

if (!existsSync(baseDocsAppPath)) {
  mkdirSync(baseDocsAppPath);
} else {
  rmSync(baseDocsAppPath, { recursive: true, force: true });
  mkdirSync(baseDocsAppPath);
}

// Get package folders list

const directories = getDirectories('packages');

// Copy docs files from package folder to docs package folder

directories.map((directory) => {
  const packageDocsEntries = getFilesInDirectory(`./packages/${directory}/docs`);
  const packageDocFolderRoute = `${baseDocsAppPath}/${directory}/`;

  // Create doc folder or clean up if it exists inside docs app

  if (!existsSync(packageDocFolderRoute)){
    mkdirSync(packageDocFolderRoute);
  }

  // Copy files from package folder to docs app
  packageDocsEntries.forEach((entry) => {
    cpSync(`${entry.path}/${entry.name}`, `${packageDocFolderRoute}${entry.name}`, { recursive: true });
  });
});

console.log('Doc pages compiled');
