import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import {ApiService} from '../../service/candidat-service.service';

@Component({
  selector: 'app-create-candidat',
  templateUrl: './create-candidat.component.html',
  styleUrls: ['./create-candidat.component.css']
})

export class CreateCandidatComponent implements OnInit {  
  submitted = false;
  candidatForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.candidatForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lasttName: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm(){
    return this.candidatForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.candidatForm.valid) {
      this.apiService.createCandidat(this.candidatForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-candidat'))
        }, (error) => {
          console.log(error);
        });
      
    } else {
      return false;
    }
  }

}
