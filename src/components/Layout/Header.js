import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}/>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://yorkrestaurantweek.co.uk/wp-content/uploads/Tomahawk1.jpg" alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
