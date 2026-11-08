const Button = ({ text, color = "black" }) => {
  const onClick = () => {
    console.log(text);
  };
  return (
    <button onClick={onClick} style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;
