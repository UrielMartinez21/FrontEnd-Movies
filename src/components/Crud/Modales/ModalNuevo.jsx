import React from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const ModalNuevo = ({modalNuevo, setModalNuevo, pelicula, onInputChange, guardarPelicula, mensaje}) => {
    return (
        <Dialog 
            header="Nueva Película" visible={modalNuevo} style={{ width: '40vw' }} onHide={() => setModalNuevo(false)}
            footer={<Button label="Guardar" icon="pi pi-check" onClick={guardarPelicula} />}
        >
            <div className='mb-4 flex align-content-center justify-content-center flex-wrap'>
                <label htmlFor="nombre" className='mr-4 flex align-items-center'>Nombre</label>
                <InputText
                    id="nombre" value={pelicula.nombre} onChange={(e) => onInputChange(e, 'nombre')}
                    required autoFocus
                    className="focus:border-primary w-15rem"
                />
            </div>
            <div className='mb-4 flex align-content-center justify-content-center flex-wrap'>
                <label htmlFor="genero" className='mr-4 flex align-items-center'>Genero</label>
                <InputText
                    id="genero" value={pelicula.genero} onChange={(e) => onInputChange(e, 'genero')}
                    required autoFocus 
                />
            </div>
            <div className='mb-4 flex align-content-center justify-content-center flex-wrap'>
                <label htmlFor="anio" className='mr-4 flex align-items-center'>Año</label>
                <InputNumber 
                    value={pelicula.anio} onValueChange={(e) => onInputChange(e, 'anio')} maxLength={5}
                />
            </div>
            {mensaje && <div className='text-center mt-2 bg-red-600 text-white font-bold py-2'>{mensaje}</div>}
        </Dialog>
    )
}

export default ModalNuevo
