import type { Request, Response } from "express";
import sendResponse from "../../utility/sendResponse";
import { userService } from "./user.service";


const signup = async (req: Request, res: Response) => {
    try {
        const result = await userService.signUpUserIntoDB(req.body);
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "User registered successfully",
            data: result.rows[0],
        });
    } catch (error) {
        console.error("Error in signup controller:", error);
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "Internal server error",
            error: error,
        });
    }   
}




















export const userController = {
    signup,
};