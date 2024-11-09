import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirect

export default function Home() {
  const [userdata, setuserdata] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state to prevent immediate redirect
  const navigate = useNavigate(); // Initialize navigate

  // Helper function to extract the token from the cookies
  const getTokenFromCookie = () => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("accessToken="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
  };

  // Fetch home data using the access token from cookies
  const HomePage = async () => {
    const token = getTokenFromCookie();

    // If there's no token, stop loading and redirect to login page
    if (!token) {
      console.error("No access token found in cookies.");
      setLoading(false); // Set loading to false
      navigate("/"); // Redirect to login if no token is found
      return;
    }

    try {
      // Fetch data from the home endpoint, sending token in Authorization header
      let res = await fetch("http://localhost:3000/api/welcome/home", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data); // Log the fetched data
      setuserdata(data); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after data fetch or error
    }
  };

  useEffect(() => {
    HomePage(); // Call the HomePage function when the component mounts
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading state while waiting for data
  }

  return (
    <div>
      {/* Check if userdata is available */}
      {userdata ? (
        <>
          <div>{userdata.message}</div> {/* Display the message from backend */}
          {userdata.user ? (
            <>
              <div>Email: {userdata.user.email}</div> {/* Display user email */}
              <div>Role: {userdata.user.role}</div> {/* Display user role */}
            </>
          ) : (
            <div>User data not available</div> // Handle case if user data is missing
          )}
        </>
      ) : (
        <div>User not found or error occurred.</div> // Handle case if there's no user data
      )}
    </div>
  );
}
