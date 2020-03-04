import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[csLoop]'
})
export class StructuralLoopDirective{
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ){}

    @Input('csLoop') set loop(num: number){
        for(let i=0; i<num; i++){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}