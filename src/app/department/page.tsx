import { getAllWithImages } from "app/services/apicolombia/department";
import { DepartmentSearch } from "app/components/Department";
import styles from 'app/sass/global-title.module.sass'

export default async function Department() {
  let departments: Department[] = await getAllWithImages();

  if (departments.length > 0) {
    departments = departments.sort((a, b) => {
      let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
      return (fa < fb) ? -1 : (fa > fb) ? 1 : 0;
    });
  }

  return (
    <>
      <h1 className={styles.subtitle}>Departments</h1>

      <DepartmentSearch departments={departments} />
    </>
  );
}