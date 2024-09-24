import { UserProfile } from "@clerk/nextjs";


const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <UserProfile path="/profile"  />
    </div>
  );
}
export default page
