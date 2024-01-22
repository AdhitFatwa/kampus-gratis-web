import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const UploadDragbleField = (props) => {
  const { field, setField } = props;
  const [type, setType] = useState("");
  const [getName, setName] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setField(acceptedFiles[0]);
      setType(acceptedFiles[0]?.type);
      setName(acceptedFiles[0]?.name);
    },
    [field, setType],
  );

  const { getRootProps, getInputProps } = useDropzone({ ...props, onDrop });

  return (
    <div
      {...getRootProps(props)}
      className={`flex items-center min-h-[300px] bg-neutral-100 justify-center relative w-full p-2 border-2 rounded-lg border-neutral-300 ${props.className}`}
    >
      {type && getName && field && (
        <div
          onClick={() => {
            setType("");
            setName("");
            setField(null);
          }}
          className="absolute right-4 top-4 shadow-md rounded-full bg-white cursor-pointer"
        >
          <AiOutlineCloseCircle color="#e63a3a" size={30} />
        </div>
      )}
      <div className="flex flex-col items-center w-full px-4 py-6 bg-[#F5F5F5] dark:bg-transparent rounded-lg cursor-pointer">
        {field ? (
          <div className="flex flex-col items-center">
            <img src="/icons/ic-file.svg" alt="" />
            <span className="mt-2 text-xs md:text-sm lg:text-sm text-center text-black font-semibold">
              {getName}
            </span>
            <span className="flex justify-center items-center text-xs md:text-sm lg:text-sm mt-2 rounded-lg border overflow-hidden">
              <p className="bg-neutral-300 font-semibold p-3">{getName}</p>
              <p className="px-5">File sudah dipilih</p>
            </span>
          </div>
        ) : (
          <>
            <img src="/icons/ic-file.svg" alt="" />
            <span className="mt-2 text-xs md:text-sm lg:text-sm text-center text-black font-semibold">
              Klik <span className="text-blue-base">Pilih File</span> untuk mengunggah
            </span>
            <span className="flex justify-center items-center text-xs md:text-sm lg:text-sm mt-2 rounded-lg border overflow-hidden">
              <p className="bg-neutral-300 font-semibold p-3">Pilih File</p>
              <p className="px-5">Belum memilih tugas</p>
            </span>
            <input
              {...getInputProps(props)}
              {...props}
              onChange={(event) => {
                setField(event.target.files);
              }}
              className="hidden"
              type="file"
            />
          </>
        )}
      </div>
    </div>
  );
};
