import {Component} from '@angular/core'
import {FormGroup, FormControl} from '@angular/forms'
import {FileValidator} from './file-input.validator'

@Component({
  selector: 'template-driven-form',
  template: `
      <h3>Template driven forms demo</h3>
      
      <form #f="ngForm">
        <input type="file" [ngModel]="fileContent" name="file" #file="ngModel" requireFile/>
        <p *ngIf="!file.valid" style="color: red">This field is required!</p>

        <div>
          <button type="submit" [disabled]="!f.valid">Submit</button>
        </div>
      </form>
  `,
})
export class TemplateDrivenFormComponent {

  fileContent: any;
  
  constructor() {
  }
}      