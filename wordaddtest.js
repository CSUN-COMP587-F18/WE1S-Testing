describe('Testing the functionality, wordbank', ()=>{
 it('should add an item', ()=>{
    let todo = new ToDo();
    let item = {
    wordone: "wordone",
   }
    const done = todo.addTodo(item)
    expect(todo.getItems().length).toBe(7);
  })
  it('should delete a word', ()=>{
    let todo = new ToDo();
    let item = {
      id: 1,
      title: "word1",
     }
     let item2 = {
      id: 2,
      title: "word2",
     }
     todo.addTodo(item)
     todo.addTodo(item2)
    todo.delete(2)
    expect(todo.getItems()[todo.getItems().length-1].id).toBe(1);
  })
  it('should send to database', ()=>{
    //pending
  })
})
