import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'
import React from 'react'

const BotonesCabezal = ({nuevaPelicula}) => {
    const botones = () =>{
        return(
            <>
                <Button 
                    label="Nuevo" icon="pi pi-plus" severity="success" className='mr-2' 
                    onClick={nuevaPelicula} 
                    />
                <Button label="Eliminar" icon="pi pi-trash" severity="danger"  />
            </>
        )
    }

    return (
        <Toolbar className='mb-4' start={botones} />
    )
}

export default BotonesCabezal
