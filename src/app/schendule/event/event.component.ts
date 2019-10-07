import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventForm: FormGroup;
  participant: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eventForm =  this.fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'date': [null, Validators.required],
      'local': [null, Validators.required],
      'participant': this.fb.array([{'email': [null, Validators.required]}])
    });
  }

  addParticipant() {
    this.participant = this.eventForm.get('participant') as FormArray;
    this.participant.push(this.getParticipantModel());
  }

  getParticipantModel(){
    return this.fb.group({
      'email': [null, Validators.required],
    });
  }

}
