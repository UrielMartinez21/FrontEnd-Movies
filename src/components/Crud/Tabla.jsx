import React from 'react'
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const Tabla = ({peliculas, editarPelicula, confirmarEliminar}) => {
    // -----------------------| Funciones |----------------------- 
    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editarPelicula(rowData.id)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmarEliminar(rowData)} />
            </>
        );
    };

    // -----------------------| Contenido HTML |----------------------- 
    return (
        <div className='card'>
            <DataTable
                value={peliculas} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '40rem' }} showGridlines
            >
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="nombre" header="Nombre" style={{ width: '15%' }}></Column>
                <Column field="genero" header="Genero" style={{ width: '15%' }}></Column>
                <Column field="anio" header="Año" style={{ width: '15%' }}></Column>
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    )
}

export default Tabla
