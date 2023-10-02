import React from 'react'
import classes from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id:1, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLOASmLD76pq0UPIjIJnEoCNeLa4MeiL69A&usqp=CAU", followed: false, fullName:"Azamat", status: "busy", location: {city: "Bishkek", country: "Kyrgyzstan"}},
            {id:2, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR7AhS-xua6SDJSFFtOw16-WmqwTcaHIeJw&usqp=CAU", followed: false, fullName:"Erbol", status: "I'm boss", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
            {id:3, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXpqY-h9r7JsHVGy5kEiSL-opMRwrtlX1Gw&usqp=CAU", followed: false, fullName:"Marlen", status: "study", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
            {id:4, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAaplmBAKb_SBhIayCNeZWSiNyDLlsDX9rw&usqp=CAU", followed: false, fullName:"Al Jami", status: "study", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
        ])
    }
    

    return (
        <div>
        {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={classes.userPhoto}/>
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
        }
        </div>
    )
}

export default Users
