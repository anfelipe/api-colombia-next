import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.sass";

interface SearchBarProps {
  input: string,
  onChange: (value: string) => void
}

export const SearchBar = ({input, onChange}: SearchBarProps) =>{
  return(
    <>
      <div className={styles.Search}>

        <div>
          <CiSearch />

          <input 
            key="random1"
            value={input}
            placeholder="Search"
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        
      </div>      
    </>    
  );
}