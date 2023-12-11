import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export const ProfileData = ({ graphData }) => {
  return (
    <List className="profileData">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>{" "}
        </ListItemAvatar>{" "}
        <ListItemText primary="Id" secondary={graphData.id} />{" "}
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>{" "}
        </ListItemAvatar>{" "}
        <ListItemText primary="Email" secondary={graphData.email} />{" "}
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>{" "}
        </ListItemAvatar>{" "}
        <ListItemText primary="Username" secondary={graphData.username} />{" "}
      </ListItem>
    </List>
  );
};
