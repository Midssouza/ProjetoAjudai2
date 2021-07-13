import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/Cadastro';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  
  usuarioModel: UsuarioModel= new UsuarioModel
  confirmarSenha: string 

  constructor( 
    private authService:AuthService,
    private router:Router
  
    ){}
   

  ngOnInit()  {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha=event.target.value

  }

  cadastrar(){
    this.confirmSenha =this.confirmSenha

    if(this.usuarioModel.senha != this.confirmarSenha){
      alert('Senha incorreta.')
    }else{
        this.authService.cadastro(this.usuarioModel).subscribe((resp:UsuarioModel)=>{ this.usuarioModel= resp
          this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso!')
        })
    }

  }

}
