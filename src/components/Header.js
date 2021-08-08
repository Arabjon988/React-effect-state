import React, { useEffect, useState } from 'react'
import '../App.css'





function Header() {
    const [resourceType, setResourceType] = useState('posts')
    const [windowWidth, setWindowWidth] = useState (window.innerWidth)
    const [windowHeigth, setWindowHeigth] = useState(window.innerHeigth)
    const [items, setItems] = useState ([])


    const handleResize =()=>{
        setWindowWidth(window.innerWidth)
    }

    const hundleResize =()=>{
        setWindowHeigth(window.innerHeigth)
    }

    useEffect (() =>{
        window.addEventListener('resize', handleResize)
    }, [])

    useEffect (() =>{
        window.addEventListener ("resize", hundleResize)
    }, [])




    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res => res.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
        <div>
            <div className="header">
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            {items.map(item =>{
                return <pre>{JSON.stringify(item)}</pre>
            })}

            <h1>{resourceType}</h1>
            <p>{windowWidth}</p>
            <p>{windowHeigth}</p>
            
        </div>
    )
}

export default Header




// .then(json => setItems(json))
