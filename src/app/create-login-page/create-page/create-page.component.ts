import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  tournamentForm = this.fb.group({
    tournamentName: [''],
    blocksMined: [''],
    mobsKilled: [''],
    playersKilled: [''],
    trades: [''],
    tripsToNether: [''],
    animalsBred: [''],
    enterNether: [''],
    locateEnd: [''],
    defeatEnderDragon: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    const data = JSON.stringify(this.tournamentForm.value);
    console.log(data);
  }

}
