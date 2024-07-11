import React from 'react'
import './FormContact.css'

const FormContact = () => {


  return (
    <div className='FormContact col-12' id='Contact'>
        <div className='Contact col-9'>
            <h1>Contacto</h1>
        <div class="contacto">
            <div class="contac-form">
            <form action="https://formsubmit.co/b7ad07b696e0fdf71ce602168e999695" method="POST"/>
                <div class="li-form">
            <label for="Nombre">Nombre</label>
            <input type="text" name="name"/>
                </div>
                <div class="li-form">
            <label for="email">Correo Electronico</label>
            <input type="text" name="email"/>
                </div>
                <div class="li-form">
            <label for="subject">Asunto</label>
            <input type="text" name="subject"/>
                </div>
                <div class="li-form">
            <label for="comments">Comentarios</label>
            <textarea name="comments" cols="30" rows="10"></textarea>
            </div>
            <div>
            <input className='input' type="submit" value="Enviar"/>
            </div>
        </div>
    </div>
        </div>

    </div>
  )
}

export default FormContact