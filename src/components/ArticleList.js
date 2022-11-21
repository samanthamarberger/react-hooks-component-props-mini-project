import React from "react";
import Article from "./Article.js"

function ArticleList({articles}) {
    const articleElements = articles.map((article) => {
        return (
            <Article key={article.id} id={article.id} title={article.title} date={article.date} preview={article.preview}/>
        )
    })
    console.log(articles);
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList