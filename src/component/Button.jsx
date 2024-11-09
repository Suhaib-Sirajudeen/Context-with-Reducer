import "./Button.css";

export const Button = ({ handleCount, children }) => {
  return (
    <div className="btn-container">
      <button onClick={handleCount}>{children}</button>
    </div>
  );
};
