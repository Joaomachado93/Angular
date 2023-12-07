import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  loginForm: FormGroup;
  ngOnInit(): void {
    // this.meuForm = this.fb.group({
    //   nome: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    // });
  }
  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    
   }
   loginUser(){
     console.log(this.loginForm.value)
    
   }

}

