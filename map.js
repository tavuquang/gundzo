var courses=[
    {
        id:1,
        name:'javascript',
        coin:1,
    },
    {
        id:2,
        name:'javascript2',
        coin:2,
    },
    {
        id:3,
        name:'javascript3',
        coin:3,
    },
    {
        id:4,
        name:'javascript4',
        coin:4,
    }
]
function courseshanle(courses1,index){
    console.log(courses1)
    return {
        id: courses1.id,
        name:'Khoa hoc: ${courses1.name}',
        coin: courses1.coin,
        coinText:'Gia: ${courses1.coin}',
        index: index
    }
}
var newcourses=courses.map(courseshanle)
console.log(newcourses)