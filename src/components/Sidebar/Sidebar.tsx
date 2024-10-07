import { Button } from '@/components/Button';
import { cssClasses } from '@/utils';
import { NavLinks } from '@/components/Sidebar/NavLinks';
import styles from '@/components/Sidebar/Sidebar.module.css';

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = (props: SidebarProps) => {
  const handleCloseSidebar = () => {
    if (props.showSidebar) {
      props.toggleSidebar();
    }
  };

  return (
    <div
      className={cssClasses([styles.sidebar, props.showSidebar && styles.show])}
    >
      <Button
        className={styles.close}
        variant="info"
        onClick={props.toggleSidebar}
      >
        <span>&times;</span>
      </Button>

      <div className={styles.menuWrap}>
        <ul className={styles.menu}>
          <NavLinks onMenuItemClick={handleCloseSidebar} />
        </ul>
      </div>

      <div>
        <Button variant="info">Log out button</Button>
      </div>
    </div>
  );
};
