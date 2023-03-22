import { getDocs, orderBy, collection } from "firebase/firestore";
import { getDb } from "./db.js";

const collection_name = "packages";

export const findAllPacket = async () => {
  const doc_refs = await getDocs(
    collection(getDb(), collection_name),
    orderBy("index")
  );
  // const doc_refs = await query(
  //   collection(getDb(), collection_name),
  //   orderBy("index")
  // );

  const res = [];

  doc_refs.forEach((item) => {
    res.push({
      id: item.index,
      ...item.data(),
    });
  });

  return res;
};
