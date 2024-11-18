import React from "react";

export const ProjectsCard = ({data}) => {
  return (
    <div>
      <div className=" flex flex-col bg-white bg-opacity-10 rounded-lg">
        <img src={data.img} alt="imgproyect" className=" rounded-t-lg" />
        <div className=" py-8 px-8 flex flex-col gap-4  items-center">
          <h3 className=" text-3xl">{data.titulo}</h3>
          <p className=" text-custom-white">{data.Description}</p>
          <ul className=" flex gap-3 justify-center text-custom-white">
          {data.Tecnologies.map((tecnologie, index) => (
            <li 
              key={index} 
              className=" bg-custom-red  text-custom-white font-semibold px-2.5 py-0.5 rounded"
            >
              {tecnologie}
            </li>
          ))}
          </ul>
          <a className=" bg-custom-celeste font-bold text-custom-blue py-5 rounded-lg cursor-pointer w-1/2  mt-4 hover:bg-custom-white" target="blank" href={data.Link} >
            EnlaceProyecto
          </a>
        </div>
      </div>
    </div>
  );
};
