//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>File upload required validation demo</h1>
    <reactive-form></reactive-form>
    <hr/>
    <template-driven-form></template-driven-form>
  `,
})
export class App {
}