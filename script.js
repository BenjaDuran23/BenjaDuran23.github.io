document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "e2464964edcf4d07b42ebb66d1830512"; 
    const category = "technology"; 
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=10&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok") {
                let articles = data.articles;
                let newsHTML = "";

                articles.forEach(article => {
                    newsHTML += `
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card h-100">
                                <img src="${article.urlToImage ? article.urlToImage : 'no url to image'}" class="card-img-top" alt="News Image">
                                <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <p class="card-text">${article.description ? article.description : "No description."}</p>
                                    <p class="text-muted"><small>Source: ${article.source.name}</small></p>
                                    <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>`;
                });

                document.getElementById("news-container").innerHTML = newsHTML;
            }
        }
    )
})