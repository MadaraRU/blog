from fastapi import FastAPI, Body
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4200",
    "http://localhost",
    "http://localhost:8000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(
    "mongodb+srv://mk_aloui:blog_elyadata@cluster0.frssgm7.mongodb.net/?retryWrites=true&w=majority")
db = client["blog_db"]
collection = db["blog"]


@app.get("/api/blogs")
async def get_blogs():
    result = collection.find({})
   # Convert each BSON document to a Python dictionary
    blogs = [dict(blog) for blog in result]
    # Remove unwanted fields and convert ObjectId to string representation
    blogs = [{k: str(v) if isinstance(v, ObjectId) else v for k,
              v in blog.items() if not k.startswith("$")} for blog in blogs]
    return blogs


@app.get("/api/blogs/{blog_id}")
async def get_blog(blog_id: str):
    blog = collection.find_one({"_id": ObjectId(blog_id)})
    if blog:
        blog["_id"] = str(blog["_id"])
        return blog
    else:
        return {"message": "Blog not found"}


@app.post("/api/blogs")
async def add_blog(
    title: str = Body(..., embed=True),
    author: str = Body(..., embed=True),
    content: str = Body(..., embed=True)
):
    blog = {
        "title": title,
        "author": author,
        "content": content,
        "created_at": datetime.utcnow(),
        "upvotes": 0,
        "downvotes": 0
    }

    collection.insert_one(blog)
    return {"message": "Blog created successfully!"}


@app.put("/blogs/{blog_id}/upvote")
async def upvote_blog(blog_id: str):
    result = collection.update_one({"_id": ObjectId(blog_id)}, {
                                   "$inc": {"upvotes": 1}})
    if result.modified_count:
        return {"message": "Blog upvoted successfully!"}
    else:
        return {"message": "Blog not found"}


@app.put("/blogs/{blog_id}/downvote")
async def downvote_blog(blog_id: str):
    result = collection.update_one({"_id": ObjectId(blog_id)}, {
                                   "$inc": {"downvotes": 1}})
    if result.modified_count:
        return {"message": "Blog downvoted successfully!"}
    else:
        return {"message": "Blog not found"}
