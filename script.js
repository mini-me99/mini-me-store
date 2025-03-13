function showTab(tabId) {
    var tabs = document.getElementsByClassName("container");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
}

function addRow() {
    var table = document.getElementById("orderTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = '<input type="text" name="code[]">';
    cell2.innerHTML = '<input type="text" name="quantity[]">';
}

function submitOrder() {
    var orders = document.querySelectorAll("#orderTable input");
    var orderDetails = "";
    for (var i = 0; i < orders.length; i += 2) {
        if (orders[i].value && orders[i + 1].value) {
            orderDetails += `Code: ${orders[i].value}, Quantity: ${orders[i + 1].value}\n`;
        }
    }
    document.getElementById("orderSummary").value = orderDetails;
    showTab('checkout');
}

function openModal(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
