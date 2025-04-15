import axios from "axios";
import { Request, Response } from "express";

export async function getAllComments(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;
  const mediaId = req.query.media_id;

  console.log(mediaId);

  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get(
      `https://graph.instagram.com/${mediaId}/comments`,
      {
        params: {
          fields: "id,text,username,timestamp",
          access_token: accessToken,
        },
      }
    );

    console.log(response.data);

    // res.json(response.data);
    res.json([
      {
        timestamp: "2017-08-31T19:16:02+0000",
        text: "This is awesome!",
        id: "17870913679156914",
      },
      {
        timestamp: "2017-08-31T19:16:02+0000",
        text: "Amazing!",
        id: "17870913679156914",
      },
    ]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch media from instagram" });
  }
}

export async function getComment(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;
  const id = req.params.id;

  console.log(accessToken);
  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get(
      `https://graph.instagram.com/v22.0/${id}`,
      {
        params: {
          fields:
            "id,caption,media_type,media_url,comments_count,like_count,thumbnail_url,owner,username,timestamp",
          access_token: accessToken,
        },
      }
    );

    console.log(response.data);

    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch media from instagram" });
  }
}
