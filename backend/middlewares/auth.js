import {clerkClients} from '@clerk/express'
export const auth =async (req,res,next) => {
    try{
        const {userId,has}=await req.auth();
        const hasPremiumPlan=await req.has({plan:'premium'})
        const user=await clerkClients.users.getuser(userId);
        if (!hasPremiumPlan && user.privateMetadata.free_usage) {
            req.free_usage=user.privateMetadata.free_usage;
        } else {
            await clerkClients.users.updateUserMetadata(userId,{
                privateMetadata:{
                    free_usage:0
                }
            })
            req.free_usage=0;
        }
        req.plan=hasPremiumPlan?'premium':'free';
        next();
    }catch(err){
        req.json({success:false,message:error.message})
    }
}