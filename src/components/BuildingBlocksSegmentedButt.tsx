import PropTypes from "prop-types";
import styles from "./BuildingBlocksSegmentedButt.module.css";

const BuildingBlocksSegmentedButt = ({
  className = "",
  labelText = "Label",
}) => {
  return (
    <div className={[styles.buildingBlockssegmentedButt, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img
            className={styles.selectedIcon}
            alt=""
            src="/selected-icon1.svg"
          />
          <div className={styles.labelText}>{labelText}</div>
        </div>
      </div>
    </div>
  );
};

BuildingBlocksSegmentedButt.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default BuildingBlocksSegmentedButt;
