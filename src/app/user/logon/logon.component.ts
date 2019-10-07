import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('pt_BR');
    translate.use('pt_BR');
  }

  ngOnInit() {
  }

}
