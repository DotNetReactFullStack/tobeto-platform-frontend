import {UpdateVideoResponse} from "./../models/responses/video/updateVideoResponse";
import {UpdateVideoRequest} from "./../models/requests/video/updateVideoRequest";
import {AddVideoRequest} from "./../models/requests/video/addVideoRequest";
import {GetVideoDetailResponse} from "./../models/responses/video/getVideoDetailResponse";
import {GetAllVideoResponse} from "./../models/responses/video/getAllVideoResponse";
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import {AddVideoResponse} from "../models/responses/video/addVideoResponse";

class VideoService extends BaseService<
	GetAllVideoResponse,
	GetVideoDetailResponse,
	AddVideoRequest,
	AddVideoResponse,
	UpdateVideoRequest,
	UpdateVideoResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Video";
	}

	getByFilter() {}
}

export default new VideoService();
