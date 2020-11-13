var title = document.querySelector('#title');
var author = document.querySelector('#author');
var year = document.querySelector('#year');
var bookList = document.querySelector('#book-list');
var enter = document.querySelector('.btn');


enter.addEventListener('click',function(e){
    e.preventDefault();

    if(title.value == "" || author.value == "" || year.value == ""){
        alert("Please Fill up all fields.");
    } 
    else{

        const createRow = document.createElement('tr');
        
        const createTitle = document.createElement('th');
        createTitle.innerHTML = title.value;
        createRow.appendChild(createTitle);

        const createAuthor = document.createElement('th');
        createAuthor.innerHTML = author.value;
        createRow.appendChild(createAuthor);

        const createYear = document.createElement('th');
        createYear.innerHTML = year.value;
        createRow.appendChild(createYear);


        bookList.appendChild(createRow);

    }
});
