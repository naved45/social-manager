/*import { Zernio } from "../config/Zernio.js";
import {Request, Response} from "express";
import {User} from "../models/User.js"



//Helper to ensure user has a Zernio Profile
const getOrCreateZernioProfile = async(user:any):Promise<string>=>{
  try{
    const result = await zernio.profiles.listProfiles()
    const data = result.data as any;
    const profiles: any[] = Array.isArray(data )? data: data?.profiles || data?.data || [];

if(profiles.length >0){
  const pid = profiles[0]._id || profiles[0].id
  await User.findByIdAndUpdate(user._id, {zernioProfileId: pid})
  return pid
}

const createResult = await zernio.profile.createProfile({
  body: {name: `${user.name || user.email}'s workspace` as any,}
})
const created = (createResult.data as any)?.profile ||createResult.data;

const pid = created?.id || created?.id;

if(!id){
  throw new Error("failed to create Zernio profile - no ID returned")
}
await User.findByIdAndUpdate(user._id, {zernioProfileId:pid});
return pid
  } catch(error :any){
console.error("getOrCreateZernioProfile Error:",error?.message || error);
throw error;
  }
}


//Generate OAuth authorization URL
//GEt/api/auth/:platform

export const generateAuthURl = async(req:Request,res:Response):Promise<void>=>{
  try{
    const {platform} = req.params;
    const redirectUrl = `${origin}/accounts`;

    const result = await zernio.connect.getConnectUrl({
      path:{platform:platform as any},
      query:{
        profileId,
        redirect_url: redirectUrl
      }
    })

const data = result.data as any;
console.log("getConnectUrl response:",JSON.stringify(data,null,2))

const authUrl = data.authUrl
if(!authUrl){
  throw new Error(`zernio returned no authUrl. FUll response: ${JSON.stringify(data)}`)
}
res.json({url:authUrl})

  } catch(error){
res.status(500).json({message: error?.message || "Server error")
  }
}


//Sync connected accounts from zernio into MongoDb
//GET /api/auth/sync

export const syncAccounts = async (req:Request, res:Response):Promise<void>=>{
  try{
    const profileId = await getOrCreateZernioProfile(req.user);
    const result = await zernio.accounts.listAccounts({
      query:{profileId} as any
    })

    const data = result.data as any;
    const zernioAccounts : any[] data?.accounts || (Array.isArray(data)? data :[])
    const supportedPlatforms = ["twitter", "linkedin","facebook","instagram"];
    const syncedAccounts = [];

    for(const zAccount of zernioAccounts){
      const zid = zAccounts._id || zAccounts.id;
      
      continue;
    }

    const rawPlatform = (zAccount.platform || zAccount.type || "").toLowerCae();
    const normalizedPlatform = supportedPlatforms.find((p)=>rawPlatform.include(p));
    if(!normalizedPlatform){
      console.log(`Skipping  unsupported platform: "${rawPlatform}`);
      continue;
   
    }
    const account = await Account.findOneAndUpdate(
      {zernioAccountId: zid},
      {
        user: req.user._id,
        platform:normalizedPlatform,
        handle:zAccount.username || zAccount.name ||zAccount.handle || "unknown",
        zernioAccountId:zid,
        status:"connected",
        avatarUrl: zAccount.avatarUrl || zAccount.picture || zAccount.profile_image_url,
      },
      {upsert:true, returnDocumnet:'after'}
    )
    syncAccounts.push(account)
  }
  res.json(syncAccounts)

  }catch(error:any){
res.status(500).json({message: error?.message|| "server error"})
  }
}


*/









import { Request, Response } from "express";
import { User } from "../models/User.js";
import { Account } from "../models/Account.js"; // assuming you have an Account model
import { zernio } from "../config/Zernio.js"; // corrected import name

import {AuthRequest} from "../middlewares/authMiddleware.js"

// Helper to ensure user has a Zernio Profile
const getOrCreateZernioProfile = async (user: any): Promise<string> => {
  try {
    const result = await zernio.profiles.listProfiles();
    const data = result.data as any;
    const profiles: any[] = Array.isArray(data) ? data : data?.profiles || data?.data || [];

    if (profiles.length > 0) {
      const pid = profiles[0]._id || profiles[0].id;
      await User.findByIdAndUpdate(user._id, { zernioProfileId: pid });
      return pid;
    }

    const createResult = await zernio.profiles.createProfile({
      body: { name: `${user.name || user.email}'s workspace` },
    });
    const created = (createResult.data as any)?.profile || createResult.data;

    const pid = created?.id || created?._id;
    if (!pid) {
      throw new Error("Failed to create Zernio profile - no ID returned");
    }

    await User.findByIdAndUpdate(user._id, { zernioProfileId: pid });
    return pid;
  } catch (error: any) {
    console.error("getOrCreateZernioProfile Error:", error?.message || error);
    throw error;
  }
};

// Generate OAuth authorization URL
// GET /api/auth/:platform
export const generateAuthURL = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { platform } = req.params;
    const origin = req.headers.origin || "http://localhost:3000"; // fallback
    const redirectUrl = `${origin}/accounts`;

    const profileId = req.user?.zernioProfileId || (await getOrCreateZernioProfile(req.user));

    const result = await zernio.connect.getConnectUrl({
      path: { platform: platform as any },
      query: {
        profileId,
        redirect_url: redirectUrl,
      },
    });

    const data = result.data as any;
    console.log("getConnectUrl response:", JSON.stringify(data, null, 2));

    const authUrl = data.authUrl;
    if (!authUrl) {
      throw new Error(`Zernio returned no authUrl. Full response: ${JSON.stringify(data)}`);
    }
    res.json({ url: authUrl });
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};

// Sync connected accounts from Zernio into MongoDB
// GET /api/auth/sync
export const syncAccounts = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const profileId = await getOrCreateZernioProfile(req.user);
    const result = await zernio.accounts.listAccounts({
      query: { profileId } as any,
    });

    const data = result.data as any;
    const zernioAccounts: any[] = data?.accounts || (Array.isArray(data) ? data : []);
    const supportedPlatforms = ["twitter", "linkedin", "facebook", "instagram"];
    const syncedAccounts: any[] = [];

    for (const zAccount of zernioAccounts) {
      const zid = zAccount._id || zAccount.id;
      if (!zid) continue;

      const rawPlatform = (zAccount.platform || zAccount.type || "").toLowerCase();
      const normalizedPlatform = supportedPlatforms.find((p) => rawPlatform.includes(p));
      if (!normalizedPlatform) {
        console.log(`Skipping unsupported platform: "${rawPlatform}"`);
        continue;
      }

      const account = await Account.findOneAndUpdate(
        { zernioAccountId: zid },
        {
          user: req.user._id,
          platform: normalizedPlatform,
          handle: zAccount.username || zAccount.name || zAccount.handle || "unknown",
          zernioAccountId: zid,
          status: "connected",
          avatarUrl: zAccount.avatarUrl || zAccount.picture || zAccount.profile_image_url,
        },
        { upsert: true, new: true }
      );

      syncedAccounts.push(account);
    }

    res.json(syncedAccounts);
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};
