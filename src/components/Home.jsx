export const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-center  bg-custom-blue gap-5 px-8">
      <h1 className=" text-custom-celeste font-bold text-3xl">
        Hi, I'm Alessandro
      </h1>
      <h2 className=" text-custom-red font-bold text-2xl">
        Web Developer & Designer
      </h2>
      <p className=" font-bold text-custom-white">
        Welcome to my digital universe, where creativity and technology merge to
        create unique experiences.
      </p>
      <li className="grid grid-cols-3 gap-8 text-custom-white mt-8 font-semibold">
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          Html
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          CSS
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          JS
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          React
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          Tailwind
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          npm
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          Python
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          Flask
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          SQL
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          MongoDB
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          FireBase
        </ul>
        <ul className=" animate-bg-fade bg-blue-500 p-2 rounded-lg ">
          Figma
        </ul>
        <ul className=" col-start-2 animate-bg-fade bg-blue-500 p-2 rounded-lg">
          Blender
        </ul>
      </li>
      <div className=" w-full flex justify-between gap-5 mt-5 ">
        <button className=" font-bold text-custom-white bg-custom-red px-8 py-4 rounded-lg">Projects</button>
        <button className=" font-bold text-custom-white bg-custom-red px-8 py-4 rounded-lg">Contact Me</button>
      </div>
    </div>
  );
};
