import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import Mapa from "../Mapa";

import './style.css'

function Contact(){
    return(
        <div>
            <Header />
            <Main>
                <div className='container'>
                    <section className='container-horario'>
                        <h2>Horários de <b>atendimento</b></h2>

                        <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>

                        <ul>
                            <li>
                                <img src="assets/medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
                                <p>Dr. Hélio</p>
                                <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                            </li>

                            <li>
                                <img src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
                                <p>Dr. Carlos</p>
                                <p>Terças e quintas das 13:00 às 18:00</p>
                            </li>

                            <li>
                                <img src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
                                <p>Dra. Suzana</p>
                                <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                            </li>
                        </ul>                        
                    </section>
                    <section classname='container-mapa'>
                        <h2>Onde estamos <b>localizados</b>?</h2>
                        <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                        <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                        <Mapa />
                    </section>
                </div>
            </Main>
            <Footer/>
        </div>
    )
}

export default Contact