import { Component, Input } from '@angular/core';

import {Content, Projects} from '../../interaceCP';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() content!:Content


}
