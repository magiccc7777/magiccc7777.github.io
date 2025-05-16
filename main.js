function changecolor(el, color) {
    const set = document.querySelectorAll(el)
    for (let i = 0; i < set.length; i++) {
        set[i].style.color = color
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tocolor = document.querySelector('#color')
    const element = document.querySelector('#element')

    function updateColor() {
        changecolor(element.value, tocolor.value)
    }

    element.addEventListener('change', updateColor)
    tocolor.addEventListener('change', updateColor)

    updateColor()
})
const users = {
user1:{
"name":"Gamal" ,
"age":16,
"country":"egypt"
},
user2: {
"name":"Mahmoud" ,
"age":19,
"country":"South Africa"


},
user3:{
"name":"Gamal" ,
"age":16,
"country":"egypt"
},
user4: {
"name":"Mahmoud" ,
"age":19,
"country":"South Africa"


}




}

console.log(users)







