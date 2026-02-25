let entries = 0;

function add(){

    const scrollText = document.getElementById("scrollText");
    const list = document.getElementById("list");
    const li = document.createElement("li");

    if (scrollText.value.trim() === "" || scrollText.value==null) {
        alert("Entry cannot be blank.");
        return;
    }

    li.textContent = scrollText.value;
    li.dataset.id = entries;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.dataset.id = entries;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = entries;

    editBtn.addEventListener("click", () => {
    const updated = prompt("Edit entry:", scrollText.textContent);
        if (updated === null) return; 
        if (updated.trim() === "") {
        alert("Entry cannot be blank.");
        return;
        }
        li.textContent = updated.trim();
        li.append(" ", editBtn, " ", deleteBtn);
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        document.getElementById("counter").textContent = "Total Entries: " + list.children.length;
    });



    li.append(" ", editBtn, " ", deleteBtn);

    entries++;
    document.getElementById("counter").textContent = "Total Entries: " + entries;

    list.append(li);

}