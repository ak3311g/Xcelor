import { Link } from "react-router-dom";

export default function Firstpage() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Link to="/login" className="font-bold text-4xl bg-orange-400 px-5 py-2 rounded-md">Go to Login</Link>
      </div>
    </>
  );
}
