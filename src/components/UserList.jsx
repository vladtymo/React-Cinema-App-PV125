import { Button } from "antd";
import { useEffect, useState } from "react";

const apiUrl = 'https://dummyjson.com/users/';

let pagination = {
    skip: 0,
    limit: 5
};

export default function UserList() {

    const [users, setUsers] = useState([]);

    // invoke when the users property is changed
    useEffect(() => {
        console.log("Effect invoke on users changes!");
    }, [users]);

    // invoke only when component is rendered
    useEffect(() => {
        console.log("Effect invoke on start!");
        loadUsers();
    }, []); // array must be empty

    const loadUsers = () => {

        let url = apiUrl + `?skip=${pagination.skip}&limit=${pagination.limit}`;
        pagination.skip += pagination.limit;

        fetch(url).then(res => res.json()).then(data => {
            console.log(data.users);
            // save users to array
            setUsers([...users, ...data.users]);
        });
    }

    // JSX - allow write HTML block in JS code
    return (
        <>
            <h2>User List</h2>
            <ol>
                {users.map(u =>
                    <li key={u.id}>{u.firstName} {u.lastName} ... {u.phone}</li>
                )}
            </ol>
            <Button onClick={loadUsers}>More...</Button>
        </>
    );
}