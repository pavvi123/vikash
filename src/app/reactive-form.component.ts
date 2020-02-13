import {Component} from '@angular/core'
import {FormGroup, FormControl} from '@angular/forms'
import {FileValidator} from './file-input.validator'

@Component({
  selector: 'reactive-form',
  template: `
      <h3>Reactive forms demo</h3>
      
      <form [formGroup]="frm">
        <input type="file" formControlName="file" />
        <p *ngIf="frm.controls.file.errors?.required" style="color: red">This field is required!</p>
        
        <div>
          <button type="submit" [disabled]="!frm.valid">Submit</button>
        </div>
      </form>
  `,
})
export class ReactiveFormComponent {

  frm = new FormGroup({});
  
  constructor() {
    this.buildForm();
  }
  
  private buildForm() {
      this.frm = new FormGroup({
          file: new FormControl("", [FileValidator.validate])
      });
  }
}      