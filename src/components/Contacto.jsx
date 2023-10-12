import React from 'react'
import Iframe from './Iframe'

export function Contacto() {
    return (
        <main>
            <h1 class="titulo-contacto">CONTACTANOS HOY!</h1>
            <div class="formulario">
                <section class="info">
                    <h3>Telefono</h3>
                    <span>Tel: 914-123-456</span>
                    <span> Fax: 914-123-456</span>
                    <h3>Email</h3>
                    <span>info@misitio.com</span>
                    <h3>Horario</h3>
                    <span>Lun-Vie: 7:00 - 22:00</span>
                    <span> Sábados: 8:00 - 22:00</span>
                </section>
                <section class="form">
                    <form action="#" method="get">
                        <div class="caja-form">
                            <label for="input">Nombre</label>
                            <input type="text" required style={{ textAlign: "center" }} />
                        </div>
                        <div class="caja-form">
                            <label for="input">Apellido</label>
                            <input type="text" required style={{ textAlign: "center" }} />
                        </div>
                        <div class="caja-form">
                            <label for="input">Edad</label>
                            <input type="number" min="1" name="Edad" style={{ textAlign: "center" }} />
                        </div>
                        <div class="caja-form">
                            <label for="input">Correo</label>
                            <input type="email" required style={{ textAlign: "center" }} />
                        </div>
                        <div class="caja-form">
                            <label for="input">Asunto</label>
                            <input type="text" required style={{ textAlign: "center" }} />
                        </div>
                        <div class="caja-form">
                            <label for="input">Mensaje</label>
                            <textarea name="" cols="30" rows="2" placeholder="Escribe tu mensaje aqui..."></textarea>
                            <input class="boton-envi" type="submit" value="Enviar Datos" />
                        </div>
                    </form>
                </section>
            </div>
            <section class="maps">
                <h3>COMO LLEGAR</h3>
                <p>Av. Olimpo 1234, buenos aires</p>
                <Iframe />
            </section>
        </main>
    )
}
