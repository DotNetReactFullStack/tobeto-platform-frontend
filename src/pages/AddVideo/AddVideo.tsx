import React from "react";
import VideoService from "../../services/videoService";

type Props = {};

const AddVideo = (props: Props) => {
	const addVideo = () => {
		VideoService.add({});
	};

	return <div>AddVideo</div>;
};

export default AddVideo;
