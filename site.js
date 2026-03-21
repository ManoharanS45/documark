/* ============================= */
/* DOM Elements */
/* ============================= */

const articleList = document.getElementById("article-list");
const output = document.getElementById("published-output");
const articleTitle = document.getElementById("article-title");
const tocContainer = document.getElementById("toc");


/* Store all articles for search */
let allData = null;

/* ============================= */
/* Load Structure (Sidebar) */
/* ============================= */

async function loadStructure() {
  try {
    const response = await fetch("data/structure.json");
    const data = await response.json();
    allData = data; // store globally

    let firstArticlePath = null;

    data.categories.forEach(category => {

      /* Category Title (clickable for collapse later) */
      const categoryTitle = document.createElement("li");
      categoryTitle.textContent = "📁 " + category.name;
      categoryTitle.style.fontWeight = "600";
      categoryTitle.style.marginTop = "15px";
      categoryTitle.style.cursor = "pointer";

      articleList.appendChild(categoryTitle);

      /* Article container (for collapse later) */
      const articleGroup = document.createElement("div");

      category.articles.forEach((article) => {

        const li = document.createElement("li");
        li.textContent = article.title;
        li.style.paddingLeft = "15px";

        li.addEventListener("click", () => {
          loadArticle(article.file);

          // Highlight active article
          document.querySelectorAll("#article-list li").forEach(el => {
            el.classList.remove("active-article");
          });
          li.classList.add("active-article");
        });

        articleGroup.appendChild(li);

        if (!firstArticlePath) {
          firstArticlePath = article.file;
        }

      });

      articleList.appendChild(articleGroup);

      /* (Next step) Collapse logic hook */
      categoryTitle.addEventListener("click", () => {
        articleGroup.style.display =
          articleGroup.style.display === "none" ? "block" : "none";
      });

    });

    /* Auto load first article */
    if (firstArticlePath) {
      loadArticle(firstArticlePath);
    }

  } catch (error) {
    output.innerHTML = "<p>Failed to load documentation structure.</p>";
    console.error(error);
  }
}

/* ============================= */
/* Search Function */
/* ============================= */

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  if (!allData) return;

  articleList.innerHTML = "";

  allData.categories.forEach(category => {

    const matchedArticles = category.articles.filter(article =>
      article.title.toLowerCase().includes(query)
    );

    if (matchedArticles.length > 0) {

      const categoryTitle = document.createElement("li");
      categoryTitle.textContent = "📁 " + category.name;
      categoryTitle.style.fontWeight = "600";
      categoryTitle.style.marginTop = "15px";

      articleList.appendChild(categoryTitle);

      matchedArticles.forEach(article => {
        const li = document.createElement("li");
        li.textContent = article.title;
        li.style.paddingLeft = "15px";

        li.addEventListener("click", () => loadArticle(article.file));

        articleList.appendChild(li);
      });

    }

  });

  /* If empty search → reload full structure */
  if (query === "") {
    articleList.innerHTML = "";
    loadStructure();
  }
});

/* ============================= */
/* Load Article */
/* ============================= */

async function loadArticle(filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      output.innerHTML = "<p>Article not found.</p>";
      articleTitle.textContent = "";
      return;
    }

    const markdown = await response.text();
    const html = marked.parse(markdown);

    /* Inject content */
    output.innerHTML = html;

    /* Extract Title (first H1) */
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const h1 = tempDiv.querySelector("h1");
    articleTitle.textContent = h1 ? h1.innerText : "Untitled Article";

    /* Generate TOC */
    generateTOC();

  } catch (error) {
    output.innerHTML = "<p>Error loading article.</p>";
    console.error(error);
  }
}

/* ============================= */
/* Generate TOC (H2, H3, H4) */
/* ============================= */

function generateTOC() {
  tocContainer.innerHTML = "";

  const headings = output.querySelectorAll("h2, h3, h4");

  headings.forEach((heading, index) => {
    const id = "heading-" + index;
    heading.id = id;

    const item = document.createElement("div");
    item.textContent = heading.innerText;

    /* Indentation */
    if (heading.tagName === "H3") item.style.marginLeft = "10px";
    if (heading.tagName === "H4") item.style.marginLeft = "20px";

    /* Scroll on click */
    item.addEventListener("click", () => {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    });

    tocContainer.appendChild(item);
  });
}

/* ============================= */
/* Dev Feature Message */
/* ============================= */

function showDevMsg() {
  alert("This feature is under development 🚧");
}

/* ============================= */
/* Init */
/* ============================= */

loadStructure();