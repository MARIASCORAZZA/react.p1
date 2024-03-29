import React, { useState } from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState('')
  console.log(nombre);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Enviando formulario");
  }
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>


      <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-xl rounded-lg py-10 px-5 mb-20' mb-50>

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Mascota
          </label>
          <input 
                  id='mascota'
                  type='text'
                  placeholder='Nombre de la Mascota'
                  className='border border-gray-300 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value) }
                  />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
            Propietario
          </label>
          <input 
                  id='propietario'
                  type='text'
                  placeholder='Nombre del Propietario'
                  className='border border-gray-300 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input 
                  id='email'
                  type='email'
                  placeholder='Email Contacto'
                  className='border border-gray-300 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input 
                  id='alta'
                  type='date'
                  className='border border-gray-300 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
            Sintomas
          </label>
        <textarea 
            id='sintomas'
            placeholder='Describe los Sintomas'
            className='border border-gray-300 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
        />
        </div>

        <input
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer
            transition-all'
            value="AGREGAR PACIENTE"
        />
      </form>
    </div>
  )
}

export default Formulario