import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge5.module.css";

const AndroidLarge5 = () => {
  const navigate = useNavigate();

  const onOIP2ImageClick = useCallback(() => {
    navigate("/android-large-17");
  }, [navigate]);

  return (
    <div className={styles.androidLarge11}>
      <img className={styles.androidLarge11Child} alt="" src="/vector-1.svg" />
      <div className={styles.androidLarge11Item} />
      <div className={styles.androidLarge11Inner} />
      <div className={styles.image4} />
      <div className={styles.ellipseDiv} />
      <div className={styles.androidLarge11Child1} />
      <div className={styles.androidLarge11Child2} />
      <div className={styles.androidLarge11Child3} />
      <div className={styles.androidLarge11Child4} />
      <div className={styles.androidLarge11Child5} />
      <div className={styles.androidLarge11Child6} />
      <div className={styles.androidLarge11Child7} />
      <img
        className={styles.oip2Icon}
        alt=""
        src="/oip-2@2x.png"
        onClick={onOIP2ImageClick}
      />
      <div className={styles.picturesCameraContainer}>
        <p className={styles.pictures}>
          <span className={styles.span}>{`  `}</span>
          <span>PICTURES</span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>CAMERA :</p>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <img className={styles.lineIcon} alt="" />
      <div className={styles.androidLarge11Child8} />
      <img className={styles.androidLarge11Child9} alt="" />
      <img className={styles.androidLarge11Child10} alt="" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-1@2x.png" />
    </div>
  );
};

export default AndroidLarge5;
