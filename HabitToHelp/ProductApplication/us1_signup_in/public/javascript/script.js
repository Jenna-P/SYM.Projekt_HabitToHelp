//clientside custom js functions here

let  currentHabit = document.querySelector(".testHabit");


function addActiveId() {
    if(currentHabit.id =="") {
        currentHabit.setAttribute("id","active");
      }
      else{
        currentHabit.removeAttribute("id");
        currentHabit.setAttribute("id", "");
      }
}

//if currentHabit has id active
//show currentHabit prop in EJS

/* Modal JS - create new habit*/
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("createHabitButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }