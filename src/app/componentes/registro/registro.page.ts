import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  name: string ='';
  email: string ='';
  password: string ='';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registrar(){
     this.authService.registrar(this.name, this.email,
      this.password).then(
        (auth: any)  => {
           this.router.navigate(['/home']);
        }
      );
  }

  regresar(){
      this.router.navigate(['/login']);
  }
}
