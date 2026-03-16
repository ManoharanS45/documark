const articleList = document.getElementById("article-list");
const output = document.getElementById("published-output");

async function loadStructure() {
  const response = await fetch("data/structure.json");
  const data = await response.json();

  data.categories.forEach(category => {

    const categoryTitle = document.createElement("li");
    categoryTitle.textContent = category.name;
    categoryTitle.style.fontWeight = "600";
    categoryTitle.style.marginTop = "15px";
    articleList.appendChild(categoryTitle);

    category.articles.forEach(article => {

      const li = document.createElement("li");
      li.textContent = article.title;
      li.style.cursor = "pointer";
      li.style.paddingLeft = "10px";

      li.addEventListener("click", async () => {

        const response = await fetch(article.file);
        const markdown = await response.text();
        const html = marked.parse(markdown);

        output.innerHTML = html;

      });

      articleList.appendChild(li);

    });

  });

  const firstArticle = document.querySelector("#article-list li + li");
  if (firstArticle) firstArticle.click();
}

loadStructure();