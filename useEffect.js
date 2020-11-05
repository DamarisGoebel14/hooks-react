import React, {useState, useEffect} from 'react'

function Example() {
    const [count, setCount] = useState(0):

    // similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser api
        console.log(`You clicked ${count} times`)
    })

    return (
        <div>
        <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}> Click me </button>
        </div>
    )
}