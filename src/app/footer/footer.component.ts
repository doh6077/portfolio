import { Component, Input} from '@angular/core';
import {Content} from '../interaceCP';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() content!:Content

}
