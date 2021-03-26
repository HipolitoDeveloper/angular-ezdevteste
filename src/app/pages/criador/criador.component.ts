import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-criador',
  templateUrl: './criador.component.html',
  styleUrls: ['./criador.component.css']
})
export class CriadorComponent implements OnInit {
  itemCreator: FormGroup | any;

  constructor(
    private frmBuilder: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.itemCreator = this.frmBuilder.group({
        name: ["", Validators.required],
        date: ["", Validators.required],
        description: ["", Validators.required],
        summary: ["", Validators.required]
    })
  }

  sendForm() {

  }

}
