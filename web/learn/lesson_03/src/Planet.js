export const Planet = (props) => {
    return (
        <p style={{ display: props.isGasPlanet ? "none" : "block" }}>{props.name}</p>
    )
    // Official answer
    // if( props.isGasPlanet ) return <p>{props.name}</p>;
    // Official answer 2 in the App.js file
    
}