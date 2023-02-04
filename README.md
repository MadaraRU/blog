# Blog Application

A simple blog application that allows users to create, read, and vote on blogs. This application is built with Angular for the front-end and FastAPI for the back-end. The data is stored in a MongoDB database.

## Features
- List of blogs previews: Displays a list of blog previews with a title, content, author, upvote and downvote buttons. Each blog preview has a ‘read more’ link that redirects to the detailed blog page. The style of each blog preview is determined by the upvote/downvote ratio.
- Add blog: Contains a reactive form for adding blogs. After submitting the blog, the app redirects to the main blog list page.
- Blog details page: Contains the full content of the blog, with the same items as the blog preview.
- Search filter: Full-text search filter for the blog's content, title, and author.
- Sort filter: Ability to sort the blog previews by date created.

## Screenshots

![image](https://user-images.githubusercontent.com/78321649/216788411-348c372e-190b-42cd-b04d-fb0aed0c4c6b.png)
![image](https://user-images.githubusercontent.com/78321649/216788438-d0d2d3f1-0cde-442e-a74b-b2627e274207.png)
![image](https://user-images.githubusercontent.com/78321649/216788449-0280dbdb-70b8-4e61-987b-64fcbf6ad3fc.png)




## Installation

### Backend Installation
1. Clone the repositoy:
```
git clone https://github.com/MadaraRU/blog.git
```
2. Change directory: 
```
cd blog/backend
```
3. Install the dependencies:
```
pip install -r requirements.txt
```
4. Rename .envexample to .env and add your MONGO_URI
5. Start the server:
```
uvicorn app.main:app --reload
```

### Frontend Installation
1. Change directory: 
```
cd blog/frontend/blog-app
```
2. Install the dependencies:
```
npm install
```
3. Start the development server:
```
ng serve --open
```
