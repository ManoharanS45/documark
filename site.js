
const articles = [
  {
    title: "Getting Started with DocuMark",
    file: "docs/getting-started.md"
  }
];

const articleList = document.getElementById("article-list");
const output = document.getElementById("article-content");

articles.forEach(article => {
  const li = document.createElement("li");
  li.textContent = article.title;
  li.style.cursor = "pointer";

  li.addEventListener("click", async () => {
    const response = await fetch(article.file);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    output.innerHTML = html;
  });

  articleList.appendChild(li);
});

/*async function loadArticle() {
  const output = document.getElementById("article-content");

  try {
    const response = await fetch("docs/getting-started.md");
    const markdown = await response.text();

    const html = marked.parse(markdown);
    output.innerHTML = html;

  } catch (error) {
    output.innerHTML = "Failed to load article.";
  }
}

loadArticle();
*/

/*let currentPublishedId = null;

const articleList = document.getElementById("article-list");
const output = document.getElementById("published-output");

// Get stored articles
function getArticles() {
    const articles = localStorage.getItem("articles");
    return articles ? JSON.parse(articles) : [];
}

// Render article list (Published only)
function renderArticleList() {
    const articles = getArticles().filter(article => article.published);

    articleList.innerHTML = "";

    if (articles.length === 0) {
        output.innerHTML = "<p>No published articles yet.</p>";
        return;
    }

    articles.forEach(article => {
        const li = document.createElement("li");

        // Active highlight
        if (article.id === currentPublishedId) {
            li.classList.add("active-article");
        }

        li.textContent = article.title;
        li.style.cursor = "pointer";

        li.addEventListener("click", function() {
            currentPublishedId = article.id;
            output.innerHTML = marked.parse(article.content);
            renderArticleList();
        });

        articleList.appendChild(li);
    });
}

// Initialize
renderArticleList();
*/