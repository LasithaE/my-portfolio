import { getComments } from "@/lib/getComments";
import CommentForm from "./CommentForm";

export default async function Comments() {
  const comments = await getComments();

  return (
    <section
      id="comments"
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-12"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto">
        <div className="text-[16px] mt-4 md:text-[22px] font-semibold text-gray-800 text-center md:text-left mb-6">
          Say hi 👋
        </div>
        <CommentForm initialComments={comments} />
      </div>
    </section>
  );
}
