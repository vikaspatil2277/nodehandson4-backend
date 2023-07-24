const {Data,blog,latestArticle,topPosts,latestStories,detailDesc,Total}=require("../controller/categoryController")

const categoryRouter=require("express").Router();


categoryRouter.get("/data",Data)
categoryRouter.get("/blog",blog)
categoryRouter.get("/latestArticle",latestArticle)
categoryRouter.get("/topPosts",topPosts)
categoryRouter.get("/latestStories",latestStories)
categoryRouter.get("/detailDesc",detailDesc)
categoryRouter.get("/total",Total)

module.exports=categoryRouter;