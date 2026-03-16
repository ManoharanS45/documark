const articles = [
  {
    title: "Getting Started with DocuMark",
    file: "docs/getting-started.md"
  }
];

const articleList = document.getElementById("article-list");
const output = document.getElementById("published-output");

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