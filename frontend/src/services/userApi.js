const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const userApi = {
  async deleteUser(username, token) {
    const response = await fetch(`${API_BASE_URL}/user/deleteUser`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Account Deletion failed");
    }

    return data;
  },
};
