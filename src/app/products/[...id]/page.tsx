"use client";

import { dataProducts } from "@/app/mockData/proData";
import { typeProduct } from "@/app/type/product";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const IdProduct = ({ params }: { params: { id: string } }) => {
  // sử dụng param và query theo url, với thứ mục có src và app thì useRouter là next/navigation không phải next/router
  // const searchParams = useSearchParams();
  // const search = searchParams.get("namePro");

  // sử dụng useEffect để chỉ chạy một lần khi vào page
  // const [item, setItem] = useState<typeProduct>();
  // useEffect(() => {
  // let itm = dataProducts.find(
  //   (product: typeProduct) => product.id == parseInt(params.id)
  // );
  // setItem(itm);
  // }, []);

  // sử dụng map render, load hết 4 lần mỗi trả về 1 mảng mới theo đk, return giá trị
  const [renderName, setRenderName] = useState<JSX.Element>(<></>);
  // useEffect(() => {
  //   dataProducts.map((product: typeProduct) => {
  //     if (product.id === parseInt(params.id)) {
  //       return setRenderName(<div>{product.namePro}</div>);
  //     }
  //     console.log(`count run ${product.id}`, product, dataProducts);
  //   });
  // }, []);

  // sử dụng forEach render,gọi mảng và trả về giá trị thỏa đk làm thay đổi trực tiếp giá trị mảng ban đầu, phải hứng giá trị mới
  // useEffect(() => {
  //   dataProducts.forEach((product: typeProduct) => {
  //     if (product.id === parseInt(params.id)) {
  //       const { namePro } = product;
  //       setRenderName(<div>{namePro}</div>);
  //       product.namePro = "dataProduc";
  //     }
  //   });
  // }, []);
  // console.log("dataProducts", dataProducts);

  // sửu dụng reduce, phải return trả về giá trị, có giá trị khởi tạo
  // useEffect(() => {
  //   dataProducts.reduce((_: any, item: typeProduct) => {
  //     if (item.id === parseInt(params.id)) {
  //       return setRenderName(<div>{item.namePro}</div>);
  //     }
  //   }, null);
  // }, []);

  // sử dụng forIn, lọc qua mảng và lấy index của từng giá trị trong mảng tính từ 0
  // useEffect(() => {
  //   for (const key in dataProducts) {
  //     // Object.values trả về 1 mảng giá trị value của từng key
  //     // console.log(
  //     //   "value-key",
  //     //   Object.values(dataProducts[key])[0],
  //     //   Object.keys(dataProducts[key])[0]
  //     // );
  //     if (Object.values(dataProducts[key])[0] === parseInt(params.id)) {
  //       return setRenderName(<div>{Object.values(dataProducts[key])[1]}</div>);
  //     }
  //   }
  // }, []);

  // sử dụng forOf, lọc qua mảng lấy từng giá trị
  // useEffect(() => {
  //   for (const key of dataProducts) {
  //     const { id, namePro } = key;
  //     console.log("val - key", id, namePro);
  //     if (id === parseInt(params.id)) {
  //       return setRenderName(<div>{namePro}</div>);
  //     }
  //   }
  // }, []);

  // sử dụng findIndex, lọc qua mảng xuất ra index trùng với đk nếu không có trả về -1
  useEffect(() => {
    let numInd = dataProducts.findIndex(
      (product: typeProduct) => product.id === parseInt(params.id)
    );
    const { namePro } = dataProducts[numInd];
    setRenderName(<div>{namePro}</div>);
  }, []);

  //   map,forEach,reduce,forIn,forOf,findIndex truyền trên params
  // Khi nào sử dụng những phương thức trên

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="border-2 border-dotted border-while p-2 w-80 text-center ">
        Id Product {params.id}
        <>{renderName}</>
      </div>
    </div>
  );
};

export default IdProduct;
