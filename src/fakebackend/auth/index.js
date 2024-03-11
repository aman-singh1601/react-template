import { app } from "..";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

//sign up new user
const registerUser = async (email, password, navigate) => {
    try{
        const registerData =  await createUserWithEmailAndPassword(auth, email, password);
        if(registerData) {
          navigate("/");
        }
    } catch(e){
        console.log("registerUser error: " + e);
        return false;
    }
    
    
};

const loginUser = async (email, password, navigate) => {
    try{
      const loginData = await signInWithEmailAndPassword(auth, email, password);
      if(loginData){
        console.log(loginData);
        console.log(loginData.user);
      }
      navigate("/");
    }catch(error){
       console.log("loignUSer error: " + error);
       return false;
    }
    
};




const logoutUser = () => {};

export { registerUser, loginUser, logoutUser, auth };