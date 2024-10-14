import Image from "next/image";
import image1 from "../IMG_20231203_081533.jpg"

export default function Body() {
    return (
    <div className="info">
        <div className="information">
            <p className="infoAboutMe1">Hey Everyone, My name is Adam</p>
            <br />    
            <p className="infoAboutMe2">I am a student of the Governor Sindh IT Initiative. I have some skill over languages like HTML, CSS, TypeScript and JavaScript. Learning technologies like NextJS and Tailwind CSS</p>

        </div>

        <div className="image">
            <Image className="myPic" src={image1} alt=""></Image>
        </div>
    </div>
    )
}
