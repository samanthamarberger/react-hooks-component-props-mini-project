import React from "react";
import Article from "./Article.js"

function ArticleList({posts}) {
    const articleElements = posts.map((article) => (
            <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
        )
    )
    console.log(articleElements);
    return <main>{articleElements} </main>
}

export default ArticleList