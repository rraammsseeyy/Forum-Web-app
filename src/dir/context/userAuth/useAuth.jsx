import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  useReducer,
} from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";
import { INITIAL_STATE } from "./AuthContext";
import { useQuery } from "react-query";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  axios.defaults.withCredentials = true;

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const [myFollowers, setMyFollowers] = useState(null);
  const [myFollowing, setMyFollowing] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [following, setFollowing] = useState(null);
  const [follower, setFollower] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState(null);
  const [permission, setPermission] = useState(false);
  const [verified, setVerified] = useState(false);
  const [id, setID] = useState(null);
  const [userID, setUserId] = useState(null);
  const [kmpPoint, setKmpPoint] = useState(0);

  // check if user is logged in and keep user logged in
  const { isLoading, data, isError } = useQuery("userData", async () => {
    try {
      const dataAPI = `${import.meta.env.VITE_REACT_APP_USER}/me`;
      const response = await axios.get(dataAPI);
      return response.data;
    } catch (error) {
      console.log("");
    }
  }); 
  
 
  useEffect(() => {
    try {
      if (data) {
        setUsername(data.data.username);
        setMyFollowers(data.data.follower_ids);
        setMyFollowing(data.data.following_ids);
        setEmail(data.data.email);
        setUserId(data.data.user_id);
        setFullname(data.data.fullname);
        setInstagram(data.data.instagram);
        setTwitter(data.data.twitter);
        setVerified(data.data.verified);
        setPermission(data.data.permission);
        setProfilePicture(data.data.profile_picture);
        setBio(data.data.bio);
        setID(data.data.id);
        setKmpPoint(data.data.kmp_points);
  
        setFollowing(data.data.following_count);
        setFollower(data.data.follower_count);
      }
      if(isError){
        console.log('Not founed s')
      }
    } catch (error) {
      console.log("Error:", 'error');
      // Handle the error here
    }
 
   
  }, [data]);

  

  

 
 
  // memoize the values
  const memoizedValue = useMemo(
    () => ({
      username,
      email,
      fullname,
      instagram,
      twitter,
      id,
      userID,
      verified,
      profilePicture,
      bio,
      permission,
      following,
      follower,
      kmpPoint,
      myFollowers,
myFollowing
    }),
    [username]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
