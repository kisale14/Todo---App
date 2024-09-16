import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>
                todo
                 <img
                   style={{width: '60px', height: 'auto'}}
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcr9ErjixrOB4brfXICewuiMmzsvkUJ4jlHg&s"/>
            </h1>

            <CreateTodo saveTodo={onAddTodo}/>
        </header>
    )
}