// Create web server using express
const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");

// Get all comments
router.get("/", commentsController.getAllComments);

// Get comment by id
router.get("/:id", commentsController.getCommentById);

// Get comment by user id
router.get("/user/:id", commentsController.getCommentByUserId);

// Get comment by post id
router.get("/post/:id", commentsController.getCommentByPostId);

// Create comment
router.post("/", commentsController.createComment);

// Update comment by id
router.put("/:id", commentsController.updateCommentById);

// Delete comment by id
router.delete("/:id", commentsController.deleteCommentById);

// Delete comment by user id
router.delete("/user/:id", commentsController.deleteCommentByUserId);

// Delete comment by post id
router.delete("/post/:id", commentsController.deleteCommentByPostId);

module.exports = router;using express
const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");

// Get all comments
router.get("/", commentsController.getAllComments);

// Get comment by id
router.get("/:id", commentsController.getCommentById);

// Get comment by user id
router.get("/user/:id", commentsController.getCommentByUserId);

// Get comment by post id
router.get("/post/:id", commentsController.getCommentByPostId);

// Create comment
router.post("/", commentsController.createComment);

// Update comment by id
router.put("/:id", commentsController.updateCommentById);

// Delete comment by id
router.delete("/:id", commentsController.deleteCommentById);

// Delete comment by user id
router.delete("/user/:id", commentsController.deleteCommentByUserId);

// Delete comment by post id
router.delete("/post/:id", commentsController.deleteCommentByPostId);

module.exports = router;
