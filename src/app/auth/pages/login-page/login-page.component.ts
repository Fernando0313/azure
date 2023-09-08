import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {


  constructor(
    private autService: AuthService,
    private router: Router){}

  onLogin(): void{
    // this.router.navigate(['']);
    localStorage.setItem('token', 'aASDgjhasda.asdasd.aadsf123k');
    this.router.navigate(['/'])
      // this.autService.login('','')
      //   .subscribe(user=>{
      //       this.router.navigate(['/'])
      //   })
  }
}
