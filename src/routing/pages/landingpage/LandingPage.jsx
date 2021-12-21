import React from 'react';
import Section from "../../../components/section/Section";
import {Footer} from "../../../containers";
import {Navbar} from "../../../components";
export default function LandingPage({}){
    return (
      <>
        <Navbar />
        <Section text={'Somos el socio estrategico que necesitas para migrar a las nubes'} />
        <Section text={'Te acompañamos en todo tu camino hacia la innovación y competitividad tecnologica'} />
        <Section text={'Creamos soluciones versatiles y agiles que nos permiten desarrollar todo el potencial de nuestros clientes'} />
        <Section text={'Apoyarte en el trayecto hacia la competitividad es lo que verdaderamente nos apasiona'} />
        <Section text={'Apoyarte en el trayecto hacia la competitividad es lo que verdaderamente nos apasiona'} />
        <Footer />
      </>
    )
}