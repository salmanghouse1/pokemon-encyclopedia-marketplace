import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing Usernams's profile.
        </h2>
        <p>Your Email salmanghouse1@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
