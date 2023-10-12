import React from 'react'
import { NavLink } from 'react-router-dom'

export function SobreNosotros() {
    return (
        <main class="nosotros-experiencia">
            <h2>MAS DE 30 AÑOS REPARANDO AUTOS</h2>
            <div class="grid-padre">
                <div class="arriba1">
                    <img src="https://images.unsplash.com/photo-1583955275036-fd20a9c185bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="herramientas" />
                    <img src="https://images.unsplash.com/photo-1587583332802-b3ed74239b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="estante-de-herramientas" />
                    <img src="https://images.pexels.com/photos/8986070/pexels-photo-8986070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="coche-elevado" />
                    <img src="https://images.pexels.com/photos/6517339/pexels-photo-6517339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="motor" />
                    <img src="https://i.pinimg.com/564x/51/a6/4e/51a64eb8f9769362c2f7e5d0fe5ca6c7.jpg" alt="hombre-arreglando-auto" />
                </div>
                <div class="izquierda1">
                    <img src="https://images.pexels.com/photos/4116194/pexels-photo-4116194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="otro-motor" />
                    <img src="https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="vista-de-coche-en-taller" />
                </div>
                <div class="medio1 nosotros-parrafo">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ad minima enim error maiores
                        minus
                        cupiditate hic
                        aperiam non autem culpa odio possimus quae unde vero, quidem dolorem iure neque soluta
                        inventore
                        cum
                        suscipit.
                        Quasi quisquam ab voluptatibus fugit ad consequuntur aperiam. Neque, earum error
                        perspiciatis
                        sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis veniam
                        repudiandae
                        neque explicabo
                        eligendi quisquam eveniet cupiditate, possimus impedit accusantium, sapiente consequatur.
                        Quibusdam
                        quasi.</p>
                    <span>¿NECESITAS AYUDA? LLAMANOS AHORA!</span>
                    <NavLink to='/contacto'>
                        CONTACTANOS

                    </NavLink>
                </div>
                <div class="derecha1">
                    <img src="../IMAGEN DE AUTO EN PAGINA SOBRE NOSOTROS.PNG" alt="coche-carretera" />
                    <img src="../Chevy Taller.png" alt="chevy taller" />
                </div>
                <div class="abajo1">
                    <img src="https://plus.unsplash.com/premium_photo-1674375344746-2f27c4720440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="hombre-haciendo-revision-tecnica" />
                    <img src="https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="uso-de-tester" />
                    <img src="https://images.pexels.com/photos/4732635/pexels-photo-4732635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="motor-de-coche" />
                    <img src="https://images.pexels.com/photos/4116220/pexels-photo-4116220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="motor-descubierto-en-coche" />
                    <img src="https://i.pinimg.com/564x/7d/f9/ff/7df9ff60509ecbbc8ecee87700092b6a.jpg" alt="vista-desde-abajo-coche" />
                </div>
            </div>
        </main>
    )
}
