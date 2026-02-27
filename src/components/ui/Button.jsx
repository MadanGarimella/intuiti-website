const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-black hover:scale-105 hover:shadow-lg",
    outline:
      "border border-white text-white hover:bg-white hover:text-black",
    dark:
      "bg-black text-white hover:bg-primary hover:text-black",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;