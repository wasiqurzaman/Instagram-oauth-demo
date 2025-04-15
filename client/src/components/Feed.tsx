import { useState } from "react";
import useMedia, { UserMedia } from "../hooks/useMedia";
import Loader from "./Loader";
import MediaModal from "./MediaModal";

export default function Feed() {
  const { data: media, isLoading, error } = useMedia();
  const [activeTab, setActiveTab] = useState("posts");

  const [selectedMedia, setSelectedMedia] = useState<UserMedia | null>(null);

  console.log(selectedMedia);

  if (isLoading) return <Loader />;

  if (error) return <p>{error.message}</p>;

  // Filter media
  const posts = media;
  // const photos = media?.filter(
  //   m => m.media_type === "IMAGE" || m.media_type === "CAROUSEL_ALBUM"
  // );
  const reels = media?.filter(m => m.media_type === "VIDEO");

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b border-gray-300 mb-6">
        <button
          className={`pb-2 text-sm font-semibold uppercase ${
            activeTab === "posts"
              ? "border-b-2 border-pink-500 text-pink-600"
              : "text-gray-500 dark:text-white"
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`pb-2 text-sm font-semibold uppercase ${
            activeTab === "reels"
              ? "border-b-2 border-pink-500 text-pink-600"
              : "text-gray-500 dark:text-white"
          }`}
          onClick={() => setActiveTab("reels")}
        >
          Reels
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {(activeTab === "posts" ? posts : reels)?.map(item => (
          <div
            key={item.id}
            className="relative cursor-pointer hover:scale-105 transition transform"
            onClick={() => setSelectedMedia(item)}
          >
            <img
              src={item.thumbnail_url || item.media_url}
              alt={item.caption || "Instagram media"}
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            {item.caption && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-xs p-1 truncate">
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* media modal */}
      <MediaModal
        isOpen={!!selectedMedia}
        mediaItem={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
}
