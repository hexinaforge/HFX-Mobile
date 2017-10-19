import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumsPage } from './forums';

@NgModule({
  declarations: [
    ForumsPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumsPage),
  ],
})
export class ForumsPageModule {}
