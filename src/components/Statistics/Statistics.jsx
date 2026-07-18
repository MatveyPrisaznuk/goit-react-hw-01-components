import style from "./Statistics.module.css"

const colors = ["#ADD8E6", "#e09be8", "tomato", "turquoise", "green"];

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title ? title : "Upload stats"}</h2>

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={style.item} key={id} style={{ backgroundColor: colors[index] }}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
