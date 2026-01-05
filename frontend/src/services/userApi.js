const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const userApi = {
  async deleteUser(token) {
    const response = await fetch(`${API_BASE_URL}/user/deleteUser`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Account Deletion failed");
    }

    return data;
  },

  async updateUserName(newUserName, token) {
    const response = await fetch(`${API_BASE_URL}/user/updateUserName`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newUserName }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Username update failed");
    }

    return data;
  },

  async updateUserPrompt(newPrompt, token) {
    const response = await fetch(`${API_BASE_URL}/user/updateUserPrompt`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPrompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Prompt update failed");
    }

    return data;
  },
};
