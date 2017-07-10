$(document).ready(function(){
  // your code here!
})

const commentList = new CommentList
newCommentListener()
filterListener()

function newCommentListener(){
  $('#note-form').on("click" , "#submit", function(){
    event.preventDefault()
    let text = $('#note-form').find('#text').val()
    commentList.addComment(text)
    commentList.render()
    $('#text').val('')
  })
}

function filterListener(){
  $('#search-form').on("click" , "#submit", function(){
    event.preventDefault()
    let searchParams = $('#search-form').find('#search-params').val()
    /* // Trying to use actual filter function
    $('#comments-list').filter(function( index ) {
      return $( "li" ).text().search(searchParams) > -1
    })
    */

    // Not using filter function, I know. However this does work and will only show comments that match.

    $('#comments-list > li').each(function() {
            if ($(this).text().search(searchParams) > -1) {
                $(this).show()
            }
            else {
                $(this).hide()
            }
        })
    $('#search-params').val('')
  })
}

class Comment {
  constructor (text) {
    this.text  = text
  }


  render() {
    return `<li>${this.text}</li>`
  }

}


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
