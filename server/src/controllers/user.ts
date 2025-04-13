import axios from "axios";
import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;

  console.log(accessToken);
  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get("https://graph.instagram.com/me", {
      params: {
        fields: "id,username,account_type",
        access_token: accessToken,
      },
    });

    // console.log(response.data);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Can not get user" });
  }
}

export async function getUserProfile(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;

  console.log(accessToken);
  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get(`https://graph.instagram.com/me`, {
      params: {
        fields:
          "id,username,name,profile_picture_url,biography,followers_count,follows_count,media_count,website",
        access_token: accessToken,
      },
    });

    // console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
