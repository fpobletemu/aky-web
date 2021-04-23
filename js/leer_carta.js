traerDatos();

function traerDatos() {


  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'data/akysushi.json', true)

  xhttp.send();

  let sushi_carta = [];
  let promos = [];
  let extras = [];





  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {


      let datos = JSON.parse(this.responseText);
      let tarjeta = document.querySelector('#tarjeta');
      let promosCard = document.querySelector('#promosCard');
      let test = document.querySelector('#test'); 

      promosCard.innerHTML = '';
      tarjeta.innerHTML = '';



      for (let item of datos) {

        precios = ``;
        string_final = ``;
        string_final2 = ``;

        let isnum = /^\d+$/.test(item.ID);
        let isprom = item.ID.includes("P");
        let isgour = item.ID.includes("RG");

        arrayPrecios = item.Precio;
        arrayEnvoltura = item.Envoltura;

        for (let index = 0; index < arrayEnvoltura.length; index++) {

          precios = `<tr><td colspan="3">${arrayEnvoltura[index]}</td><td><b>$${arrayPrecios[index]}</b></td></tr>`;

          precios2 = `<tr><td>${arrayEnvoltura[index]}</td></tr>`;

          string_final = string_final + precios;

          string_final2 = string_final2 + precios2;

        }







        if (isnum) {
          tarjeta.innerHTML += `
                <div class="my-5 col-lg-6 col-md-6 portfolio-item ${item.Tipo} wow fadeInUp" data-wow-delay="0.2s">
                <div class="portfolio-wrap">
              <div class="container">
                <div class="row">
                  <div class="portfolio-img-bg col-6">
                  </div>
                  <div class="portfolio-info-card col-6">

                  <h4>${item.ID} - ${item.Titulo}</h4>
                    
                    <table class="table caption-top">
                      <caption>${item.Tipo}</caption>
                      
                      <tbody>
                        ${string_final}
                      </tbody>
                    </table>
  
                  </div>
                </div>
              </div>
              


            </div>
            </div>
                `
        }

        if (isprom || isgour ) {
          promosCard.innerHTML += `<div class="my-5 col-lg-6 col-md-12 col-sm-12 portfolio-item ${item.Tipo}" >

          <div class="container">
            <div class="row">
              <div class="portfolio-img-bg col-6"></div>
              <div class="portfolio-info-card col-6">

                <h4>${item.ID} - ${item.Titulo}</h4>

                <h5><b>$${item.Precio}</b></h5>

                <table class="table caption-top">
                  <caption>${item.Descripcion}</caption>

                  <tbody>
                    ${string_final2}
                  </tbody>
                </table>

              </div>
            </div>
          </div>



        </div>`
        }



      }

    }
  }






}