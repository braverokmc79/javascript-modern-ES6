
class Blog {
    constructor() {
        console.log("Blog is start !");
        const dataURL = "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10";
        this.setInitData(dataURL);
    }

    setInitData(dataURL) {
        this.getData(dataURL);
    }

    async getData(dataURL) {
        const list = await fetch(dataURL).then(res => res.json()).then(data => data);
        this.insertPosts(list);

    }

    insertPosts(list) {
        const ul = document.querySelector(".blogList > ul");
        list.map((item) => (
            ul.innerHTML += `<li><a href=${item.url}>
            <img src="${item.thumbnailUrl}">
            ${item.title}</a >
            </li > `
        ));

    }

}

export default Blog;


