import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EventComponent} from '../event/event.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schendule',
  templateUrl: './schendule.component.html',
  styleUrls: ['./schendule.component.css']
})
export class SchenduleComponent implements OnInit {

  bsInlineValue = new Date();
  bsModalRef: BsModalRef;
  faCoffee = faCoffee;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  newEvent() {
    this.bsModalRef = this.modalService.show(EventComponent, {});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
