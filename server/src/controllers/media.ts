import axios from "axios";
import { Request, Response } from "express";

export async function getAllMedia(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;

  console.log(accessToken);
  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get(`https://graph.instagram.com/me/media`, {
      params: {
        fields:
          "id,caption,media_type,media_url,comments_count,like_count,thumbnail_url,owner,username,timestamp",
        access_token: accessToken,
      },
    });

    // console.log(response.data);

    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch media from instagram" });
  }
}

export async function getMedia(req: Request, res: Response) {
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

    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch media from instagram" });
  }
}
