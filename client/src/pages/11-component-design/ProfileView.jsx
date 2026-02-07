import { toast, ToastContainer } from "react-toastify";

const ProfileView = ({ name, onChangeName}) => {
    const notify = () => {
        toast("Name changed!");
    };

    return (
        <div className="flex flex-col gap-5 px-5">
            <ToastContainer />

            <h2 className="text-2xl text-center px-5 border-b-2 border-gray-500">
                {name}
            </h2>

            <button
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                onClick={() => {
                    onChangeName();
                    notify();
                }}
            >
                Change
            </button>
        </div>
    );
};

export default ProfileView;