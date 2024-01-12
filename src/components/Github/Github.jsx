import { } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // const [username, setUsername] = useState("");

    // const fetchData = useCallback(async () => {
    //     try {
    //         const response = await fetch(`https://api.github.com/users/${username}`);
    //         if (!response.ok) {
    //             if (response.status === 403) {
    //                 const rateLimitReset = response.headers.get('X-RateLimit-Reset');
    //                 console.error(`GitHub API rate limit exceeded. Retry after ${new Date(rateLimitReset * 1000)}`);
    //             } else {
    //                 throw new Error(`GitHub API request failed with status ${response.status}`);
    //             }
    //         }
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     } catch (error) {
    //         console.error("Error fetching GitHub data:", error.message);
    //     }
    // }, [username]);

    // useEffect(() => {
    //     fetchData()
    // }, []);

    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetchData();
    // }
    return (
        <>
            {/* <form className="p-6 flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                        GitHub User name
                    </label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Enter GitHub User Name to get Details"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-96 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Submit
                </button>
            </form> */}
            {/*username &&*/ <div className="flex flex-col">
                <h1 className="text-center text-2xl py-10 font-medium bg-gray-300">GitHub Name: {data.name}</h1>
                <h1 className="text-center text-2xl py-10 font-medium px-96 bg-gray-300">Bio: {data.bio}</h1>
                <div className="absolute w-full p-10 h-auto overflow-hidden">
                    <img className="w-64" src={data.avatar_url} alt="github_profile_image" />
                </div>
                <h1 className="text-center text-2xl py-10 font-medium bg-gray-300">GitHub Followers: {data.followers}</h1>
            </div>}

        </>
    )
}

export default Github