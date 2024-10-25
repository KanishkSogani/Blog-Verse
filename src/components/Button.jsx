function Button({
  children,
  className = "",
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "white",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${type} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
