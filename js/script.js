//get access to HTML
const contactList = document.querySelector('.contact-list');
const pagination = document.querySelector('.pagination li');
const contactListArray = contactList.children;

//create a array to store data from HTML
let itemList = [];
for (let i = 0; i < contactListArray.length; i++){
    let item = contactListArray[i];
    itemList.push(item);
}

//init variables
let current_page = 1;
let items_per_page = 10;
let totalPages = Math.ceil(itemList.length/items_per_page);

//function to display the list 
function display(container, currentpage, itemsperpage, items){
    //init the container
    container.innerHTML = "";
    currentpage--;
    //slice the itemList so we have a new list that has 10 items
    let start = itemsperpage * currentpage;
    let end = start + itemsperpage;
    let paginatedItems = items.slice(start, end);
    //loop through the new array
    for(let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];
        container.appendChild(item);
    }

}

//function to set up the pagination base on totalitem and items per page
function setupPagination(container, totalpage, items){
    //init the container
    container.innerHTML="";
    for(let i = 1; i < totalpage + 1; i++){
        let btn = paginationButton(i, items);
        container.appendChild(btn);
    }
}

//function create buttons, and make them clickable 
function paginationButton(page, items){
    let button = document.createElement('a');
    button.innerText = page;

    if(current_page == page) button.classList.add('active');

    //when click a button, make the current button active and remove
    //active from the previous button
    button.addEventListener('click', function(){
        current_page = page;
        
        display(contactList, current_page, items_per_page, items);
        let current_btn = document.querySelector('a.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}

//call the functions 
display(contactList, current_page, items_per_page, itemList);
setupPagination(pagination, totalPages, itemList);



