import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.gooey}>
      <span className={s.dot}></span>
      <div className={s.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
