import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { MessageComponent } from "./posts/message/Message.component";
import { OutputComponent } from "./posts/output/output.component";

const routes:Routes = [
  {path: '', component: OutputComponent},
  {path: 'create',component: MessageComponent},
  {path: 'edit/:postId',component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
