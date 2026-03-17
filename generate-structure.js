const fs = require("fs");
const path = require("path");

const docsDir = "docs";
const outputFile = "data/structure.json";

const categories = [];

fs.readdirSync(docsDir).forEach(folder => {

  const folderPath = path.join(docsDir, folder);

  if (fs.statSync(folderPath).isDirectory()) {

    const articles = [];

    fs.readdirSync(folderPath).forEach(file => {

      if (file.endsWith(".md")) {

        articles.push({
          title: file
            .replace(".md","")
            .replace(/-/g," ")
            .replace(/\b\w/g, c => c.toUpperCase()),
          file: `${docsDir}/${folder}/${file}`
        });

      }

    });

    categories.push({
      name: folder.replace(/-/g," "),
      articles
    });

  }

});

fs.writeFileSync(outputFile, JSON.stringify({categories}, null, 2));

console.log("structure.json generated successfully!");