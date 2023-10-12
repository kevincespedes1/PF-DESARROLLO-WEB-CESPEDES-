import React from 'react'

function Footer() {
    return (
        <footer>
            <div class="antes-de-footer1">
                <section class="telefono" style={{ textAlign: "center" }}>
                    <div>
                        <img src="./Mi proyecto.png" alt="telefono" />
                        <span> LLAMANOS</span>
                    </div>
                    <span>Tel: 123-456-789 | Fax: 123-456-789</span>
                </section>
                <section class="carta-simb" style={{ textAlign: "center" }}>
                    <div>
                        <img src="./simbolo de carta1.png" alt="carta" />
                        <span> ESCRIBENOS</span>
                    </div>
                    <a href="mailto:info@misitio.com">info@misitio.com</a>
                </section>
                <section class="hora-simb" style={{ textAlign: "center" }}>
                    <div>
                        <img src="./simbolo hora.png" alt="hora" />
                        <span> HORARIO</span>
                    </div>
                    <span>Lun-Vie: 07:00-22:00</span>
                </section>
            </div>
            <div class="antes-de-footer">
                <section class="footer1">
                    <span class="footer1-experiencia">MAS DE 30 AÑOS DE EXPERIENCIA</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, debitis.</p>
                </section>
                <section class="footer2">
                    <span class="footer2-servicios">SERVICIOS</span>
                    <p>- Mecánica general</p>
                    <p>- Revisión de aceite y frenos</p>
                    <p>- Servicios de reparación</p>
                    <p>- Cambio de neumáticos</p>
                    <p>- Cambio de batería</p>
                    <p>- Servicios de chapa y pintura</p>
                </section>
                <section class="footer3" style={{ textAlign: "center" }}>
                    <span class="footer3-visitanos">VISITANOS EN:</span>
                    <p>Av. Olimpo 1234, buenos aires</p>
                </section>
            </div>
            <p class="footer">&copy; 2023 Creado Por Kevin Cespedes</p>
        </footer>
    )
}

export default Footer