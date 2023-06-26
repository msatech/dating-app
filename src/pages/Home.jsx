import React, { useState } from "react";
import { DatingCards } from "../components";

export const Home = () => {
  const [peoples, setPeoples] = useState([
    {
        name: 'Deependra',
        url: 'https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200',
        distance: '10',
        distanceType: 'KM',

    },
    {
        name: 'Aman',
        url: 'https://q5g9j9b9.stackpathcdn.com/wp-content/uploads/2022/04/NFT-Designs-By-Kimp.jpg',
        distance: '5',
        distanceType: 'KM',
        
    }
  ]);

  return (
    <div className="p-4 max-w-full max-h-full overflow-hidden flex flex-1">
      <DatingCards peoples={peoples} />
    </div>
  );
};
