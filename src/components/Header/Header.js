const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li>
          <img src='/images/finiamlogo.png' alt='finiamlogo' className='finiamlogo' />
        </li>
        <a href='/' className='header-tab'>
          <li>FiniamMarketCap</li>
        </a>
        <a href='/' className='header-tab'>
          <li>Home</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
