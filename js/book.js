//loading API DATA
const loadData = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // If input field is empty
    if (searchText != '') {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.docs.slice(0, 20)));
       
    }
    else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = 'block';
        const errorMessage2 = document.getElementById('error-message2');
        errorMessage2.style.display = 'none'; //block
        const searchResult = document.getElementById("search-result");
        searchResult.textContent = '';
        const resultFound = document.getElementById("total-result");
        resultFound.innerText = '';
    }
    searchField.value = '';
}

//displaying the API on the website

const displayData = books => {
    const searchResult = document.getElementById("search-result");
    // if the book names does not match 
    if(books.length === 0){
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = 'none'; //block
        const errorMessage2 = document.getElementById("error-message2");
        errorMessage2.style.display = 'block';
        const searchResult = document.getElementById("search-result");
        searchResult.textContent = '';
        const resultFound = document.getElementById("total-result");
        resultFound.innerText = '';
    }
  else{
    const searchResults = document.getElementById("search-result");
    searchResults.textContent = '';
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = 'none';
    const errorMessage2 = document.getElementById("error-message2");
    errorMessage2.style.display = 'none';
    books.forEach(book => {
        const searchResult = document.getElementById("search-result");
        const resultFound = document.getElementById("total-result");
        resultFound.innerText = `Total Result Found: ${books.length}`;
       
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = 'none';
        const errorMessage2 = document.getElementById("error-message2");
        errorMessage2.style.display = 'none';

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
      <div class='h-50'>
      <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-filter" alt="...">
      </div>
      <div class="card-body">
        <h3 class="card-title">Book Name: '${book.title}'</h3>
        <h4 class="card-text">Author Name: '${book.author_name}' </h4>
        <h5 class="card-text">First Published: '${book.first_publish_year}'</h5>
        <h5 class="card-text">Publisher: '${book.publisher}'</h5>

      </div>
    </div>
    `;
        searchResult.appendChild(div);
    });
  }
}