import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../user-profile.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private UserProfileService: UserProfileService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      favoriteMovie: "Anchorman",
      firstName: "Jim",
      lastName: "Sanders",
      email: "jim@test.com"
    });
  }

  onSubmit() {
    this.UserProfileService.post(this.profileForm.value).subscribe(console.log);
  }
}
