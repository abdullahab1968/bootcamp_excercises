// Ex3
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  for(let index in posts){
      if(posts[index].id === 2){
          posts.splice(index, 1)
      }
  }


  