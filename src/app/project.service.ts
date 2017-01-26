import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  oldAmount;
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title,
                                manager: localUpdatedProject.manager,
                                description: localUpdatedProject.description,
                              goal: localUpdatedProject.goal});
  }
  updateGoal(key:string,donation:number){
    var changeAmout = this.angularFire.database.object('projects/' + key + '/goal/').subscribe(data=>{
      this.oldAmount = data.$value;
    });
    let newAmount = this.oldAmount - donation;
    this.projects.update(key,{goal: newAmount})

    // this.projectService.update
  }
  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
