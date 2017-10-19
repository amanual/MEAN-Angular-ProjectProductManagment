import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit { 
  tasks;
  constructor(private _newRouter: Router, private _taskService: ProjectService) { }
  
  ngOnInit() {
  }
  
  newtasks = {
      title: '',
      price: '',
      newurl:''
    }
    onSubmit(){      
      this._taskService.recive(this.newtasks)
      this.newtasks = {
        title: '',
        price: '',
        newurl:''
      }
      console.log('printing title',this.tasks)
      
      this._newRouter.navigate(['products']);
    }
    
}
