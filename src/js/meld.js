


console.log("This is react right here:");

function callThis() {
	return "This is called from a function";
}

const myElem = (
	<div className="whyClassname">
		<h4>ONE</h4>
		<p>Hello world</p>
		<p>{callThis()}</p>
		<p>Start Time <span className="dynamic">{new Date().toLocaleTimeString()}</span></p>
	</div>
);

class Greeting extends React.Component {
	render() {
			return myElem;
	}
}
ReactDOM.render(
	<Greeting />,
	document.getElementById('meldOne')
);

