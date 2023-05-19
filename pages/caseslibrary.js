/** @format */

import React, { useEffect, useState } from "react"
import CasesLibrary from "../components/CasesLibray"

function CasesLibraryPage() {
	const [name, setName] = useState("Residential")
	const [data, setData] = useState(null);
	console.log(name)
	console.log(data?.projects)

  useEffect(() => {
    // Function to fetch data from the JSON file or API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data?name=${name}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  if (!data) {
    return <div>Loading...</div>;
  }
	

	return (
		<div className=" text-black">
			<CasesLibrary projects={data.projects}  setName={setName} />
		</div>
	)
}

export default CasesLibraryPage
