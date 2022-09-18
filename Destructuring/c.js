var news = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },

    {
        "userId": 2,
        "id": 2,
        "title": "2222sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "2222quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
]

let [obj1] = news;
// let { title } = obj1;
// console.log(title);

let { title, body } = news[1];
console.log(title, body);


