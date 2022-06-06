import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entities/user';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials = {
    userName: '',
    password: ''
  }

  user: User = new User
  invalidLogin = false;
  public role = "";
  userid: number = 0;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    { }
  }

  onSubmit() {

    if ((this.credentials.userName != '' && this.credentials.password != '') && (this.credentials.userName != null && this.credentials.password != null)) {

      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          //token generated successfully
          console.log(response);
          this.loginService.loginUser(response.token);
          console.log(response.token);
          this.userid = response.userid;
          let x = response.userid;
          console.log(x);
          if (response.role === "ROLE_USER") {
            //this.router.navigate(['userhome']);
            window.location.href = "/schedules";
          } else {
            // this.router.navigate(['adminhome']);
            window.location.href = "/airlines";
          }

        }, error => {
          // some error in token generation
          alert("Bad Credentials");
          console.log(error);
        });

    } else {
      console.log("fields are empty");
    }

  }

}
