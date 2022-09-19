
class Blog {
    constructor() {
        this.setInitVariables();
        this.registerEvents();
        this.likedMap = new Map();
    }

    setInitVariables() {
        this.blogList = document.querySelector(".blogList > ul");
    }


    registerEvents() {
        const dataURL = "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10";
        const startBtn = document.querySelector(".start");

        startBtn.addEventListener("click", () => {
            const li = document.querySelectorAll(".blogList li");
            if (li.length === 0) this.setInitData(dataURL);
            else this.blogList.innerHTML = "";

        })

        this.blogList.addEventListener("click", ({ target }) => {
            const targetClassName = target.className;
            console.log("targetClassName : ", targetClassName);

            //like 버튼 클릭시 속성값 데이터를 가져온 후에 Set 저장한다.
            if (targetClassName === "like") {
                const setData = {
                    albumId: target.getAttribute("data-id"),
                    id: target.getAttribute("data-id"),
                    title: target.getAttribute("data-title"),
                    url: target.getAttribute("data-url"),
                    thumbnailUrl: target.getAttribute("data-url")
                }
                this.likedMap.set("key-" + setData.id, setData);

                this.likedMap.forEach((value, key) => {
                    console.log("key : ", key, value);
                })

            }

        });
    }

    setInitData(dataURL) {
        this.getData(dataURL);
    }

    async getData(dataURL) {
        const list = await fetch(dataURL).then(res => res.json()).then(data => data);
        this.insertPosts(list);

    }

    insertPosts(list) {

        list.map((item) => (
            this.blogList.innerHTML += `
            <li>
             <a href=${item.url}><img src="${item.thumbnailUrl}"></a >
                ${item.title}
                <button class="like" data-id="${item.id}" data-title="${item.title}"
                    data-url="${item.url}" data-thumbnailUrl="${item.thumbnailUrl}">찜하기</button>
            </li > `
        ));

    }

}

export default Blog;


