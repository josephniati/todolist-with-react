import React, {useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue ] = useState("");
	const [todos, setTodos ] = useState([])

// 

	return (
		<div className="container">
			<h1>My Todos</h1>
<ul>
	<li>
		<input
		 type="text"
	onChange={(e) => setInputValue(e.target.value)}
	value={inputValue}
	onKeyPress={(e)  => {
		console.log("key was pressed", e.key);
		if (e.key === "Enter") {
			
			setTodos(todos.concat(inputValue));
			setInputValue("");
		}
	}
}
	
	
		placeholder="What do you need to do?"></input>
	</li>
{todos.map((item, index) =>  (
<li>
	{item} <i class="fas fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex ))}></i>
</li>
))}




</ul>
<div>{todos.length} tasks</div>
</div>

	);
};

export default Home;
