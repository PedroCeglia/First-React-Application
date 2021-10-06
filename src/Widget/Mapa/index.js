import React from "react";
import './style.css'

function Mapa(){
    return(
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5614564749526!2d-43.232151685645455!3d-22.96637254577239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5be3e246c27%3A0x5398835e54d86938!2sRua%20Pacheco%20Le%C3%A3o%20-%20Jardim%20Bot%C3%A2nico%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1633456374003!5m2!1spt-BR!2sbr" 
                width="100%" height="450" 
            >
            </iframe>
        </div>
    )
}
export default Mapa