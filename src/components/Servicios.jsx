import React from 'react'
import { NavLink } from 'react-router-dom'

export function Servicios() {
    return (
        <main>
            <section class="que-servicios-necesitas">
                <h2>¿QUE SERVICIOS NECESITAS?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident aliquam accusamus maiores
                    quas
                    nemo quos doloremque sit rerum. Id necessitatibus, deserunt mollitia vitae, blanditiis adipisci
                    quibusdam
                    error at eum, a eaque. Fugiat, doloribus tenetur.</p>
            </section>
            <div class="servicios-completos">
                <section class="parte1">
                    <section class="martillo-llave">
                        <img src="../simobolo martillo y llave.png" alt="llave-y-martillo" />
                        <span>MECANICA GENERAL</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dicta quidem alias eveniet
                            distinctio
                            officiis nam delectus nemo incidunt excepturi?</p>
                    </section>
                    <section class="revision-simb">
                        <img src="../simbolo revision.jpg" alt="simbolo-de-revision" />
                        <span>REVISION DEL AUTOMOVIL</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat rem pariatur cupiditate
                            mollitia
                            odit ipsam cumque sequi, autem corporis nihil.</p>
                    </section>
                    <section class="aceite-simb">
                        <img src="../simbolo cambio de aceite.jpg" alt="Simbolo-cambio-de-aceite" />
                        <span>REVISION ACEITE/FRENOS</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit reiciendis sunt atque,
                            dolore consequatur enim expedita! Magnam, autem ut.</p>
                    </section>
                </section>
                <section class="parte2">
                    <section class="remolque">
                        <img src="../simbolo remolque2.png" alt="simbolo-de-remolque" />
                        <span>SERVICIO DE REMOLQUE</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, mollitia esse at recusandae
                            voluptas
                            porro corrupti fuga placeat minima illum?</p>
                    </section>
                    <section class="neumaticos">
                        <img src="../simbolo cambio de neumaticos.png" alt="simbolo-de-cambio-de-neumaticos" />
                        <span>CAMBIO DE NEUMATICOS</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed impedit odit quidem nulla
                            consequatur
                            ipsa eum eos sint temporibus ea.</p>
                    </section>
                    <section class="bateria">
                        <img src="../simbolo de bateria.jpg" alt="simbolo-cambio-de-bateria" />
                        <span>CAMBIO DE BATERIA</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ipsa! Nam repellat nemo
                            consequatur
                            doloribus minima veniam inventore ea dolores!</p>
                    </section>
                </section>
            </div>
            <section class="contactanos">
                <NavLink to='/contacto'>
                    CONTACTANOS AHORA!

                </NavLink>
            </section>
        </main>
    )
}
