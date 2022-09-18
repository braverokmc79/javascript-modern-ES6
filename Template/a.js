const data = [
    {
        name: "coffee-bean",
        order: true,
        items: ['americano', 'milk', 'green-tea']
    },
    {
        name: 'starbucks',
        order: false
    }
]

//json 으로 응담을 받고, javascript obejct 변환한 후에 어떠한 데이터 처리 조작을 한 후에 dom 에 추가
//데이터, + HTM 문자열의 결합이 필요하기 때문에,


const template = `<div>welcome ${data[0].name} !!</div>`;
console.log(template);

