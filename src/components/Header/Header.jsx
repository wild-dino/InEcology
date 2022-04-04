import s from './Header.module.css';
import logo from './../../assets/Icons/InEcology.svg'
import cart from './../../assets/Icons/cart.svg'

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} />
      <div className={s.avatar}><img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" /></div>
      <img className={s.cart} src={cart} />
    </header>
  );
};

export default Header;
