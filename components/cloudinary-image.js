import Image from 'next/image'
import {buildUrl} from 'cloudinary-build-url';
import {
    isMobile
} from "react-device-detect";

const CloudinaryImage = ({publicId, className}) => {
    const transformations = !isMobile ? {
        resize: {
            type: 'fill',
            width: 500,
        }
    } : {}

    const url = buildUrl(publicId, {
        cloud: {
            cloudName: 'stevelee',
        },
        transformations
    });

    return <Image
        src={url}
        alt=""
        layout="fill"
        className={className}/>
};

export default CloudinaryImage