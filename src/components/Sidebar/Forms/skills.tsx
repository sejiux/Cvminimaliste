import React from 'react';

const Skills = () => {
  return (
    <div className="px-14 py-10 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2 pb-5">
        <h3>Compétences</h3>
        <hr />
      </div>
      <form>
        <div className="mb-6">
          <label htmlFor="about" className="block mb-2 text-sm font-light">
            A propos
          </label>
          <input
            type="text"
            id="about"
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Skills;
