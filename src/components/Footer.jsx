const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 py-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Intuiti Corporates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;