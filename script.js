const loader = document.querySelector(".loader");
const modal = document.querySelector(".modal-container");


function afterLoading() { 
    loading();
    setTimeout(() => {
        loadModal();
        loader.style.display = "none";
    },2000);
}



function loading() {
   loader.style.display = "flex";
}

function loadModal() {
    modal.style.display ="flex";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



