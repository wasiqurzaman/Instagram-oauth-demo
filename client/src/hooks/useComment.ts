import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
  id: string;
  text: string;
  timestamp: string;
}

const useComment = (commentId: string | undefined) => {
  const fetchComment = async () => {
    const { data } = await axios.get<Comment[]>(
      `http://localhost:3000/api/comment?media_id=${commentId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  };

  return useQuery<Comment[], Error>({
    queryKey: ["media", commentId, "comments"],
    queryFn: fetchComment,
  });
};

export default useComment;
