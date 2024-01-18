import React, { useEffect, useState } from 'react'
import Tabla from './components/Crud/Tabla';
import Header from './components/Bienvenida/Header';
import PeliculaService from './service/PeliculaService';
import { peliculaVacia } from './constantes/peliculaVacia';
import BotonesCabezal from './components/Crud/BotonesCabezal';
import ModalNuevo from './components/Crud/Modales/ModalNuevo';
import ModalEliminar from './components/Crud/Modales/ModalEliminar';


import "primereact/resources/themes/lara-light-indigo/theme.css";   // theme
import "primereact/resources/primereact.min.css";                   // core
import "primeicons/primeicons.css";                                 // icons
import 'primeflex/primeflex.css';                                   // flex


const  App = () => {
  // --> Service
  const peliculaService = new PeliculaService()

  // -----------------------| Variables |----------------------- 
  const [pelicula, setPelicula] = useState(peliculaVacia)
  const [peliculas, setPeliculas] = useState([])
  // --> Mensajes
  const [mensaje, setMensaje] = useState('')
  // --> Modales
  const [modalNuevo, setModalNuevo ] = useState(false)
  const [modalEliminar, setModalEliminar] = useState(false)

  // --> UseEffect
  useEffect(() => {peliculaService.obtenerPeliculas().then(res => {setPeliculas(res)})}, [])

  // -----------------------| Funciones |----------------------- 
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _registro = { ...pelicula };
    _registro[`${name}`] = val;

    setPelicula(_registro);
  }

  const nuevaPelicula = () => {
    setPelicula(peliculaVacia)
    setModalNuevo(true)
  }

  const confirmarEliminar = (pelicula) => {
    setModalEliminar(true)
    setPelicula(pelicula)
  }

  const guardarPelicula = async() => {
    if ([pelicula.nombre, pelicula.genero, pelicula.anio].includes('')){
      console.log('Faltan datos')
      setMensaje('Todos los campos son obligatorios.')
      setTimeout(()=>{setMensaje('')}, 3000)
      return
    }
    // Si es una pelicula existente
    if(pelicula.id){
      await peliculaService.actualizarPelicula(pelicula.id, pelicula)
      setModalNuevo(false)
      setPelicula(peliculaVacia)
      setPeliculas(await peliculaService.obtenerPeliculas())
    }
    // Si es una pelicula nueva
    else{
      await peliculaService.guardarPelicula(pelicula)
      setModalNuevo(false)
      setPelicula(peliculaVacia)
      setPeliculas(await peliculaService.obtenerPeliculas())
    }
  }

  const editarPelicula = (idPelicula) => {
    peliculaService.buscarPelicula(idPelicula).then(res => {
      setPelicula(res)
      setModalNuevo(true)
    })
  }

  const eliminarPelicula = async() => {
    await peliculaService.eliminarPelicula(pelicula.id)
    setPeliculas(await peliculaService.obtenerPeliculas())
    setModalEliminar(false)
  }

  // -----------------------| Contenido HTML |----------------------- 
  return (
    <>
      <Header />
      <BotonesCabezal nuevaPelicula={nuevaPelicula} />
      <ModalNuevo
        pelicula={pelicula} setPelicula={setPelicula} onInputChange={onInputChange} mensaje={mensaje}
        modalNuevo={modalNuevo} setModalNuevo={setModalNuevo} guardarPelicula={guardarPelicula}
      />
      <ModalEliminar 
        pelicula={pelicula} eliminarPelicula={eliminarPelicula} 
        modalEliminar={modalEliminar} setModalEliminar={setModalEliminar} 
      />
      <Tabla peliculas={peliculas} editarPelicula={editarPelicula} confirmarEliminar={confirmarEliminar} />
    </>
  )
}

export default App
