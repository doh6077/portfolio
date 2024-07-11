import { Component, Input, OnInit } from '@angular/core';
import {Projects} from '../../interaceCP';
import { ActivatedRoute } from '@angular/router';
import prodata from '../../../assets/data/project.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit{

  

  projects: Projects[] = prodata.projects;

  
  title: string =""
  filteredData: Projects[]= []

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    
    
    //this.route.data.subscribe(data => {
      //this.projects = data['projects'];
      
      this.filteredData = [...this.projects];
      
      console.log('Projects:', this.projects);
    
    
  }

  update(){
    if (this.title){
      this.filteredData = this.projects.filter(project => 
        project.subtitle.toLowerCase().includes(this.title.toLowerCase())
      );
        } else{
        this.filteredData =[...this.projects];
      }
    }
  }
  
