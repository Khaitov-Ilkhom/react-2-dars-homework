import "./Task.css"
import {taskOne} from "../api/tasks";

function Task() {
    return (
        <div className='container'>
            <h2>Users Info</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskOne.map(user =>
                            <tr>
                                <td><b>{user.id}</b></td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <ul>
                                        <li><b>Street:</b> {user.address.street} | <b>Suite:</b> {user.address.suite}</li>
                                        <li><b>City:</b> {user.address.city} | <b>Zipcode:</b> {user.address.zipcode}</li>
                                    </ul>
                                </td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>
                                    <ul>
                                        <li>{user.company.name}</li>
                                        <li>{user.company.catchPhrase}</li>
                                        <li>{user.company.bs}</li>
                                    </ul>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <br/>
            <hr/>
        </div>
    )
}

export default Task