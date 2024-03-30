import React from "react";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import Table from "./components/common/table";
import Filter from "./components/common/filter";
import CardForItem from "./components/common/card-for-item";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <main>{Children}</main> */}
      <Table />
      <Filter />
      <CardForItem />
      <Footer />
    </div>
  );
}
