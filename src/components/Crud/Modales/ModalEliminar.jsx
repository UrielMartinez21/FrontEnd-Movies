import React from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

const ModalEliminar = ({pelicula, modalEliminar, setModalEliminar, eliminarPelicula}) => {
    const botonesAccion = () => {
        return(
            <>
                <Button label="Eliminar" icon="pi pi-check" onClick={eliminarPelicula} />
                <Button label="Cancelar" icon="pi pi-times" onClick={() => setModalEliminar(false)} />
            </>
        )
    }

    // -----------------------| Contenido HTML |----------------------- 
    return (
        <Dialog 
            visible={modalEliminar} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} 
            header="Confirmar" modal footer={botonesAccion} onHide={()=> setModalEliminar(false)}
        >
            <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {pelicula && (
                        <span>
                            Estas seguro de eliminar a <b>{pelicula.nombre}</b>?
                        </span>
                    )}
                </div>
        </Dialog>
    )
}

export default ModalEliminar
