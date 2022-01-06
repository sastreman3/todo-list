import Todo from "../Todo"

export default function ListOfTodos() {
    const tasks = [
        {
            id: 1,
            title: "1 titulo",
            description: "Una descriopcion",
            active: true,
            done: false
        },
        {
            id: 2,
            title: "2 titulo",
            description: "Una descriopcion",
            active: true,
            done: false
        },
        {
            id: 3,
            title: "3 titulo",
            description: "Una descriopcion",
            active: true,
            done: false
        },
        {
            id: 4,
            title: "4 titulo",
            description: "Una descriopcion",
            active: true,
            done: false
        },
        {
            id: 5,
            title: "5 titulo",
            description: "Una descriopcion",
            active: true,
            done: false
        }
    ]

    return (
        <div>
            {
                tasks.map(task => (
                    <Todo title={task.title} key={task.id}/>
                ))
            }
        </div>
    )
}