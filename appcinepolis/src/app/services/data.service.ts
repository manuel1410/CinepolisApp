import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, docSnapshots } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { addDoc, collection, DocumentReference, getDoc, updateDoc } from 'firebase/firestore';


export interface Usuario {
  id?: string;
  correo: string;
  contrasena: string;
  numeroCedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNacimiento: string;
  edad: number;
  vacunacion: number;
  deleted: boolean;
}

export interface Pelicula {
  id?: string;
  actores: Array<string>;
  deleted: boolean;
  director: string;
  duracion: string;
  edad_min: number;
  generos: Array<string>;
  idiomas: Array<string>;
  precio_adultomayor: string;
  precio_nino: string;
  precio_normal: string;
  titulo: string;
  url: string;
}

export interface Comida {
  id?: string;
  cantidad: number;
  deleted: boolean;
  nombre: string;
  precio: number;
  tipo: string;
  url: string;
}

export interface Sala {
  id?: string;
  cantidad_asientos: any;
  deleted: boolean;
  hora: string;
  nombre: string;
  pelicula: string;
  asientos: Array<any>;
}

export interface Carrito {
  id?: string;
  sala01: Array<any>;
  sala02: Array<any>;
  sala03: Array<any>;
  comidas: Array<any>;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarioLocal: any;
  peliculaLocal: any;
  comidasGeneral: any;
  comidaLocal: any;
  comidaFiltrada: Array<any> = [];
  salaLocal: any;
  carritoLocal: any;

  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' }) as unknown as Observable<Usuario[]>;
  }

  getUsuario(correo: any, password: any): Observable<Usuario> {
    const usuarioRef = doc(this.firestore, `usuarios/${correo}`);
    return docData(usuarioRef, { idField: 'id' }) as unknown as Observable<Usuario>;  
  }

  addUsuario(usuario: Usuario) {
    console.log(usuario);
    const usuariosRef = collection(this.firestore, 'usuarios');
    return addDoc(usuariosRef, usuario);
  }

  setUsuarioLocal(usuario: Usuario) {
    this.usuarioLocal = usuario;
  }

  getUsuarioLocal() {
    return this.usuarioLocal;
  }

  getPeliculas(): Observable<Pelicula[]>{
    const peliculasRef = collection(this.firestore, 'peliculas');
    return collectionData(peliculasRef, { idField: 'id'}) as unknown as Observable<Pelicula[]>;
  }

  setPeliculaLocal(pelicula: Pelicula) {
    this.peliculaLocal = pelicula;
  }

  getPeliculaLocal() {
    return this.peliculaLocal;
  }

  getComidas(): Observable<Comida[]>{
    const comidasRef = collection(this.firestore, 'comidas');
    return collectionData(comidasRef, { idField: 'id'}) as unknown as Observable<Comida[]>;
  }

  setComidaGeneral(comidas: any) {
    this.comidasGeneral = comidas;
  }
  
  setComidaLocal(comida: Comida) {
    this.comidaLocal = comida;
  }

  getComidaLocal() {
    return this.comidaLocal;
  }

  setComidaFiltrada(comida: Comida, comidasFlag: boolean, bebidasFlag: boolean, combosFlag: boolean) {

    this.comidaFiltrada = [];

    if(comidasFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "comida"){
          this.comidaFiltrada.push(item);
        }
      }
    }

    if(bebidasFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "bebida"){
          this.comidaFiltrada.push(item);
        }
      }
    }

    if(combosFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "combo"){
          this.comidaFiltrada.push(item);
        }
      }
    }
  }

  getComidaFiltrada() {
    return this.comidaFiltrada;
  }

  getSalas(): Observable<Sala[]>{
    const salasRef = collection(this.firestore, 'salas');
    return collectionData(salasRef, { idField: 'id'}) as unknown as Observable<Sala[]>;
  }

  setSalaLocal(sala: Sala) {
    this.salaLocal = sala;
  }

  getSalaLocal() {
    return this.salaLocal;
  }

  createcarritoLocal(){
    this.carritoLocal = {
      sala01: [],
      sala02: [],
      sala03: [],
      comidas: []
    }
  }

  setSala01Carrito(json: any){
    console.log(json);
    this.carritoLocal.sala01.push(json);
  }

  setSala02Carrito(json: any){
    this.carritoLocal.sala02.push(json);
  }

  setSala03Carrito(json: any){
    this.carritoLocal.sala03.push(json);
  }

  setComidasCarrito(json: any){
    this.carritoLocal.comidas.push(json);
    console.log(this.carritoLocal);
  }

  getCarritoLocal(){
    return this.carritoLocal;
  }

  updateReservas(sala: Sala){  
    const salaDocRef = doc(this.firestore, `salas/${sala.id}`);
    return updateDoc(salaDocRef, {asientos: sala.asientos});
  }

  updateStock(comida: Comida){
    const comidaDocRef = doc(this.firestore, `comidas/${comida.id}`);
    return updateDoc(comidaDocRef, {cantidad: comida.cantidad})
  }


  /*
  createMatrizAsientos(sala: Sala){

    var matrizAsientos = [];

    for(let i=0; i < 100; i++){
      var asiento = {id: i, num_asiento: i+1, reservado: false, persona: ""}
      matrizAsientos.push(asiento);
    }

    const salaDocRef = doc(this.firestore, `salas/${sala.id}`);
    return updateDoc(salaDocRef, {nombre: sala.nombre, pelicula: sala.pelicula, hora: sala.hora, deleted: sala.deleted, cantidad_asientos: sala.cantidad_asientos, asientos: matrizAsientos});

    //const salasRef = collection(this.firestore, 'salas');
  }
  */
}



