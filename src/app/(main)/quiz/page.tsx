// import { useRouter } from "next/navigation";

import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from "@/lib/extra";

function Quiz() {
 

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Select Quiz Category</h1>
      <FocusCards cards={cards} />
    </div>
  );
}

export default Quiz;
