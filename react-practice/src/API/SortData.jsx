import React, { useEffect, useState } from 'react';

export default function SortData() {
    const [users, setUsers] = useState([]);
    const [isClicked, setisClicked] = useState(false)

    const[sortName,setSortName]=useState([])


    useEffect(() => {
   
            if(isClicked){

                // eslint-disable-next-line no-inner-declarations
                async function fetchData(){
                    try {
                        const response = await fetch('https://jsonplaceholder.typicode.com/users');
                        const data = await response.json();
                        setUsers(data);
                    } catch (error) {
                        console.error(error.message);
                    }
                }

                 fetchData()

            } 
      

    }, [isClicked]);

 function buttonClicked(){
    setisClicked(true)
 }

 const sortHandler = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.length - b.name.length);
    setUsers(sortedUsers);
  };


    return (
        <div>
            <button onClick={buttonClicked}>Get Data</button>
            <button  onClick={sortHandler}>  Sort Data</button>

            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
