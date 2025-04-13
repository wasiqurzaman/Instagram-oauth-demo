import { Request, Response } from "express";
import qs from "qs";
import axios from "axios";

export async function handleLogin(req: Request, res: Response) {
  const { code } = req.body;

  console.log("code: ", code);

  if (!code) {
    res.status(400).json({ error: "Missing code from instagram" });
    return;
  }

  try {
    const data = qs.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: process.env.REDIRECT_URI,
      code: code,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.instagram.com/oauth/access_token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const response = await axios.request(config);

    console.log(response.data);

    res.cookie("access_token", response.data.access_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 86400000,
      path: "/",
    });
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can not get access token from instagram" });
  }
}

export async function handleLogout(req: Request, res: Response) {
  const accessToken = req.cookies.access_token;

  if (!accessToken) {
    res.sendStatus(204);
    return;
  }

  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 86400000,
    path: "/",
  });

  res.sendStatus(204);
}
