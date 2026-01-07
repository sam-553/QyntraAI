export const generateArticle=async (req,res) => {
    try {
        const {userId}=req.auth();
        const {promt,length}=req.body;
        const plan=req.plan;
        const free_usage=req.free_usage;
        if(plan!='premium' && free_usage>=10){
            return res.json({success:false,message:'Free usage limit exceeded. Please upgrade to premium plan.'})
        }
        
    } catch (error) {
        
    }
}