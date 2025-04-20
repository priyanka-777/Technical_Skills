type User = {
    id: number;
    name: string;
    email?: string;
    isAdmin: boolean;
};

//Pick<T, K> — Pick only specific properties

type BasicUser = Pick<User, "id" | "name">;
// Equivalent to:
// type BasicUser = {
//   id: number;
//   name: string;
// }
const user:BasicUser={
    id:123,
    name:"priya"
}

//Omit<T, K> — Omit specific properties

type publicUser = Omit<User, "isAdmin">;
// type NoAdminUser = {
//   id: number;
//   name: string;
//   email?: string;
// }
const user1:publicUser={
    id:123,
    name:"Priya",
    email:"priya@gmail.com"
}

// Partial<T> — Make all properties optional

type UserUpdate = Partial<User>;
// type UserUpdate = {
//   id?: number;
//   name?: string;
//   email?: string;
//   isAdmin?: boolean;
// }
const updateUser = (id: number, updates: UserUpdate) => {
    // Only update what's present
    console.log("Updating user", id, updates);
  };
  
updateUser(101, { email: "new@example.com" }); // only update email

//Required<T> — Make all properties required

type CompleteUser = Required<User>;
// type CompleteUser = {
//   id: number;
//   name: string;
//   email: string;  // no longer optional
//   isAdmin: boolean;
// }
const createUser = (user: CompleteUser) => {
    // Safe to use all properties without checking
    console.log("Creating user", user);
  };
  
  createUser({
    id: 101,
    name: "Priya",
    email: "Priya@example.com", // now required
    isAdmin: false,
  });

  // combined example
  type EditableUser = Partial<Omit<User, "id">>;
  //This type makes all fields except id optional — perfect for update forms!

  type EditableUser1 = Partial<Omit<User, "id">> & { id: number }; // 

  const editUser: EditableUser1 = {
    id: 101,
    email: "edit@example.com", // other fields optional except id - it is required one 
  };