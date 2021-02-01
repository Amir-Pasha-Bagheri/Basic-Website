function Added(){
    var userName = document.getElementById("name").value 
    var userMessage = document.getElementById("text").value 
    const parentComment =  document.getElementById("parentComment")

    //GET DATE
    const date = new Date()
    const small = document.createElement('small')
    const i = document.createElement('i')
    const month = ["January","February","March","April","May","Jun","July","August","September","October","November","December"]
    var monthGet = date.getMonth()
    for(var j=0;j<=11;j++){if(monthGet===j) monthGet = month[j]}
    i.innerText = date.getDate() +'th ' + monthGet +' ' + date.getFullYear()
    small.appendChild(i)

    //MAKE COMMENT
    const h4 = document.createElement('h4')
    h4.innerText = userName + ' '
    h4.appendChild(small)
    const p = document.createElement('p')
    p.innerText = userMessage

    //MAKE MEDIA_BODY
    const newCommentMedia = document.createElement('div')
    newCommentMedia.classList.add('media','border','p-3')

    //newCommentMedia.classList.add('border')
    const newCommentMediaBody = document.createElement('div')
    newCommentMediaBody.classList.add('media-body')

    newCommentMedia.appendChild(newCommentMediaBody)
    newCommentMediaBody.appendChild(h4)
    newCommentMediaBody.appendChild(p)
    parentComment.appendChild(newCommentMedia)
  }