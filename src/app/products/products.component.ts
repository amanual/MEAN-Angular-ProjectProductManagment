import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tasks;  
  constructor( private _projectService: ProjectService ) { 
    this.tasks = this._projectService.tasksList;    
    console.log('this is tasks from productsComponent',this.tasks)
  }  
  delete(task){
    this.tasks.splice(task,1)
  }
  ngOnInit() {
  }

}
