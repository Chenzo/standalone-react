"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("This is react right here:");

function callThis() {
	return "This is called from a function";
}

var myElem = React.createElement(
	"div",
	{ className: "whyClassname" },
	React.createElement(
		"h4",
		null,
		"ONE"
	),
	React.createElement(
		"p",
		null,
		"Hello world"
	),
	React.createElement(
		"p",
		null,
		callThis()
	),
	React.createElement(
		"p",
		null,
		"Start Time ",
		React.createElement(
			"span",
			{ className: "dynamic" },
			new Date().toLocaleTimeString()
		)
	)
);

var Greeting = function (_React$Component) {
	_inherits(Greeting, _React$Component);

	function Greeting() {
		_classCallCheck(this, Greeting);

		return _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).apply(this, arguments));
	}

	_createClass(Greeting, [{
		key: "render",
		value: function render() {
			return myElem;
		}
	}]);

	return Greeting;
}(React.Component);

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('root'));

/* TWO */

function doRender() {
	var myElem = React.createElement(
		"div",
		null,
		React.createElement(
			"h4",
			null,
			"TWO"
		),
		React.createElement(
			"p",
			null,
			"Current Time ",
			React.createElement(
				"span",
				{ className: "dynamic" },
				new Date().toLocaleTimeString()
			)
		)
	);
	ReactDOM.render(myElem, document.getElementById('two'));
}
doRender();
setInterval(doRender, 1000);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* three.js */
var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Toggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          isToggleOn: !prevState.isToggleOn
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handleClick },
        this.state.isToggleOn ? 'ON' : 'OFF'
      );
    }
  }]);

  return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('seven'));

var numbers = [1, 2, 3, 4, 5];
var listItems = numbers.map(function (number, i) {
  return React.createElement(
    'li',
    { key: i },
    number
  );
});

ReactDOM.render(React.createElement(
  'ul',
  null,
  listItems
), document.getElementById('seven2'));
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Threeprop(props) {
    return React.createElement(
        "p",
        null,
        "This was passed: ",
        props.name
    );
}

var element = React.createElement(
    "div",
    null,
    React.createElement(
        "h4",
        null,
        "THREE"
    ),
    React.createElement(Threeprop, { name: "Vince" })
);
ReactDOM.render(element, document.getElementById("three"));

/* FOUR */
function Fourapp() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h4",
            null,
            "FOUR"
        ),
        React.createElement(Threeprop, { name: "Just trying" }),
        React.createElement(Threeprop, { name: "To Do A" }),
        React.createElement(Threeprop, { name: "Loop" })
    );
}

ReactDOM.render(React.createElement(Fourapp, null), document.getElementById('four'));

/* five */
function Clock(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h4",
            null,
            "FIVE"
        ),
        React.createElement(
            "h3",
            null,
            "It is ",
            React.createElement(
                "span",
                { className: "dynamic" },
                props.date.toLocaleTimeString(),
                "."
            )
        )
    );
}

function tick() {
    ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('five'));
}

tick();
setInterval(tick, 1000);

var Betterclock = function (_React$Component) {
    _inherits(Betterclock, _React$Component);

    function Betterclock(props) {
        _classCallCheck(this, Betterclock);

        var _this = _possibleConstructorReturn(this, (Betterclock.__proto__ || Object.getPrototypeOf(Betterclock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Betterclock, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: "tick",
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    null,
                    "SIX"
                ),
                React.createElement(
                    "h3",
                    null,
                    "It is ",
                    React.createElement(
                        "span",
                        { className: "dynamic" },
                        this.state.date.toLocaleTimeString(),
                        "."
                    )
                )
            );
        }
    }]);

    return Betterclock;
}(React.Component);

ReactDOM.render(React.createElement(Betterclock, null), document.getElementById('six'));