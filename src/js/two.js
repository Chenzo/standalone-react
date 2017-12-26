

function Threeprop(props) {
    return <p>This was passed: {props.name}</p>;
}

const element = (
    <div>
        <h4>THREE</h4>
        <Threeprop name="Vince" />
    </div>
    );
ReactDOM.render(
    element,
    document.getElementById("three")
)





/* FOUR */
function Fourapp() {
    return (
        <div>
            <h4>FOUR</h4>
            <Threeprop name="Just trying" />
            <Threeprop name="To Do A" />
            <Threeprop name="Loop" />
        </div>
    )
}


ReactDOM.render(
    <Fourapp />,
    document.getElementById('four')
  );