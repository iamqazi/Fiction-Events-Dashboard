"use client";
export default function Error({ error, reset }) {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="mt-[24px] text-[red] ">Error occurred!</h1>
      <p className="whitespace-nowrap text-[16px]">
        {error?.message || "Something went wrong."}
      </p>
    </div>
  );
}
