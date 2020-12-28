import preloader from '../../../../assets/images/loader.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div>
      <img className={styles.preloader} alt="preloadersvg" src={preloader} />
    </div>
  );
};

export default Preloader;
