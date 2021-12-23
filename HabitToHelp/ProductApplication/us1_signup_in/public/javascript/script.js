//clientside custom js functions here


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

  //send target habit value with GET method
  const items = document.querySelectorAll('li, form.iconButton');
    items.forEach(item => {
      item.addEventListener('click',(e)=>{  
        let targetHabit = e.target.innerText;
        //let targetobjId = e
        console.log(targetHabit);
        fetch('/dashboard/'+targetHabit , { method:'GET', data: {habitName: targetHabit}})
      .then(function (response) {
        if (response.ok) {
          console.log('clicked target habit and send value')
          return
        }
        throw new Error('Request failed.')
      })
      .catch(function (error) {
        console.log(error)
      })
    })
  })


  /******** Edit habit modal event ***********/
  // Get the modal
  var modalEdit = document.getElementById("myModalEdit");

  // Get the button that opens the modal
  var btnEdit = document.querySelector(".editHabitButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeEdit")[0];

  // When the user clicks on the button, open the modal
  btnEdit.onclick = function() {
    modalEdit.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modalEdit.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modalEdit) {
      modalEdit.style.display = "none";
    }
  }

  /* For edit habit modal information from chosen habit */
  
