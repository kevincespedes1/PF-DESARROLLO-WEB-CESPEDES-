import React from 'react'

function Home() {
    return (
        <>
            <main>
                <section class="titulo-secundario">
                    <h2> Sevicios De Reparacion</h2>
                    <h3>Lo arreglamos ipso facto</h3>
                </section>
                <section class="servicios-index">
                    <div class="titulo-mecanica-index">
                        <span class="titulo-mecanica"> MECANICA</span>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div class="titulo-accesorios-index">
                        <span class="titulo-accesorios">ACCESORIOS AUTOMOVIL</span>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div class="titulo-reparacion-index">
                        <span class="titulo-reparacion">REPARACION AVERÍAS</span>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                </section>
                <div class="ven-visitanos">
                    <section class="visitanos">
                        <h2>VEN A VISITARNOS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium expedita, impedit assumenda
                            doloremque ab.</p>
                    </section>
                    <img src="./FONDO DEL TITULO TERCERO.png" alt="foto-de-coche" />
                </div>
                <div class="que-ofrecemos-principal">
                    <section class=" titulo-te-ofrecemos">
                        <h3>TE OFRECEMOS EL MEJOR SERVICIO PARA TU AUTOMOVIL</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam dignissimos fugiat corporis
                            beatae optio.</p>
                    </section>
                    <div class="que-ofrecemos">
                        <section class="ubicacion">
                            <img class="ubicacion-index" src="./simbolo de ubicacion1.png" alt="simbolo-de-ubicacion" />
                            <span>SIEMPRE DISPONIBLES</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis eos officiis quisquam
                                ipsum
                                saepe.</p>
                        </section>
                        <section class="pesos">
                            <img src="./simbolo de peso.png" alt="simbolo-de-pesos" />
                            <span>PRECIOS INSUPERABLES</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero natus accusantium aperiam
                                possimus
                                numquam nostrum!</p>
                        </section>
                        <section class="estrella">
                            <img src="./simbolo estrella1.png" alt="Simbolo-estrella" />
                            <span>PROFESIONALES CALIFICADOS</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere beatae voluptatum numquam
                                aliquam
                                culpa
                                placeat.</p>
                        </section>
                    </div>
                </div>
                <section class="marcas-calidad">
                    <h3>SOLO VENDEMOS MARCA DE CALIDAD:</h3>
                    <img src="./marca1.png" alt="marca1" />
                    <img src="./marca2.png" alt="marca2" />
                    <img src="./marca3.png" alt="marca3" />
                    <img src="./marca4.png" alt="marca4" />
                </section>
            </main>
        </>
    )
}

export default Home