let books = [{id: 1, name: "carlopez", user: "carlo" }, 
    {id: 2, name: "aguinea", user: "aitor"}];
books.push({id: 3, name: "aybelhaj", user: "ayoub"});
console.log(books);
books[1].name = "CARLOS";
console.log(books);
books = books.filter(bo=> bo.id !==1)
console.log(books);