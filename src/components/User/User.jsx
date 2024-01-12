import { useParams } from "react-router-dom";

function User() {
  const {userId} = useParams();
  return (
    <>
      <h1 className="text-center text-2xl py-10 font-medium">
          User: {userId}
      </h1>
    </>
  );
}

export default User