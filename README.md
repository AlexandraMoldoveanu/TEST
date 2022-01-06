**IMPORTANT - before starting to work on assignments:**

- Don't get overwhelmed by the length of this document :)  
- Take it step by step with the instructions below and follow in the same manner with the assignments.  
- Do as much as you feel comfortable - you don't have to feel pressured to solve every assignment. Even if you submit only a few finished assignments, it is OK. We want to see how you approach problems. Of course, the more assignments are done correctly, the better.  
- Most of the assignments could be solved with minimal language specific knowledge. You just have to pay attention to the existing code and try to extend it in a similar way.  
- Have a look at the official documentations for Angular/CLI and Nestjs/CLI to find out how to generate new components, services, controllers, etc.  
- Try to stick to the existing structure and formatting of code, as much as possible.  
- Try to understand the concepts and do not deliver code that you don't understand. 

When you want to submit you finished code:
1. go into front-end folder and zip the src subfolder
2. go into back-end folder and zip the src subfolder 
3. send us the 2 zip files via email
4. please don't push your code to GitHub - we wouldn't want it to be used by others

**Prerequisites:**

1. make sure you have Visual Studio Code or similar editor installed (here is the installer for VS Code: https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user).
2. make sure you have git installed (install it if you don't have it: https://github.com/git-for-windows/git/releases/download/v2.34.1.windows.1/Git-2.34.1-64-bit.exe).
3. make sure you have NodeJS installed (install it if you don't have it: https://nodejs.org/dist/v16.13.1/node-v16.13.1-x64.msi).
4. make sure you have @nestjs/cli installed (install it if you don't have it: npm i -g @nestjs/cli).
5. make sure you have @angular/cli installed (install it if you don't have it: npm install -g @angular/cli).

**Setting up both applications:**

1. clone/fork/download this repository
2. go into front-end folder using a terminal (cmd) and install all the dependencies by running: npm install
3. go into back-end folder using a terminal (cmd) and install all the dependencies by running: npm install

**Run the applications:**

1. go into front-end folder using a terminal (cmd) and run: npm start
The front-end application should now be available at http://localhost:4200/
Open the URL in a browser and make sure it works.
2. go into back-end folder using a terminal (cmd) and run npm run start:dev
The server should now be listening at http://localhost:3000/
Open the URL in a browser and make sure it works. It sould display Hello World!

**Assignments for back-end application:**

1. There is a method inside `posts.controller.ts`, named `getPostById`, which is calling a method from `PostService`. However, the implementation of the called method is not complete in the service. You have to find the incomplete method inside the `PostsService` and write the code so that it returns what it should.

2. Generate a new service using nestjs/cli. The service shall be named postComments (the nestjs/cli will automatically append the Service suffix so that the resulting classname will be PostCommentsService). This service shall contain 3 methods: 

`getAllComments(): PostComment[] {//it shall return all comments for all posts}`
`getCommentById(): PostComment {//it shall return the comment with a given id}`
`getCommentsForPostId(postId: number): PostComment[] {//it shall return all the comments for a post with a given id}`

You have to implement all 3 methods. They will be used later on by the controller that you will create for the assignment number 3.

3. Generate a new controller using nestjs/cli . The controller shall be named comments and it shall contain 3 methods:

`getAllComments(): PostComment[] {}`
`getCommentById(): PostComment {}`
`getCommentsForPostId(postId: number): PostComment[] {}`

Each of these 3 methods shall return the corresponding method from the CommentsService. 

**Hints for back-end assignments:** 

Look for similar implementations in the already existing code (e.g. `getPostsById` method inside the `posts.controller.ts` could help you when implementing `getCommentsById` and `getCommentsForPostId` in the `comments.controller.ts`.)

You can find all the posts and all the comments inside the mock-data folder.

**Assignments for front-end application:**

1. Create 2 more methods inside `rest.service.ts`.

`getAllComments(): PostComment[] {//it shall get all comments for all posts from the back-end, and return them as Observable<PostComment[]>}`

`getCommentById(): PostComment {//it shall get the comment with a given id from the back-end, and return it as Observable<PostComment>}`

`getCommentsForPostId(postId: number): PostComment[] {//it shall get all the comments for a post with a given id from the back-end , and return them as Observable<PostComment[]>}`

2. Generate a new component using angular/cli. The component shall be named `post-comments` and shall be placed inside the `components` folder, in a separate subfolder, next to the `post` and `posts`.
(Please use the exact name *`post-comments`* when generating it, so that the folders and files are inline with the exisiting structure and naming convention. Angular/cli will automatically name the class `PostCommentsComponent`)
The component shall use `RestService` to get all the comments and display them to the user in a similar way to the `PostsComponent`. The new component shall be added to `app.routing.module.ts` in a similar way to the other components. The path for it shall be `'comments'`.

Optional: Sort the comments by the name property, alphabetically, before displaying.

3. Generate a new component using angular/cli. The component shall be named `post-comment` and shall be placed inside the components folder, in a separate subfolder, next to the `post`, `posts`, and `post-comments`.
The component shall use `RestService` to get a specific comment by id and display it to the user in a similar way to the `PostComponent`. The new component shall be added to `app.routing.module.ts` in a similar way to the other components. The path for it shall be `'comments/:id'`.

4. Optional: Up until now, the `post-comments` component is accessible at http://localhost:4200/comments/ only, and it is displaying all the comments for all the posts. What if a user wants to see the comments of a specific post?
Reuse the `post-comments` component, for this task. You have to add another route in the routes array in `app-routing.module.ts`. The path for it shall be `'posts/:id/comments'`.

**Hints for front-end assignments:**

Look for similar implementations in the already exisiting code (e.g. `getAllPosts` and `getPostById` methods inside the `rest.service.ts` could help you when implementing new methods in that service).
