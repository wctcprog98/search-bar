document.getElementById('searchInput').addEventListener('keyup', function (event) {
    let username = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
 
    //loop through array
    for (let i = 0; i < allNamesDOMCollection.length; i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase(); //grabs text from li and changes text to lowercase
        console.log(currentName); 

        if(currentName.includes(username)){
            allNamesDOMCollection[i].style.display = "block";
        }
        else{
            allNamesDOMCollection[i].style.display = "none";
        }
    }
}); 

// let container = document.querySelector('#results');
//we can also use the includes() method in if/else
