import TodoData from "./todo.data";
import TodoInput from "./todo.input";


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
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 10
        }}>
            <div>My todo list</div>
            <hr />
            <br />
            <TodoInput name="your todo" />
            <TodoData
                todos={todos}
                owner={'minhnb'}
            // age={20}
            // isDeveloper={true}
            />
        </div>
    )
}

export default Todolist;