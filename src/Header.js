const Header = (props) => {

    return (
        <header>
            <h1>Keanu and Who?</h1>
        <h2>I wonder if {props.actor1} was ever in a movie with {props.actor2} </h2>
        </header>
    )
}

export default Header