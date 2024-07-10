import { Component, Input } from '@angular/core';
import {Content, Projects} from '../../interaceCP';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() content!:Content
  @Input() projects!:Projects[]
  title: string =""
  filteredData: Projects[]= []

  ngOnInit() {
    this.filteredData = [...this.projects];  
  }

  update(){
    if (this.title){
      this.filteredData = this.projects.filter(project => 
        project.title.toLowerCase().includes(this.title.toLowerCase())
      );
        } else{
        this.filteredData =[...this.projects];
      }
    }
  }
  
