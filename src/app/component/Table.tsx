"use client";

import { useRouter } from "next/navigation";
import { dataProducts } from "../mockData/proData";
import { typeProduct } from "../type/product";
import Link from "next/link";
import { useEffect, useState } from "react";

const Table = () => {
  const route = useRouter();
  const [idDel, setIdDel] = useState<number>(0);
  const [arrDtDel, setArrDtDel] = useState<typeProduct[]>([...dataProducts]);

  const handleDele = (idDele: number, dataProducts: typeProduct[]) => {
    dataProducts = [
      ...arrDtDel.filter((item: typeProduct) => item.id !== idDele),
    ];
    if (dataProducts.length >= arrDtDel.length) {
      dataProducts = [];
    }
    setArrDtDel(dataProducts);
  };

  const ShowRenderData = () => {
    return arrDtDel.map((itemPro: typeProduct) => {
      return (
        <div
          key={itemPro.id}
          className="flex justify-around items-center my-4 phone:p-0 "
        >
          <td className="text-center w-40">
            <Link
              href={`/products/${itemPro.id}`}
              className="cursor-pointer text-start ml-4 font-bold text-lg text-black"
            >
              {itemPro.id}
            </Link>
          </td>
          <td className="text-center w-40 font-bold text-lg text-black">
            {itemPro.namePro}
          </td>
          <td className="text-center flex justify-around items-center phone:flex-wrap phone:w-full phone:justify-start phone:mr-1">
            <button
              className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg mr-5 phone:w-32 phone:text-start"
              onClick={() => {
                route.push(
                  `/products/${itemPro.id}/?namePro=${itemPro.namePro}`
                );
              }}
            >
              View
            </button>
            <button
              className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg mr-5 phone:w-32 phone:text-start"
              onClick={() => {
                route.push(`/demo1`);
              }}
            >
              Add
            </button>
            <button
              className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg mr-5 phone:w-32 phone:text-start"
              onClick={() => handleDele(itemPro.id, arrDtDel)}
            >
              Deleted
            </button>
          </td>
        </div>
      );
    });
  };

  useEffect(() => {
    setIdDel(0);
    setArrDtDel([...dataProducts]);
  }, []);

  return (
    <div className="my-[auto] min-w-full flex justify-center items-center py-2">
      <table className="text-while space-y-6 text-sm w-full mx-28 mt-[10vh] border-2 border-red-700 border-t-0 overflow-hidden table-auto phone:table-fixed phone:mx-0">
        <thead className="bg-blue-500 text-white ">
          <tr className="flex justify-around items-center text-center py-2 ">
            <th className="w-40">ID</th>
            <th className="w-40">Name Product</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="p-4 phone:p-2 phone:inline-table">
          <tr className="my-5 mx-5 flex-wrap">
            {arrDtDel.length !== 0 ? (
              <div>{ShowRenderData()}</div>
            ) : (
              <p className="text-red-800 font-serif font-extrabold text-center">
                No data
              </p>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
