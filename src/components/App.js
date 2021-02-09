import React, { useState, useRef } from 'react';
import Header from './Header';

export default function App(props) {
	const [items, addItems] = useState([
		{
			item: '',
			completed: false
		}
	]);

	const [toDoListData, setToDoListData] = useState([
		{
			title: 'Start React HW',
			completed: false
		},
		{
			title: 'Schedule Dentist appointment',
			completed: false
		},
		{
			title: 'Wash car',
			completed: false
		}
	]);

	const [completedItems, finishItems] = useState([
		{
			item: '',
			completed: true
		}
	]);

	const handleChange = event => {
		addItems({
			...items,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setToDoListData([...toDoListData, items]);
		addItems({
			title: '',
			completed: false
		});
	};

	const completeItem = () => {};
	return (
		<div className="parent">
			<form id="set-to-do" onSubmit={handleSubmit}>
				<label htmlFor="title">
					{' '}
					To Do:
					<input
						id="title"
						type="text"
						value={items.title}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value={'Add To Do Item'} />
			</form>
			<div className="child">
				<Header />
				<h2 className="to-do">Need To Do</h2>
				<div id="not-done">
					<ul className="not-done">
						{toDoListData.map(item => {
							return (
								<>
									<li key={`${item.title}`} className="list-item">
										{item.title}
									</li>
									<button>Completed</button>
								</>
							);
						})}
					</ul>
				</div>
				<h2 className="completed">Completed</h2>
			</div>
		</div>
	);
}
