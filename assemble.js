const { Folder, File } = require("file-system");

const srcFolder = Folder.openSync("ts");

const outFile = srcFolder.openFolderSync("..").openFileSync("outfile.js");
let content = "";

for (const file of srcFolder.recursiveFileListSync.filter(file => file.basename != "index" && file.extension == "js"))
    content += file.readSync();

content += srcFolder.readFileSync("index.js");

outFile.writeSync(content);
