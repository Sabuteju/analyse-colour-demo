import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge9.module.css";

const AndroidLarge9 = () => {
  const navigate = useNavigate();

  const onSUGGESTOUTFITSTextClick = useCallback(() => {
    navigate("/android-large-19");
  }, [navigate]);

  const onGOTOMYNTRAClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge16}>
      <div className={styles.androidLarge15}>
        <div className={styles.androidLarge15}>
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
          <div className={styles.rectangleDiv} />
          <div className={styles.androidLarge13Child7} />
          <div
            className={styles.suggestOutfits}
            onClick={onSUGGESTOUTFITSTextClick}
          >
            SUGGEST OUTFITS
          </div>
          <b className={styles.saved}>SAVED</b>
          <div className={styles.startYourShopping}>
            START YOUR SHOPPING WITH YOUR COLOR PALETTE
          </div>
          <div className={styles.goToMyntra} onClick={onGOTOMYNTRAClick}>
            GO TO MYNTRA
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge9;
