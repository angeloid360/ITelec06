import { Component } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'post-create',
    templateUrl: './post.create.component.html',
    styleUrls: ['./post.create.component.css'],
    standalone:true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
      ],
})

export class PostCreateComponent{
    
    NewPost = 'this is the initial post';
    PostInput = '';
        onAddPost(PostInput: HTMLTextAreaElement){
            console.log(PostInput);
            this.NewPost = "This is the user's post."   
        }
}