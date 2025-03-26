import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    // async createAccount({email, password, name}) {
    //     try {
    //         const userAccount = await this.account.create(ID.unique(), email, password, name);
    //         if (userAccount) {
    //             // call another method
    //             return this.login({email, password});
    //         } else {
    //            return  userAccount;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async createAccount({ email, password, name }) {
        try {
            // Pehle user create kar
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("✅ Account created:", userAccount);
    
            if (userAccount) {
                console.log("🔐 Logging in after signup...");
    
                // Pehle session create kar
                const session = await this.account.createEmailPasswordSession(email, password);
                console.log("🆗 Session created:", session);
    
                // Phir current user fetch kar
                console.log("⏳ Fetching current user...");
                const currentUser = await this.getCurrentUser();
                console.log("👤 Current User:", currentUser);
    
                return currentUser;
            }
    
            return null;
        } catch (error) {
            console.error("❌ Error in createAccount:", error);
            throw error;
        }
    }
    

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            throw error;
        }

        //return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

