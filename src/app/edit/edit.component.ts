import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data;
  id;
 
  constructor(private _router: Router, private _projectService: ProjectService, private _activatedRoute: ActivatedRoute) {
    this.data = this._projectService.tasksList;  

    this._activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id')      
    })
    this.data = this.data[this.id];    
   }
   onClick(){
    this._projectService.update(this.data,this.id)
    console.log('this is the newData',this.data)    
    this._router.navigate(['products']);    
  }     
   delete(task){
    this.data.splice(task,1)
  }
  ngOnInit() {
    
  }

}
