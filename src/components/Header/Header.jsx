import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={require('./../../logo.png')} />
      <div className={s.avatar}><img src={require('./avatar.jpg')} alt="" /></div>
      <img className={s.cart} src={require('./../../cart.png')} />
    </header>
  );
};

export default Header;
