import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge.module.css";

const AndroidLarge = () => {
  const navigate = useNavigate();

  const onAndroidLargeClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge1} onClick={onAndroidLargeClick}>
      <img className={styles.myntra1Icon} alt="" src="/myntra-1@2x.png" />
      <div className={styles.indiasBiggestOnline}>
        INDIA’S BIGGEST ONLINE STORE
      </div>
      <div className={styles.androidLarge1Child} />
      <div className={styles.androidLarge1Item} />
    </div>
  );
};

export default AndroidLarge;
