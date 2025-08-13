import React from "react";

const doctortopbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Welcome Back Dr.Smith</h2>
      <div className="flex items-center gap-4">
        
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Ddoctor&psig=AOvVaw0H9ziuql5kq9Fcrdo3bCax&ust=1755153149430000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODD3pGVh48DFQAAAAAdAAAAABAE"
          alt="Doctor"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default doctortopbar;
