import { useEffect, useState } from "react";
import NameData from "./NameData";

const CollageName = () => {
  const [collage, setCollage] = useState([]);

  useEffect(() => {
    fetch("https://edubin-server.vercel.app/collage")
      .then((res) => res.json())
      .then((data) => setCollage(data));
  }, []);
  return (
    <div className="pt-20 max-w-7xl px-5 mx-auto mb-20">
      <h1 className="text-center font-bold text-3xl mb-5 mt10">
        Admission Now
      </h1>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {collage.map((datas) => (
          <NameData key={datas._id} datas={datas} />
        ))}
      </div>
    </div>
  );
};

export default CollageName;
