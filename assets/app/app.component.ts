import {Component} from 'angular2/core';
import {MessageComponent} from "./messages/message.component";
import {Message} from "./messages/message";

@Component({
    selector: 'my-app',
    template: `
    <div class="row">
        
    </div>
    <div class="row"> 
        <section class="col-md-8 col-md-offset-2">
              <my-message [message]="message"
                          (editClicked)="message.content = $event"
              ></my-message>                 
        </section>
    </div>
    `,
    directives: [MessageComponent]

})
export class AppComponent {
    message: Message = new Message('A new message from app component', null, 'Max')
}


/*
 property binding [property]="expression"
 Directives are instrutions that change part of your DOM
 Components are Directives just with a view

 Event binding (event)="expression"
 User/DOM events (click, mouseover)
 Directive events
 Component Events

$event is the default vale of the event
 */
