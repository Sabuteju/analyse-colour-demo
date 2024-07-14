import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge3.module.css";

const AndroidLarge3 = () => {
  const navigate = useNavigate();

  const onPlainTooltipContainerClick = useCallback(() => {
    navigate("/android-large-11");
  }, [navigate]);

  return (
    <div className={styles.androidLarge4}>
      <img className={styles.image5Icon} alt="" src="/image-51@2x.png" />
      <div className={styles.image4} />
      <div className={styles.findYourBestContainer}>
        <p className={styles.findYourBestColour}>
          <span>
            <span>FIND YOUR BEST COLOUR !</span>
          </span>
        </p>
        <p className={styles.with}>
          <span>
            <span className={styles.span}>{`                         `}</span>
          </span>
          <span className={styles.with1}>WITH</span>
        </p>
        <p className={styles.myntra}> MYNTRA</p>
      </div>
      <div className={styles.androidLarge4Child} />
      <div className={styles.androidLarge4Item} />
      <div className={styles.androidLarge4Inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.androidLarge4Child1} />
      <div className={styles.androidLarge4Child2} />
      <div className={styles.androidLarge4Child3} />
      <div className={styles.androidLarge4Child4} />
      <img className={styles.oip1Icon} alt="" src="/oip-11@2x.png" />
      <div
        className={styles.plainTooltip}
        onClick={onPlainTooltipContainerClick}
      >
        <div className={styles.supportingText}>INSERT IMAGE</div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.image6Wrapper}>
        <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
      </div>
    </div>
  );
};

export default AndroidLarge3;
