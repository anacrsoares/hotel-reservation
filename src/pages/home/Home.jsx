import React, { useState } from "react";
import Header from "../../components/header/Header";
import HotelList from "../../components/hotel-list/HotelList";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header setSearchValue={setSearchValue} />
      <HotelList searchValue={searchValue} />
    </div>
  );
}
