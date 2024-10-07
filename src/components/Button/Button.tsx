import styles from '@/components/Button/Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'info' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${
        className || ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
