interface Iprops {
    name?: string;
}

const TodoInput = (props: Iprops) => {
    const { name = "type your todo" } = props;
    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input type="text" value={name} />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput;