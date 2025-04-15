import { FaX } from "react-icons/fa6";
// import useComment from "../hooks/useComment";
import { UserMedia } from "../hooks/useMedia";
import useProfile from "../hooks/useProfile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  mediaItem: UserMedia | null;
}

export default function MediaModal({ isOpen, mediaItem, onClose }: Props) {
  const { data: profile } = useProfile();
  // const { data: comments } = useComment(mediaItem?.id);

  // console.log(comments);

  if (!isOpen || !mediaItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 max-w-4xl w-full h-[90vh] rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-white z-10"
        >
          <FaX size={24} />
        </button>

        {/* Left: Image */}
        <div className="md:w-1/2 bg-black flex items-center justify-center">
          {mediaItem.media_type === "VIDEO" ? (
            <video
              src={mediaItem.media_url}
              controls
              className="max-h-full w-full object-contain"
            />
          ) : (
            <img
              src={mediaItem.media_url}
              alt="media"
              className="max-h-full w-full object-contain"
            />
          )}
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 flex flex-col h-full p-4 overflow-y-auto">
          {/* Author & caption */}
          <div className="flex items-center mb-4 gap-3">
            <img
              src={profile?.profile_picture_url}
              alt="author"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-sm">
              {mediaItem.username || "username"}
            </span>
          </div>
          {mediaItem.caption && (
            <p className="text-sm mb-4 text-zinc-700 dark:text-zinc-300">
              {mediaItem.caption}
            </p>
          )}

          {/* Likes */}
          <div className="text-xs text-zinc-400 mb-2">
            {mediaItem.like_count} likes
          </div>

          {/* Comments */}
          {/* <div className="flex-1 space-y-3 mb-4">
            {isLoading ? (
              <p>Loading comments...</p>
            ) : comments?.length ? (
              comments?.map(comment => (
                <div key={comment.id}>
                  <p className="text-sm">
                    <span className="font-semibold mr-2">user</span>
                    {comment?.text}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">💬 Reply</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-400">No comments yet.</p>
            )}
          </div> */}

          {/* Reply Box */}
          <form className="mt-auto flex gap-2 border-t pt-3">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 px-3 py-2 text-sm border rounded-md dark:bg-zinc-800 dark:text-white"
            />
            <button
              type="submit"
              className="text-sm text-pink-600 font-medium hover:underline"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
