import React, { useEffect, useState } from "react";

export default function Admin() {
  const [adminDatas, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state to manage loading status

  const adminData = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/admin/welcome", {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzJjNzE0NDk0YTE5MDEyZDdhNGVlMzMiLCJlbWFpbCI6ImFkbWluMUBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMDk3NjgwOSwiZXhwIjoxNzMwOTc4NjA5fQ.2i6S0itnLHNEC1IT1MVyqpEC5nynUKU7QZ7L0KEXXnA`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch admin data");
      }

      const data = await res.json();
      console.log(data); // Log the fetched data
      setAdminData(data); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading once data is fetched or an error occurs
    }
  };

  useEffect(() => {
    adminData(); // Fetch admin data on component mount
  }, []);

  // Show loading message while data is being fetched
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {adminDatas ? (
        <div>
          <h1>WElCOME ADMIN</h1>
          <div>{adminDatas.message}</div> {/* Display message from data */}
          {adminDatas.users ? (
            <div>
              <h1>All Users</h1>
              {adminDatas.users.map((user) => (
                <div key={user._id}>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <div>No users available</div>
          )}
        </div>
      ) : (
        <div>No admin data available.</div> // Handle case if no data is found
      )}
    </div>
  );
}
