
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
        console.log(" list type :", typeof list);
        list.map((v) => {
            console.log(v.title);
            return v;
        })

    }


}

export default Blog;


