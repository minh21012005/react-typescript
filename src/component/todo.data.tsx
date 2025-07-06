interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
    isDeveloper: boolean;
}

type TProps = {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
    isDeveloper: boolean;
}

const TodoData = (props: TProps) => {
    const { todos } = props;
    return (
        <div>
            <div>owner : {props.owner}</div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;