const searchBar = document.querySelector(".search-bar");
const boxes = document.querySelectorAll(".box");





function handleSearching(){
    const searchWords = searchBar.value.toLowerCase();// that self function called toLowerCase corrects the spelling incase of any mix with capital letters.
    boxes.forEach(box => {
        const text = box.textContent.toLowerCase();
        
        if (text.includes(searchWords)) {
            box.style.display = "block"; // Show the box if it matches the search
        } else {
            box.style.display = "none"; // Hide the box if it doesn't match
        }
    });
                                                 
}
