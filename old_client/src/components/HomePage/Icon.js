import React from "react";
import "./Icon.css";
import AOS from "aos";
import "aos/dist/aos.css";

class MyImage extends React.Component {
  constructor(props) {
    super(props);
    this.myphoto = React.createRef();
    this.inner = React.createRef();
  }
  componentDidMount = () => {
    AOS.init({
      duration: 1000,
    });
    this.myphoto.current.onmouseenter = this.onMouseEnterHandler;
    this.myphoto.current.onmouseleave = this.onMouseLeaveHandler;
    this.myphoto.current.onmousemove = this.onMouseMoveHandler;
    this.mouse.setOrigin(this.myphoto.current);
  };

  onMouseEnterHandler = (event) => {
    this.update(event);
  };
  onMouseLeaveHandler = () => {
    this.inner.current.style = "";
  };
  onMouseMoveHandler = (event) => {
    if (this.isTimeToUpdate()) {
      this.update(event);
    }
  };
  update = (event) => {
    this.mouse.updatePosition(event);
    this.updateTransformStyle(
      (this.mouse.y / this.inner.current.offsetHeight / 2).toFixed(2),
      (this.mouse.x / this.inner.current.offsetWidth / 2).toFixed(2)
    );
  };
  updateTransformStyle = (x, y) => {
    const style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    this.inner.current.style.transform = style;
    this.inner.current.style.webkitTransform = style;
    this.inner.current.style.mozTransform = style;
    this.inner.current.style.msTransform = style;
    this.inner.current.style.oTransform = style;
  };
  isTimeToUpdate = () => {
    return this.counter++ % this.updateRate === 0;
  };
  container = "";
  inner = "";
  counter = 0;
  updateRate = 10;
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      let e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  render() {
    return (
      <div className="myphoto-container">
        <div className="myphoto" ref={this.myphoto}>
          <div className="innerContainer" ref={this.inner}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3048/3048358.svg"
              alt="mypic"
              id="myphotojpg"
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyImage;
