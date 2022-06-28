import React from 'react'

export default function DisplayItem() {
    const [items, setItems] = React.useState([]);

    const handleDelete = (id) => {
        fetch(`https://fake-server-app-by-atul.herokuapp.com/lists/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((res) => console.log(res)).then(()=>{
             fetch(`https://fake-server-app-by-atul.herokuapp.com/lists`)
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.log(err))
            });
    }

    React.useEffect(() => {
        fetch(`https://fake-server-app-by-atul.herokuapp.com/lists`)
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.log(err))
    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Item Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td id="title">{val.title}</td>
                                <td><button id="delButton" onClick={() => { handleDelete(val.id) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}


