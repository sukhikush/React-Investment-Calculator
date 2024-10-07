import logo from "../assets/investment-calculator-logo.png";
export default function Header({}) {
  return (
    <header id="header">
      <img src={logo} alt="investment logo" />
      <h2>Investment Calculator</h2>
    </header>
  );
}
