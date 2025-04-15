
function checkLength(a:string,b:number){
    return a.length<b
} //returning boolean

type returnOfCheckLength= ReturnType< typeof checkLength>
// here returnOfCheckLength has boolean type now

function getUser() {
    return {
      id: 1,
      name: "Priyanka",
      isAdmin: false,
    };
  }
  
  type User = ReturnType<typeof getUser>;
  // type User = { id: number; name: string; isAdmin: boolean }

  // Parameters
  type params = Parameters<typeof checkLength>
  //here params has type as [a:string,b:number]

  function sendEmail(to: string, subject: string, isImportant: boolean) {
    console.log(`Sending to ${to}: ${subject} [Important: ${isImportant}]`);
  }
  
  type EmailArgs = Parameters<typeof sendEmail>;
  // type EmailArgs = [string, string, boolean]
  
  const args: EmailArgs = ["grishmi@example.com", "Hello", true];
  sendEmail(...args); // ✅ works
  
