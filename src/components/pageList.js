const apiKey = process.env.API_KEY;

const PageList = (argument = '') => {
    let numDisplayGames = 9;

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {
            const resultContent = articles.slice(0, numDisplayGames).map((article) => (
                `<article class="cardGame">
                    <img src="${article.background_image}">
                    <h1>${article.name}</h1>
                    <h2>${article.released}</h2>
                    <a href="#pagedetail/${article.id}">Voir plus ...</a>
                </article>`
            ));

            const resultContainer = document.querySelector('.page-list .articles');
            resultContainer.innerHTML = resultContent.join("\n");

            const hasMoreGames = articles.length > numDisplayGames;
            if (hasMoreGames) {
                renderLoadMoreButton();
            }
			else {
				removeLoadMoreButton();
			}
        };

        const fetchList = (url) => {
            const finalURL = argument ? `${url}&search=${cleanedArgument}` : url;
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results);
                });
        };

        const renderLoadMoreButton = () => {
			const loadMoreButton = document.createElement('button');
			loadMoreButton.textContent = 'Afficher plus de jeux';
			loadMoreButton.addEventListener('click', loadMoreGames);
		  
			const buttonContainer = document.createElement('div');
			buttonContainer.classList.add('articles-container');
			buttonContainer.appendChild(loadMoreButton);
		  
			pageContent.appendChild(buttonContainer);
		};

        const removeLoadMoreButton = () => {
            const loadMoreButton = document.querySelector('button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        };

        const loadMoreGames = () => {
            numDisplayGames += 6;
            preparePage();
        };

        const today = new Date();
        const nextMonth = new Date(today);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        const formattedToday = today.toISOString().split('T')[0];
        const formattedNextMonth = nextMonth.toISOString().split('T')[0];

        fetchList(`https://api.rawg.io/api/games?key=${apiKey}&dates=${formattedToday},${formattedNextMonth}&ordering=released`);
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

