const Header = ({ headerLabel, isBig }) => {
  console.log(isBig);

  return (
    <header>
      <p>{headerLabel}</p>
    </header>
  );
};

export default Header;
