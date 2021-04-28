leerPromos();

function leerPromos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "data/slider-data.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let obj = document.querySelector("#all-promos");
      
      var act = `active`;
      

        for (let item of datos) {

            obj.innerHTML += `<div class="carousel-item  ${act}" data-bs-interval="1500">
            <img src="${item.URL}" class="d-block w-100" alt="...">
          </div>`
             
          act = ``;
        }
        
       
    }
  };
}
