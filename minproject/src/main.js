
class Blog {
    constructor() {
        this.setInitVariables();
        this.registerEvents();
        this.likedMap = new Map();
    }

    setInitVariables() {
        //fetch 코드스쿼드에서  가져오는   dataLlist
        this.dataLlist = null;
        this.blogList = document.querySelector(".blogList > ul");
        this.likeList = document.querySelector(".like-list > ul");

    }


    registerEvents() {
        const dataURL = "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10";
        const startBtn = document.querySelector(".start");

        startBtn.addEventListener("click", () => {
            const li = document.querySelectorAll(".blogList li");
            if (li.length === 0) this.setInitData(dataURL);
            else this.blogList.innerHTML = "";

        })

        //코드스쿼드 블로그에서 찜버튼 클릭시 이벤트 처리
        this.blogList.addEventListener("click", ({ target }) => {
            this.likeAndUnLikeButtonEvent(target);
        });

        //찜목록 에서 버튼 클릭시 이벤트 처리
        this.likeList.addEventListener("click", ({ target }) => {
            this.likeAndUnLikeButtonEvent(target);
        });
    }

    likeAndUnLikeButtonEvent(target) {
        const targetClassName = target.className;
        // console.log("targetClassName : ", targetClassName);

        //like 버튼 클릭시 속성값 데이터를 가져온 후에 Set 저장한다.
        if (targetClassName === "like") {
            const setData = {
                albumId: target.getAttribute("data-id"),
                id: target.getAttribute("data-id"),
                title: target.getAttribute("data-title"),
                url: target.getAttribute("data-url"),
                thumbnailUrl: target.getAttribute("data-url")
            }
            //찜 목록에 추가
            this.likedMap.set("key-" + setData.id, setData);

            //찜 된 목록(div)의 클래스를 like 에서 unlike 로 변경하기.
            target.className = "unlike";
            target.innerText = "찜취소";

            //내찜목록 뷰에 추가
            this.updateLikedList();

        }

        if (targetClassName === "unlike") {
            //찜 취소를 클릭한 경우에, 찜하기로 다시 변경하고, 찜목을 제거하고, 찜 목로뷰로 랜더링한다.
            target.className = "like";
            target.innerText = "찜하기";
            const id = target.getAttribute("data-id");
            // console.log("찜 취소 키 값 : ", key);
            this.likedMap.delete("key-" + id);

            this.dataLlist.map((item) => {
                if (item.id == id) {
                    console.log(" 찜취소 아이디 : ", id);
                    const unLikeTarget = document.querySelector(`#blogList-${id} .unlike`);
                    unLikeTarget.className = "like";
                    unLikeTarget.innerText = "찜하기";
                }
            });

            //내찜목록 뷰에 제거
            this.updateLikedList();
        }
    }


    //내찜목록 
    updateLikedList() {
        let likedSum = "";

        Array.from(this.likedMap).map((value) => {
            console.log(value);
            const item = value[1];
            likedSum += `
            <li id="likeList-${item.id}">
             <a href=${item.url}><img src="${item.thumbnailUrl}"></a >
                ${item.title}
                <button class="unlike" data-id="${item.id}" data-title="${item.title}"
                    data-url="${item.url}" data-thumbnailUrl="${item.thumbnailUrl}">찜취소</button>
            </li > `
        });

        this.likeList.innerHTML = likedSum;
    }


    setInitData(dataURL) {
        this.getData(dataURL);
    }

    async getData(dataURL) {
        this.dataLlist = await fetch(dataURL).then(res => res.json()).then(data => data);
        this.insertPosts();

    }

    insertPosts() {

        this.dataLlist.map((item) => (
            this.blogList.innerHTML += `
            <li id="blogList-${item.id}">
             <a href=${item.url}><img src="${item.thumbnailUrl}"></a >
                ${item.title}
                <button class="like" data-id="${item.id}" data-title="${item.title}"
                    data-url="${item.url}" data-thumbnailUrl="${item.thumbnailUrl}">찜하기</button>
            </li > `
        ));

    }

}

export default Blog;


