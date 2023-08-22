import React, { FC } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

interface ModalProps {
  lastName?: string;
  firstName?: string;
  description?: string;
  children?: React.ReactNode;
  handleClickCloseModal?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { lastName, firstName, description, children, handleClickCloseModal } = props;

  return (
    <div className="bg-[rgba(0,0,0,0.6)] mx-auto fixed z-50 md:inset-0 h-modal md:h-full flex flex-col justify-center items-center">
      <div className="relative p-4 w-auto h-full md:h-auto space-y-2">
        <div className="absolute right-0 top-2">
          <button type="button" onClick={handleClickCloseModal}>
            <IoIosCloseCircle className="text-2xl text-[rgba(0,0,0,0.5)]" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="w-[370px] h-[550px] rounded-md bg-white">{children}</div>
        <div className="w-auto py-4 text-left space-y-4 bg-white rounded-md p-8">
          <div className="flex justify-between">
            <h2 className="text-lg font-Poppins font-bold text-[#24445c]">
              CV {lastName} {firstName}
            </h2>
            <h2 className="text-md font-semibold text-gray-500">14,95€</h2>
          </div>
          <hr />
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Paypal
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >
            Carte bancaire
          </button>
          {/* <h3 className="text-xs pb-2">{description}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
