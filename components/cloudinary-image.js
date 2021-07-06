import Image from 'next/image'
import {buildUrl} from 'cloudinary-build-url';

const CloudinaryImage = ({publicId, className}) => {
    const url = buildUrl(publicId, {
        cloud: {
            cloudName: 'stevelee',
        },
    });

    return <Image
        src={url}
        alt=""
        layout="fill"
        className={className}/>
};

export default CloudinaryImage