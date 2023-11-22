function Buttons({ filterProject }) {
  return (
    <div className="box-btn">
      <button className="btnOne" onClick={() => filterProject("HTML")}>
        HTML
      </button>
      <button className="btnTwo" onClick={() => filterProject("SaSS")}>
        SaSS
      </button>
      <button className="btnThree" onClick={() => filterProject("JavaScript")}>
        JavaScript
      </button>
      <button className="btnFour" onClick={() => filterProject("React")}>
        React
      </button>
    </div>
  );
}
export default Buttons;
