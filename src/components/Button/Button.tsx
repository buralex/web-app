import styles from '@/components/Button/Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'info' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  hint?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled,
  children,
  className,
  hint,
}: ButtonProps) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];

  return (
    <button
      title={hint}
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
