const search = document.getElementById("searchForm");

const searchForm = () => {
    search.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchQuery = document.getElementById('searchBar').value.trim();
        window.location.href = `index.html#pagelist/${searchQuery}`;
        console.log(searchQuery);
      });
}


export default searchForm;
