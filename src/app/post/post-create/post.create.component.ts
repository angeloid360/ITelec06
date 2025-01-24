import { Component } from "@angular/core";

@Component({
    selector: 'post-create',
    templateUrl: './post.create.component.html',
    styleUrls: ['./post.create.component.css']
})

export class PostCreateComponent{
    
    NewPost = 'this is the initial post';
    PostInput = '';
        onAddPost(PostInput: HTMLTextAreaElement){
            console.log(PostInput);
            this.NewPost = "This is the user's post."   
        }
}