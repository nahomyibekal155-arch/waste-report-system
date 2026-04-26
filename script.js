function addReport() {
  let location = document.getElementById("location").value;
  let issue = document.getElementById("issue").value;

  if (location === "" || issue === "") {
    alert("Please fill all fields");
    return;
  }

  let list = document.getElementById("reportList");
  let item = document.createElement("li");

  item.innerText = location + " - " + issue;
  list.appendChild(item);

  document.getElementById("location").value = "";
  document.getElementById("issue").value = "";
}