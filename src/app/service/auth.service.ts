import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/Cadastro';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  
    private http: HttpClient
  ){}
  cadastro(usuarioModel: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('http://localhost:8080/usuarios/cadastro', usuarioModel)

  }
 }

