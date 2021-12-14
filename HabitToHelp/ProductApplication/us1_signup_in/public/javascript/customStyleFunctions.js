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
