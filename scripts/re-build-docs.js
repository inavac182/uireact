const { readdirSync, existsSync, mkdirSync, rmSync, cpSync, renameSync, writeFileSync } =  require('fs');

const baseDocsAppPath = `./apps/docs/src/app/docs/(pages)`;

const docPageContent = `
"use client";
import Doc from "./doc.mdx";

export default function Page() {
  return <Doc />;
}
`;

console.log('Compiling doc pages...');

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
  const packageDocFolderRoute = `${baseDocsAppPath}/${directory}/`;

  // Create doc folder or clean up if it exists inside docs app

  if (!existsSync(packageDocFolderRoute)){
    mkdirSync(packageDocFolderRoute);
  }

  const singleDocPage = packageDocsEntries.filter((docEntry) => docEntry.name === 'page.mdx').length > 0;

  if (singleDocPage) {
    // Copy files from package folder to docs app
    packageDocsEntries.forEach((entry) => {
      if (entry.name === "page.mdx") {
        cpSync(`${entry.path}/${entry.name}`, `${packageDocFolderRoute}doc.mdx`, { recursive: true, force: true });  
        writeFileSync(`${packageDocFolderRoute}page.tsx`, docPageContent);
      } else {
        cpSync(`${entry.path}/${entry.name}`, `${packageDocFolderRoute}${entry.name}`, { recursive: true, force: true });
      }
    });
  } else {
    packageDocsEntries.forEach((entry) => {
      const packageDocFolderRoute = `${baseDocsAppPath}/${entry.name}/`;

      cpSync(`${entry.path}/${entry.name}`, packageDocFolderRoute, { recursive: true, force: true });
      renameSync(`${packageDocFolderRoute}page.mdx`, `${packageDocFolderRoute}doc.mdx`);
      writeFileSync(`${packageDocFolderRoute}page.tsx`, docPageContent);
    });
  }
});

console.log('Doc pages compiled');
