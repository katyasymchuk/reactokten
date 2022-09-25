import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import Todo from "../todo/Todo";

export default  function Todos() {
	let [todos, setTodos] = useState([]);
	useEffect(() => {

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(value => value.json())
			.then(value => {
				setTodos([...value]);

			});

	}, []);

	return (
		<div>
			<h1>All todos</h1>
			{
				todos.map(value => <Todo
					key={value.id}
					todo={value}/>)
			}

		</div>
	);
}