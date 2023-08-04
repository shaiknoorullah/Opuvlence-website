/** @format */

import React, { useEffect, useState } from "react";
import CasesLibrary from "../components/CasesLibray";
import { useRouter } from "next/router";

function CasesLibraryPage() {
  const router = useRouter();
  const { active } = router.query;
  

  const [name, setName] = useState(active);
  const [data, setData] = useState(null);
  // getting params value




  useEffect(() => {
  
    // Function to fetch data from the JSON file or API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data?name=${name}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name,active]);

 
  

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" text-black cursor-none">
      <CasesLibrary projects={data.projects} name={name} setName={setName} />
    </div>
  );
}

export default CasesLibraryPage;
