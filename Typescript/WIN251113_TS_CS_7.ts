/**
 * TypeScript Case Study 7: User defined Types in Typescript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Define an enum Role for staff roles (Doctor, Nurse, Admin).
enum Role {
    Doctor,
    Nurse,
    Admin,
}

// 2. Create an interface Staff with fields for id, name, and role.
interface Staff {
    id: number;
    name: string;
    role: Role;
}

// 3. Create an array of staff members using the interface and enum.
const staffMembers: Staff[] = [
    { id: 1, name: "Dr. Doctor", role: Role.Doctor },
    { id: 2, name: "Ms. Nurse", role: Role.Nurse },
    { id: 3, name: "Mr. Admin", role: Role.Admin },
];

// 4. Write a function that prints a summary of all staff, showing their name and role.
function printStaffSummary(staffList: Staff[]): void {
    console.log("Staff Summary:");
    staffList.forEach((staff) => {
        console.log(
            `ID: ${staff.id}, Name: ${staff.name}, Role: ${Role[staff.role]}`,
        );
    });
}

// Calling the function to print the staff summary.
printStaffSummary(staffMembers);
// OUTPUT:
// Staff Summary:
// ID: 1, Name: Dr. Doctor, Role: Doctor
// ID: 2, Name: Ms. Nurse, Role: Nurse
// ID: 3, Name: Mr. Admin, Role: Admin
