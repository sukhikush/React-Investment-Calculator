import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ children, input }) {
  const calculatedData = calculateInvestmentResults(input);
  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Intrest (Year)</th>
        <th>Total Intrest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {calculatedData.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalIntrest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
