import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    // req.auth() is synchronous
    const { userId, has } = req.auth();

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // has() comes from req.auth()
    const hasPremiumPlan = has({ plan: "premium" });

    // Correct Clerk method
    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata?.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    next();

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
