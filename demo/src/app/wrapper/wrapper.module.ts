import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionUiModule } from 'dist/discussion-ui';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DiscussionUiModule
  ],
  exports: [DiscussionUiModule]
})
export class WrapperModule { }