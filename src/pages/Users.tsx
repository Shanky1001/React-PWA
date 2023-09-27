import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const URL = "https://jsonplaceholder.typicode.com/users";
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
			})
			.catch((err) => alert("api failed"));
	}, []);

	return (
		<div>
			<h1>Users Table</h1>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>UserName</th>
						<th>Name</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{data.map((val: any) => (
						<tr key={val.id}>
							<td>{val.id}</td>
							<td>{val.username}</td>
							<td>{val.name}</td>
							<td>{val.website}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Users;
