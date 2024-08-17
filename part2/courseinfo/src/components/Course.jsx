const Header = (props) => {
    return (
        <h2>{props.course.name}</h2>
    )
}

const Part = (props) => {
return (
    <p>
    {props.part.name} {props.part.exercises}
    </p>
)
}

const Content = ({parts}) => {
return (
    <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
)
}

const Total = ({parts}) => {
const calcTotal = (parts) => {
    return parts.reduce((sum, part) => sum + part.exercises, 0)
}
return (
    <p><strong>Total of {calcTotal(parts)} exercises</strong></p>
)
}

const Course = ({courses}) => {
return (
    <div>
    <h1>
        Web development curriculum
    </h1>

    {courses.map(course => (
        <div key={course.id}>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    ))}
    </div>
)
}

export default Course