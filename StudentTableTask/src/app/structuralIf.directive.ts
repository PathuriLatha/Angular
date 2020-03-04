import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

 @Directive({
     selector: '[csIf]'
 })
 export class StructuralIfDirective{
     
    constructor(
         private templateRef: TemplateRef<any>,
         private viewContainerRef: ViewContainerRef
     ){ }

    @Input() set csIf(condition: boolean){
        if(condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else{
            this.viewContainerRef.clear();
        }
    }

 }