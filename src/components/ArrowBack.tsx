import PropTypes from "prop-types";
import styles from "./ArrowBack.module.css";

const ArrowBack = ({ className = "" }) => {
  return (
    <div className={[styles.arrowBack, className].join(" ")}>
      <img className={styles.icon} alt="" src="/icon.svg" />
    </div>
  );
};

ArrowBack.propTypes = {
  className: PropTypes.string,
};

export default ArrowBack;
