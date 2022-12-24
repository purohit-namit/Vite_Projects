import { useEffect, useState } from "react";
import InputBox from "./input";

const PracDebounce = () => {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   console.log("Mounting");
  // }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      console.log("Updating : ", search);
    }, 5000);

    return () => clearTimeout(getData);
  }, [search]);

  return (
    <>
      <InputBox value={search} onChange={(name, value) => setSearch(value)} />
      <p>Search Key: {search}</p>
    </>
  );
};

export default PracDebounce;
