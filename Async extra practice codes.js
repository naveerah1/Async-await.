// Mock API functions
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000); // Simulates a 1-second delay
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ postId: 1, content: "Post by user 1" }]);
    }, 1000); // Simulates a 1-second delay
  });
}

// Async function to get user and posts
async function getUserAndPosts() {
  try {
    console.log("Fetching user...");
    const user = await fetchUser();
    console.log("User received:", user);

    console.log("Fetching posts...");
    const posts = await fetchPosts(user.id);
    console.log("Posts received:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
getUserAndPosts();


// Mock API functions
function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 2");
    }, 3000);
  });
}

// Async function to fetch data concurrently
async function fetchAllData() {
  try {
    console.log("Fetching all data...");
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("All data received:", { data1, data2 });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchAllData();



