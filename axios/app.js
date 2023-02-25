import axios from "axios";
const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
        resolve(data);
       
    });
};

const getPost=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios(
            "https://jsonplaceholder.typicode.com/posts?userId=2" + post_id
        );
        resolve(data);
        
    });
};

(async()=>{
    try{
        const users=await getUsers(1);
        const post=await getPost(1);

        console.log(users);
        console.log(post);
    }catch(e){
        console.log(e);
    }
})(); 
