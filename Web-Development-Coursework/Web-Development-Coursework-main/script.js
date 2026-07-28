<script>
function searchEvent() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let eventTable = document.querySelector("table");
    let rows = eventTable.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let eventName = rows[i].getElementsByTagName("td")[0];

        if (eventName) {
            let text = eventName.textContent.toLowerCase();

            if (text.includes(searchInput)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}   
</script>
