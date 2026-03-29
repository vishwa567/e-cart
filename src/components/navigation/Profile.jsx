import { useContext } from "react";
import { IoPerson } from "react-icons/io5";
import { AuthUserContext } from "../../contexts/AuthContext";

export default function Profile() {

    let { userData } = useContext(AuthUserContext);
    console.log();


    return (
        <div className="flex gap-3 items-center font-mono opacity-50 w-1/3">
            <IoPerson />
            <h3>{userData?.displayName ?? "Guest-Account"}</h3>
        </div>
    )
}
