import React from "react";

const DropdownItem = ({
  cartItem: { phoneName, price, quantity, imageUrl },
}) => {
  return (
    <div className="flex gap-3 rounded-md overflow-hidden shadow bg-white shrink-0">
      <img src={imageUrl} alt={phoneName} className=" w-24 h-20" />

      <div className="p-2 flex flex-col justify-between text-base">
        <p className="text-blue-400">{phoneName}</p>
        <div className="flex gap-8">
          <p className="font-medium">${price}</p>
          <p>x{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;