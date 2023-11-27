"use client";

import Table from "../component/Table";
import { dataProducts } from "../mockData/proData";
import { typeProduct } from "../type/product";

const IdProduct = () => {
  // const handleItem = () => {
  //   return dataProducts.map((idItem: typeProduct) => {
  //     return <div key={idItem.id}>{idItem.namePro}</div>;
  //   });
  // };

  return (
    <div className="flex justify-center items-center mt-20">
      {/* <div className="border-2 border-dotted border-while p-2 bg-black w-80 text-center ">
        <div>{handleItem()}</div>
      </div> */}
      <Table />
    </div>
  );
};

export default IdProduct;
