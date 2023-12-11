import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType, BrowserAuthError } from "@azure/msal-browser";
import { useState, useEffect } from "react";
import { fetchData } from "../fetch";
import axios from "axios";
export const Profile = () => {
  const { result, error, login } = useMsalAuthentication(
    InteractionType.Popup,
    {
      scopes: ["user.read"],
    }
  );
  console.log(result);

  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    if (!!graphData) {
      return;
    }

    if (!!error) {
      if (error instanceof BrowserAuthError) {
        login(InteractionType.Redirect, {
          scopes: ["user.read"],
        });
      }
      console.log(error);
    }

    if (result) {
      // fetchData("https://graph.microsoft.com/v1.0/me", result.accessToken)
      //     .then(data => console.log("data", data))
      //     .catch(error => console.log(error));
      axios
        .post(`http://localhost:3000/microsoft-login/callback`, {
          token: result.accessToken,
        })
        .then((res) => {
          console.log(res.data);
          setGraphData({
            ...res.data.user,
            token: res.data.token,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [error, result, graphData, login]);

  if (error) {
    return <div> Error: {error.message} </div>;
  }

  return <> {graphData ? <ProfileData graphData={graphData} /> : null} </>;
};
