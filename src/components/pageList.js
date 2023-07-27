const apiKey = process.env.API_KEY;

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <img src="${article.background_image}">
          <h1>${article.name}</h1>
          <h2>${article.released}</h2>
          <a href="#pagedetail/${article.id}">Voir plus ...</a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url) => {
      const finalURL = argument ? `${url}&search=${cleanedArgument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    const formattedToday = today.toISOString().split('T')[0];
    const formattedNextMonth = nextMonth.toISOString().split('T')[0];
    
    fetchList(`https://api.rawg.io/api/games?key=${apiKey}&dates=${formattedToday},${formattedNextMonth}&ordering=released&page_size=9`);

  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageList;
