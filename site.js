const articleList = document.getElementById("article-list");
const output = document.getElementById("published-output");

async function loadStructure() {
  try {
    const response = await fetch("data/structure.json");
    const data = await response.json();

    let firstArticlePath = null;

    data.categories.forEach(category => {

      // Category title
      const categoryTitle = document.createElement("li");
      categoryTitle.textContent = "📁 " + category.name;
      categoryTitle.style.fontWeight = "600";
      categoryTitle.style.marginTop = "15px";
      articleList.appendChild(categoryTitle);

      category.articles.forEach((article, index) => {

        const li = document.createElement("li");
        li.textContent = article.title;
        li.style.cursor = "pointer";
        li.style.paddingLeft = "15px";

        li.addEventListener("click", () => loadArticle(article.file));

        articleList.appendChild(li);

        // Save first article path
        if (!firstArticlePath) {
          firstArticlePath = article.file;
        }

      });

    });

    // Auto load first article
    if (firstArticlePath) {
      loadArticle(firstArticlePath);
    }

  } catch (error) {
    output.innerHTML = "<p>Failed to load documentation structure.</p>";
    console.error(error);
  }
}

async function loadArticle(filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      output.innerHTML = "<p>Article not found.</p>";
      return;
    }

    const markdown = await response.text();
    const html = marked.parse(markdown);

    output.innerHTML = html;

  } catch (error) {
    output.innerHTML = "<p>Error loading article.</p>";
    console.error(error);
  }
}

loadStructure();