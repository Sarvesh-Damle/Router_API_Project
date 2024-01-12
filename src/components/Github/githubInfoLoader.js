const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/sarvesh-damle`);
    return response.json();
}

export default githubInfoLoader;