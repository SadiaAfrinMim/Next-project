"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h1 className="text-center items-center justify-center flex-col gap-4 min-h-screen">
        hello next js
      </h1>
      <button onClick={handleNavigation}>Dashboard</button>
    </div>
  );
};

export default HomePage;