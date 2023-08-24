import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model';
import { StorageService } from 'src/app/storage.service';
import { userService } from 'src/app/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  form!: FormGroup
  constructor(private fb: FormBuilder, private svc : StorageService, private router: Router, private userSvc: userService) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control<string>("", [Validators.required]),
      email: this.fb.control<string>("", [Validators.required, Validators.email])
    })

    let data: User | null = this.svc.load(this.svc.lastKey)

    if(!!data) {
      this.form = this.fb.group({
        name: this.fb.control<string>(data.name, [Validators.required]),
        email: this.fb.control<string>(data.email, [Validators.required, Validators.email])
      })
    }
  }

  process() {
    const value: User = this.form.value
    console.log(">>>>> User", value)
    // this.svc.save(value)
    this.userSvc.save(value)
      .then(id => {
        console.info(">>>> id: ", id)
        this.router.navigate(['/'])
      })

  }


}
