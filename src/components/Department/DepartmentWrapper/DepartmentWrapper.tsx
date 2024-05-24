import { DepartmentCard } from "../DepartmentCard";
import styles from './DepartmentWrapper.module.sass';

interface DepartmentWrapperProps {
  departments: Department[]
}

export const DepartmentWrapper = ({departments}: DepartmentWrapperProps) => {
  return(
    <div className={styles.DepartmentWrapper}>
      {departments.map((department) => (
        <DepartmentCard key={department.id} department={department} />
      ))}
    </div>
  );
}