import { Component, OnInit } from "@angular/core";
import { IUser } from "../interfaces/iuser";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  newUser: IUser;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private Router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: "Passw0rd*",
      firstName: "Jim",
      lastName: "Sanders",
      email: "jim@test.com"
    });
  }

  onSubmit(user) {
    // Process checkout data here
    console.warn("Submitted", user);
    this.AuthService.register(user).subscribe(user => {
      console.log(user);
      if (user) this.Router.navigateByUrl("/");
    });
  }
}
