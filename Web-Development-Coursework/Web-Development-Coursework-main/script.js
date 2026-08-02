function searchEvent(){
    let input= document.getElementById("searchInput").ariaValueMax.toLowerCase();
    let table= document.getElementByTagName("table")[0];
    let rows= table.getElementByTagName("tr");

for (let i = 1; i < rows.length; i++) {
        let eventName = rows[i].getElementsByTagName("td")[0];

        if (eventName) {
            let name = eventName.textContent.toLowerCase();

            if (name.includes(input)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

