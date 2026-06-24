import { useEffect, useState } from "react";

interface Profile {
  name: string;
  email: string;
  role: string;
  phase: string;
}

export default function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);
    fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  return profile;
}
