var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ['angular2/core', "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed using emit');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n       <article class=\"panel panel-default\">               \n            <div class=\"panel-body\">                        \n               {{ message.content }}                     \n            </div>  \n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                {{ message.username }}\n                </div>\n                <div class=\"config\">\n                    <a href=\"#\" (click)=\"onClick()\">Edit</a> |\n                    <a href=\"#\">Delete</a>\n                </div>\n            </footer>                                        \n        </article>                \n    ",
                        styles: ["\n    .author {\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n    }\n    .config {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n    }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = new message_2.Message('A new message from app component', null, 'Max');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n        \n    </div>\n    <div class=\"row\"> \n        <section class=\"col-md-8 col-md-offset-2\">\n              <my-message [message]=\"message\"\n                          (editClicked)=\"message.content = $event\"\n              ></my-message>                 \n        </section>\n    </div>\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
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
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(firstName, email, lastName, password) {
                    this.firstName = firstName;
                    this.email = email;
                    this.lastName = lastName;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.password = password;
                    this.email = email;
                }
                return User;
            }());
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNSSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFDbkMsUUFBaUIsRUFBRSxNQUFhO29CQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsQ0FBQztnQkFDTCxjQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCw2QkFhQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUM0QkQ7Z0JBQUE7b0JBRWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFJdkQsQ0FBQztnQkFIRyxrQ0FBTyxHQUFQO29CQUNHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBSkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQXhDYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsa29CQWVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDZRQWNSLENBQUM7cUJBRUwsQ0FBQzs7b0NBQUE7Z0JBVUYsdUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELCtDQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzFCRDtnQkFBQTtvQkFDSSxZQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLGtDQUFrQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDbkYsQ0FBQztnQkFuQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDZVQVdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUVqQyxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7OztBQUdEOzs7Ozs7Ozs7OztHQVdHOzs7Ozs7Ozs7Ozs7OztZQ2pDSCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBQ0ksY0FBbUIsU0FBa0IsRUFBUyxLQUFhLEVBQ3hDLFFBQWlCLEVBQ2pCLFFBQWdCO29CQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ3hDLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHVCQVNDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vYW5nLWNoYXQtYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT4gfFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9hcnRpY2xlPiAgICAgICAgICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAuYXV0aG9yIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmNvbmZpZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDE5JTtcbiAgICB9XG5cbiAgICBgXVxuXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgb25DbGljaygpIHtcbiAgICAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQgdXNpbmcgZW1pdCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+IFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICA8bXktbWVzc2FnZSBbbWVzc2FnZV09XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiXG4gICAgICAgICAgICAgID48L215LW1lc3NhZ2U+ICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ0EgbmV3IG1lc3NhZ2UgZnJvbSBhcHAgY29tcG9uZW50JywgbnVsbCwgJ01heCcpXG59XG5cblxuLypcbiBwcm9wZXJ0eSBiaW5kaW5nIFtwcm9wZXJ0eV09XCJleHByZXNzaW9uXCJcbiBEaXJlY3RpdmVzIGFyZSBpbnN0cnV0aW9ucyB0aGF0IGNoYW5nZSBwYXJ0IG9mIHlvdXIgRE9NXG4gQ29tcG9uZW50cyBhcmUgRGlyZWN0aXZlcyBqdXN0IHdpdGggYSB2aWV3XG5cbiBFdmVudCBiaW5kaW5nIChldmVudCk9XCJleHByZXNzaW9uXCJcbiBVc2VyL0RPTSBldmVudHMgKGNsaWNrLCBtb3VzZW92ZXIpXG4gRGlyZWN0aXZlIGV2ZW50c1xuIENvbXBvbmVudCBFdmVudHNcblxuJGV2ZW50IGlzIHRoZSBkZWZhdWx0IHZhbGUgb2YgdGhlIGV2ZW50XG4gKi9cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nLCBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
