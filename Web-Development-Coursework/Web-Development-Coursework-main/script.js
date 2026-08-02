function searchEvent(){
    let input= document.getElementById("searchInput").value.toLowerCase();
    let tables= document.getElementsByTagName("table");

for (let t = 0; t < 2; t++) {
    let rows = tables[t].getElementsByTagName("tr");

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
}
