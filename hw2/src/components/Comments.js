import { useState } from "react"

function Comment (comment, deleteComment) {
  return (
      <li className="comments__item" key={comment.id}>
        <p className="comments__content">{comment.text}</p>
        <button
            className="comments__button"
            onClick={() => deleteComment(comment.id)}
        >
          Delete comment
        </button>
      </li>
  )
}

function Comments() {
  const [commentsList, setCommentsList] = useState([])
  const [comment, setComment] = useState("")
  const [deletedComments, setDeletedComments] = useState([])
  const [commentId, setCommentId] = useState(1)

  const updateId = () => {
    setCommentId(commentId + 1)
  }

  const addComment = (event) => {
    event.preventDefault()
    if (!comment.trim()) return
    setCommentsList([...commentsList, { id: commentId, text: comment }])
    updateId()
    setComment("")
  }

  const deleteComment = (id) => {
    setDeletedComments((prevDeletedComments) => {
      return [...prevDeletedComments, id]
    })
  }

  return (
    <div className="comments">
      <div className="comments__add_box">
        <input
          className="comments__add_field"
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></input>
        <button className="btn-add-comment" onClick={addComment}>
          Add comment
        </button>
      </div>
      <div className="comments__list_box">
        <ul className="comments__list_items">
          {commentsList
            .filter((comment) => !deletedComments.includes(comment.id))
            .map((comment) => Comment(comment, deleteComment))}
        </ul>
      </div>
    </div>
  )
}

export default Comments
