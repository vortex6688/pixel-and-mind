import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DevelopmentComponent],
    exports: [DevelopmentComponent]
})

export class DevelopmentModule { }