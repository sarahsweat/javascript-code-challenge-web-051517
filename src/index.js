$(document).ready(function(){

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
    /*
    $('#comments-list').filter(function( index ) {
      return $( "li" ).text().search(searchParams) > -1
    })
    */

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
