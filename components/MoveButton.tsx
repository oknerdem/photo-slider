import styles from '@/styles/Home.module.css';

interface MoveButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MoveButton = ({ onClick, children }: MoveButtonProps) => {
  return (
    <button className={styles.sliderButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default MoveButton;
