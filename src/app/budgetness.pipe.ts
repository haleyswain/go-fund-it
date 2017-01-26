import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';


@Pipe({
  name: 'budgetness'
})
export class BudgetnessPipe implements PipeTransform {

  transform(input: Project[], desiredBudgetness) {
    var output: Project[] = [];
    if(desiredBudgetness === "lowFunds") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal < 500 ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredBudgetness === "highFunds") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
