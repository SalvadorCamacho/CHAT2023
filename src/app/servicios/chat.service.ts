import { Injectable } from '@angular/core';
import { Message } from '../mensajes';
import firebase from 'firebase/compat/app'
import {AngularFirestore} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) {
  }
     //consulta general de chats
    getChatRooms(){
       return this.db.collection('chatRooms').valueChanges(
         {idField: 'id'}
       );
    }
   //consulta individual
   getChat(id: string){
       return this.db.collection('chatRooms').doc(id).valueChanges();
   }
    //Agregar colección de mensaje al cuarto o sala
   enviarABD(m: Message, id:string){
    this.db.collection('chatRooms').doc(id).update( //actualizar documento con id...
   { //agregar al arreglo llamado Messages
     Messages: firebase.firestore.FieldValue.arrayUnion(m)
   });
  }
}
