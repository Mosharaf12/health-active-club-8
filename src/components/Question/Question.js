import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1>Important Question</h1>
            <div>
                <h3>1. How does React Works ?</h3>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM</p>
                <br/>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>

            </div>
            <div>
                <h3>2.Difference between Props and state ?</h3>
                <p> <strong>State:</strong>State is the local state of the component which cannot be accessed and modified outside of the component </p>
                <br/>
                <p><strong>Props: </strong>Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3>3. UseEffect api data without many working in ReactJs ?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components.

                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.

                    useEffect accepts two arguments. The second argument is optional.

                    useEffect= function and dependency</p>
                    <br/>
                    <p><strong>More information useEffect:</strong>But wait!! It keeps counting even though it should only count once!

                    useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

                    This is not what we want. There are several ways to control when side effects run.

                    We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array</p>
            </div>
        </div>
    );
};

export default Question;