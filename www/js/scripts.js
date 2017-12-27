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
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (t) {
  function z() {
    for (var a = 0; a < g.length; a++) {
      g[a][0](g[a][1]);
    }g = [];m = !1;
  }function n(a, b) {
    g.push([a, b]);m || (m = !0, A(z, 0));
  }function B(a, b) {
    function c(a) {
      p(b, a);
    }function h(a) {
      k(b, a);
    }try {
      a(c, h);
    } catch (d) {
      h(d);
    }
  }function u(a) {
    var b = a.owner,
        c = b.state_,
        b = b.data_,
        h = a[c];a = a.then;if ("function" === typeof h) {
      c = l;try {
        b = h(b);
      } catch (d) {
        k(a, d);
      }
    }v(a, b) || (c === l && p(a, b), c === q && k(a, b));
  }function v(a, b) {
    var c;try {
      if (a === b) throw new TypeError("A promises callback cannot return that same promise.");if (b && ("function" === typeof b || "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)))) {
        var h = b.then;if ("function" === typeof h) return h.call(b, function (d) {
          c || (c = !0, b !== d ? p(a, d) : w(a, d));
        }, function (b) {
          c || (c = !0, k(a, b));
        }), !0;
      }
    } catch (d) {
      return c || k(a, d), !0;
    }return !1;
  }function p(a, b) {
    a !== b && v(a, b) || w(a, b);
  }function w(a, b) {
    a.state_ === r && (a.state_ = x, a.data_ = b, n(C, a));
  }function k(a, b) {
    a.state_ === r && (a.state_ = x, a.data_ = b, n(D, a));
  }function y(a) {
    var b = a.then_;a.then_ = void 0;for (a = 0; a < b.length; a++) {
      u(b[a]);
    }
  }function C(a) {
    a.state_ = l;y(a);
  }function D(a) {
    a.state_ = q;y(a);
  }function e(a) {
    if ("function" !== typeof a) throw new TypeError("Promise constructor takes a function argument");if (!1 === this instanceof e) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_ = [];B(a, this);
  }var f = t.Promise,
      s = f && "resolve" in f && "reject" in f && "all" in f && "race" in f && function () {
    var a;new f(function (b) {
      a = b;
    });return "function" === typeof a;
  }();"undefined" !== typeof exports && exports ? (exports.Promise = s ? f : e, exports.Polyfill = e) : "function" == typeof define && define.amd ? define(function () {
    return s ? f : e;
  }) : s || (t.Promise = e);var r = "pending",
      x = "sealed",
      l = "fulfilled",
      q = "rejected",
      E = function E() {},
      A = "undefined" !== typeof setImmediate ? setImmediate : setTimeout,
      g = [],
      m;e.prototype = { constructor: e, state_: r, then_: null, data_: void 0, then: function then(a, b) {
      var c = { owner: this, then: new this.constructor(E), fulfilled: a, rejected: b };this.state_ === l || this.state_ === q ? n(u, c) : this.then_.push(c);return c.then;
    }, "catch": function _catch(a) {
      return this.then(null, a);
    } };e.all = function (a) {
    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.all().");return new this(function (b, c) {
      function h(a) {
        e++;return function (c) {
          d[a] = c;--e || b(d);
        };
      }for (var d = [], e = 0, f = 0, g; f < a.length; f++) {
        (g = a[f]) && "function" === typeof g.then ? g.then(h(f), c) : d[f] = g;
      }e || b(d);
    });
  };e.race = function (a) {
    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.race().");return new this(function (b, c) {
      for (var e = 0, d; e < a.length; e++) {
        (d = a[e]) && "function" === typeof d.then ? d.then(b, c) : b(d);
      }
    });
  };e.resolve = function (a) {
    return a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this ? a : new this(function (b) {
      b(a);
    });
  };e.reject = function (a) {
    return new this(function (b, c) {
      c(a);
    });
  };
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : undefined);
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