const loadNews = () => {
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-04-14&sortBy=publishedAt&apiKey=9323aca32793412f9a39fa751407f6dc`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showNews(data.articles));
};
const showNews = (datas) => {
  datas.forEach((data) => {
    console.log(data);

    const container = document.getElementById("container");
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("col");
    creatDiv.innerHTML = `
    <div class="card">
    <img src=${data.urlToImage}"" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary"
        >${data.author}</small
      >
      <small>   ||${data.publishedAt}</small>
    </div>
  </div>
    `;

    container.appendChild(creatDiv);
  });
};
loadNews();
