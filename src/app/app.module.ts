import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {App} from './app'
import {ReactiveFormComponent} from './reactive-form.component'
import {TemplateDrivenFormComponent} from './template-driven-form.component'

import {FileValueAccessor} from './file-control-value-accessor'
import {FileValidator} from './file-input.validator'


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    App,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FileValueAccessor,
    FileValidator
  ],
  bootstrap: [ App ]
})
export class AppModule {}