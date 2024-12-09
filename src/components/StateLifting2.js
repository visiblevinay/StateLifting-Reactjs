import React, { useState } from 'react'

function Panel({title, children, isActive, onShow} ) {

  return (
    <section className='panel'>
        <h3>{title}</h3>
        {isActive ? (
            <p>{children}</p>
        ) : (
            <button onClick={onShow}>
                Show
            </button>
        )}
    </section>
  )
};

function Accordion() {
    const [isActive, setIsActive] = useState(0);
    return (
        <>
        <h2>Hello Wolrd</h2>
        <Panel 
            title='About'
            isActive={isActive === 0}
            onShow={()=> setIsActive(0)}
        
        >
        "Hello, World!" - A ubiquitous phrase used in computer programming to test basic functionality of a new language or environment, signifying a simple greeting to the user and the world at large; often the first program written by new coders, serving as a foundational step into the coding world. It's a widely recognized term, symbolizing the initiation into the realm of software development, regardless of the programming language used.
        </Panel>
        <Panel 
            title='Know More'
            isActive={isActive === 1}
            onShow={()=> setIsActive(1)}
            >
        Universal: "Hello, World!" is used across diverse programming languages.
        Beginner-friendly: Considered the simplest program to write, making it ideal for new learners.
        Functional test: Primarily used to check if the compiler and execution environment are working correctly.
        </Panel>
        </>
    )
}
export {Panel, Accordion};
