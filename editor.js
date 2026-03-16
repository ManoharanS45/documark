let currentArticleId = null;

const articleList = document.getElementById("editor-article-list");
const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview-output");
const titleInput = document.getElementById("article-title");
const publishBtn = document.getElementById("publish-btn");

const modal = document.getElementById("modal");
const createArticleBtn = document.getElementById("create-article-btn");
const newArticleNameInput = document.getElementById("new-article-name");
const createBtn = document.getElementById("create-btn");

// ---------- Storage ----------

function getArticles() {
    const articles = localStorage.getItem("articles");
    return articles ? JSON.parse(articles) : [];
}

function saveArticles(articles) {
    localStorage.setItem("articles", JSON.stringify(articles));
}

// ---------- Render Sidebar ----------

function renderArticleList() {
    const articles = getArticles();
    articleList.innerHTML = "";

    articles.forEach(article => {
        const li = document.createElement("li");

        // Active Highlight
        if (article.id === currentArticleId) {
            li.classList.add("active-article");
        }

        // Title + Badge
        li.innerHTML = `
            ${article.title}
            <span class="status-badge ${article.published ? "published" : "draft"}">
                ${article.published ? "Published" : "Draft"}
            </span>
        `;

        li.addEventListener("click", function() {
            loadArticle(article.id);
            renderArticleList();
        });

        articleList.appendChild(li);
    });
}

// ---------- Load Article ----------

function loadArticle(id) {
    const articles = getArticles();
    const article = articles.find(a => a.id === id);

    if (!article) return;

    currentArticleId = id;
    titleInput.value = article.title;
    input.value = article.content;
    preview.innerHTML = marked.parse(article.content);
}

// ---------- Auto Save ----------

function autoSave() {
    if (!currentArticleId) return;

    const articles = getArticles();
    const articleIndex = articles.findIndex(a => a.id === currentArticleId);

    articles[articleIndex].title = titleInput.value;
    articles[articleIndex].content = input.value;

    saveArticles(articles);
}

input.addEventListener("input", function() {
    preview.innerHTML = marked.parse(input.value);
    autoSave();
});

titleInput.addEventListener("input", function() {
    autoSave();
    renderArticleList();
});

// ---------- Publish ----------

publishBtn.addEventListener("click", function() {
    if (!currentArticleId) {
        alert("Select an article first.");
        return;
    }

    const articles = getArticles();
    const articleIndex = articles.findIndex(a => a.id === currentArticleId);

    articles[articleIndex].published = true;

    saveArticles(articles);
    renderArticleList();

    alert("Article Published Successfully!");
});

// ---------- Modal Logic ----------

createArticleBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

newArticleNameInput.addEventListener("input", function() {
    createBtn.disabled = newArticleNameInput.value.trim() === "";
});

createBtn.addEventListener("click", function() {
    const title = newArticleNameInput.value.trim();

    const articles = getArticles();

    const newArticle = {
        id: Date.now(),
        title: title,
        content: "",
        published: false
    };

    articles.push(newArticle);
    saveArticles(articles);

    modal.style.display = "none";
    newArticleNameInput.value = "";
    createBtn.disabled = true;

    renderArticleList();
});

// ---------- Init ----------
renderArticleList();