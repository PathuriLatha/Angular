import { TemplateRef, ViewContainerRef, Directive, Input } from '@angular/core';

@Directive({
    selector: '[csDelay]'
})
export class StructuralDelayDirective{
    // 
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ){}

    @Input() set csDelay(delay: number){
        this.viewContainerRef.clear();
        setTimeout( () => {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }, delay );
    }

}