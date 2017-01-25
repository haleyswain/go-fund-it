import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ActivatedRoute, Params } from '@angular/router';





@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
