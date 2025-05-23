import Arrow from "../../../public/arrow.svg";
import Minus from "../../../public/minus.svg";
// Local
import styles from "./table.module.css";

function TableRow({ item, count }) {
  return (
    <tr className={styles.tr}>
      <td className={`${styles.td} ${styles.icon}`}>
        {item.icon === "" ? (
          <Minus className={styles.minus} />
        ) : item.icon === "up" ? (
          <Arrow className={styles.arrowUp} />
        ) : (
          <Arrow className={styles.arrowDown} />
        )}
      </td>
      <td className={styles.td}>{count}</td>
      <td className={styles.td}>{item.model}</td>
      <td className={styles.td}>{item.average}</td>
      <td className={styles.td}>{item.arc}</td>
      <td className={styles.td}>{item.hellaSwag}</td>
      <td className={styles.td}>{item.mmlu}</td>
      <td className={styles.td}>{item.truthfulQA}</td>
      <td className={styles.td}>{item.winogrande}</td>
      <td className={styles.td}>{item.gSM8K}</td>
      <td className={styles.td}>{item.earnings}</td>
    </tr>
  );
}

export default TableRow;
