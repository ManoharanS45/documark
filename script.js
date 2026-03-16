const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview-output");
const saveBtn = document.getElementById("save-btn");
const publishBtn = document.getElementById("publish-btn");
const titleInput = document.getElementById("article-title");

// Live Preview
input.addEventListener("input", function() {
    preview.innerHTML = marked.parse(input.value);
});

// Get Articles from localStorage
function getArticles() {
    const articles = localStorage.getItem("articles");
    return articles ? JSON.parse(articles) : [];
}

// Save Articles to localStorage
function saveArticles(articles) {
    localStorage.setItem("articles", JSON.stringify(articles));
}

// Publish Article
publishBtn.addEventListener("click", function() {
    const title = titleInput.value.trim();
    const content = input.value.trim();

    if (!title || !content) {
        alert("Title and content cannot be empty!");
        return;
    }

    const articles = getArticles();

    const newArticle = {
        id: Date.now(),
        title: title,
        content: content
    };

    articles.push(newArticle);
    saveArticles(articles);

    alert("Article Published Successfully!");

    titleInput.value = "";
    input.value = "";
    preview.innerHTML = "";
});