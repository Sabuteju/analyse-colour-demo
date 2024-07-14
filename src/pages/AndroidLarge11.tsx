import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge11.module.css";

const AndroidLarge11 = () => {
  const navigate = useNavigate();

  const onANALYSEAGAINTextClick = useCallback(() => {
    navigate("/android-large-3");
  }, [navigate]);

  const onGOTOMYNTRAClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge18}>
      <div className={styles.androidLarge13}>
        <div className={styles.androidLarge13Child} />
        <div className={styles.androidLarge13Item} />
        <div className={styles.image4} />
        <div className={styles.androidLarge13Inner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.androidLarge13Child1} />
        <div className={styles.androidLarge13Child2} />
        <div className={styles.androidLarge13Child3} />
        <div className={styles.androidLarge13Child4} />
        <div className={styles.androidLarge13Child5} />
        <div className={styles.androidLarge13Child6} />
        <div className={styles.wouldYouLike}>
          WOULD YOU LIKE TO SAVE YOUR COLOUR PALETTE
        </div>
        <div className={styles.button}>
          <div className={styles.stateLayer}>
            <div className={styles.labelText}>YESS</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.stateLayer}>
            <div className={styles.labelText}>NO..</div>
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.analyseAgain} onClick={onANALYSEAGAINTextClick}>
          ANALYSE AGAIN
        </div>
        <div className={styles.goToMyntra} onClick={onGOTOMYNTRAClick}>
          GO TO MYNTRA
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge11;
