interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
}

const TodoData = (props: IProps) => {
    const { todos, owner = 'unknow' } = props;
    return (
        <div>
            <div>owner : {owner}</div>
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