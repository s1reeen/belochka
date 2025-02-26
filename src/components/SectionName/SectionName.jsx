import css from "./SectionName.module.css";

const SectionName = ({ section, title }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.span}>/{section}</span>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
};
export default SectionName;
