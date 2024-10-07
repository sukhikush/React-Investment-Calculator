import HtmlInput from "./HtmlInput";

export default function UserInput({ handleChange, inputData: userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <HtmlInput
          type="number"
          name="initialInvestment"
          required
          min="0"
          value={userInput.initialInvestment}
          onChange={(e) => {
            handleChange(e.target);
          }}
          onKeyDown={(event) => {
            if (event.key === ".") {
              event.preventDefault();
            }
          }}
        >
          Inital Investment
        </HtmlInput>
        <HtmlInput
          type="number"
          name="annualInvestment"
          required
          min="0"
          value={userInput.annualInvestment}
          onChange={(e) => {
            handleChange(e.target);
          }}
          onKeyDown={(event) => {
            if (event.key === ".") {
              event.preventDefault();
            }
          }}
        >
          Annual Investment
        </HtmlInput>
      </div>
      <div className="input-group">
        <HtmlInput
          type="number"
          name="expectedReturn"
          required
          min="0"
          value={userInput.expectedReturn}
          onChange={(e) => {
            handleChange(e.target);
          }}
          onKeyDown={(event) => {
            if (event.key === ".") {
              event.preventDefault();
            }
          }}
        >
          Expected Return
        </HtmlInput>
        <HtmlInput
          type="number"
          name="duration"
          required
          min="1"
          value={userInput.duration}
          onChange={(e) => {
            handleChange(e.target);
          }}
          onKeyDown={(event) => {
            if (event.key === ".") {
              event.preventDefault();
            }
          }}
        >
          duration
        </HtmlInput>
      </div>
    </section>
  );
}
