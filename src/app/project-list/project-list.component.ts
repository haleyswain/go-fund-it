import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByBudgetness: string = "allProjects"

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['project-list', clickedProject.$key]);
  };

  submitForm(title: string, manager: string, description: string, goal: number) {
    var newProject: Project = new Project(title, manager, description, goal);
    this.projectService.addProject(newProject);
  }
  onChange(optionFromMenu) {
  this.filterByBudgetness = optionFromMenu;
}
}
