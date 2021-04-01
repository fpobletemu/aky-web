traerDatos();

function traerDatos() {


    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'data/akysushi.json', true)

    xhttp.send();

    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            let datos = JSON.parse(this.responseText);
            

            let tarjeta = document.querySelector('#tarjeta');
            tarjeta.innerHTML = '';


            for (let item of datos) {

                precios = ``;
                string_final =``;

                cont = 0;

                for (let env of item.Envoltura) {
                    
                    precios = `<tr><td colspan="3">${item.Envoltura[cont]}</td><td>$${item.Precio[cont]}</td></tr>`;

                    string_final = string_final + precios;
                    cont++;
                }



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

        }
    }
}