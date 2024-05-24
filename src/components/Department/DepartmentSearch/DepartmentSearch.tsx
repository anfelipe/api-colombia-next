'use client'

import { useEffect, useState } from "react";
import { DepartmentWrapper } from "../DepartmentWrapper"
import { SearchBar } from "../../shared/SearchBar";

interface DepartmentSearchProps {
  departments: Department[]
}

export const DepartmentSearch = ({departments} : DepartmentSearchProps) => {

  const [input, setInput] = useState('');
  const [listDefault, setListDefault] = useState<Department[]>([]);
  const [list, setList] = useState<Department[]>([]);

  const fetchData = () => {
    setList(departments);
    setListDefault(departments);
  }  

  const updateInput = (input: string) => {
    const filtered = listDefault.filter(country => {
     return country.name.toLowerCase().includes(input.toLowerCase())
    });

    setInput(input);
    setList(filtered);
  }

  useEffect(() => {
    fetchData()
  }, []);
  
  return(
    <>
      <SearchBar input={input} onChange={updateInput} />

      <DepartmentWrapper departments={list} />
    </>
  )
}