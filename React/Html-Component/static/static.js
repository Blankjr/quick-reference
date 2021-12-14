//*Generate a Link Component
//* We refer to these custom elements made with JavaScript as components: <Link />
/* 
Link instead of link. This is a required naming convention for React components. We use a capitalized name to distinguish components from normal functions. Note that functions which return JSX are not the same as normal JavaScript functions. 
*/
function Link() {
    return (
        <div>
            <a href="https://reactjs.org">
                React - A JavaScript Library for Building User
                Interfaces
            </a>
            <div>
                <h3>reactjs.org</h3>
            </div>
            <div>
                React makes it painless to create interactive UIs.
            </div>
        </div>
    );
}
//! Every React component must return either JSX elements or other React components.
//* Main Component
function App() {
    return (
        <section>
            <Link />
            <Link />
            <Link />
        </section>
    );
}
/* 
Note that whenever we render or return JSX, there can only be one parent component. But a parent component can have as many child components (as well as elements) as needed.
*/




//* <Link /> => basically Link() in JSX(JavaScript XML)
//* Babel Converts JSX to JavaScript
//* React use that created JS

ReactDOM.render(
    <App />,
    document.getElementById("root")
);