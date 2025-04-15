import useProfile from "../hooks/useProfile";
import Loader from "../components/Loader";
import Feed from "../components/Feed";

export default function Profile() {
  const { data: profile, isLoading: profileLoading, error } = useProfile();

  if (profileLoading) return <Loader />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* profile details */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 mb-12">
        <img
          src={profile?.profile_picture_url}
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-pink-500 dark:border-pink-700 shadow-md object-cover"
        />
        <div className="text-center sm:text-left space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {profile?.username}
          </h2>
          <div className="flex justify-center sm:justify-start gap-6 text-gray-700 dark:text-white text-md">
            <div className="font-medium">
              <span className="text-base font-bold">
                {profile?.media_count}
              </span>{" "}
              posts
            </div>
            <div className="font-medium">
              <span className="text-base font-bold">
                {profile?.followers_count}
              </span>{" "}
              followers
            </div>
            <div className="font-medium">
              <span className="text-base font-bold">
                {profile?.follows_count}
              </span>{" "}
              following
            </div>
          </div>
          <p className="max-w-md text-gray-700 dark:text-white font-medium">
            {profile?.name || "No bio available."}
          </p>
          <p className="max-w-md text-gray-700 dark:text-white font-medium">
            {profile?.biography || "No bio available."}
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* highlights - only for showing not functional */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Highlights
        </h3>
        <div className="flex gap-4 overflow-x-auto">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      {/* media feed */}
      <Feed />
    </div>
  );
}
