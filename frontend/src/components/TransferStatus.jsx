import { Link } from "react-router-dom";

export function TransferStatus({ success }) {
  return (
    <div className={`${success ? 'bg-green-100' : 'bg-red-100'}  w-screen h-screen flex justify-center items-center`}>
      <div className={`flex flex-col justify-between items-center ${success ? 'bg-green-400' : 'bg-red-400'} rounded-lg w-[30%] h-[30%] font-medium p-4`}>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center text-2xl p-3">
            <div className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              {!success ? "Transfer Failed" : "Transfer successful"}
            </div>
          </div>
        </div>
        <Link
          to="/Dashboard"
          className="w-full flex justify-center items-center pointer underline pl-1 cursor-pointer border-1 bg-slate-500 text-slate-300 rounded-lg py-2"
        >
          Back to Dash
        </Link>
      </div>
    </div>
  );
}
