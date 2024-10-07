export default function HtmlInput({ children, type, name, ...remaningProps }) {
  return (
    <p>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} id={name} {...remaningProps} />
    </p>
  );
}
