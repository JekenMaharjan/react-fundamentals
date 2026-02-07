import { useState } from "react";
import ProfileView from "./ProfileView";
// import { stringify } from "querystring";

const ProfileContainer = () => {
    const[name, setName] = useState("Ram");

    const NotifyChange = () => {
        const newName = prompt("Enter your name:");

        if (!newName) return;

        setName(newName);
        console.log("Name updated Successfully!");
        alert("Name updated successfully!");
    };


    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-lg">
            <ProfileView
                name={name}
                onChangeName={() => (
                    NotifyChange()
                )}
            />
        </div>
    );
};

export default ProfileContainer;