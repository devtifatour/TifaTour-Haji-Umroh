import { useEffect, useState } from "react";
import { findAllPacket } from "../services/packages";
import PackageListItem from "./PackageListItem";

const PackageList = () => {
  const [loading, setLoading] = useState(false);
  const [packets, setPackets] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const res = await findAllPacket();

    setPackets([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <header>
        <h2>Paket Umroh</h2>
      </header>

      {loading && <p>loading...</p>}

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {packets.length > 0 &&
          packets.map((item) => (
            <PackageListItem key={item.index} item={item} />
          ))}
      </ul>
    </section>
  );
};

export default PackageList;
