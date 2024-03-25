function addTodo() {
    let input = document.getElementById("todoInput").value;
    if (input === "") {
        alert("Please enter a todo!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = input;
    
    let deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "  🚮🗑️";
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);
    document.getElementById("todoInput").value = "";
}

//slider
let slideIndex = 0;
showSlide(slideIndex);


function showSlide(n) {
    let slides = document.querySelectorAll('.slider img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
   setTimeout(showSlide, 8000); // Change image every 2 seconds
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function addSubject() {
    var programName = document.getElementById("program").value;
    var subject = document.getElementById("subject").value;
    var time = document.getElementById("time").value;
    var day = document.getElementById("day").value;
  
    if (programName === "" || subject === "" || time === "" || day === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    ;
   
    var cell = document.getElementById(day.toLowerCase() + "-" + time);
    cell.innerText = subject;
  
    // Set program name as the title
    document.getElementById("programName").innerText = "Program: " + programName;
  
    document.getElementById("subject").value = "";
    document.getElementById("time").value = "";
    document.getElementById("day").value = "";
  }3