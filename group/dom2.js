const allCourses = [...document.querySelectorAll(".curso")]
const coursesC1 = [...document.querySelectorAll(".c1")]
const coursesC2 = [...document.querySelectorAll(".c2")]
const especialCourse = document.querySelectorAll(".curso")[2]

console.log(allCourses)
console.log(coursesC1)
console.log(coursesC2)
console.log(especialCourse)

coursesC1.map(item => {
    item.classList.add("strong")
})

