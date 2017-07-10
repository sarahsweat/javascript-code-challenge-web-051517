class CommentList {
  constructor() {
    this.comments = []
  }

  addComment(text) {
    var comment = new Comment(text)
    this.comments.push(comment)
  }

 render() {
    $('#comments-list').empty()
    $('#comments-list').append("<h1>Comments List</h1><ul>")
    this.comments.map(comment => {
      $('#comments-list').append(comment.render())
      $('#comments-list').append("<br>")
    })
    $('#comments-list').append("</ul>")

  }
}
