import CategoryContainer from "../components/category-container";
import styles from "./prompt-ideas-container.module.css";

const PromptIdeasContainer = () => {
  return (
    <div className={styles.categoriessection}>
      <div className={styles.categoriescolumn}>
        <CategoryContainer
          promptIdeasCount="01"
          promptIdeasText="Unlimited prompt ideas"
          videoCountText=""
        />
        <img className={styles.separatorIcon} alt="" src="../separator.svg" />
        <CategoryContainer
          promptIdeasCount="02"
          promptIdeasText="Unlock Limitless Potential"
          videoCountText=""
        />
        <img className={styles.separatorIcon} alt="" src="../separator.svg" />
        <CategoryContainer
          promptIdeasCount="03"
          promptIdeasText="Generate unique ideas "
          videoCountText=""
        />
        <img className={styles.separatorIcon} alt="" src="../separator.svg" />
        <CategoryContainer
          promptIdeasCount="04"
          promptIdeasText="Unleash Creativity Today"
          videoCountText=""
        />
        <img className={styles.separatorIcon} alt="" src="../separator.svg" />
        <div className={styles.category}>
          <div className={styles.div}>05</div>
          <div className={styles.action}>
            <div className={styles.titles}>
              <div className={styles.title}>Burn Calories</div>
              <div className={styles.courses}>48 videos</div>
            </div>
            <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
          </div>
        </div>
        <img className={styles.separatorIcon} alt="" src="../separator.svg" />
      </div>
    </div>
  );
};

export default PromptIdeasContainer;
