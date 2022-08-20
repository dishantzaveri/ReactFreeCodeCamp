// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World';
// h1.className = "header"


// const navbar = (
//     <nav>
//         <h1>dishu</h1>
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>

//     </nav>
// )

const page = (
    <div>
        <h1 className="header">Hello World</h1>
        <img src='./react-logo.png' width='40px' />
        <p>React is a JavaScript library for building user interfaces.</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

)

ReactDOM.render(page, document.getElementById('root'));