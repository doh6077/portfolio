import { Component} from '@angular/core';
import {Content, Projects} from './interaceCP';
import codata from '../assets/data/content.json';
import prodata from '../assets/data/project.json';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  darkMode = false;
  title = 'Assignment1';
  content: Content = codata.ContentInfo;
  projects: Projects[] = prodata.projects;

  onCheckbox(event: MatCheckboxChange) {
    this.darkMode = event.checked;
  }

}
