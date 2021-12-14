//*Generate a Link Component
//* We refer to these custom elements made with JavaScript as components: <Link />
/* 
Link instead of link. This is a required naming convention for React components. We use a capitalized name to distinguish components from normal functions. Note that functions which return JSX are not the same as normal JavaScript functions. 
*/
function Link(props) {
    return (
        <div>
            <a href={props.url}>{props.title}</a>
            <div>
                <h3>{props.shortUrl}</h3>
            </div>
            <div>{props.excerpt}</div>
        </div>
    );
}
//! Every React component must return either JSX elements or other React components.
//* Main Component
function App() {
    return (
        <section>
            <Link
                title="React - A JavaScript Library for Building User Interfaces"
                url="https://reactjs.org"
                // props consisting of two or more words must be written in camelcase
                shortUrl="reactjs.org"
                excerpt="React makes it painless to create interactive UIs."
            />
            <Link
                title="React (web framework) - Wikipedia"
                url="https://en.wikipedia.org/wiki/React_(web_framework)"
                shortUrl="en.wikipedia.org › wiki › React_(web_framework)"
                excerpt="React is a JavaScript library for building user interfaces."
            />
            <Link
                title="React (@reactjs) | Twitter"
                url="https://twitter.com/reactjs"
                shortUrl="twitter.com › reactjs"
                excerpt="The latest Tweets from React (@reactjs)."
            />
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