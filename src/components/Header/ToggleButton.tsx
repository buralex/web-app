import { Button } from '@/components/Button';

interface ToggleButtonProps {
  onClick: () => void;
  className?: string;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  return (
    <Button
      className={props.className}
      variant="secondary"
      aria-label="Toggle navigation"
      onClick={props.onClick}
    >
      <div className="d-flex flex-column align-items-center">
        <div className="icon-bar" />
        <div className="icon-bar" />
        <div className="icon-bar" />
      </div>
    </Button>
  );
};
