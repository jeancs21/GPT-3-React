import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Somos el socio estrategico que necesitas para migrar a las nubes</h1>
            </div>
        </div>
    )
}

export default Header
