import TodoData from "./todo.data";


const Todolist = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]

    return (
        <>
            <div>My todo list</div>
            <br />
            <TodoData
                todos={todos}
                owner={'minhnb'}
                age={20}
                isDeveloper={true}
            />
        </>
    )
}

export default Todolist;