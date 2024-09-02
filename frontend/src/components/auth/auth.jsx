import { account } from "../../appwrite/config";

export const registerUser = async (email, password) => {
  try {
    await account.create("unique()", email, password);
    const response = await account.createSession(email, password);
    return response;
  } catch (error) {
    let errorMessage = "Registration failed. Please try again.";
    if (error.message.includes("Invalid `password` param")) {
      errorMessage =
        "Password must be between 8 and 265 characters long and should not be one of the commonly used passwords.";
    } else if (error.message.includes("Invalid `email` param")) {
      errorMessage = "Invalid email address. Please check your email format.";
    }
    console.error("Registration failed", error);
    throw new Error(errorMessage);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await account.createSession(email, password);
    return response;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};
