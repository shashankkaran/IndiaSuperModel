import React from 'react'

import cc1 from "../../img/cc1.png";
import cc2 from "../../img/cc2.png";
import cc3 from "../../img/cc3.png";

function Cc() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={cc1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={cc2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={cc3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
          
            </div>
        </div>
    )
}

export default Cc
