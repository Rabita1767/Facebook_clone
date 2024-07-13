import HttpStatus from "../../../common/httpStatus";
import sendResponse from "../../Auth/utils/response";
import commentsService from "../services/comments.service";

class CommentController {
    public async createComment(req: Request, res: Response): Promise<void> {
        try {

            const createComment = await commentsService.createComment(req.body);
            return sendResponse(res, HttpStatus.OK, "Data created Successfully", { result: createComment });
        } catch (error) {
            console.log(error);
            return sendResponse(res, error.statusCode, error)
        }
    }

}
export default new CommentController();