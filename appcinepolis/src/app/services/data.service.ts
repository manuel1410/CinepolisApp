import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, docSnapshots } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { addDoc, collection, DocumentReference, getDoc } from 'firebase/firestore';


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


@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarioLocal: any;
  peliculaLocal: any;

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
    console.log(this.usuarioLocal);
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
    console.log(this.peliculaLocal);
  }

  getPeliculaLocal() {
    return this.peliculaLocal;
  }



}



