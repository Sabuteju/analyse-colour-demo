import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge1.module.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onImage2IconClick = useCallback(() => {
    navigate("/android-large-3");
  }, [navigate]);

  return (
    <div className={styles.androidLarge2}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img
        className={styles.image2Icon}
        alt=""
        src="/image-2@2x.png"
        onClick={onImage2IconClick}
      />
    </div>
  );
};

export default AndroidLarge1;
