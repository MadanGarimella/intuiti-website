const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;