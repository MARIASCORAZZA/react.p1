const Paciente = () => {

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Jazmin</span>

        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Sol</span>

        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">correo@gmail.com</span>

        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 dic 2023</span>

        </p>

        <p className="font-bold text-gray-700 uppercase mb-3">Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nostrum ut amet quod, itaque labore libero at?</span>

        </p>
    </div>
  )
}

export default Paciente