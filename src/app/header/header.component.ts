import { Component, Input } from '@angular/core';
import {Content} from '../interaceCP';
import codata from '../../assets/data/content.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sname = "Dohee Kim";
  srole = "software developer";
  content: Content = codata.ContentInfo;

}
