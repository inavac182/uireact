const { readdirSync, existsSync, mkdirSync, unlink, cpSync } =  require('fs');

const baseDocsAppPath = `./apps/docs/src/app/docs/(pages)`;

console.log('Building docs...');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const getFilesInDirectory = source => readdirSync(source, { withFileTypes: true });

// verify base path

if (!existsSync(baseDocsAppPath)) {
  mkdirSync(baseDocsAppPath);
}

// Get package folders list

const directories = getDirectories('packages');

// Copy docs files from package folder to docs package folder

directories.map((directory) => {
  const packageDocsEntries = getFilesInDirectory(`./packages/${directory}/docs`);
  const packageDocFolderRoute = `${baseDocsAppPath}/${directory}/`;

  // First, Create doc folder or clean up if it exists inside docs app

  if (!existsSync(packageDocFolderRoute)){
    mkdirSync(packageDocFolderRoute);
  } else {
    readdirSync(packageDocFolderRoute, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    });
  }

  // Second, Copy files from package folder to pages.mdx inside docs app

  packageDocsEntries.forEach((entry) => {
    console.log(entry);
      cpSync(`${entry.path}/${entry.name}`, `${packageDocFolderRoute}${entry.name}`, { recursive: true });
  });
});
