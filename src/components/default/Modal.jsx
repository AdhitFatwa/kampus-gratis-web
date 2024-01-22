/* eslint-disable react/jsx-no-useless-fragment */
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./Button";

export const Modal = ({
  title,
  children,
  button,
  lookup,
  hasButton,
  hasImage,
  withClose,
  widthModal,
  onClose,
}) => {
  return (
    <Fragment>
      {lookup && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 transition-opacity bg-opacity-25 bg-neutral-500 " />
          <div className="fixed inset-0 z-10">
            <div className="flex items-center justify-center w-1/2 min-h-full p-4 text-center sm:items-center sm:p-0 mx-auto">
              <div
                className={`relative w-auto overflow-hidden text-left transition-all transform rounded-lg shadow-xl sm:my-8 ${widthModal} `}
              >
                <div className="w-full px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div
                    className={`flex items-center justify-between w-full ${
                      !hasImage && "!justify-end"
                    }`}
                  >
                    {hasImage && (
                      <img
                        src="/logo-light.svg"
                        width={82}
                        height={35}
                        alt={"Logo kg"}
                        loading="lazy"
                      />
                    )}
                    {withClose && (
                      <Button type="button" onClick={onClose} className="p-2">
                        <AiOutlineClose
                          role="button"
                          className="text-2xl font-bold cursor-pointer text-neutral-400"
                        />
                      </Button>
                    )}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    {title && (
                      <h3
                        className="text-base font-semibold leading-6 text-neutral-900"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                    )}
                    <div className="flex items-center w-full">{children}</div>
                  </div>
                </div>
                {hasButton && (
                  <div className="px-4 py-3 bg-white sm:flex sm:flex-row-reverse sm:px-6">
                    {button}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
