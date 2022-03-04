import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, docSnapshots } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { collection, DocumentReference, getDoc } from 'firebase/firestore';

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



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' }) as unknown as Observable<Usuario[]>;
  }

  getUsuario(correo: any, password: any): Observable<Usuario> {

    const usuarioRef = doc(this.firestore, `usuarios/${correo}`);
    return docData(usuarioRef, { idField: 'id' }) as unknown as Observable<Usuario>;  

    // const usuario = usuarios.subscribe(res => {
    //   for(let item in res){
    //     if(res[item].correo == correo && res[item].contrasena == password){
    //       console.log(res[item]);
    //       return res[item];
    //     }
    //   }
    // });

    // console.log(usuario);
  }



}



