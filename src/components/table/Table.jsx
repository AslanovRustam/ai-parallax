import Button from "../button/Button";
import LinkText from "../LinkText/LinkText";
import TableRow from "./TableRow";
// Utils
import { TABLE_DATA, TABLE_HEAD } from "@/utils/constants";
// Local
import styles from "./table.module.css";

function Table() {
  return (
    <div className={styles.container} id="leaderboard">
      <div className={styles.wrapper}>
        <p className={styles.title}>LLM Leaderboard</p>
        <Button
          text="Submit your model"
          style={{
            fontSize: "1.04rem",
            fontWeight: "500",
            padding: "1.25rem 2.5rem",
            width: "fit-content",
          }}
        />
      </div>
      <p className={styles.subTitle}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              {TABLE_HEAD.map((item) => (
                <th key={item} className={styles.th}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {TABLE_DATA.map((item, index) => {
              return (
                <TableRow
                  item={item}
                  count={index + 1}
                  key={`${item.name}-${index}`}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <LinkText text="View more" />
    </div>
  );
}

export default Table;
