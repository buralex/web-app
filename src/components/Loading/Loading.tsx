import styles from '@/components/Loading/Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bouncingLoader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
