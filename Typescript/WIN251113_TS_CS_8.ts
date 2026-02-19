/**
 * TypeScript Case Study 8: Null vs Undefined
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).
type Profile = {
    username: string;
    bio: string | null;
    avatarUrl?: string;
};

// 2. Create two profiles: one with a null bio and no avatar, and one with both fields set.
const profile1: Profile = {
    username: "user123",
    bio: null,
};

const profile2: Profile = {
    username: "user456",
    bio: "Sample bio.",
    avatarUrl: "assets/avatar.jpg",
};

// 3. Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.
function showProfile(profile: Profile): void {
    console.log("Profile Details:");
    console.log(`Username: ${profile.username}`);
    console.log(`Bio: ${profile.bio || "No bio available."}`);
    console.log(
        `Avatar URL: ${profile.avatarUrl || "assets/default-avatar.png"}\n`,
    );
}

// Testing the function with both profiles.
showProfile(profile1);
// OUTPUT:
// Profile Details:
// Username: user123
// Bio: No bio available.
// Avatar URL: assets/default-avatar.png

showProfile(profile2);
// OUTPUT:
// Profile Details:
// Username: user456
// Bio: Sample bio.
// Avatar URL: assets/avatar.jpg
