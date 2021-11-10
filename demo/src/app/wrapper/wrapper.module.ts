import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionUiModule } from 'projects/discussion-ui/src/public-api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DiscussionUiModule
  ],
  exports: [DiscussionUiModule]
})
export class WrapperModule { }