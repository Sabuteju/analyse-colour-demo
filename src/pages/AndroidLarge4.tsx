import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge4.module.css";

const AndroidLarge4 = () => {
  const navigate = useNavigate();

  const onSKINTONECODEClick = useCallback(() => {
    navigate("/android-large-13");
  }, [navigate]);

  return (
    <div className={styles.androidLarge9}>
      <div className={styles.androidLarge9Child} />
      <img
        className={styles.androidLarge9Item}
        alt=""
        src="/ellipse-11@2x.png"
      />
      <div className={styles.image4} />
      <div className={styles.androidLarge9Inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.androidLarge9Child1} />
      <div className={styles.androidLarge9Child2} />
      <div className={styles.androidLarge9Child3} />
      <div className={styles.androidLarge9Child4} />
      <div className={styles.androidLarge9Child5} />
      <div className={styles.androidLarge9Child6} />
      <img
        className={styles.bb5c9b33825d457eAf2700ec16Icon}
        alt=""
        src="/bb5c9b33825d457eaf2700ec167a6935-1@2x.png"
      />
      <div className={styles.lineDiv} />
      <div className={styles.androidLarge9Child7} />
      <div className={styles.androidLarge9Child8} />
      <img className={styles.lineIcon} alt="" />
      <img className={styles.androidLarge9Child9} alt="" />
      <div className={styles.androidLarge9Child10} />
      <div className={styles.androidLarge9Child11} />
      <div
        className={styles.skinToneCodeContainer}
        onClick={onSKINTONECODEClick}
      >
        <span className={styles.skinToneCodeContainer1}>
          <p className={styles.skinToneCode}>{`SKIN TONE CODE    `}</p>
          <p className={styles.blankLine}>
            <span className={styles.span}>{`          `}</span>
            <span className={styles.edd9d01}>EDD9D0</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>{`HAIR COLOR CODE `}</p>
          <p className={styles.blankLine}>
            <span className={styles.span}>{`          `}</span>
            <span className={styles.edd9d01}>827157</span>
          </p>
        </span>
      </div>
      <div className={styles.buildingBlockssegmentedButt}>
        <div className={styles.container}>
          <div className={styles.stateLayer}>
            <img
              className={styles.selectedIcon}
              alt=""
              src="/selected-icon.svg"
            />
            <div className={styles.labelText}>FIND YOUR SEASON</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge4;
